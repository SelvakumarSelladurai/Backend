import path from "node:path"
import fs from "node:fs"
import fsPromise from "node:fs/promises"

const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system', 'fs-demo')
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'sync-note.txt')

const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'callback-note.txt')
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'promise-note.txt')

type FileResult = {
    style: string;
    fileName: string;
    content: string;
    sizeInByte: number;
}


// fs - file system
// create folders
// write files
// read files
// check file information
// delete files

// sync apis: fs.readfilesync
// callback apis
// promise apis

// small startup scripts
// build scripts
// local demos

// not good or even bad practice
// http req handlers
// high traffic apis
// background 

function ensureDemoFolderExists(): void {
    if (!fs.existsSync(DEMO_FOLDER_PATH)) {
        fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true })
    }
}

function runSyncExample(): FileResult {

    //write content to a file
    fs.writeFileSync(SYNC_FILE_PATH, "created using sync fs", "utf-8")

    fs.appendFileSync(SYNC_FILE_PATH, " Append using syncfs", "utf-8")

    const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8")

    const stats = fs.statSync(SYNC_FILE_PATH);

    return {
        style: 'sync',
        content,
        fileName: path.basename(SYNC_FILE_PATH),
        sizeInByte: stats.size,
    };
}

// callback(error, result)

function runCallbackExample(): Promise<FileResult> {

    return new Promise((resolve, reject) => {
        fs.writeFile(
            CALLBACK_FILE_PATH,
            "create using calback fs",
            "utf-8",
            (writeError) => {
                if (writeError) {
                    reject(writeError)
                    return
                }

                fs.appendFile(
                    CALLBACK_FILE_PATH,
                    " Append using callback fs",
                    "utf-8",
                    (appendError) => {
                        if (appendError) {
                            reject(appendError)
                            return
                        }

                        fs.readFile(CALLBACK_FILE_PATH, 'utf-8', (readError, content) => {
                            if (readError) {
                                reject(readError)
                                return
                            }

                            fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                                if (statError) {
                                    reject(statError)
                                    return
                                }

                                resolve({
                                    style: "callback",
                                    content,
                                    sizeInByte: stats.size,
                                    fileName: path.basename(CALLBACK_FILE_PATH)
                                })
                            })
                        })
                    }
                )
            }

        )
    })
}

// Promise apis

async function runPromiseExample(): Promise<FileResult> {
    await fsPromise.writeFile(
        PROMISE_FILE_PATH,
        "Created using promise apis",
        "utf-8"
    )

    await fsPromise.appendFile(
        PROMISE_FILE_PATH,
        " appended using promise apis ",
        "utf-8"
    )

    const content = await fsPromise.readFile(PROMISE_FILE_PATH, 'utf-8')
    const stats = await fsPromise.stat(PROMISE_FILE_PATH)

    return {
        style: "promises",
        content,
        fileName: path.basename(PROMISE_FILE_PATH),
        sizeInByte: stats.size
    }
}


async function main(): Promise<void> {
    try {

        ensureDemoFolderExists()
        const syncResult = runSyncExample();

        const callbackResult = await runCallbackExample()

        const PromiseResult = await runPromiseExample()
        console.log([syncResult, callbackResult, PromiseResult]);

    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";

        console.log("file system error", message)
    }
}

main()
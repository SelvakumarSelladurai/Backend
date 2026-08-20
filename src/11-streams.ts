

// piece by piece
// not loading the data everything at once
// read llarge files
// upload files
// downloading files
// video/audio processing
// compression

import { pipeline, Readable } from "node:stream";

// Chunks (small pieces)

// here is my full 500mb file
// here is chunk 1
// here is chunk 2
//.. here is chunk n

// memory efficient

// streams types
// reable stream - source of data

// writable stream - destination where the data is written
// transform stream -  read the data, change it and pass that forward

const readableStream = Readable.from([
    "hello",
    "from",
    "node.js",
    "streams"
])

// callback(error, result)
const uppercasetransform = new Transform({
    transform(chunk, encoding, calback) {
        const text = chunk.toString();

        callback(null, text.toUpperCase())
    }
})


const writableStream = new Writable({
    write(chunk, encoding, calback) {
        console.log("received chunk", chunk.toString());

        calback()
    }
})

async function main(): Promise<void> {
    try {
        await pipeline(readableStream, uppercasetransform, writableStream)

        console.log("string completed")
    } catch (error) {
        const msg = error instanceof Error ? error.message : "Unknown error";
        console.error("stream failed", msg)
    }
}


main()
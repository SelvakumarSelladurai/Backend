// Environment variables
// Command-line arguments
// Process exit codes
// Process lifecycle events

// Read the backend port from the .env file
// Read sensitive values like DB URLs, API keys, passwords, and Google auth secrets
// Read CLI arguments like port, mode, debug, and log level

import process from "node:process";

// process.env contains environment variables
// Example: PORT, NODE_ENV, DATABASE_URL, API_KEY, etc.

const nodeEnv = process.env.NODE_ENV ?? "development";

// Values from process.env are always strings or undefined

// const port = Number(process.env.PORT ?? 3000);


// process.argv contains the arguments passed when starting the Node.js process
//
// Example:
// node src/01-process-object.ts start
//
// process.argv will look something like:
//
// [
//   "/path/to/node",
//   "src/01-process-object.ts",
//   "start"
// ]

// Get the first command-line argument
// If no command is provided, use "start" by default

const command = process.argv[2] ?? "start";


// Check whether --fail was passed in the command line
// Example: node src/01-process-object.ts start --fail

const shouldFail = process.argv.includes("--fail");


// Check whether --crash was passed in the command line
// Example: node src/01-process-object.ts start --crash

const shouldCrash = process.argv.includes("--crash");


// The "exit" event runs when the Node.js process is about to exit
// The code tells us why the process is exiting
//
// 0   -> successful exit
// 1+  -> error or failure

process.on("exit", (code) => {
    console.log(`Process is exiting with code: ${code}`);
});


function runApp(): void {
    console.log({
        nodeEnv,
        command,
    });


    // Manually stop the process with an error code
    // exit code 1 means the process ended because of an error

    if (shouldFail) {
        console.error("Manual failure triggered with --fail flag");
        process.exit(1);
    }


    // Simulate a crash
    // The process will exit with code 1

    if (shouldCrash) {
        console.error("Manual crash triggered with --crash flag");
        process.exit(1);
    }
}


runApp();
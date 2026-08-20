import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

// Readable stream
// Source of the data
const readableStream = Readable.from([
    "hello",
    "from",
    "node.js",
    "streams",
]);

// Transform stream
// Reads chunks -> modifies them -> passes them forward
const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        try {
            const text = chunk.toString();

            // Convert the chunk to uppercase
            const upperCaseText = text.toUpperCase();

            // Send transformed data to the next stream
            callback(null, upperCaseText);
        } catch (error) {
            callback(error as Error);
        }
    },
});

// Writable stream
// Destination where the transformed data is written
const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log("Received chunk:", chunk.toString());

        callback();
    },
});

async function main(): Promise<void> {
    try {
        await pipeline(
            readableStream,
            uppercaseTransform,
            writableStream
        );

        console.log("Stream completed");
    } catch (error) {
        const msg =
            error instanceof Error
                ? error.message
                : "Unknown error";

        console.error("Stream failed:", msg);
    }
}

main();
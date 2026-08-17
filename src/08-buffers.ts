

// buffers - raw binary data
// binary data means- when u have ur data stored in bytes

// reading files
// receiving http req bodies
// working with streams
// handling images, pdf files, videos
// encrypt and hashing 

// string - human readable text
// buffer - raw btyes

const textBuffer = Buffer.from("Node")

console.log(textBuffer);

// N - 4e
// o - 6f
// d - 64
// e - 65

console.log(textBuffer.toString('utf-8'));
//Node

const engBuffer = Buffer.from("Hello");

console.log(engBuffer.length);  //5

// .alloc will create a empty buffers

const fixedBuffer = Buffer.alloc(5);

console.log("empty fixed", fixedBuffer)  //empty fixed <Buffer 00 00 00 00 00>

fixedBuffer.write("API")

console.log("fixed buffer after write", fixedBuffer)
console.log("fixed buffer as text", fixedBuffer.toString("utf-8"))

// chunks

const chunks = [
    Buffer.from("Hello "),
    Buffer.from("Node "),
    Buffer.from("JS")
]

const combineBuffer = Buffer.concat(chunks)

console.log(combineBuffer, combineBuffer.toString("utf-8"));
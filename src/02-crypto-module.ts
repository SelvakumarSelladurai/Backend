import crypto from "node:crypto"

//build in node.js module

// security related tasks
//creating random UUID, IDs
// creating secure token
// hashing data
// to veriify of tje data was not changed
// encrption and decryption

// crypto.randomUUID() // generates a random UUID(Universel Unique Identifier).

//user id, order id, session is

const userId = crypto.randomUUID();

console.log("userId", userId);

// crypto.randomBytes() // generates a random sequence of bytes

// password reset token, email verification token, session secrettoken, api keys..

const resetToken = crypto
    .randomBytes(16)
    .toString("hex");
console.log("resetToken", resetToken);

// crypto.createHash() // creates a hash of the data

// hello -> hash
// hash -> hello is not possible

const text = "Hello, Selva!";

const hash = crypto
    .createHash("sha256")
    .update(text)
    .digest("hex");

console.log("hash", hash);

// crypto.createHmac() // creates a hash with a secret key

//normal hash : data -> hash
//hmac : data + secret key -> hash

// webhooks, api keys, jwt tokens
// signed tokens

const secretKey = "my-secret-key";
const message = "Hello, Selva!";

const signature = crypto
    .createHmac('sha256', secretKey)
    .update(message)
    .digest("hex");

console.log("signature", signature);

const signatureverify = crypto
    .createHmac('sha256', secretKey)
    .update(message)
    .digest("hex");

console.log("signature is valid and matching", signature === signatureverify);
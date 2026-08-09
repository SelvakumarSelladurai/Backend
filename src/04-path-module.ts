
// build and read file paths

import path from "node:path";

// path.join : uses the correct separator for the current OS to join multiple path segments into a single path string. It normalizes the resulting path, resolving any "." or ".." segments.
// /user/sk/project/file.txt

// process.cwd: the folder from where the node js process was started.

const projectRoot = process.cwd();

console.log("Project Root:", projectRoot);



const userId = "42"
const originalName = "profile.photo.png"


// imp -> path.join -> creates a path string
// it will not create the folder
// it does not check whether the file exixts or not
const uploadFilePath = path.join(
    projectRoot, "uploads", "users", userId, originalName
)

console.log(uploadFilePath);

const fileName = path.basename(uploadFilePath);
const fileExt = path.extname(uploadFilePath);
const parentFolder = path.dirname(uploadFilePath);

console.log("File name", fileName)
console.log(fileExt)
console.log(parentFolder)
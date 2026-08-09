
// os
// cpu info
// memory info
// home/temp dir

import * as os from "node:os";

function runDemo(): void {
    console.log("platform:", os.platform());
    console.log("architecture:", os.arch());
    console.log("os type:", os.type());
    console.log("os release:", os.release());
    console.log("CPU Info:", os.cpus());
    console.log("Total Memory:", os.totalmem());
    console.log("Free Memory:", os.freemem());
    console.log("Home Directory:", os.homedir());
    console.log("Temporary Directory:", os.tmpdir());

    const cpus = os.cpus();
    if (cpus.length > 0) {
        console.log("First CPU Model:", cpus[0].model, cpus[0].speed, "MHz", cpus[0].times);
    }

    console.log("Total Memory:", os.totalmem());
    console.log("Free Memory:", os.freemem());
}

runDemo();

// after some delay
// repeatedly after some interval - 2 seconds

// settimeout
// setinterval
// cleartimeout
// clearinterval
// setimmediate

import { setTimeout as sleep } from "node:timers/promises"

function runSetTimeoutExample(): void {
    console.log('1. setTimeout example started');

    setTimeout(() => {
        console.log('2. this runs after 1 second');
    }, 1000)

    console.log("3. this tun immediately. node doesn't wait");
}

function runClearTimeoutExample(): void {
    const timerId = setTimeout(() => {
        console.log('this message will run after 2 seconds');
    }, 2000)

    //clearTimeout(timerId)
    console.log("4. cleartimeout cancelled the 2 second timer")
}

// setInterval is going to run the callback again an again after the fixed delay 
function runSetIntervalExample(): void {
    let count = 0;

    const intervalId = setInterval(() => {
        count++;

        console.log(`5. Inteval tick: ${count}`);

        if (count === 3) {
            clearInterval(intervalId);
            console.log("6. setInterval stopper");
        }
    }, 500);
}

function runSetImmediateExample(): void {
    setImmediate(() => {
        console.log("7. setImmediate callback");
    })

    console.log("8. synchronous code after")
}

async function runPromisetimerExample(): Promise<void> {
    console.log("9. waiting for promise based timer");

    await sleep(5000)

    console.log("10. promise based timer finishes after 5 seconds")
}

function runTimerDemo(): void {
    runSetTimeoutExample();
    runClearTimeoutExample();
    runSetIntervalExample();
    runSetImmediateExample();
}

runTimerDemo();

runPromisetimerExample().catch((error: unknown) => {
    console.error("timer based demo failed", error);
});


// user registered 
// send a welcome email
// write a log
// notify some other service

import EventEmitter from "node:events";

// emit one event -> listeners listen to this event, do something

// .on() - register one listerner
// .once() - register one listener that runs only one time
// .emit() - triggers an event and send to the listeners

const appEvents = new EventEmitter()

type UserRegisterPayload = {
    id: number;
    email: string
}

appEvents.on("user:registered", (user: UserRegisterPayload) => {
    console.log(`email listener: welcome email send to this user ${user.email}`)
})

appEvents.on("user:registered", (user: UserRegisterPayload) => {
    console.log(`email listener: user ${user.id} and email is ${user.email}`)
})

appEvents.on("app.started", () => {
    console.log("once listener: ap started")
})

function registerUser(): void {
    const user = {
        id: 1,
        email: 'selvakumardurai5973@gmail.com'
    }

    console.log("user saved");

    appEvents.emit("user:registered", user)

    console.log("register user: event listeners completed");

}

appEvents.emit("app.started");
appEvents.emit("app.started");

registerUser()
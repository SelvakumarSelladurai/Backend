type User = {
    id: number;
    name: string;
    role: "user" | "super-admin"
}

const users: User[] = [
    {
        id: 1,
        name: "Selva",
        role: "user"
    },
    {
        id: 2,
        name: "Rani",
        role: "user"
    },
    {
        id: 3,
        name: "Latha",
        role: "super-admin"
    },
    {
        id: 1,
        name: "Sella",
        role: "super-admin"
    },
];

// callback is a function - this func u r passing to a diff funtcion
// callback(error, result) -> *** imp concept -> classic nodejs calback

// 100+ ->25 to 30
function findUserWithCallback(
    userId: number,
    callback: (error: Error | null, user?: User) => void
): void {
    setTimeout(() => {
        //u r actual api call
        const user = users.find(currentUser => currentUser.id === userId)

        if (!user) {
            callback(new Error(`user with id ${userId} was not found`))
            return;
        }

        callback(null, user)
    }, 500)
}

function findUserWithPromise(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((currentUser) => currentUser.id === userId)

            if (!user) {
                reject(new Error(`user with ${userId} data was not found`))
                return
            }
            resolve(user)
        }, 1000)
    })
}

async function findUserWithAsyncAwait(userId: number): Promise<void> {
    try {
        const user = await findUserWithPromise(userId)
        console.log('async/wait', user.name);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'unknown error';

        console.log("async/await", message);
    }

}
findUserWithAsyncAwait(1);

// findUserWithCallback(3, (error, user) => {
//     if (error) {
//         console.log("callback error", error.message);
//         return
//     }

//     console.log("callback result", user?.id, user?.name, user?.role)
// })

// findUserWithPromise(1).then((user) => {
//     console.log("callback result", user?.id, user?.name, user?.role)
// }).catch((error: Error) => {
//     console.log("Promise Error")
// })

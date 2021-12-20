import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from 'react'

const removeListener = Inertia.on('navigate', () => {
    Inertia.reload({ only: ['users'], onFinish: removeListener })
})


const Users = () => {
    const { users } = usePage().props;

    // https://discord.com/channels/592327939920494592/592327939920494594/922476529399783534 sol reply on inertia support server :)

    useEffect(() => {
        const removeListener = Inertia.on('navigate', () => {
            Inertia.reload({ only: ['users'], onFinish: removeListener })
        })
    })

    return (
        <div>
            <p>
                note: if you came here by previous link you will see the users data in console log but try reloading the page it will go in infinite loop
            </p>
            <h1>Check Console for users data!</h1>
            {users && console.log(users)}
        </div>
    )
}

export default Users

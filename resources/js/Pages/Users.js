import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from 'react'

const Users = () => {
    const { users } = usePage().props;

    useEffect(() => {
        Inertia.reload({ only: ['users'] });
    }, [])


    // solution i found but why not working directly

    /*
    useEffect(() => {
        setTimeout(() => {
            Inertia.reload({ only: ['users'] });
        });
    }, [])
    */
    return (
        <div>
            <p>
                note: if you came here by previous link you will see the users data in console log but try reloading the page it will go in infinite loop
            </p>
            <h1>Check Console for users data!</h1>
            {console.log(users)}
        </div>
    )
}

export default Users

import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex justify-center items-center min-h-screen">
                <Link href={route('users')} className="p-2 bg-indigo-400">Click here to check error</Link>
            </div>
        </>
    );
}

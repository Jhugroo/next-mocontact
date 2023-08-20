
import Image from 'next/image';
import { signOut, signIn } from "next-auth/react";

export function Credentials(session: any) {
    session = session.session
    return <>
        {session.status === 'authenticated' && session.data != null && session.data.user != null && session.data.user.image != null ?
            <div className="flex">
                <div className="relative h-12 w-12 overflow-hidden rounded-full hover:animate-spin"><Image src={session.data.user.image} alt="profile image" quality={100} fill /> </div>
                {session.data.user.name}
                <button onClick={() => void signOut()} className="text-sm font-semibold leading-6 text-gray-900">
                    Log out <span aria-hidden="true">&rarr;</span>
                </button>
            </div> : <button onClick={() => void signIn()} className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
            </button>}
    </>
}
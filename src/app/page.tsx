'use client'

import {Pokemon} from "@/components/pokemon/Pokemon";
import ReduxProvider from "@/store/ReduxProvider";

export default function Home() {
    return (
        <ReduxProvider>
            <div className='container'>
                <h1 className='title'>hello User</h1>

                <div className='pokemon'>
                    <Pokemon />
                </div>
            </div>
        </ReduxProvider>
    )
}

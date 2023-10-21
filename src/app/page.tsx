'use client'

import {useGetPokemonByNameQuery} from "@/api/pokemonApi";
import {Provider} from "react-redux";
import {store} from "@/store";
import {Pokemon} from "@/components/pokemon/Pokemon";

export default function Home() {


    return (
        <Provider store={store}>
            <div className='container'>
                <h1>hello JI3BA</h1>

                <div className='pokemon'>
                    <Pokemon />
                </div>
            </div>
        </Provider>
    )
}

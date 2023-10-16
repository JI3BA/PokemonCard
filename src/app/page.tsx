'use client'
import axios, {AxiosInstance} from "axios";
import {useEffect, useState} from "react";
import type {PokemonListType} from "@/models/PokemonList";
import {v1} from "uuid";
import Link from "next/link";

const request = axios.create({
    baseURL: `https://pokeapi.co/api/v2`,
})

const getRequestPokemon = async(request: AxiosInstance, endpoint: string) => {
    return await request.get(endpoint)
}

export default function Home() {
    const [pokemon, setPokemon] = useState<PokemonListType[]>()

    useEffect(() => {
        getRequestPokemon(request, 'pokemon').then(res => setPokemon(res.data.results))
    },[])


    return (
        <div className='container'>
            <h1>hello JI3BA</h1>

            <div className='pokemon'>
                <ul className='pokemon__list'>
                    {!pokemon
                        ? <p className="loader"></p>
                        :pokemon.map((pok, i) => <li key={v1()}>
                        <Link href={`/pokemon/${i+1}`}>{pok.name}</Link>
                    </li>)}
                </ul>
                {/*{pokemon &&*/}
                {/*    <>*/}
                {/*        <p>Name: <span style={{fontWeight: 700}}>{pokemon.name}</span></p>*/}
                {/*        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>*/}
                {/*    </>*/}
                {/*}*/}
            </div>
        </div>
    )
}

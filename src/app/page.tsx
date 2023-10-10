'use client'
import axios, {AxiosInstance} from "axios";
import {useEffect, useState} from "react";
import {IPokemon} from "@/app/models/Pokemon";

const request = axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon`,
})

const getRequestPokemon = async(request: AxiosInstance, endpoint: string) => {
    return await request.get(endpoint)
}

export default function Home() {
    const [pokemon, setPokemon] = useState<IPokemon>()

    useEffect(() => {
        getRequestPokemon(request, '1').then(res => setPokemon(res.data))
    },[])


    return (
        <div className='container'>
            <h1>hello JI3BA</h1>

            <div className='pokemon'>
                {pokemon &&
                    <>
                        <p>Name: <span style={{fontWeight: 700}}>{pokemon.name}</span></p>
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                    </>
                }
            </div>
        </div>
    )
}

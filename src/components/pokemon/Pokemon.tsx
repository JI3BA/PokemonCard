import {useGetPokemonByNameQuery, useGetPokemonListQuery} from "@/api/pokemonApi";
import {useEffect} from "react";


export const Pokemon = () => {
    //const {data, error, isLoading} = useGetPokemonByNameQuery('1')
    const {data, error, isLoading} = useGetPokemonListQuery()

    useEffect(() => {
        console.log(data)
    }, [data])

    return(
        <>
            {isLoading
                ? <p className='loader'></p>
                : <>
                    {data.results.map(pok => <p>{pok.name}</p>
                    )}
                    {/*<img src={data.sprites.other.dream_world.front_default} alt="data.name"/>*/}
                    {/*<p>{data.name}</p>*/}
                </>
            }
        </>
    )
}
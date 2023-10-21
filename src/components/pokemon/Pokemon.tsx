import {useGetPokemonByNameQuery} from "@/api/pokemonApi";


export const Pokemon = () => {
    const {data, error, isLoading} = useGetPokemonByNameQuery('1')

    return(
        <>
            {isLoading
                ? <p className='loader'></p>
                : <>
                    <img src={data.sprites.other.dream_world.front_default} alt="data.name"/>
                    <p>{data.name}</p>
                </>
            }
        </>
    )
}
import {useGetPokemonListQuery} from "@/api/pokemonApi";
import s from './Pokemon.module.css'
import {v1} from 'uuid'
import {useDispatch} from "react-redux";
import {setNamePokemon} from "@/store/slices/pokemonSlice";
import Link from "next/link";


export const Pokemon = () => {
    const {data, isLoading} = useGetPokemonListQuery()
    const dispatch = useDispatch()

    const onClickPokemon = (name: string) => {
        dispatch(setNamePokemon(name))
    }

    return(
        <>
            {isLoading
                ? <p className={s.loader}></p>
                : <div className={s.list}>
                    <ul className={s.list__container}>
                        {data.results.map(pok =>
                            <li key={v1()} onClick={() => onClickPokemon(pok.name)} className={s.list__item}>
                                <Link className={s.list__link} href={`${pok.name}`}>{pok.name}</Link>
                            </li>)}
                    </ul>
                </div>
            }
        </>
    )
}
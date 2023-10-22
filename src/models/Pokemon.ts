type DreamWorldType = {
    front_default: string
}

type OtherType = {
    dream_world: DreamWorldType
}

type SpritesType = {
    other: OtherType
}

export interface IPokemon {
    id: string,
    name: string,
    sprites: SpritesType
}
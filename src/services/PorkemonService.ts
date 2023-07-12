import { promises } from "dns";
import { api } from "src/boot/axios";
import { PokemonRespoense } from "src/types/PokemonType";

export const fetchPokemon = async (): Promise<PokemonRespoense> => {
    const response = await api.get<PokemonRespoense>('/pokemon?limit=10&offset=0');
    return response.data;
};



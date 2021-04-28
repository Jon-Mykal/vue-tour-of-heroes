import { Hero } from '@/types/hero'
export const namespaced = true;

export const state: HeroesState = {
    HEROES: [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ] as Hero[]
}

export const getters = {
    getAllHeroes(state: HeroesState): Hero[] {
        return state.HEROES;
    },
    getHeroById: (state: HeroesState) => (id: Number): Hero | undefined => {
        return state.HEROES.find(h => h.id === id);
    }
}

interface HeroesState {
    HEROES: Hero[]
}
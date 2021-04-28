import {heroService} from '../services/heroService';
import { Hero } from '@/types/hero'
import { ActionTree, GetterTree, Module } from 'vuex';
import { RootState } from '.';

// const heroSvc: HeroService = new HeroService();
export const namespaced = true;


export const state: HeroesState = {
    HEROES: [] as Hero[]
}

export const mutations = {
    LOAD_HEROES(state: HeroesState, heroes: Hero[]) {
        state.HEROES = heroes;
    }
}

export const actions: ActionTree<HeroesState, RootState> = {
    async getAllHeroes({commit}: {commit: Function} ) {
        let heroes = await heroService.getHeroes();
        commit('LOAD_HEROES', heroes.data);
        return heroes.data;
    },
    async getHeroById({commit, getters}: {commit: Function, getters: any}, id: number ) {
        let hero: Hero = getters.getHeroById(id);
        if(!hero) {
            hero = (await heroService.getHeroById(id)).data;
        }

        return hero;
    }
}

export const getters = {
    getAllHeroes(state: HeroesState): Hero[] {
        return state.HEROES;
    },
    getHeroById: (state: HeroesState) => (id: Number): Hero | undefined => {
        return state.HEROES.find(h => h.id === id);
    }
}


export const mdl_heroes: Module<HeroesState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
interface HeroesState {
    HEROES: Hero[]
}


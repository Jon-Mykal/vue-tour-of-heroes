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
    },
    ADD_HERO(state: HeroesState, hero: Hero) {
        state.HEROES.push(hero);
    },
    DELETE_HERO(state: HeroesState, hero: Hero) {
        state.HEROES = state.HEROES.filter(h => h.id !== hero.id);
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
    },
    async updateHero({commit}: {commit: Function}, hero: Hero) {
        await heroService.updateHero(hero);
    },
    async addHero({state, commit}: {state: HeroesState, commit: Function}, hero: Hero) {
        hero.id = heroService.genId(state.HEROES);
        await heroService.addHero(hero);
        commit('ADD_HERO', hero);
    },
    async deleteHero({state, commit}: {state: HeroesState, commit: Function}, hero: Hero) {
        await heroService.deleteHero(hero);
        commit('DELETE_HERO', hero);
    },
    async searchHeroes({state, commit}: {state: HeroesState, commit: Function}, term: string) {
        let heroes = await heroService.searchHeroes(term);
        commit('LOAD_HEROES', heroes.data);
        return heroes.data;
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


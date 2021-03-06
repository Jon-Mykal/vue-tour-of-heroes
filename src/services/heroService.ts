import { Hero } from '@/types/hero';
import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios'


    export class HeroService {
        public apiClient: AxiosInstance;
    
        constructor() {
            this.apiClient = axios.create({
                baseURL: 'http://localhost:3001',
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            });
        }
    
        getHeroes(): AxiosPromise<Hero[]> {
            return this.apiClient.get('/heroes');
        }
    
        getHeroById(id: number): AxiosPromise<Hero> {
            return this.apiClient.get(`/heroes/${id}`);
        }
    
        genId(heroes: Hero[]): number {
            return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
        }

        updateHero(hero: Hero) {
            return this.apiClient.put(`/heroes/${hero.id}`, hero);
        }

        addHero(hero: Hero) {
            return this.apiClient.post(`/heroes`, hero);
        }

        deleteHero(hero: Hero) {
            return this.apiClient.delete(`/heroes/${hero.id}`);
        }

        searchHeroes(term: string): AxiosPromise<Hero[]>{
            if (!term.trim()) {
                return new Promise((resolve, reject) => { resolve({data: {} } as AxiosResponse<Hero[]>)});
            }

            return this.apiClient.get<Hero[]>(`/heroes?name=${term}`);
        }
    }

    export const heroService: HeroService = new HeroService();



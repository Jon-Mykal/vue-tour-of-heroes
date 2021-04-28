import { Hero } from '@/types/hero';
import axios, { AxiosInstance, AxiosPromise } from 'axios'


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
            return this.apiClient.put('/heroes', hero);
        }
    }

    export const heroService: HeroService = new HeroService();



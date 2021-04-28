import { createStore, StoreOptions } from 'vuex'
import {mdl_heroes} from '@/store/mdl_heroes'

const store: StoreOptions<RootState> = {
  state:  {
    version: '1.0.0'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    mdl_heroes
  }
}
export default createStore(store)

export interface RootState {
  version: string;
}

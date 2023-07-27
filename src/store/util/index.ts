import {RootState} from "@/store/types";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {utilState} from "@/store/util/types";
import i18n from "@/composables/lang";

const state: utilState = {
    language: 'en',
};
const namespaced = true;

const mutations:MutationTree<utilState> = {
    SET_LANG(state,lang){
        state.language = lang
    }
}

const actions: ActionTree<utilState, RootState> = {
    setLang({commit},lang){
        commit('SET_LANG',lang)
        localStorage.setItem('lang', lang);
        i18n.global.locale = lang;
    }
}

const getters: GetterTree<utilState, RootState> = {
    currentLang(state){
        return state.language
    }
}

export const util: Module<utilState, RootState> = {
    namespaced,
    state,
    mutations,
    actions,
    getters
};
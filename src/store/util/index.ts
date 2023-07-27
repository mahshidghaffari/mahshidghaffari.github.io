import {RootState} from "@/store/types";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {utilState} from "@/store/util/types";
import i18n, {loadLanguageAsync} from "@/composables/lang";

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
    async setLang({ commit }, lang) {
        try {
            await loadLanguageAsync(lang); // Wait for language to be loaded
            commit("SET_LANG", lang);
            localStorage.setItem("lang", lang);
            // i18n.global.locale = lang;
        } catch (error) {
            console.error("Error loading language:", error);
        }
    },
};

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
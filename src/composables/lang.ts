import { createI18n } from 'vue-i18n';
import {DEF_LANG,LANG_DIR} from "@/composables/constants";
import axios from 'axios';
import {SUPPORTED_LANG_TYPE} from "@/composables/constants";


const i18n = createI18n({
    locale: localStorage.getItem('lang') || DEF_LANG,
    fallbackLocale: DEF_LANG,
    messages: {
        [localStorage.getItem('lang') || DEF_LANG]: LANG_DIR[localStorage.getItem('lang') as SUPPORTED_LANG_TYPE || DEF_LANG]
    },
});

const loadedLanguages = [DEF_LANG]; // Default language that is preloaded
function setI18nLanguage(lang: SUPPORTED_LANG_TYPE) {
    i18n.global.locale = lang;
    axios.defaults.headers.common['Accept-Language'] = lang;
    document.querySelector('html')?.setAttribute('lang', lang);
    return lang;
}


export function loadLanguageAsync(lang: SUPPORTED_LANG_TYPE): Promise<string> {

    // If the same language is already loaded, resolve the promise immediately
    if (i18n.global.locale === lang) {
        return Promise.resolve(setI18nLanguage(lang));
    }

    // If the language was already loaded, resolve the promise immediately
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(lang));
    }
    // If the language hasn't been loaded yet, use dynamic import to load the translation file
    return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`).then(
        (messages) => {
            if(messages){
                i18n.global.setLocaleMessage(lang, messages.default);
                i18n.global.locale = lang
                loadedLanguages.push(lang);
                return lang;
            }else
                return DEF_LANG
        }
    );
}
export default i18n;
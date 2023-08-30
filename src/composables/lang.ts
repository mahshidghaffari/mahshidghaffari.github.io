import { createI18n } from 'vue-i18n';
import {DEF_LANG} from "@/composables/constants";
import axios from 'axios';
import {SUPPORTED_LANG_TYPE} from "@/composables/constants";

function getInitLang(lang:SUPPORTED_LANG_TYPE){
    return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`).then(
        (messages) => {
            return messages.default;
        }
    );
}
const msg = await getInitLang(DEF_LANG as SUPPORTED_LANG_TYPE)

const i18n = createI18n({
    locale: DEF_LANG,
    fallbackLocale: DEF_LANG,
    messages: {
        [DEF_LANG]:msg
    }
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
            i18n.global.setLocaleMessage(lang, messages.default);
            i18n.global.locale = lang
            loadedLanguages.push(lang);
            return lang;
        }
    );
}
export default i18n;
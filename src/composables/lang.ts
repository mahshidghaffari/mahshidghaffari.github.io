import { createI18n } from 'vue-i18n';
import {DEF_LANG,LANG_DIR} from "@/composables/constants";

const i18n = createI18n({
    locale: localStorage.getItem('lang') || DEF_LANG, // initial the lang
    fallbackLocale: DEF_LANG, // back up in case the locale is not valid
    messages: LANG_DIR
});

export default i18n;
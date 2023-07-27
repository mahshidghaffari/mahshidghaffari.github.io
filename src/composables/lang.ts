import { createI18n } from 'vue-i18n'; // Import createI18n from vue-i18n

const i18n = createI18n({
    locale: 'en', // Set the initial locale (default language)
    fallbackLocale: 'en', // Fallback language in case the current locale is not available
    messages: {
        en: require('./lang/en.json'), // Import the language messages for English
        fr: require('./lang/fr.json'), // Import the language messages for French
        // Add more language messages as needed
    },
});


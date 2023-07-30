# Multi lingual Vue3 project
Assignment Title: Multilingual Frontend in Vue.js

Assignment Description:
As a Vue.js developer, your task is to implement a multilingual feature in a Vue.js frontend application that allows users to dynamically switch between multiple languages. The application should support at least two languages: English (default) and one additional language of your choice (e.g., Spanish, French, German, etc.).


Estimated Time: 3 hours

Requirements:
1. Set up a new Vue.js project using the Vue CLI or any other preferred method.
2. Implement a language switcher component that allows users to change the language dynamically. This component can be a dropdown, a list of flags, or any other user-friendly interface.
3. Create language files for both English and the additional language you chose. The language files should be in JSON format and should contain translations for all the text elements used in the application.
4. Implement a Vue mixin or a similar mechanism to load the language files dynamically when the user switches languages.
5. Apply the translations to the frontend components based on the selected language. Ensure that the appropriate language file is used to display the text in the chosen language.
6. The language preference should be persisted, so when a user revisits the website, their chosen language should be retained.


Bonus Points (Optional):
- Implement additional languages (more than two) with minimal code changes and demonstrate the scalability of your solution.
- Use a Vuex store or a similar state management library to handle language switching and language data.
- Add transitions or animations when the language is switched.


Submission Guidelines:
1. Provide the complete Vue.js project folder (including the configuration files) with your code.
2. Include instructions on how to run the project and test the multilingual feature.

-----
## Add Language Structure 
1. Incorporate the PNG icon into the src/assets directory by downloading it from this link: https://www.flaticon.com/free-icons/flag.
2. Copy the translated .JSON file in src/lang
3. Update the const SUPPORTED_LANG_TYPE and SUPPORTED_LANG in the constants file located within the "composables" directory. Refer to the comment lines in the constant.ts file for further information on this update.


-----
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

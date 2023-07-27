export const DEF_LANG = localStorage.getItem('lang') || 'en';

// for adding lang , just add new lang to below object + Icon in png file you
// can download the icon from here https://www.flaticon.com/free-icons/flag
// code should be the same name as image name and Json file
export const SUPPORTED_LANG= [
    {name:"English", code:"en", image: require('@/assets/en.png')},
    {name:"French", code:"fr",image: require('@/assets/fr.png')},
    {name:"Italian", code:"it",image: require('@/assets/it.png')},
    {name:"Spanish", code:"sp",image: require('@/assets/sp.png')},
]

// also add the code in here

export type SUPPORTED_LANG_TYPE = 'en' | 'fr' | 'it' | 'sp';
export const DEF_PAGES = [
    {name: "home", to: "/"},
    {name: "about", to: "/about"},
    {name: "contact", to: "/contact"}
]


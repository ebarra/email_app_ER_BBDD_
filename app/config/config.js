import profile from './profile';
import emails from './emails';
import chats from './chats';

export let GLOBAL_CONFIG = {
  profile:profile,
  emails:emails,
  chats:chats,
  hideLogo:false,
  localStorageKey:"RESCORMeailKike222d2d32d2",
  escapp:{
    // endpoint:"http://localhost:3000/api/escapeRooms/3",
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/146",
    localStorageKey:"ESCAPP_RESCORMail_ER_KIKE2222",
    imagesPath:"assets/images/",
    restoreState:"AUTO",
    I18n:{
      availableLocales:["es", "en"],
      locale:"es",
      defaultLocale:"es",
    },
    appPuzzleIds:[1],
    notifications: true,
    rtc: true
  },
};

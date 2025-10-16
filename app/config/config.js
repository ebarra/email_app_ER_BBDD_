import profile from './profile';
import emails from './emails';
import chats from './chats';

export let GLOBAL_CONFIG = {
  profile:profile,
  emails:emails,
  chats:chats,
  hideLogo:false,
  localStorageKey:"363bRESCORM2",
  escapp:{
    // endpoint:"http://localhost:3000/api/escapeRooms/3",
    endpoint:"https://escape.dit.upm.es/api/escapeRooms/382",
    localStorageKey:"3bESCAPP_RESCOR2",
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

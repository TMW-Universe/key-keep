import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translations } from "./translations.enum";
import { Language } from "@tmw-universe/tmw-universe-types";

import en_US_common from "./locales/en_US/common/common.json";
import en_US_layout from "./locales/en_US/common/layout.json";
import en_US_tmwu_auth from "./locales/en_US/tmwu/auth.json";

const resources = {
  [Language.en_US]: {
    [Translations.COMMON]: en_US_common,
    [Translations.LAYOUT]: en_US_layout,

    // TMW Universe
    [Translations.TMWU_AUTH]: en_US_tmwu_auth,
  },
};

export const i18nSetup = () => {
  i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: Language.en_US,
    debug: true,
    resources,
  });
};

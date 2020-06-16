import locale from "@/locales/locale"

const locales = {locale}, messages = {};

Object.keys(locales).forEach((prop) => {
    Object.keys(locales[prop]).forEach((lang) => {
        if (!messages[lang]) messages[lang] = {};
        if(prop === 'elementLocale'){
            messages[lang] = locales[prop][lang];
        }
        messages[lang][prop] = locales[prop][lang];
    });
});

export default messages;
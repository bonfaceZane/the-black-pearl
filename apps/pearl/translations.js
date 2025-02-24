import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { mergeDeepRight } from 'ramda'
import englishTranslation from '@/assets/translations'
import spanishTranslation from '@/assets/translations'

void i18next.use(initReactI18next).init({
    resources: mergeDeepRight(englishTranslation, spanishTranslation),
    compatibilityJSON: 'v3',
    returnNull: false,
    debug: __DEV__,
    lng: 'en-EN',
    fallbackLng: 'en-EN',
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
})

export default i18next

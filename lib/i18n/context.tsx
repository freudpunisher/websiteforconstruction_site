"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import fr from './dictionaries/fr.json'
import en from './dictionaries/en.json'

type Locale = 'fr' | 'en'

interface LanguageContextType {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: (key: string) => any
}

const dictionaries = { fr, en }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('fr')

    // Load preferred language from localStorage if available
    useEffect(() => {
        const savedLocale = localStorage.getItem('ecobus-locale') as Locale
        if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
            setLocale(savedLocale)
        }
    }, [])

    const handleSetLocale = (newLocale: Locale) => {
        setLocale(newLocale)
        localStorage.setItem('ecobus-locale', newLocale)
    }

    const t = (path: string) => {
        const keys = path.split('.')
        let result: any = dictionaries[locale]

        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key]
            } else {
                return path // Fallback to key if not found
            }
        }

        return result
    }

    return (
        <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider')
    }
    return context
}

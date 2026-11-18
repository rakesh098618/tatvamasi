import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppLanguage } from '../types';
import { te } from '../locales/te';
import { en } from '../locales/en';

const LANGUAGE_STORAGE_KEY = '@tatvamasi_language';
const FIRST_LAUNCH_KEY = '@tatvamasi_has_chosen_language';

type TranslationKeys = keyof typeof te;

interface LanguageContextType {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => Promise<void>;
  t: (key: TranslationKeys) => string;
  isFirstLaunch: boolean;
  completeFirstLaunch: (lang: AppLanguage) => Promise<void>;
  showLanguageModal: boolean;
  openLanguageModal: () => void;
  closeLanguageModal: () => void;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'te',
  setLanguage: async () => {},
  t: (key) => te[key] || '',
  isFirstLaunch: false,
  completeFirstLaunch: async () => {},
  showLanguageModal: false,
  openLanguageModal: () => {},
  closeLanguageModal: () => {},
  isLoaded: false,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<AppLanguage>('te');
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadStoredPreferences = async () => {
      try {
        const storedLang = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        const hasChosen = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);

        if (storedLang === 'en' || storedLang === 'te') {
          setLanguageState(storedLang);
        }
      } catch (e) {
        console.error('Error loading language from AsyncStorage', e);
      } finally {
        setIsLoaded(true);
      }
    };

    loadStoredPreferences();
  }, []);

  const setLanguage = async (newLang: AppLanguage) => {
    try {
      setLanguageState(newLang);
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
      await AsyncStorage.setItem(FIRST_LAUNCH_KEY, 'true');
      setIsFirstLaunch(false);
    } catch (e) {
      console.error('Error saving language to AsyncStorage', e);
    }
  };

  const completeFirstLaunch = async (chosenLang: AppLanguage) => {
    await setLanguage(chosenLang);
    setShowLanguageModal(false);
  };

  const openLanguageModal = () => setShowLanguageModal(true);
  const closeLanguageModal = () => setShowLanguageModal(false);

  const t = (key: TranslationKeys): string => {
    const dict = language === 'en' ? en : te;
    return dict[key] || te[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isFirstLaunch,
        completeFirstLaunch,
        showLanguageModal,
        openLanguageModal,
        closeLanguageModal,
        isLoaded,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

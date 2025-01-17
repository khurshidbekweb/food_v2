/* eslint-disable react-refresh/only-export-components */
import { Language, Restaurant } from "@/types";
import React, { createContext, ReactNode, useState, useContext } from "react";

// Kontekst uchun turlarni aniqlaymiz
type ViewCard = "col" | "row";

interface StoreChangeType {
  viewCard: ViewCard; 
  changeCardView: (card: ViewCard) => void; 
  language: Language,
  changeLanguage: (len:Language) => void
}


const StoreContext = createContext<StoreChangeType | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode; // Bolalar elementlari
}
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const restaurant:Restaurant = JSON.parse(localStorage.getItem('restaurant') as string)
  const [direction, setDirection] = useState<ViewCard>("row");
  const [language, setLanguage] = useState<Language>(restaurant?.languages[0])

  const changeDirection = (card: ViewCard) => {
    setDirection(card);
  };
  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  return (
    <StoreContext.Provider value={{viewCard: direction, changeCardView:changeDirection, language,changeLanguage}}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Multi language
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";

import englishContent from "./lang/en.json";
import spanishContent from "./lang/es.json";

i18n.
  use(initReactI18next)
  .init({

    resources: {
      en: englishContent,
      es: spanishContent,
    },

    lng: "es",

    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });

// CONFIG aos

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({

});

// CONFIG toastify

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
    
  </React.StrictMode>,
)

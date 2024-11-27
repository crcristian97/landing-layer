import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css"; // Aquí importamos Tailwind CSS
import App from "./App";
import Header from "./components/Header";
import DespidosHeader from "./components/Views/DespidosHeader";
import DespidoCard from "./components/Views/DespiedosCard";
import FAQ from "./components/Views/DespidosFAQ";
import ContactForm from "./components/Contact-form";
import Footer from "./components/Footer";
import questionsDespidos from "./components/Views/utils/DespidosFQA";
import questionsART from "./components/Views/utils/ARTFQA";
import artHeroSeccion from "./img/artHeroSeccion.webp";
import despidosJusticia from './img/despidosJusticia.webp';
import ContactFormService from "./components/Views/ContactFormService";
import ArtCard from "./components/Views/ARTCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/despidos/",
    element: 
    <>
    <Header />
    <DespidosHeader 
        nombre="Despidos"
        img={despidosJusticia} 
        title="Estatua de la Justicia con venda en los ojos, balanza y espada, simbolizando imparcialidad, equilibrio y autoridad en la justicia." 
        alt="Lady Justice con venda, balanza y espada, representando imparcialidad y equidad en el derecho."
    />
    <DespidoCard />
    <FAQ 
        questions={questionsDespidos} 
    /> 
    <ContactForm /> 
    <Footer/>
    </>
  },
  {
    path: "/art/",
    element: <>
    <Header />
    <DespidosHeader 
        nombre="ART"
        img={artHeroSeccion} 
        title="ART en Argentina: Abogados especializados en accidentes laborales y derechos de los trabajadores." 
        alt="Asesoramiento legal sobre ART en Argentina, protección ante riesgos laborales."
    />
    <ArtCard />
    <FAQ 
        questions={questionsART} 
    />
    <Footer/>
    </>
  },
  {
    path: "/contacto/",
    element: <><Header /><ContactFormService /><Footer/></>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
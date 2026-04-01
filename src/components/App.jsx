import React from "react";
import MainContent from "./MainContent/MainContent.jsx";
import Footer from "./Footer/Footer.jsx";
import Menu from "./Menu/Menu.jsx";
import MenuProps from "./Menu/MenuProps.jsx";
import MenuPropsDesestructuracion from "./Menu/MenuPropsDesestructuracion.jsx";
import MainContentFragmentExplicito from "./MainContent/MainContentFragmentExplicito.jsx";
import MainContentFragmentImplicito from "./MainContent/MainContentFragmentImplicito.jsx";

export default function App() {

    return (
        <div className="app-layout">

            {/* <Menu/> */}            
             <MenuProps backgroundColor="red"/>
            {/* <MenuPropsDesestructuracion backgroundColor="blue"/> */}

            {/* <MainContent/> */}
            {/* <MainContentFragmentExplicito/> */}
            <MainContentFragmentImplicito/>

            <Footer/>
        </div>
    );
}
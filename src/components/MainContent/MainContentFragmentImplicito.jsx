import React from "react";
import "./MainContent.css";

export default function MainContentFragmentImplicito() {
    return (<>
        <div className="main-content">
            <h1>VENTAS ONLINE</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro suscipit totam distinctio nostrum officiis ex eius, alias cum ipsam quasi nulla itaque iusto, ea provident at hic doloribus molestias deleniti.</p>
            <p>Selecciona una opción en el menú para comenzar.</p>
        </div>
        <div className="main-content">
            <h1>Información Adicional</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur corrupti perspiciatis beatae sequi, necessitatibus optio similique? Sint qui, placeat voluptatum recusandae ex sit vel eligendi ipsum quis dolores cupiditate odit.</p>
            <p>Explora las diferentes secciones para conocer más sobre nuestros servicios.</p>
        </div>
    </>);
}
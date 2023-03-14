import React from "react";
import '../styles/TarjetaPlan.css'

export default function TarjetaPlan({tipoPlan, precio, capacidad, usuarios, capacidadEnvios, backgroundColor, color, borde, letraBoton, borderRadiusRight, borderRadiusLeft}) {
    return(
        <section className="contenedor-tarjeta" style={{background: backgroundColor, borderTopRightRadius: borderRadiusRight, borderBottomRightRadius: borderRadiusRight, borderTopLeftRadius: borderRadiusLeft, borderBottomLeftRadius: borderRadiusLeft}}>
            <p className="tipo-de-plan" style={{color: color}}>{tipoPlan}</p>
            <h2 className="precio-plan" style={{color: color}}><span className="signo-precio">$</span><span className="precio">{precio}</span></h2>
            <div className="contenedor-contenido-plan">
                <ul className="contenedor-elementos-plan">
                    <li className="text-capacidad-plan" style={{color: color}}>{capacidad} Storage</li> 
                    <li className="text-usuarios" style={{color: color}}>{usuarios} Users Allowed</li> 
                    <li className="text-enviar-gb" style={{color: color}}>Send up to {capacidadEnvios}</li> 
                </ul>
            </div>
            <button className="boton" type="button" style={{color:letraBoton, background:color, border: borde}}>learn more</button>
        </section>
    )
}
import React from "react";
import '../styles/OpcionesCompra.css'

export default function OpcionesCompra() {

    const precioPlan = document.getElementsByClassName('precio');
    var annuallyOrMonthly = 0;
    
    const botonSwitch = () => {
        const boton_switch = document.querySelector('.circle-switch');
        boton_switch.classList.toggle ('boton-toggle');
        elegirTipoDePlan();
    }

    const elegirTipoDePlan = () => {
        if(annuallyOrMonthly === 0){
            for(let i = 0; i < precioPlan.length; i++){
                precioPlan[0].innerHTML = '199.99';
                precioPlan[1].innerHTML = '249.99';
                precioPlan[2].innerHTML = '399.99';
            }
            annuallyOrMonthly += 1;
        }else {
            for(let i = 0; i < precioPlan.length; i++){
                precioPlan[0].innerHTML = '19.99';
                precioPlan[1].innerHTML = '24.99';
                precioPlan[2].innerHTML = '39.99';
            }
            annuallyOrMonthly -= 1;
        }
    }

    return(
        <div className="contenedor-opciones-compra">
            <p className="text-annually">Annually</p>
            <button onClick={botonSwitch} className="boton-switch" type="button">
                <span className="circle-switch"></span>
            </button>
            <p className="text-monthly">Monthly</p>
        </div>
    )
}
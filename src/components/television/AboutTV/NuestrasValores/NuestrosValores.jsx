import React from "react";
import Image from "next/image";
import css from "./NuestrosValores.module.css";

const NuestrosValores = () => {
  return (
    <div className={css.container}>
      <h3>Nuestros Valores</h3>
      <ol className={css.list}>
        <li>Honrar y adorar a Dios y predicar por este medio.</li>
        <li>
          Divulgar el Evangelio de Jesucristo utilizando todos los medios de
          comunicación al alcance de la Iglesia.
        </li>
        <li>
          Ofrecer ayuda práctica y espiritual a aquellos que estén necesidad.
        </li>
        <li>
          Enseñar e instruir en el conocimiento de las Sagradas Escrituras y en
          las creencias religiosas proclamadas por esta Iglesia a todas las
          personas que deseen voluntariamente recibir tal instrucción.
        </li>
        <li>
          Ayudar a cualquier ser humano que lo desee, en respuesta al compromiso
          cristiano, procurando el íntegro desarrollo de su personalidad,
          subviniendo a sus necesidades físicas, materiales y espirituales, en
          la medida de las posibilidades y medios disponibles.
        </li>
        <li>
          {" "}
          Promover la comunicación fraternal, la unión y la colaboración en el
          testimonio cristiano.
        </li>
      </ol>
      <Image
        src={"/images/solidariaTV/valores.webp"}
        alt="Nuestros valores principales" width={409} height={350} className={css.image}
      />
    </div>
  );
};

export default NuestrosValores;

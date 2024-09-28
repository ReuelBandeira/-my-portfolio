import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Analista de Sistemas",
          "Engenheiro da Computação",
          "Desenvolvedor FullStack",
          "Administrador de banco de dados",
          "Explorador de tecnologias",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;

import React, { useEffect, useState } from "react";

type TextTypeProps = {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  style?: React.CSSProperties;
};

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  style
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!text.length) return;
    // Pause when a line is fully typed
    if (!reverse && subIndex === text[index].length) {
      const pause = setTimeout(() => setReverse(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    const timeout = setTimeout(
      () => {
        if (!reverse) {
          setSubIndex((s) => s + 1);
        } else {
          if (subIndex === 0) {
            setReverse(false);
            setIndex((i) => (i + 1) % text.length);
          } else {
            setSubIndex((s) => s - 1);
          }
        }
      },
      reverse ? Math.max(20, typingSpeed / 2) : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, text, typingSpeed, pauseDuration]);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        fontWeight: "bold",
        left: 32,
        top: 32,
        color: "var(--fourth)",
        fontSize: 70,
        ...style
      }}
    >
      {text[index].substring(0, subIndex)}
      {showCursor && (
        <span style={{ opacity: blink ? 1 : 0 }}>{cursorCharacter}</span>
      )}
    </div>
  );
};

function Titulo() {
  return (
    <div className="">
      <TextType
        text={[
          "People Flow",
          "Sua gestão de RH",
          "Descomplicado e inteligente!"
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter='|'
      />
      <div className='inset-x-0 bottom-150 w-220 text-left p-8'>
        <p className=" text-2xl">
          Sua gestão de RH no mais alto nível. Nosso sistema centraliza o
          cadastro de colaboradores, automatiza cálculos trabalhistas e
          simplifica processos como férias, rescisões e folha, garantindo
          precisão e compliance total. Reduza erros, ganhe tempo e tenha
          controle completo do seu departamento pessoal em uma plataforma
          intuitiva e segura. Profissionalize sua operação de RH e foque no que
          realmente importa: desenvolver pessoas e impulsionar resultados.
        </p>
      </div>
    </div>
  );
}

export default Titulo;

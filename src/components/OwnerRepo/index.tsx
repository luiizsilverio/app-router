"use client"

import { useState } from "react";
import Image from "next/image";

interface OwnerProps {
  avatar_url: string;
  login: string;
}

export function OwnerRepo({ avatar_url, login }: OwnerProps) {
  const [show, setShow] = useState(false);
  return ( 
    <div>
      {show && (
        <>
          <Image  
            src={avatar_url}
            alt="Foto do usuário"
            width={34}
            height={34}
            style={{borderRadius: 16}}
          />
          <h3>{ login }</h3>      
        </>
      )}      

      <button onClick={() => setShow(!show)}>
        { show ? "Ocultar nome" : "Mostrar nome" }
      </button>
    </div>
  )
}
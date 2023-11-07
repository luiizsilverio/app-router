"use client"

import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassPlus, XCircle } from "phosphor-react";
import styles from '@/components/OwnerRepo/ownerRepo.module.css';

interface OwnerProps {
  avatar_url: string;
  login: string;
  language: string;
  topics: string[];
}

export function OwnerRepo({ avatar_url, login, language, topics }: OwnerProps) {
  const [show, setShow] = useState(false);
  return ( 
    <div>
      {show && (
        <div className={styles.container}>
            <div>
              <p><span>Linguagem:</span> { language }</p>
              <p><span>Tópicos:</span> { topics.join(', ') }</p>
            </div>

            <div className={styles.owner}>
              <Image  
                src={avatar_url}
                alt="Foto do usuário"
                width={34}
                height={34}
                style={{borderRadius: 16}}
              />
              <p>{ login }</p>
            </div>
        </div>
      )}

      <button 
        onClick={() => setShow(!show)} 
        className={styles.button}
      >
        { show 
          ? <XCircle size={24} color="coral" weight="bold" />
          : <MagnifyingGlassPlus size={24} color="lightskyblue" weight="bold" />
        }
      </button>
    </div>
  )
}
"use client"

import Link from "next/link"
import { useEffect } from "react";

const Error = ({ error, reset }: {error: Error; reset: () => void }) => {

  useEffect(() => {
    console.log(error);
  }, [])

  return (
    <div>
      <h2>Ops! Algo deu errado!</h2>
      <div>
        <Link href="/">
          Voltar para a página principal
        </Link>
      </div>
    </div>
  )
}

export default Error;

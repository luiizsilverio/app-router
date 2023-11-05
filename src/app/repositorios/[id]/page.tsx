interface Props {
  params: {
    id: string;
  }
}

export default function RepoId({ params }: Props) {
  return ( 
    <div>
      <h2>Detalhes do repositório {params.id}</h2>
    </div>
  )
}
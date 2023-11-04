
async function getData() {
  const response = await fetch("https://api.github.com/users/luiizsilverio/repos");
  return response.json();
}

interface RepoProps {
  id: number;
  name: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  }
}

export default async function Home() {
  const data: RepoProps[] = await getData();
  console.log(data)
  return (
    <main>
      <h1>Página Home</h1>
      <p>Seja bem vindo à página home</p>            
      <h3>Meus repositórios</h3>      

      {data.map(item => (
        <div key={item.id}>
          <a href={item.html_url}>{item.name}</a>
        </div>
      ))}
    </main>
  )
}

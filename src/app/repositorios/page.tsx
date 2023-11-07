import { OwnerRepo } from "@/components/OwnerRepo";

async function delayFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay));
  const response = await fetch(url, { next: { revalidate: 60 } });
  return response.json();
}

async function getData() {
  const data = await delayFetch("https://api.github.com/users/luiizsilverio/repos", 0);
  return data;
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

export default async function Repositorios() {
  const data: RepoProps[] = await getData();

return ( 
    <div>
      <h2>Meus repositórios</h2>      
      {data.map(item => (
        <div key={item.id}>
          <a href={item.html_url}>{item.name}</a>
          <OwnerRepo avatar_url={item.owner.avatar_url} login={item.owner.login} />
        </div>
      ))}
    </div>
  )
}
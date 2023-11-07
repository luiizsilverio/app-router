import { OwnerRepo } from "@/components/OwnerRepo";
import styles from '@/app/repositorios/repo.module.css';
import { formatString } from "@/lib/formatString";

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
  description: string;
  html_url: string;
  created_at: string;
  language: string;
  topics: string[];
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
        <div key={item.id} className={styles.container}>
          <a href={item.html_url}> { item.name }</a>
          <span>Criado em { formatString(item.created_at) }</span>
          <p>{ item.description }</p>
          
          <OwnerRepo 
            avatar_url={item.owner.avatar_url} 
            login={item.owner.login} 
            language={item.language}
            topics={item.topics}
          />
        </div>
      ))}
    </div>
  )
}
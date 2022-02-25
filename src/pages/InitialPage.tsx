import "../styles/style.css";
import { useEffect, useState } from "react";
import { RepositoryItem } from "../components/RepositoryItem";

export default function ListPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [values, setValues] = useState({ repository: "" });

  useEffect(() => {
    fetchRepos();
  }, [values.repository]);

  const fetchRepos = async (user: string) => {
    const repos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=50`
    );

    const data = await repos.json();
    setRepos(data);
  };

  const handleSubmit = () => {
    if (!values.repository) return;
    else if (values.repository == undefined)
      return console.error("Não encontrado");
    fetchRepos(values.repository);
  };

  const inputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <section className="repository-list">
      <h1>Lista dos repositórios do usuário</h1>
      <input
        name="repository"
        onChange={inputChange}
        placeholder="digite o nome do seu usuário"
        value={values.repository}
      />

      <button type="button" onClick={handleSubmit}>
        Buscar
      </button>

      <ul>
        {repos.map((repo) => {
          return <RepositoryItem key={repo.name} repo={repo} />;
        })}
      </ul>
    </section>
  );
}

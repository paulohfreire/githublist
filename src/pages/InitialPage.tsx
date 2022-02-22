import { FormEvent, useState } from "react";
import api from "../services/api";
import "../styles/style.css";

interface User {
  full_name: string;
  description: string;
  user_repositories_url: string;
}

export default function InitialPage() {
  const [user, setUser] = useState("");

  return (
    <div className="page">
      <h1>Explore Repositórios no Github</h1>

      <form action="/list">
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}

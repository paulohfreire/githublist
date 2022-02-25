import { ReactChild, ReactFragment, ReactPortal } from "react";

export function RepositoryItem(props: {
  repo: { name: string; description: string; html_url: string };
}) {
  return (
    <li>
      <strong>{props.repo.name}</strong>
      <p>{props.repo.description}</p>
      <a href={props.repo.html_url}>Acessar repositório</a>
    </li>
  );
}

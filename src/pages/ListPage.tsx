import Counter from "../components/count";

export default function ListPage() {
  return (
    <div>
      <h1>Lista de repositórios</h1>
      <ul>
        <li>Repo 1</li>
        <li>Repo 2</li>
        <li>Repo 3</li>
        <Counter />
      </ul>
    </div>
  );
}

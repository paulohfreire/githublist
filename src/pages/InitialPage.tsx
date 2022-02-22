export default function InitialPage() {
  return (
    <div>
      <h1>Repositórios Github</h1>
      <p>Localize repositórios por usuário</p>
      <input type="text" placeholder="Digite nome de usuário"></input>
      <a href="/list" type="button">
        Pesquisar
      </a>
    </div>
  );
}

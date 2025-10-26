import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  const paco = {userName:"D2_Puntos", initialisFollowing:false}

  return (
    <>
      <div className="App">
        <TwitterFollowCard {... paco}>
          <h2>Paco con puntos</h2>
        </TwitterFollowCard>
        <TwitterFollowCard userName="D3_Roman" initialisFollowing>
          <h2>Roman Myziuk</h2>
        </TwitterFollowCard>
        <TwitterFollowCard >
          Paquito Gomes
        </TwitterFollowCard>
        <TwitterFollowCard userName="D4_Chema" initialisFollowing={false}>
          Chema Maquina
        </TwitterFollowCard>
      </div>
    </>
  );
}

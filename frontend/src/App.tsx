import GameScreen from "./screens/GameScreen";

function App() {
  return <GameScreen map={undefined} gameState={undefined} selfId={null} send={function (type: "input" | "shoot" | "reload" | "leaveMatch", data?: unknown): boolean {
    throw new Error("Function not implemented.");
  } } killFeed={[]} departures={[]} onLeave={function (): void {
    throw new Error("Function not implemented.");
  } } />;
}

export default App;
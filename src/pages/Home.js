import ListCars from "../components/ListCars";
import FormCreatePlayer from "../components/FormCreatePlayer";

export default function Home() {
  return (
    <div className="container-fluid">
      <br/>
      <h1 className="text-center">Juego de carros</h1>
      <div className="container-xxl">
        <FormCreatePlayer />
        <ListCars />
      </div>
    </div>
  );
}

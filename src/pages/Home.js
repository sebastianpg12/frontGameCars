import ListCars from "../components/ListCars";
import FormCreatePlayer from "../components/FormCreatePlayer";
import axios from "axios";


export default function Home() {
  
  function crearp() {
    axios.post("http://localhost:8080/create/player", {
        "playerId": "111111111111111111",
        "name": "434344",
        "firstPlace": 44,
        "secondPlace":44,
        "thirdPlace":44,
        "carId": "4443434"
    }
    )
  }
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

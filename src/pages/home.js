import "../App.scss";
import uvodkaImage from "../assets/images/homepage-uvodka-image.jpg"

export default function Home(){
  return (
    <div className="homepage-container grid grid-cols-5">

        <div className="col-span-5 homepage-nadpis-wrapper bg-green-500 pt-3 pb-1  auto-padding">
          <h1 className="homepage-uvodka-nadpis">Cukrárna & Kavárna Diana</h1>
        </div>
        <div className="col-span-3 homepage-uvodka-wrapper bg-red-500  auto-padding">

        <img src={uvodkaImage} alt="image" />

        </div>
        <div className="col-span-2 homepage-uvodka-wrapper bg-yellow-800  auto-padding">x</div>

    </div>
  )
}
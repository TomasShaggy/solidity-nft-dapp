import "../App.scss";
import uvodkaImage from "../assets/images/homepage-uvodka-image.jpg";
import Gallery from "../components/gallery";

const aboutSekce = [
  {
    id: "prvni",
    nadpis: "Kvalita",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: "druhy",
    nadpis: "Dovoz",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: "treti",
    nadpis: "Suroviny",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    nazev: "active-about-wrapper ",
  },
];

export default function Home() {
  return (
    <>
      <div className="h-28 bg-blue-400"></div>
      <div className="homepage-container min-h-screen grid grid-cols-12 bg-indigo-700">
        <div className="col-span-1 lg:flex hidden"></div>
        <div className="grid grid-cols-5 lg:col-span-10 col-span-12">
          <div className="col-span-5 homepage-nadpis-wrapper bg-green-500 pt-3 pb-1">
            <h1 className="homepage-uvodka-nadpis text-dark-blue">
              Cukrárna & Kavárna Diana
            </h1>
          </div>
          <div className="lg:col-span-3 col-span-5 homepage-uvodka-image-wrapper bg-red-500">
            <img
              src={uvodkaImage}
              alt="uvodka"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-2 col-span-5 homepage-uvodka-text-wrapper bg-yellow-800  text-zleva-stred">
            <h2 className="text-xl">Přijďte ochutnat naše zákusky</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <button className="btn-orange bg-default-orange px-16 py-2 rounded-md text-white">
              Výběr
            </button>
          </div>
        </div>
        <div className="col-span-1 lg:flex hidden"></div>
      </div>
      {/*       x
      x
      x
      x
      x
      x
      x
      x
      x
 */}
      <div className="homepage-about-container min-h-screen bg-red-500 grid grid-cols-12 ">
        <div className="col-span-1 lg:flex hidden"></div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:col-span-10 col-span-12 bg-indigo-100">
          {aboutSekce.map((item) => {
            const { nadpis, id, text, nazev } = item;
            return (
              <div className={id === "treti" ? nazev : "bg-blue-400"} key={id}>
                <h1>{nadpis}</h1>
                <h2>{nazev}</h2>
                <p className="w-2/3">{text}</p>
                <span>___</span>
              </div>
            );
          })}
          <div className="col-span-full about-image-wrapper object-cover">
            <img src={uvodkaImage} alt="aboutImage" className="h-full w-full" />
          </div>
        </div>

        <div className="col-span-1 lg:flex hidden"></div>
      </div>
      <Gallery />
    </>
  );
}

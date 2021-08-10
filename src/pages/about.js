import Title from "../components/title";
import "../App.scss";

export default function About() {
  return (
    <div className="page top-0 left-0 w-full">
      <div className="inner">
        <Title lineContent1="This is the" lineContent2="about page" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            esse, quas eveniet quod saepe mollitia deleniti. Asperiores
            laboriosam cupiditate iste?
          </p>
        </div>
      </div>
    </div>
  );
}

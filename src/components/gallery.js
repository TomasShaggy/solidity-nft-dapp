import dortImage from "../assets/images/dort-gallery.png";
import kafeImage from "../assets/images/kafe-gallery.png";

export default function Gallery() {
  return (
    <div className="homepage-container min-h-screen grid lg:col-span-10 col-span-12 bg-indigo-700">
      <div className="col-span-1 lg:flex hidden"></div>

      <div className="col-span-10 grid lg:grid-cols-5 grid-cols-1 2xl:gap-10 xl:gap-8 lg:gap-6 lg:gap-y-0 gap-y-5  h-auto">
        <div className="col-span-3 gallery-image-wrapper gallery-wrapper-sirka bg-red-900 h-1/3">
          <img src={kafeImage} alt="dort" className="image-gallery-sirka" />
        </div>
        <div className="col-span-2  gallery-image-wrapper gallery-wrapper-vyska bg-gray-700 h-1/3">
          <img src={dortImage} alt="dort" className="image-gallery-vyska" />
        </div>
        {/* 
x
x
x
 */}
        <div className="col-span-2 gallery-image-wrapper gallery-wrapper-vyska bg-gray-700 h-1/3">
          <img src={dortImage} alt="dort" className="image-gallery-vyska" />
        </div>
        <div className="col-span-3 gallery-image-wrapper gallery-wrapper-sirka bg-gray-900 h-1/3">
          <img src={kafeImage} alt="dort" className="image-gallery-sirka" />
        </div>

        {/* 
x
x
x
 */}
        <div className="col-span-3 gallery-image-wrapper gallery-wrapper-sirka bg-gray-900 h-1/3">
          <img src={kafeImage} alt="dort" className="image-gallery-sirka" />
        </div>
        <div className="col-span-2 gallery-image-wrapper gallery-wrapper-vyska bg-gray-700 h-1/3">
          <img src={dortImage} alt="dort" className="image-gallery-vyska" />
        </div>

        <div className="col-span-1 lg:flex hidden"></div>
      </div>
    </div>
  );
}

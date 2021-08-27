export default function Footer() {
  return (
    <div className="container-footer lg:px-0 md:px-8 px-4 grid grid-cols-12 bg-dark-blue ">
      <div className="col-span-1 lg:flex hidden"></div>

      <div className="lg:col-span-10 col-span-12">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="footer-nadpis-wrapper lg:col-span-2  py-4">
            <h2 className="dancing-nadpis footer-nadpis text-default-orange lg:text-left text-center">
              Přijďte ochutnat naše zákusky
            </h2>
          </div>
          <div className="0 col-span-1 lg:text-left text-center footer-doba-wrapper text-footer lg:py-2 py-6 ">
            <ul>
              <li>Pondělí - Pátek: 9:00 - 18:00</li>
              <li>Sobota: 10:00 - 15:00</li>
              <li>Neděle: Zavřeno</li>
            </ul>
          </div>
          <div className=" col-span-1 lg:text-right text-center text-footer lg:py-2 py-6 ">
            <ul>
              <li>email: cukrarna@email.cz</li>
              <li>telefonní číslo: 738 495 194</li>
              <li>adresa: Na Hrádku 38, Tišnov 666 01</li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-1 ">
          <div className=" lg:col-span-1 md:col-span-2 col-span-1 pt-8 pb-4 text-footer-smaller md:text-left text-center text-dark-white">
            Cukrárna Diana & All rights reserved 2021
          </div>
          <div className=" col-span-1 pt-8 pb-4 text-footer-smaller md:text-right text-center text-default-orange ">
            <a href="facebook.com" className="md:pr-6 md:px-0 px-3">
              Facebook
            </a>
            <a href="instagram.com" className="md:px-0 px-3">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:flex hidden"></div>
    </div>
  );
}

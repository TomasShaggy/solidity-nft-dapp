export default function Footer() {
  return (
    <div className="container-footer grid grid-cols-12">
      <div className="col-span-1 lg:flex hidden"></div>

      <div className="grid grid-cols-2 lg:col-span-10 col-span-12">
        <div className="footer-nadpis-wrapper col-span-2 bg-blue-700 h-12">
          <h2>Přijďte ochutnat naše zákusky</h2>
        </div>
        <div className="bg-red-500 col-span-1 h-20">x</div>
        <div className="bg-red-300 col-span-1 h-20">x</div>
      </div>

      <div className="col-span-1 lg:flex hidden"></div>
    </div>
  );
}

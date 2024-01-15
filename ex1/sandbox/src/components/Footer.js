function Footer(){
  const date = new Date();
  return (
    <div className="fixed-bottom mb-3">
      Crée par Anthony KLEIN en {date.getFullYear()}
    </div>
  );
}

function FooterBis(){
  return (
    <div>
      Crée par Anthony KLEIN en 2024  !!!
    </div>
  );
}
function FooterBisBis(){
  return (
    <div>
      Crée par Anthony KLEIN en 2024  !!!
    </div>
  );
}

export {FooterBis, FooterBisBis};

export default Footer;
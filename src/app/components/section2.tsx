import Image from "next/image";

import CountdownAlert from "./countdown";
import Form from "./form";

function Section2() {
  const promoImg = "/img/promo.gif";

  return (
    <section className="card">
      <Image
        className="banner"
        src={promoImg}
        width={700}
        height={127}
        alt="data"
      />

      <span>3,003,813</span>

      <h1>BOX TERJUAL SELURUH INDONESIA</h1>
      <CountdownAlert />

      <h2>
        Karena melonjaknya pesanan tiap hari, kami mengutamankan pembeli yang
        mengisi form
      </h2>
      <Form />

      <a href="#/img/LP-ADV-SATYA-16.webp" className="btn-red">
        CHECK HARGA
      </a>
    </section>
  );
}

export default Section2;

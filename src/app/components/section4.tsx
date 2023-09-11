import Image from "next/image";

function Section4() {
  const banners = [
    { url: "/img/LP-ADV-SATYA-03.webp", width: 700, heigth: 981 },
    { url: "/img/LP-ADV-SATYA-04.webp", width: 700, heigth: 682 },
    { url: "/img/LP-ADV-SATYA-05.webp", width: 700, heigth: 843 },
    { url: "/img/LP-ADV-SATYA-06.webp", width: 700, heigth: 775 },
    { url: "/img/LP-ADV-SATYA-07.webp", width: 700, heigth: 867 },
    { url: "/img/LP-ADV-SATYA-08.webp", width: 700, heigth: 834 },
    { url: "/img/LP-ADV-SATYA-09.webp", width: 700, heigth: 709 },
    { url: "/img/LP-ADV-SATYA-REVISI-10.webp", width: 700, heigth: 866 },
    { url: "/img/LP-ADV-SATYA-REVISI-11.webp", width: 700, heigth: 484 },
    { url: "/img/LP-ADV-SATYA-10.webp", width: 700, heigth: 1628 },
    { url: "/img/LP-ADV-SATYA-11.webp", width: 700, heigth: 1067 },
    { url: "/img/LP-ADV-SATYA-12.webp", width: 700, heigth: 1010 },
    { url: "/img/LP-ADV-SATYA-13.webp", width: 700, heigth: 1037 },
    { url: "/img/LP-ADV-SATYA-REVISI-16.webp", width: 700, heigth: 946 },
    { url: "/img/LP-ADV-SATYA-15.webp", width: 700, heigth: 838 },
    { url: "/img/LP-ADV-SATYA-16.webp", width: 700, heigth: 581 },
    { url: "/img/LP-ADV-SATYA-17.webp", width: 700, heigth: 389 },
    { url: "/img/LP-ADV-SATYA-18.webp", width: 700, heigth: 390 },
  ];
  return (
    <>
      {banners.map((data, index) => (
        <Image
          id={data.url}
          className="banner"
          key={index}
          src={data.url}
          width={data.width}
          height={data.heigth}
          alt="data"
        />
      ))}
    </>
  );
}

export default Section4;

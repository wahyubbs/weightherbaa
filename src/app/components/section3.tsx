import Image from "next/image";

function Section3() {
  const bannersBottoms = [
    { url: "/img/LP-ADV-SATYA-REVISI-21.webp", width: 700, heigth: 1043 },
    { url: "/img/LP-ADV-SATYA-20.webp", width: 700, heigth: 1417 },
    { url: "/img/LP-ADV-SATYA-21.webp", width: 700, heigth: 225 },
    { url: "/img/LP-ADV-SATYA-REVISI-24.webp", width: 700, heigth: 760 },
    { url: "/img/LP-ADV-SATYA-23.webp", width: 700, heigth: 411 },
  ];

  return (
    <>
      {bannersBottoms.map((data, index) => (
        <Image
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

export default Section3;

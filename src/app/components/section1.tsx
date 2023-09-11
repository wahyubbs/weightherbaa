import Image from "next/image";

function Section1() {
  const data = { url: "/img/LP-ADV-SATYA-02.webp", width: 700, heigth: 893 };

  return (
    <Image
      id={data!.url}
      className="banner"
      loading="eager"
      src={data!.url}
      width={data!.width}
      height={data!.heigth}
      alt="data"
    />
  );
}

export default Section1;

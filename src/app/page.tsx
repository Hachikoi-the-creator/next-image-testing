// Thing franco was talking about
// https://nextjs.org/docs/app/api-reference/components/image#devicesizes
import Image from "next/image";
import bubble from "~/img/bubble.jpg";
import cannon from "~/img/cannon.jpg";
import forest from "~/img/forest.jpg";
import sky from "~/img/sky.jpg";

const imagesArr = [bubble, cannon, forest, sky];

import buySvg from "~/img/svgs/buy.svg";
import rentSvg from "~/img/svgs/rent.svg";
import searchSvg from "~/img/svgs/search.svg";
import sellSvg from "~/img/svgs/sell.svg";

const svgsArr = [buySvg, rentSvg, searchSvg, sellSvg];

export default function HomePage() {
  return (
    <main className="mx-16">
      <h1 className="mb-5">Image Testing</h1>
      <h2>Using parent width & height</h2>
      <section className="grid grid-cols-2 md:grid-cols-3 max-w-5xl py-5">
        {imagesArr.map((img, i) => (
          <div className="relative w-full h-52" key={i}>
            <Image
              src={img}
              alt="cool image"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
        ))}
      </section>

      <h2>Fixed W & H</h2>
      <section className="flex flex-wrap">
        {svgsArr.map((img, i) => (
          <Image src={img} key={i} alt="cool image" width={30} height={30} />
        ))}
      </section>
    </main>
  );
}

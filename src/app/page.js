import Image from "next/image";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Card from "@/components/Card";
import Mpp from "@/components/Mpp";
import Faq from "@/components/Faq";
// import BasicDemo from "@/utilities/accordiun";

export default function Home() {
  return (
    <main className="">

      <Hero />
      <Categories />
      {/* <Card /> */}
      <Mpp />
      <Faq />
      {/* <BasicDemo /> */}

    </main>
  );
}

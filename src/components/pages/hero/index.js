import Image from "next/image";
import Style from "./index.module.scss";
import InfiniteText from "@/components/animation/infiniteText";

const Index = () => {
  return (
    <section className={Style.hero}>
      <div className={`container flex flex-col ${Style.container}`}>
        <div className={Style.containerText}>
          <h1>Farhan Agung Maulana</h1>
          <InfiniteText
            content="Experienced Full-Stack Developer | Expert in PHP, Laravel, and React
            JS | Web Development Enthusiast"
          />
        </div>
        <div className={Style.containerImg}>
          <Image
            src={"https://picsum.photos/seed/picsum/800/500"}
            fill={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;

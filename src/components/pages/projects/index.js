import Image from "next/image";
import Style from "./index.module.scss";

let cardData = [
  {
    image: "https://picsum.photos/seed/picsum/800/500",
    title: "Olin",
    description: `Olin is a website application used to disseminate information by
          blasting method by utilizing several platforms such as SMS, Email, and
          Whatsapp. As a Fullstack developer who is responsible for slicing and
          creating logic in the data bank module to accommodate prospect data
          used as blasting targets. The development process uses CodeIgniter as
          a framework and optimizes the cron function as a process of inputting
          millions of data behind the scenes.`,
    stacks: ["PHP", "CodeIgniter", "MySQL"],
  },
  {
    image: "https://picsum.photos/seed/picsum/800/500",
    title: "Olin",
    description: `Olin is a website application used to disseminate information by
          blasting method by utilizing several platforms such as SMS, Email, and
          Whatsapp. As a Fullstack developer who is responsible for slicing and
          creating logic in the data bank module to accommodate prospect data
          used as blasting targets. The development process uses CodeIgniter as
          a framework and optimizes the cron function as a process of inputting
          millions of data behind the scenes.`,
    stacks: ["PHP", "CodeIgniter", "MySQL"],
  },
  {
    image: "https://picsum.photos/seed/picsum/800/500",
    title: "Olin",
    description: `Olin is a website application used to disseminate information by
          blasting method by utilizing several platforms such as SMS, Email, and
          Whatsapp. As a Fullstack developer who is responsible for slicing and
          creating logic in the data bank module to accommodate prospect data
          used as blasting targets. The development process uses CodeIgniter as
          a framework and optimizes the cron function as a process of inputting
          millions of data behind the scenes.`,
    stacks: ["PHP", "CodeIgniter", "MySQL"],
  },
];

const Index = () => {
  return (
    <section className={Style.project}>
      <p>My Top 3</p>
      <h2>Projects</h2>
      <div className={Style.containerCard}>
        {cardData.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Index;

const Card = (data) => {
  let value = data.data;

  return (
    <div className={Style.item}>
      <div className={Style.containerImage}>
        <Image src={value?.image} fill={true} />
      </div>
      <div className={Style.containerText}>
        <h2>{value?.title}</h2>
        <p>{value?.description}</p>
        <p>Skillset : {value?.stacks.map((item) => item)}</p>
      </div>
    </div>
  );
};

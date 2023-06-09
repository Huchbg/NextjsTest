import { Hero } from "../sections"

const heroProps = {
  image: { src: "/img/video.png", alt: "", width: 500, height: 840 },
  titleM: "Managed agency selection",
  titleS: "Stengthen your onboarding process",
  cards: [
    {
      title: "Brief",
      Bold: " brief writing or simple guidance ",
      Text:"Complete brief writing or simple guidance on what to include,we've got you covered.",
      variant: "small",
      image: { src: "/img/payment.png", alt: "img", width: 50, height: 50 },
    },
    {
      title: "Search",
      Bold: " criteria matching",
      Text:"In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
      variant: "medium",
      image: {
        src: "/img/presentation.png",
        alt: "img",
        width: 50,
        height: 50,
      },
    },
    {
      title: "Pitch",
      Bold: " pitch management, ",
      Text:"Comprehensive pitch management, including comms, diary management and pitch hosting.",
      variant: "big",
      image: { src: "/img/work.png", alt: "img", width: 50, height: 50 },
    },
  ],
  bgimage: "/img/background.png",
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
      </div>
    </>
  )
}

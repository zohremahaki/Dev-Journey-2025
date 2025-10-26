import styled from "styled-components";
import Card from "./Card";

const Container = () => {
  const users = [
    {
      id: 1,
      fullName: "Zohre Mahaki",
      job: "Front-End Developer",
      text1: "Coding with coffee ☕ and creativity",
      text2: "Always learning, always growing",
      text3: " Turning ideas into reality",
      src: "images/profile.jpg",
      alt: "Z",
      linkedin: "https://www.linkedin.com/in/zohre-mahaki",
      email: "zohreh.mahaki@gmail.com",
      github: "https://github.com/zohremahaki",
      url: "images/image2.jpg",
    },
    {
      id: 2,
      fullName: "Ali Rezaei",
      job: "Back-End Developer",
      text1: "Building robust APIs 🖥️",
      text2: "Passionate about databases",
      text3: "Optimizing code for performance",
      alt: "A",
      linkedin: "https://www.linkedin.com/in/ali-rezaei",
      email: "ali.rezaei@gmail.com",
      github: "https://github.com/alirezaei",
      url: "images/image4.jpg",
    },
    {
      id: 3,
      fullName: "Sara Ahmadi",
      job: "UI/UX Designer",
      text1: "Designing user-friendly interfaces 🎨",
      text2: "Focusing on user experience",
      text3: "Creating intuitive designs",
      src: "images/profile2.jpg",
      alt: "S",
      linkedin: "https://www.linkedin.com/in/sara-ahmadi",
      email: "sara.ahmadi@gmail.com",
      github: "https://github.com/saraahmadi",
      url: "images/image2.jpg",
    },
  ];
  const Div = styled.div`
    width: 80rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 0 auto;

    /* موبایل */
    @media (max-width: 768px) {
      width: 100%;
      grid-template-columns: 1fr;
    }
  `;
  return (
    <Div>
      {users.map((user) => {
        return (
          <Card
          key={user.id}
            name={user.fullName}
            job={user.job}
            text1={user.text1}
            text2={user.text2}
            text3={user.text3}
            src={user.src}
            alt={user.alt}
            likdin={user.likdin}
            email={user.email}
            url={user.url}
          />
        );
      })}
    </Div>
  );
};

export default Container;

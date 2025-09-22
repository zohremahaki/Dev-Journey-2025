import styled from "styled-components";
import Cardinfo from "./Cardinfo";
import ProfileImage from "./ProfileImage";
import UserContact from "./UserContact";
import UserInfo from "./UserInfo";

const CardCountainer = styled.div`
  width: 25rem;
  height: 40rem;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 50rem;
  margin: 9rem auto;
  position: relative;
`;

const Card = (props) => {
  return (
    <CardCountainer bg={props.url}>
      <Cardinfo>
        <ProfileImage alt={props.alt} src={props.src} />
        <UserInfo
          name={props.name}
          job={props.job}
          text1={props.text1}
          text2={props.text2}
          text3={props.text3}
        />
      </Cardinfo>
      <UserContact
        linkdin={props.linkdin}
        name={props.name}
        email={props.email}
        github={props.github}
      />
    </CardCountainer>
  );
};

export default Card;

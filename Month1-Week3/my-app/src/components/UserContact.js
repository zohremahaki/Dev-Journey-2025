import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // آیکون جیمیل از مجموعه simple-icons

import styled from "styled-components";
const Container = styled.div`
  width: 20rem;
  height: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  top: 85%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  background-color: #f9f9f9;
`;

const SocialLinks = styled.a`
  text-decoration: none;
  color: black;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  // gap: 5px;
  justify-content: center;
  &:hover {
    color: #0077b5;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

const UserContact = (props) => {
  return (
    <Container>
      <SocialLinks
        href={props.linkdin}
        target="_blank"
      >
        <FaLinkedin size={10} color="#0077B5" /> {props.name}
      </SocialLinks>

      <SocialLinks>
        <SiGmail size={10} color="#D14836" /> {props.email}
      </SocialLinks>

      <SocialLinks href={props.github} target="_blank">
        <FaGithub size={10} color="#333" /> {props.name}
      </SocialLinks>
    </Container>
  );
};

export default UserContact;

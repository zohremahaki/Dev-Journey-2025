import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // آیکون جیمیل از مجموعه simple-icons

import styled from "styled-components";
const Container = styled.div`
  width: 20rem;
  height: 2rem;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
`;

const SocialLinks = styled.a`
  text-decoration: none;
  color: black;
  font-size: 8px;
  font-weight: 500;
`;

const ContactInfo = () => {
  return (
    <Container>
      <SocialLinks
        href="https://www.linkedin.com/in/zohre-mahaki"
        target="_blank"
      >
        <FaLinkedin size={10} color="#0077B5" /> zohre mahaki
      </SocialLinks>

      <SocialLinks>
        <SiGmail size={10} color="#D14836" /> zohreh.mahaki@gmail
      </SocialLinks>

      <SocialLinks href="https://github.com/zohremahaki" target="_blank">
        <FaGithub size={10} color="#333" /> zohre mahaki
      </SocialLinks>
    </Container>
  );
};

export default ContactInfo;

import styled from "styled-components";

const BgImg = styled.div`
  height: 10rem;
  width: 10rem;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #f1eaea;
  color: darkblue;
  position: absolute;
  top: -15%;
  left: 30%;
`;
const Image = styled.img`
  height: 9.5rem;
  width: 9.5rem;
  border-radius: 50%;
   position: absolute;
  top: 2.5%;
  left: 2.5%;
`;
const BackgroundImg = () => {
  return (
    <BgImg>
      <Image src="/images/profile.jpg" alt="Profile Image" />
    </BgImg>
  );
};

export default BackgroundImg;

import styled from "styled-components";

const BgImg = styled.div`
  height: 8rem;
  width: 8rem;
  border: 3px solid #999;
  border-radius: 50%;
  background-color: #f1eaea;
  color: darkblue;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); /* نیمه بالاش بیرون، نیمه پایینش داخل */

  display: flex; /* برای وسط‌چین کردن عکس */
  align-items: center;
  justify-content: center;
  overflow: hidden; /* تا عکس از دایره بیرون نزنه */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const Span = styled.span`
  color: #000;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  position: absolute;
`;

const ProfileImage = (props) => {
  return (
    <BgImg>
      <Image src={props.src} alt={props.alt} />
      <Span>{!props.src && props.alt}</Span>
    </BgImg>
  );
};

export default ProfileImage;

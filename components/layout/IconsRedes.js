import Link from 'next/link';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

const IconsRedes = ({ size = 20 }) => {
  return (
    <>
      <AiIcons.AiFillGithub
        style={{ marginRight: '1rem' }}
        color="white"
        size={size}
      />
      <AiIcons.AiFillLinkedin
        style={{ marginRight: '1rem' }}
        color="white"
        size={size}
      />
      <AiIcons.AiFillInstagram
        style={{ marginRight: '1rem' }}
        color="white"
        size={size}
      />
    </>
  );
};

export default IconsRedes;

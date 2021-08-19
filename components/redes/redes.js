import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';

export const redes = [
  {
    url: 'https://github.com/DeveloperAlexRamirez',
    target: '_blank',
    icon: (
      <AiIcons.AiFillGithub
        size={20}
        style={{ marginRight: '1rem' }}
        color="white"
      />
    ),
  },

  {
    url: 'https://www.linkedin.com/in/alejandro-ramirez-rodriguez/',
    target: '_blank',
    icon: (
      <AiIcons.AiFillLinkedin
        size={20}
        style={{ marginRight: '1rem' }}
        color="white"
      />
    ),
  },

  {
    url: '',
    target: '_blank',
    icon: (
      <AiIcons.AiFillInstagram
        size={20}
        style={{ marginRight: '1rem' }}
        color="white"
      />
    ),
  },
];

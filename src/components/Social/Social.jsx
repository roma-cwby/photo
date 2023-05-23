import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { SiMaildotru } from 'react-icons/si';

export const Social = ({ Class }) => {
  return (
    <div className={Class}>
      <a
        className="social"
        target="_blank"
        rel="noreferrer"
        href="https://instagram.com/leyliant_ph?igshid=OGQ5ZDc2ODk2ZA=="
      >
        <BsInstagram />
      </a>
      <a className="social" target="_blank" rel="noreferrer" href="https://t.me/leyli_ant">
        <BsTelegram />
      </a>
      <a
        className="social"
        target="_blank"
        rel="noreferrer"
        href="mailto:lilia.antoliak.18@gmail.com"
      >
        <SiMaildotru />
      </a>
    </div>
  );
};

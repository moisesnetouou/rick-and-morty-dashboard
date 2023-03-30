import Image from 'next/image';
import { AsideContainer } from './styles';
import logoImg from '../../../public/assets/images/rick-and-morty-logo.png';

export function Aside() {
  return (
    <AsideContainer>
      <div>
        <Image src={logoImg} alt="logo rick and morty" width={280} />

        <div>
          <h2>Dashboard</h2>
          <h2>Personagens</h2>
          <h2>Episódios</h2>
        </div>
      </div>
    </AsideContainer>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { AsideContainer } from './styles';
import logoImg from '../../../public/assets/images/rick-and-morty-logo.png';

export function Aside() {
  return (
    <AsideContainer>
      <div>
        <Image src={logoImg} alt="logo rick and morty" width={280} />

        <div>
          <Link href="/">Dashboard</Link>
          <Link href="/characters">Personagens</Link>
        </div>
      </div>
    </AsideContainer>
  );
}

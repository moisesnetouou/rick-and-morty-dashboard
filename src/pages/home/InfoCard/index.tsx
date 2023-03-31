/* import { Feather } from '@phosphor-icons/react'; */
import { HiUsers } from 'react-icons/hi';
import { InfoCardContainer } from './styles';

interface InfoCardProps {
  text: string;
  value: string | number | undefined;
  subValue?: string | undefined;
  grid: string;
}

export function InfoCard({ text, value, subValue, grid }: InfoCardProps) {
  return (
    <InfoCardContainer className={grid}>
      <div>
        <HiUsers size={32} />

        <span>{text}</span>
      </div>

      <h2>
        {value}
        {subValue && <span>/{subValue}</span>}
      </h2>
    </InfoCardContainer>
  );
}

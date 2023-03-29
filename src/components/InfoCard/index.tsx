import { Feather } from '@phosphor-icons/react';

import { InfoCardContainer } from './styles';

interface InfoCardProps {
  text: string;
  value: string | undefined;
  grid: string;
}

export function InfoCard({ text, value, grid }: InfoCardProps) {
  return (
    <InfoCardContainer className={grid}>
      <div>
        <Feather size={32} />

        <span>{text}</span>
      </div>

      <h2>{value}</h2>
    </InfoCardContainer>
  );
}

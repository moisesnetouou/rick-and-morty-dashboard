import { Feather } from '@phosphor-icons/react';

import { InfoCardContainer } from './styles';

interface InfoCardProps {
  text: string;
  value: string;
}

export function InfoCard({ text, value }: InfoCardProps) {
  return (
    <InfoCardContainer>
      <div>
        <Feather size={32} />

        <span>{text}</span>
      </div>

      <h2>{value}</h2>
    </InfoCardContainer>
  );
}

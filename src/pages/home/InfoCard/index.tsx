import { ReactNode } from 'react';
import { InfoCardContainer } from './styles';

interface InfoCardProps {
  text: string;
  value: string | number | undefined;
  subValue?: string | undefined;
  grid: string;
  children: ReactNode;
}

export function InfoCard({
  text,
  value,
  subValue,
  grid,
  children,
}: InfoCardProps) {
  return (
    <InfoCardContainer className={grid}>
      <div>
        {children}

        <span>{text}</span>
      </div>

      <h2>
        {value}
        {subValue && <span>/{subValue}</span>}
      </h2>
    </InfoCardContainer>
  );
}

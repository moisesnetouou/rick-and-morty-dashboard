import { ReactNode } from 'react';
import { Aside } from '@/components/Aside';
import { LayoutContainer } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Aside />

      <main>{children}</main>
    </LayoutContainer>
  );
}

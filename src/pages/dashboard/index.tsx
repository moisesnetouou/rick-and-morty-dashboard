import { GridInfoCard } from './GridInfoCard';
import { DashboardContainer, DashboardContent } from './styles';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardContent>
        <h1>Dashboard</h1>

        <span>Acompanhe os dados atualizados desse vasto multiverso</span>
      </DashboardContent>

      <GridInfoCard />
    </DashboardContainer>
  );
}

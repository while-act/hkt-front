import { CostsMenu } from '@/app/components/costsMenu';
import { Map } from '@/app/components/map';
import { CostsLayout } from '@/app/components/layouts/CostsLayout/CostsLayout';

export default function Costs() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <CostsMenu />
      <CostsLayout>
        <Map />
      </CostsLayout>
    </div>
  );
}

import { CostsMenu } from '@/app/components/costsMenu';
import { Map } from '@/app/components/map';

export default function Costs() {
  return (
    <div style={{ display: 'flex' }}>
      <CostsMenu />
      <Map />
    </div>
  );
}

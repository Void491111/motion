import { Composition } from 'remotion';
import { TaxPromo } from './components/TaxPromo';
import { VIDEO } from './config/video';

export function RemotionRoot() {
  return <Composition id="TaxPromo" component={TaxPromo} {...VIDEO} />;
}
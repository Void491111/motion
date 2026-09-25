import { AbsoluteFill, Sequence } from 'remotion';
import { SCENES } from '../config/timeline';
import { SCENE_COMPONENTS } from './sceneRegistry';
import { ScenePlaceholder } from '../components/ScenePlaceholder';
import { COLORS } from '../config/theme';
import { INTER } from '../config/fonts';

export function TaxPromo() {
  return (
    <AbsoluteFill style={{ background: COLORS.primary, fontFamily: INTER }}>
      {SCENES.map(function renderScene(scene) {
        const Scene = SCENE_COMPONENTS[scene.id];
        return (
          <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
            {Scene ? <Scene duration={scene.duration} /> : <ScenePlaceholder label={scene.id} />}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}
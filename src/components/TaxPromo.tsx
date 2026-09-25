import { AbsoluteFill, Sequence } from 'remotion';
import { SCENES } from '../config/timeline';
import { COLORS } from '../config/theme';
import { INTER } from '../config/fonts';

export function TaxPromo() {
  return (
    <AbsoluteFill style={{ background: COLORS.primary, fontFamily: INTER }}>
      {SCENES.map(function renderScene(scene) {
        return (
          <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', color: COLORS.accent, fontSize: 80, fontWeight: 800 }}>
              {scene.id}
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}
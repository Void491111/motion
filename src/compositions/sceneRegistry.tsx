import type { FC } from 'react';
import { RevenueScene } from '../scenes/RevenueScene';
import { CutScene } from '../scenes/CutScene';
import { RentingScene } from '../scenes/RentingScene';

export const SCENE_COMPONENTS: Partial<Record<string, FC<{ duration: number }>>> = {
  revenue: RevenueScene,
  cut: CutScene,
  renting: RentingScene,
};

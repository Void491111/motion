import type { FC } from 'react';
import { RevenueScene } from '../scenes/RevenueScene';

export const SCENE_COMPONENTS: Partial<Record<string, FC<{ duration: number }>>> = {
  revenue: RevenueScene,
};
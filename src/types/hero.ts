import { type FeatureItem, type HeroAction } from '@ayahub/ui';

export type ImageContainerType = 'light' | 'primary' | 'soon';

export interface HeroConfig {
  actions: HeroAction[];
  description?: string;
  features?: FeatureItem[];
  title?: string;
}

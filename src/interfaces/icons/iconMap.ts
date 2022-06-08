import { SvgVercel } from './svg/vercel';

export const iconMap = {
  'vercel': SvgVercel,
};

export type IconMap = typeof iconMap;
export type IconName = keyof IconMap;

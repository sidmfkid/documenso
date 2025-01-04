import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const Logo = ({ ...props }: LogoProps) => {
  return <img src="/static/shairewhite.webp" alt="Shaire Logo" {...props} />;
};

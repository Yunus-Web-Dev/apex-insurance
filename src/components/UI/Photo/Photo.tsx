import type { FC, ImgHTMLAttributes } from 'react';

interface PhotoProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const Photo: FC<PhotoProps> = ({ src, alt, className = '', ...rest }) => {
  return <img src={src} alt={alt} className={className} {...rest} />;
};

export default Photo;

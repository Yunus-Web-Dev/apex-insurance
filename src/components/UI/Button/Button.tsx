import React from 'react';

interface Icon {
  src: string;
  alt: string;
  className?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icons?: Icon[]; // Иконки до children, если нужно
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ icons = [], className = '', children, ...rest }) => {
  return (
    <button className={className} {...rest}>
      {icons.map((icon, idx) => (
        <img key={idx} src={icon.src} alt={icon.alt} className={icon.className || ''} />
      ))}
      {children}
    </button>
  );
};

export default Button;

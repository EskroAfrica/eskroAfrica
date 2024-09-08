export interface ButtonProps {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
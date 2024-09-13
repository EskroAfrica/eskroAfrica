export interface ButtonProps {
    text: string;
    className?: string;
    // onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    isLoading?: boolean
  }
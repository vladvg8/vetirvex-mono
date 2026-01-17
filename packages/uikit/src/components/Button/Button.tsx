import { ReactNode, memo } from 'react';
import classes from './Button.module.css';
import { clsx } from 'clsx';

interface IButtonProps {
  children: ReactNode;
  onClick: VoidFunction;
  className?: string;
  disabled?: boolean;
}

const Button = memo<IButtonProps>(
  ({ children, onClick, className, disabled }) => {
    return (
      <button
        className={clsx(
          classes.button,
          className,
          disabled && classes.disabled
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export { Button };

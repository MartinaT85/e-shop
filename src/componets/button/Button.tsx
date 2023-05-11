import {ComponentPropsWithoutRef,  ReactNode} from 'react'
// PropsWithChildren
import "./button.styles.scss";




interface ButtonProps extends ComponentPropsWithoutRef<'button'>  {
  buttonType: BUTTON_TYPE_CLASSES,
  children?: ReactNode,
  
  
}


//  PropsWithChildren<ButtonProps> problems ...otherProps


// type ButtonProps = {
//   buttonType: BUTTON_TYPE_CLASSES, 
//   // ??
//   onClick: () => void,
// }



export enum BUTTON_TYPE_CLASSES  {
  google = "google-sign-in",
  inverted = "inverted",
} ;

// type BUTTON_TYPE_2 = 'google-sign-in2' | 'inverted'


const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`button-container ${buttonType}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

import {ComponentPropsWithoutRef} from 'react'
import "./formInput.styles.scss";

// type FormInputProps = {
//   label: string,
//   forLabel: string,
// }


//  using type instead of extended interface results in problems with other props ...otherProps


interface FormInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string,
  forLabel: string,
}


const FormInput = ({ label, forLabel, ...otherProps }: FormInputProps) => {
  return (
    <div className="group">
      <label htmlFor={forLabel}>{label}</label>
      <input {...otherProps} className="form-input" />
    </div>
  );
};

export default FormInput;

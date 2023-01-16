import "./formInput.styles.scss";

const FormInput = ({ label, forLabel, ...otherProps }) => {
  return (
    <div className="group">
      <label htmlFor={forLabel}>{label}</label>
      <input {...otherProps} className="form-input" />
    </div>
  );
};

export default FormInput;

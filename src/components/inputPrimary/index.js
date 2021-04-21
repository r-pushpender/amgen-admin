import {Input} from "antd";
// Styles
import "./styles.scss";

function InputPrimary({
  field, // { name, value, onChange, onBlur }
  //form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  return (
    <div className={`input-style ${props.inputStyle}`}>
      <div className={`label-style ${props.labelStyle}`}>{props.label}</div>
      <Input placeholder={props.placeholder} {...field} />
      <p className={props.errorClass}>{props.error}</p>
    </div>
  );
}

export default InputPrimary;

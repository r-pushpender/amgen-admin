import {Input} from "antd";
// Styles
import "./styles.scss";

function InputPrimary(props) {
  return (
    <div className={`input-style ${props.inputStyle}`}>
      <div className={`label-style ${props.labelStyle}`}>{props.label}</div>
      <Input placeholder={props.placeholder} />
      <p className={props.errorClass}>{props.error}</p>
    </div>
  );
}

export default InputPrimary;

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
      {props.type === "textarea" ? (
        <div>
          <textarea
            row={props.row}
            column={props.column}
            placeholder={props.placeholder}
            type={props.type}
            {...field}
          />


        </div>
      ) : (
        <div>
          <input
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            {...field}
          />
        </div>
      )}
      <p className={props.errorClass}>{props.error}</p>
    </div>
  );
}

export default InputPrimary;

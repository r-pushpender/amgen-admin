// Styles
import "./styles.scss";

function InputPrimary({
  field, // { name, value, onChange, onBlur } For future use.
  //form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc. For future user, no not delete.
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
            {...field} //This has the props I pass from parent
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

// Styles
import "./styles.scss";

function InputPrimary(props) {
  return (
    <div className={`input-style ${props.inputStyle}`}>
      <div className={`label-style ${props.labelStyle}`}>{props.lable}</div>
      {props.type === "textarea" ? (
        <textarea
          row={props.row}
          column={props.column}
          placeholder={props.placeholder}
          type={props.type}
        />
      ) : (
        <input
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
        />
      )}
      <p className={props.errorClass}>{props.error}</p>
    </div>
  );
}

export default InputPrimary;

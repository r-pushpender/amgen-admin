// Styles
import "./styles.scss";

function SelectPrimary(props) {
  return (
    <div className={`select-style ${props.inputStyle}`}>
      <div className={`label-style ${props.labelStyle}`}>{props.lable}</div>

      <div className="select-custom">
        <select name={props.field}>
          {props.options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <p className={props.errorClass}>{props.error}</p>
    </div>
  );
}

export default SelectPrimary;

// Styles
import "./styles.scss";

function ButtonPrimary(props) {
  return (
    <div className={`button-style ${props.btnStyle}`}>
      <button type="button" className={`btn ${props.color}`}>
        {props.title}
      </button>
    </div>
  );
}

export default ButtonPrimary;

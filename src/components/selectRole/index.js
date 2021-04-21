// Styles
import "./styles.scss";

function SelectRole(props) {
  return (
    <div className={`select-role-style ${props.selectedRole}`}>
      <div className="mb--15">
        <div className="icon-style">{props.icon}</div>
        <h5 className="title5">{props.title}</h5>
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default SelectRole;

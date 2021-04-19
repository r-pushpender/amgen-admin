// Styles
import { Form } from "react-bootstrap";
import "./styles.scss";

function CheckboxPrimary(props) {
  return (
    <div className={`checkbox-style ${props.checkboxStyle}`}>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={props.label} />
      </Form.Group>
    </div>
  );
}

export default CheckboxPrimary;

import { Label, Input } from "reactstrap";
import {label,type,meta} from "./components/crudOperation/EditPost"
import {value} from "./components/crudOperation/index"
export const renderTextField = ({
    input,
    label,
    type,
    value,
    meta: { touched, error, warning },
    custom,
  }) => (
    <div>
      <Label>{label}</Label>
      <div>
        <Input {...input} value={input.value} placeholder={label} type="text" />
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
import { Label, Input } from "reactstrap";
import {label,type,meta} from "./components/crudOperation/EditPost"

export const renderTextField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
    custom,
  }) => (
    <div>
      <Label>{label}</Label>
      <div>
        <Input {...input} placeholder={label} type="text" />
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
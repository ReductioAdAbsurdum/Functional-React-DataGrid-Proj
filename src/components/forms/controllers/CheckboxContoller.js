import { Controller } from "react-hook-form";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

const CheckboxController = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          control={
            <Checkbox
              onChange={onChange}
              value={value}
              defaultChecked={props.defaultValue}
            />
          }
          label={props.labelText}
        />
      )}
    />
  );
};

export default CheckboxController;

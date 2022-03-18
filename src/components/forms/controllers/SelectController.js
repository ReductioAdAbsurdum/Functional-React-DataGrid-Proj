import { Controller } from "react-hook-form";
import { Select } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";

const SelectController = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field: { onChange, value } }) => (
          <FormControlLabel
            control={
              <Select
                autoWidth
                id={props.selectId}
                value={value ?? ""}
                label={props.label}
                onChange={onChange}
              >
                {props.children}
              </Select>
            }
            label={props.labelText}
          />
        )}
      />
    </div>
  );
};

export default SelectController;

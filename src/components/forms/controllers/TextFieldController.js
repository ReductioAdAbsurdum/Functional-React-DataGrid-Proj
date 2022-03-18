import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const TextFieldController = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={props.labelText}
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          type={props.type}
        />
      )}
      rules={props.rules}
    />
  );
};

export default TextFieldController;

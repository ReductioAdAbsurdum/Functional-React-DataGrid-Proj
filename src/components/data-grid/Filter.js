import { TextField } from "@material-ui/core";
import { useEffect, useRef } from "react";

const Filter = (props) => {
    const textFieldRef = useRef();

    useEffect(()=>{
        filter(textFieldRef.current.value);
    },[props.data]);

  const onChangeHandler = (event) => {
    filter(event.target.value);
  };

  const filter =(key)=>{
    const filtered = props.data.filter((entity) =>
    entity[props.field].includes(key)
  );
  props.setState(filtered);
  }

  return (
    <TextField
      label={props.labelText}
      variant="filled"
      onChange={onChangeHandler}
      type={props.type}
      inputRef={textFieldRef}
    />
  );
};

export default Filter;

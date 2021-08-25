import { useState, useCallback } from "react";
import { Button, TextField, Divider } from "@material-ui/core";

const Range = ({ onSubmit, classes }) => {
  const [{ start, end }, setValues] = useState({ start: 1, end: 10 });

  const handleInputs = useCallback(
    (e) => {
      setValues((old) => ({
        ...old,
        [e.target.name]: e.target.value,
      }));
    },
    [setValues]
  );

  const submit = useCallback((e) => {
    e.preventDefault();
    onSubmit({ start, end });
  }, [end, onSubmit, start]);

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submit}
    >
      <Divider />
      <TextField
        className={classes.inputs}
        id="standard-basic"
        name="start"
        label="start"
        onChange={handleInputs}
        value={start}
      />
      <TextField
        className={classes.inputs}
        id="standard-basic"
        name="end"
        label="end"
        onChange={handleInputs}
        value={end}
      />
      <Button
        className={classes.buttons}
        variant="contained"
        size="small"
        color="primary"
        type="submit"
      >
        Range!
      </Button>

      <Divider />
    </form>
  );
};

export default Range;

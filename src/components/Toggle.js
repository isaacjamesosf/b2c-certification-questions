import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export default function Toggle({onChange, checked}) {
  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={onChange}
          />
        }
        label="Show Answer"
      />
    </React.Fragment>
  );
}

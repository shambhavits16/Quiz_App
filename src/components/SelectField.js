import React, { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';

const SelectField = props => {
    const {lable, options} = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
      switch(lable){
        case "Category":
          dispatch(handleCategoryChange(e.target.value));
          break;
        case "Difficulty":
          dispatch(handleDifficultyChange(e.target.value));
          break;
        case "Type":
          dispatch(handleTypeChange(e.target.value));
          break;
        default:
          return;
      }
    };

  return (
    <Box mt={3} width="100%">
        <FormControl size='small' fullWidth>
            <InputLabel>{lable}</InputLabel>
            <Select value={value} label={lable} onChange={handleChange}>
                { options.map(({ id, name }) => (
                  <MenuItem value={id} key={id}>{name}</MenuItem>
                )) }
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField

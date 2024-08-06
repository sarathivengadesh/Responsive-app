import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CustomSelect({option,selectValue,setSelectedValue}:{option:{value:string,lable:string}[],selectValue:{value:string,lable:string},setSelectedValue:({value,lable})=>void}) {
  
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(option.filter(e => e?.value===event.target.value)[0]);
  };

  return (
    <FormControl sx={{ m: 0.5, minWidth: 120, }} size="small">
      <Select
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        value={selectValue?.value}
        onChange={handleChange}
        sx={{
            color:"white",
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              },
              '& .MuiSelect-icon': {
                color: 'white'
              }
        }}
      >
      {option?.map(e=>(
        <MenuItem value={e?.value}>{e?.lable}</MenuItem>
      ))}
      </Select>
    </FormControl>
  );
}

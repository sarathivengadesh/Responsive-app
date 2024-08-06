
import { styled ,TableCell} from '@mui/material';
import React from 'react';

export const iconStyle={
    active:"#7396FE",
    inActive:"#9899A1"
}
interface CustomTableCellProps {
    breakall?: string;
    mwidth?: string;
  }
export const CustomTableCell = styled(TableCell)<CustomTableCellProps>`
  border: 1px solid white;
  max-width: ${props => props?.mwidth || "unset"};
  word-break: ${props => props?.breakall || "unset"};
  font-size: 12px;
  color:white
`;

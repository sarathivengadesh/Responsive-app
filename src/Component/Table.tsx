import { Avatar, styled, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { CustomTableCell } from "../utils/constant.tsx";
import { StautsTag, stringAvatar } from "../utils/helper.tsx";

interface HeaderReuseCompProps {
  dtx?: any[];
}

 interface OrderType {
  id: number;
  name: string;
  orderDate: string;
  worthOfOrder: number;
  delivered: boolean;

}
const HeaderReuseComp = ({ dtx }: HeaderReuseCompProps) => {
  return dtx?.map((item: string, i: number) => (
    <CustomTableCell
      className="text-white font-medium"
      key={i}
      breakall="break-all"
      mwidth="450px" 
      style={{ fontSize: "14px" }}
    >
      {item}
    </CustomTableCell>
  ));
};

interface TableProps {
  row?: any;
  tableHeading?: any[];
}


const CustomTableHead = styled(TableHead)({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  '& th': {
    backgroundColor: '#1F2029', 
  },
});

const StyledTableContainer = styled(TableContainer)({
  maxHeight: '200px', 
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#1F2029',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'gray',
    borderRadius: '10px',
    border: '2px solid #1F2029',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555',
  },
});

export function TableComponent({ row, tableHeading }: TableProps) {
  return (
    <StyledTableContainer >
      <Table stickyHeader >
      <CustomTableHead>
        <TableRow >
          <HeaderReuseComp dtx={tableHeading} />
        </TableRow>
      </CustomTableHead>
      <TableBody >{row}</TableBody>
      </Table>
    </StyledTableContainer>
  );
}
export function OrderItem({ data }: { data: OrderType[] }) {
  return (
    <>
      { 
        data?.map((item: OrderType, index: number) => (
          <TableRow key={index} >
            <CustomTableCell><div className="flex items-center gap-2"> <Avatar {...stringAvatar(item.name)} />{item.name}</div></CustomTableCell>
            <CustomTableCell>{item.orderDate}</CustomTableCell>
            <CustomTableCell>{item.worthOfOrder}$</CustomTableCell>
            <CustomTableCell><StautsTag type={item.delivered}/> </CustomTableCell>
          </TableRow>
        ))
      }
    </>
  );
}
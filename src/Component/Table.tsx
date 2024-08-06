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
  maxHeight: '300px', 
  overflowY: 'auto'
});

export function TableComponent({ row, tableHeading }: TableProps) {
  return (
    <StyledTableContainer className="scrollbar-webkit" >
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
          <TableRow key={index} className="text2" >
            <CustomTableCell breakall="break-all" fontSize="10px"><div className="flex items-center gap-2"> <Avatar {...stringAvatar(item.name)} />{item.name}</div></CustomTableCell>
            <CustomTableCell breakall="break-all" fontSize="10px">{item.orderDate}</CustomTableCell>
            <CustomTableCell breakall="break-all" fontSize="10px">{item.worthOfOrder}$</CustomTableCell>
            <CustomTableCell breakall="break-all" fontSize="10px"><StautsTag type={item.delivered}/> </CustomTableCell>
          </TableRow>
        ))
      }
    </>
  );
}
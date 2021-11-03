import React, { useMemo } from "react";
import { useTable } from "react-table";

import { COLUMNS } from "./Columns";
import { connect, useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table";   
 const BasicTable = (props) => {
    // const {allUsers}=props
    // console.log(props)
// const allUsers=useSelector(state=>state.users)
//   console.log(allUsers)
  // console.log("allUsers", allUsers);
//   const allUsers=useSelector(state=>state.users)

  // const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => allUsers, []);
  // console.log("data", data)
  // const tableInstance = useTable({
  //   columns: columns,
  //   data: data,
  // });
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;
  // return (
  //   <table {...getTableProps()}>
  //     <thead>
  //       {headerGroups.map(headerGroups)}
  //       <tr {...headerGroups.getHeaderGroupProps()}>
  //         {headerGroups.headers.map((column) => (
  //           <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
  //         ))}
  //       </tr>
  //       <tbody {...getTableBodyProps()}>
  //         {rows.map((row) => {
  //           prepareRow(row);
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map((cell) => {
  //                 return (
  //                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
  //                 );
  //               })}
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </thead>
  //   </table>
//  <ReactTable data={allUsers} columns={COLUMNS} /> 

    // <ReactTable data={allUsers} columns={COLUMNS} />

    const columns = [{  
      Header: 'Name',  
      accessor: 'name'  
      },{  
      Header: 'Age',  
      accessor: 'age'  
      }]  

      return (
        <ReactTable columns={columns} />

      

  );
};
export default BasicTable;

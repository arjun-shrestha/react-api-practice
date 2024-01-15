import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    TableBody,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCell,
    Button
  } from "@fluentui/react-components";
  import { UserModel } from '../models/user.model'
  import Pagination from './Pagination'


function PaginationComponent(){
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  let totalPageCount:number;
  const [users, setUsers] = useState<UserModel[]>()

  const fetchUsers = async (pageNumber:number) => {
    try {
      const response = await axios( {
        url:`http://localhost:61174/api/users?OrderColumn=FirstName&PageNumber=${pageNumber}&RowsCount=${pageSize}`,
        method: 'get',
        headers:{
            "Tenant-Id":"cd9ebad7-5a44-4d59-b5d3-a9361619e13c",
            'Content-Type': 'application/json'
        }});
      const users = response.data.Content.Data;
      const totalCount = response.data.Content.ResponseProperties.TotalRecords;
      setUsers(users);
      totalPageCount = Math.ceil(totalCount/pageSize);
      console.log(`Total Data Count : ${totalCount}`)
      console.log(`Total Page Number : ${totalPageCount}`)
      console.log(`Page Size Count : ${pageSize}`)
      console.log(`Current Page : ${currentPage}`)

    //   setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  return (
    <>
        <div className='container'>
                <div className='mt-3'>
                    <h3> Pagination Information</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderCell>FirstName</TableHeaderCell>
                                <TableHeaderCell>LastName</TableHeaderCell>
                                <TableHeaderCell>Email</TableHeaderCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                users && users.map((user, index) => {
                                    return <TableRow key={index}>
                                        <TableCell>{user.FirstName}</TableCell>
                                        <TableCell>{user.LastName}</TableCell>
                                        <TableCell>{user.Email}</TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                    <Pagination currentPage={currentPage}
                        lastPage={9} 
                        maxLength={7}
                        setCurrentPage={setCurrentPage}/>
                </div>

            </div>
        </>
  );
};

export default PaginationComponent;
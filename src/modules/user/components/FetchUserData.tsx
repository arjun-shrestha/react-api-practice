import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {
    TableBody,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCell,
  } from "@fluentui/react-components";
  import { UserModel } from '../models/user.model'



function FetchUserData(){
    const [users, setUsers] = useState<UserModel[]>()

    useEffect(() => {
        axios( {url: 'http://localhost:61174/api/users',
                method: 'get',
                headers:{
                    "Tenant-Id":"cd9ebad7-5a44-4d59-b5d3-a9361619e13c",
                    'Content-Type': 'application/json'
                }})
        .then(res => {
            setUsers(res.data.Content)
            console.log(res)
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className='container'>
                <div className='mt-3'>
                    <h3> Fetching Data from API in React</h3>
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
                </div>

            </div>
        </>
    )

}

export default FetchUserData
import React, { useState, useEffect } from "react";
import '../styles/css/index.css'
import axios from 'axios';
import UsersTable from "./UsersTable";
import Paper from '@mui/material/Paper';
import { ToastContainer, toast } from "react-toastify";

const API_URL = `https://reqres.in/api`


const UsersData = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const [data, setData] = useState([]);

    const getUsersData = (pageNumber) => {
        axios.get(`${API_URL}/users?page=${pageNumber}`).then((response) => {
            setData(response && response.data && response.data.data ? response.data.data : [])
            const total = response && response.data ? (response.data.total ? response.data.total : 0) /
                (response.data.per_page ? response.data.per_page : 1) : 0;
            setTotalPages(Math.ceil(total))
        }).catch((error) => {
            toast.error("Something went wrong Please try again")
        })
    }


    useEffect(() => {
        getUsersData(pageNumber)
    }, [pageNumber]);

    return (
        <div>
            <ToastContainer />
            <div className='span-style'>
                <span>Users Data </span>
            </div>
            <Paper>
                <UsersTable data={data}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    totalPages={totalPages} />
            </Paper>
        </div>

    )
}

export default UsersData;

// 
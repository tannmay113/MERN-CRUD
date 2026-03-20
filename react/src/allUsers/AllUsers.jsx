import React, { useEffect, useState } from "react";
import styles from "./AllUsers.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const AllUsers = () => {

    let [data, setdata] = useState([]);
    const navigate = useNavigate();

    let deleteData = async (id) => {

        let res = await axios.delete("http://localhost:8000/api/deteleById/" + id)

        if (res.status === 200) {
            toast.success("User Deleted Successfully ✅");
            setdata(data.filter((value) => value._id !== id));
        } else {
            toast.error("Something went wrong ❌");
        }
    }

    let editData = (id) => {
        navigate(`/update/${id}`);
    }

    useEffect(() => {

        let fetchUsers = async () => {

            try {

                let res = await axios.get("http://localhost:8000/api/getAllUser");
                let resData = res.data;
                setdata(resData);
                console.log(resData)

            } catch (error) {
                console.log(error);
            }
        }

        fetchUsers();

    }, [])

    return (
        <div className={styles.container}>

            {/* 🔥 Header Section */}
            <div className={styles.header}>
                <h2 className={styles.title}>User List</h2>
                <Link to={"/add"} className={styles.addBtn}>
                    Add New User
                </Link>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {data.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td data-label="Name">{value.name}</td>
                                    <td data-label="Email">{value.email}</td>
                                    <td data-label="Address">{value.address}</td>
                                    <td data-label="Password">{value.password}</td>

                                    <td data-label="Action">
                                        <button onClick={() => editData(value._id)} className={styles.editBtn}>
                                            Edit
                                        </button>
                                        <button onClick={() => deleteData(value._id)} className={styles.deleteBtn}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
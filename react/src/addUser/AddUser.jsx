import React, { useState } from "react";
import styles from "./AddUser.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:8000/api/CreateUser",
                formData
            );

            // ✅ Success toast
            toast.success("User Added Successfully ✅");

            navigate("/");

        } catch (error) {

            // ✅ Error toast from backend
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong ❌");
            }
        }
    };

    return (
        <div className={styles.container}>

            {/* 🔥 Top Bar */}
            <div className={styles.header}>
                <button className={styles.backBtn} onClick={() => navigate("/")}>
                    ⬅ Back
                </button>
                <h2>Add User</h2>
            </div>

            {/* 🔥 Form */}
            <form className={styles.form} onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className={styles.submitBtn}>
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UpdateUser.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/getUserById/${id}`);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:8000/api/updateUserById/${id}`, user);

            if (res.status === 200) {
                toast.success("User Updated Successfully ✅");

            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>

            {/* 🔙 Back Button */}
            <button
                className={styles.backBtn}
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <h2>Update User</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />

                <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />

                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />

                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
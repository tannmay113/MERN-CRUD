import React from "react";
import styles from "./AllUsers.module.css";

const AllUsers = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>User List</h2>

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

                        <tr>
                            <td data-label="Name">Tanmay</td>
                            <td data-label="Email">tanmay@gmail.com</td>
                            <td data-label="Address">new delhi</td>
                            <td data-label="Password">123</td>

                            <td data-label="Action">
                                <button
                                    className={styles.editBtn}
                                >
                                    Edit
                                </button>
                                <button
                                    className={styles.deleteBtn}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
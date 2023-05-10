import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const List = () => {
    const [tours, setTour] = useState([]);
    const [check, setCheck] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:3000/tours")
            .then(response => setTour(response.data))
            .catch(() => alert("tours list not fount"))
    }, [check])
    return (
        <div>
            <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th colSpan={3}>Action</th>
                </tr>
                </thead>
                <tbody>
                {tours.map(tour => (
                    <tr key={tour.id}>
                        <td>{tour.id}</td>
                        <td>{tour.title}</td>
                        <td>{tour.price}</td>
                        <td>{tour.description}</td>
                        <td>
                            <button onClick={() => deleteTour(tour.id)}>Delete</button>
                        </td>
                        <td><button><Link to={`/update/${tour.id}`}>Update</Link></button></td>
                        <td><button><Link to={`/views/${tour.id}`}>Views</Link></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

    function deleteTour(id) {
        axios.delete(`http://localhost:3000/tours/${id}`)
            .then(() => {
                alert("delete tour is id " + id + " success")
                setCheck(!check)
            })
            .catch(() => alert("delete failed"))
    }
}
export default List;
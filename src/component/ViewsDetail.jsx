import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const ViewsDetail = () => {
    const {id} = useParams();
    const [tourDetail, setTourDetail] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/tours/${id}`)
            .then((response) => {
                setTourDetail(response.data)
            })
            .catch(() => {
                alert("tour detail not found")
            })
    }, [id])
    return (
        <div>
            <ul key={tourDetail.id}>
                <li><h2>{tourDetail.id}</h2></li>
                <li><h2>{tourDetail.title}</h2></li>
                <li>{tourDetail.price}</li>
                <li>{tourDetail.description}</li>
            </ul>
        </div>
    )
};

export default ViewsDetail;
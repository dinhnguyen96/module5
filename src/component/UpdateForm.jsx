import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import * as yup from "yup"
import {ErrorMessage, Field, Formik} from "formik";

const UpdateForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/tours/${id}`)
            .then((response) => {
                setTour(response.data);
            })
            .catch(() => {
                alert("tours not found");
            });
    }, [id]);

    if (!tour) {
        return <div>Loading...</div>;
    }

    return (
        <Formik
            initialValues={{
                title: tour.title,
                price: tour.price,
                description: tour.description,
            }}
            validationSchema={yup.object({
                price: yup.number().min(0, "must be greater than 0").required("required")
            })}
            onSubmit={(values) => {
                axios.put(`http://localhost:3000/tours/${id}`, values)
                    .then(() => {
                        alert("Update success");
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }}>
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor={"title"}>Title: </label></td>
                            <td><Field name={"title"}></Field></td>
                            <td><ErrorMessage name={"title"}></ErrorMessage></td>
                        </tr>
                        <tr>
                            <td><label htmlFor={"price"}>Price: </label></td>
                            <td><Field name={"price"}></Field></td>
                            <td><ErrorMessage name={"price"}></ErrorMessage></td>
                        </tr>
                        <tr>
                            <td><label htmlFor={"description"}>Description: </label></td>
                                 <td><Field name={"description"}></Field></td>
                                   <td><ErrorMessage name={"description"}></ErrorMessage></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type={"submit"}>Update</button>
                            </td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            )}
        </Formik>
    )
};

export default UpdateForm;

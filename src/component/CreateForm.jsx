import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Formik} from "formik";
import axios from "axios";
import * as yup from "yup";

const CreateForm = () => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                title: '',
                price: '',
                description: '',
            }}
            validationSchema={yup.object({
                price: yup.number().min(0, "must be greater than 0").required("required")
            })}
            onSubmit={(values) => {
                axios.post("http://localhost:3000/tours", values)
                    .then(() => {
                        alert("create success")
                        navigate("/")
                    })
                    .catch(error => alert(error.getMessage))
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
                                <button type={"submit"}>Create</button>
                            </td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            )}
        </Formik>
    );
};

export default CreateForm;
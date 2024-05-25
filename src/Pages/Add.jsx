import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"


export default function Add() {
    const [postget, setpostget] = useState(null)
    const PostgetElement = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => setpostget(reader.result)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const onSubmit = (data) => {
        axios.post('http://localhost:8000/alveer', { ...data, img: postget })
        reset()
    }
    return (
        <div className="add container mt-5">
            <h2>Add Seyfesi</h2>
            <div className="add_esas">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <label>Img:
                        <input type="file" name="img" onChange={(e) => PostgetElement(e.target.files[0])} />
                        {postget && <img src={postget} width='100px' height='100px' />}
                    </label>
                    <label>Name:
                        <input {...register("name")} />
                    </label>
                    <label>Money:
                        <input {...register("money", { required: true, valueAsNumbe:true })} />
                    </label>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="row">
                        <input type="submit" className="col-lg-6" />
                        <Link to='/admin' className="col-lg-6"><button className="btn btn-primary">Geri</button></Link>
                    </div>

                </form>
            </div>
        </div>


    )
}
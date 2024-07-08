import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator";

type IFormType = {
    username: string,
    password: string,
    age: number
}


const FormComponent = () => {

    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IFormType>({mode: 'all', resolver: joiResolver(userValidator)});

    let formSubmitCustomHandler = (data: IFormType) => {
        console.log(data);
    };
    return (
        <div>
            {errors.username && <div>username errors: {errors.username?.message}</div>}
            {errors.password && <div>password errors: {errors.password?.message}</div>}
            {errors.age && <div>age errors: {errors.age?.message}</div>}
            <form onSubmit={handleSubmit(formSubmitCustomHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('age')}/>
                <button disabled={!isValid}>send</button>
            </form>

        </div>
    );
};

export default FormComponent;
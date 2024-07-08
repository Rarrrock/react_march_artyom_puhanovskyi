import React, {FormEvent, useState} from 'react';
import {useForm} from "react-hook-form";

type IFormType = {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    let {formState:{errors, isValid}, register, handleSubmit} = useForm<IFormType>();

    let formSubmitCustomHandler = (data: IFormType) => {
        console.log(data);
    };
    return (
        <div>
            {errors.age && <div>{errors.age.message} {isValid+''}</div>}
            <form onSubmit={handleSubmit(formSubmitCustomHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 1, message: 'age too small'},
                    max: {value: 132, message: 'age too big'}
                    })}/>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;
import React, {FormEvent, useState} from 'react';
import {useForm} from "react-hook-form";

type IFormType = {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    let {register, handleSubmit} = useForm<IFormType>();

    let formSubmitCustomHandler = (data: IFormType) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitCustomHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('age')}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;
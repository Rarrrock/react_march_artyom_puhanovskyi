import React, {FormEvent, useState} from 'react';

type IFormType = {
    username: string,
    password: string,
}

const FormComponent = () => {

    const [formState, setFormState] = useState<IFormType>(
        {username: 'default username', password: 'pswrd'}
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password,
        }

        console.log(user);

    };
    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        let input = e.target as HTMLInputElement;
        setFormState({
            ...formState,
            [input.name]: input.value,
        });

    };
    return (
        <div>


            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onInput={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onInput={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;
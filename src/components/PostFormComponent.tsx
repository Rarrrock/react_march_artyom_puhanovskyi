import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

type IPostForm = {
    title: string;
    body: string;
    userId: number;
}

const PostFormComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IPostForm>();

    const onSubmit = async (data: IPostForm) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: data.title,
                body: data.body,
                userId: data.userId
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title</label>
                <input type="text" {...register('title', { required: 'Title is required' })} />
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div>
                <label>Body</label>
                <textarea {...register('body', { required: 'Body is required' })}></textarea>
                {errors.body && <span>{errors.body.message}</span>}
            </div>
            <div>
                <label>User ID</label>
                <input type="number" {...register('userId', { required: 'User ID is required' })} />
                {errors.userId && <span>{errors.userId.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostFormComponent;
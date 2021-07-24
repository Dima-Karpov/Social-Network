import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type FormDataType = {
    newPostText: string
};

const AddMyPostForm: React.FC<InjectedFormProps<FormDataType>> = (porps) => {
    return (
        <form onSubmit={porps.handleSubmit}>
                <div>
                    <Field component='textarea' name='newPostText' placeholder='Enter your post'/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
    )
};

export const AddMyPostFromRedux = reduxForm<FormDataType>({form: 'profileMyPostForm'})(AddMyPostForm);
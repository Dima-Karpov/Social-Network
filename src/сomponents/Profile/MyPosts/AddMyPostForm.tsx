import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreators, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

type FormDataType = {
    newPostText: string
};

const maxLength = maxLengthCreators(10);

const AddMyPostForm: React.FC<InjectedFormProps<FormDataType>> = (porps) => {
    return (
        <form onSubmit={porps.handleSubmit}>
                <div>
                    <Field 
                    component={Textarea}
                    name='newPostText' 
                    placeholder='Enter your post'
                    validate={[required, maxLength]}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
    )
};

export const AddMyPostFromRedux = reduxForm<FormDataType>({form: 'profileMyPostForm'})(AddMyPostForm);
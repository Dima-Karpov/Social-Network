import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
                <div><button>Send</button></div>
            </div>

        </form>
    )
};

export const AddMessageFormRedux = reduxForm<FormDataType>({ form: 'dialogAddMessageForm' })(AddMessageForm)
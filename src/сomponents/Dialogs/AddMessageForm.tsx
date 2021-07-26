import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreators, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

type FormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreators(50) 

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newMessageBody'
                    placeholder='Enter your message'
                    validate={[required, ]}

                />
                <div><button>Send</button></div>
            </div>

        </form>
    )
};

export const AddMessageFormRedux = reduxForm<FormDataType>({ form: 'dialogAddMessageForm' })(AddMessageForm)
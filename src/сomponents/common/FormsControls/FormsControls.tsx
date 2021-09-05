import React from 'react';
import s from './FromControls.module.css';
import { Field } from 'redux-form';

const FormControl = ({ meta: { touched, error }, children }: any) => {
    const hasError = touched && error;
    const errorMessage = hasError ? `${error}` : '';
    const textareaClass = hasError ? `${s.errorTextfield}` : undefined;

    return (
        <div className={textareaClass}>
            <div>
                {children}
            </div>
            <div className={s.errorBlock}>
                <span className={s.errorMessage}>{errorMessage}</span>
            </div>

        </div>

    )
};

export const Textarea = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

    )
};
export const Input = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
};

export const createField = (placeholder: string, name: string, validate: any, component: any, props = {}, text = '') => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validate}
                {...props}
            />{text}
        </div>)
};
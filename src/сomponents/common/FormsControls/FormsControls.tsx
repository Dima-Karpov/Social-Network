import React from 'react';
import s from './FromControls.module.css';

const FormControl = ({ input, meta, cild, ...props }: any) => {
    const hasError = meta.touched && meta.error;
    const errorMessage = hasError ? `${meta.error}`: '';
    const textareaClass = hasError ? `${s.errorTextfield}` : undefined;

    return (
        <div className={textareaClass}>
            <div>
               {props.children}
            </div>
            <div className={s.errorBlock}>
                <span className={s.errorMessage}>{errorMessage}</span>
            </div>
            
        </div>

    )
}


export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>

    )
};
export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
};
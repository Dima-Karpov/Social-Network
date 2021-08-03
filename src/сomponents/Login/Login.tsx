import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { RootState } from '../../redux/redux-store';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from '../../сomponents/common/FormsControls/FromControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}


const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    };

    return (
        <div>
            <h1>LOGIN...</h1>
            <LoginReduxForn onSubmit={onSubmit} />
        </div>
    )
};



const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                    type={'password'}
                />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
            </div>

            <div>
                {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            </div>
            
            
            <div>



                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForn = reduxForm<FormDataType>({
    form: 'login',
})(LoginForm)

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login)
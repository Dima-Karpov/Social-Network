import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { RootState } from '../../redux/redux-store';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import s from '../../сomponents/common/FormsControls/FromControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
};

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
};


const Login: React.FC<LoginPropsType> = React.memo((props) => {

    const {
        login,
        isAuth,
    } = props;

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    };
    if (isAuth) {
        return <Redirect to={'/profile'} />
    };

    return (
        <div>
            <h1>LOGIN...</h1>
            <LoginReduxForn onSubmit={onSubmit} />
        </div>
    )
});



const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((props) => {

    const {
        handleSubmit,
        error
    } = props

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}
            {createField('', 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
            <div>
                {error && <div className={s.formSummaryError}>{error}</div>}
            </div>
            <div>

                <button>Login</button>
            </div>
        </form>
    )
})


const LoginReduxForn = reduxForm<FormDataType>({
    form: 'login',
})(LoginForm)

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login)
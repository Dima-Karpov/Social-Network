import { ComponentType } from "react"
import { AppStateType } from "../redux/redux-store"
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export function wihtAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let { isAuth, ...restProps } = props;

        if (!isAuth) return <Redirect to={'/login/'}/>

        return <Component { ...restProps as T } /> 
    }


    let ConnectedAuthResirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthResirectComponent
}; 
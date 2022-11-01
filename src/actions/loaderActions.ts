import {ActionTypes} from "./actionTypes";
import {Dispatch} from "redux";

export const startLoading = (loaderType:string) =>  async (dispatch: Dispatch) => {
    dispatch({type: ActionTypes.startLoader, payload: loaderType})
};

export const stopLoading = (loaderType:string) =>  async (dispatch: Dispatch) => {
    const timer = await setTimeout(()=> {
        clearTimeout(timer);
        dispatch({type: ActionTypes.stopLoader, payload: loaderType})
    }, 300)
};

export const stopLoadingImmediately = (loaderType:string) =>  async (dispatch: Dispatch) => {
    dispatch({type: ActionTypes.stopLoaderImmediately, payload: loaderType})
};
import axios from "axios";


export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";


export const getUser = (userId) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${userId}`)
            .then((res) => {
                dispatch({type: GET_USER, payload: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    };
};


export const uploadPicture = (data, id) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
            .then((res) => {
                return axios
                    .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
                    .then((res) => {
                        dispatch({type: UPLOAD_PICTURE, payload: res.data.picture});
                    });
            })
            .catch((err) => {
                console.log(err)
            });
    };
};


export const updateBio = (id, bio) => {
    return (dispatch) => {
        return axios
            .put(`${process.env.REACT_APP_API_URL}api/user/${id}`, {bio})
            .then((res) => {
                dispatch({type: UPDATE_BIO, payload: bio});
            })
            .catch((err) => {
                console.log(err)
            });
    };
};
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyAvatar from "./MyAvatar.jsx";
import {Link, useNavigate} from "react-router-dom";
import {CiLogout} from "react-icons/ci";

const UserItem = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.users.loggedInUser)
    if (!loggedInUser) {
        return <div><Link to='/login'>Log In</Link></div>; // Обработка, если пользователь не залогинен
    }
    const logout = () => {
        dispatch({
            type: 'SET_LOGGED_OUT_USER'
        })
        navigate('/login')
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between'}}>
            <CiLogout size={24} style={{cursor: 'pointer'}} onClick={() => logout()}/>
            <div>
                <MyAvatar id={loggedInUser.id} />
                {loggedInUser.username}
            </div>
        </div>
    );
};

export default UserItem;
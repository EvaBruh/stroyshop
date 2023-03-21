import {useContext} from "react";
import AuthContext from '../../context/AuthContext';
import './userinfo.scss';

function UserInfo({ user }) {
    const { logoutUser } = useContext(AuthContext);

    return (
<div className='header-box'>
    <div className='header-box__userinfo'>
        <a href='/personal' className='header-box__userinfo__username'>Привет, {user.username}</a>
        {user ? (
            <>
                <a className='header-box__userinfo__logout' onClick={logoutUser}>Выйти</a>
            </>
        ) : null}
    </div>
</div>
    );
}

export default UserInfo;
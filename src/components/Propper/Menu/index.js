import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Propper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';
import MenuItem from './MenuItem';
import Header from './Header';
import { Link } from 'react-router-dom';
import Sidebar from '~/components/Layout/Components/SideBar/Sidebar';
const cx = classNames.bind(styles);
function Menu({ children, items = [], visibleCheck, hideCheck, login, checkPlaceMent }) {
    const [history, setHistory] = useState([{ data: items }]);
    // Phần tử cuối
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            content="settings"
            placement={checkPlaceMent}
            visible={visibleCheck}
            interactive
            render={(attrs) => (
                <div tabIndex="-1" {...attrs} className={cx('action_setting')}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Choose the option"
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        {login && history.length <= 1 && (
                            <div className={cx('accounts_login')}>
                                <div className={cx('users_login')}>
                                    <img
                                        src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg"
                                        alt="Tài khoản đăng nhập "
                                    ></img>
                                </div>
                                <div className={cx('account_info')}>
                                    <span className={cx('title')}> Dũng - 65CS3 Nguyễn Tiến </span>
                                    <Link to={<Sidebar />} className={cx('user_manage')}>
                                        Quản lý tài khoản google của bạn
                                    </Link>
                                </div>
                            </div>
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={hideCheck}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

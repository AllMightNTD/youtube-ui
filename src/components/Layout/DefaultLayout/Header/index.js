import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faKeyboard } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Propper';

import SearchItem from '~/components/SearchResultItem';
import Menu from '~/components/Propper/Menu';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import {
    CreatVideoIcon,
    NotificationVideo,
    YourChannel,
    YoutubeStudio,
    SwitchAccountsIcon,
    LogOutIcon,
    TransactionIcon,
    MyDataIcon,
    DisplayIcon,
    LanguageIcon,
    LimitIcon,
    LocationIcon,
    ShortCutKeyIcon,
    SettingIcon,
    HelpIcon,
    FeedBackIcon,
    RightIcon,
    LogoYoutubeIcon,
    MyVideoIcon,
    LiveVideoIcon,
    NotifiIcon,
} from '~/components/Icon';
import Button from '~/components/Button';
import Following from '~/Pages/Following';
import routes from '~/config/routes';
import config from '~/config';

const cx = classNames.bind(styles);
function Header() {
    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);

    const [visible, setVisible] = useState(false);
    const [visibleCreat, setVisibleCreat] = useState(false);
    const [visileNotification, setvisibleNotification] = useState(false);
    const show = () => {
        setVisible(true);
    };
    const hide = () => {
        setVisible(false);
    };

    const showCreat = () => {
        setVisibleCreat(true);
    };
    const hideCreat = () => {
        setVisibleCreat(false);
    };
    const showNoti = () => {
        setvisibleNotification(true);
    };
    const hideNoti = () => {
        setvisibleNotification(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const focus = useRef();

    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        focus.current.focus();
    };

    const userLogin = true;

    const SettingItems = [
        {
            iconLeft: <MyDataIcon />,
            title: 'Your data in YouTube',
        },
        {
            iconLeft: <DisplayIcon />,
            title: 'Appearance : Light',
            iconRight: <RightIcon />,
            children: {
                titleTwo: 'Appearance',
                data: [
                    {
                        type: 'Appearance',
                        code: 'device',
                        title: 'Use devices theme',
                    },
                    {
                        type: 'Appearance',
                        code: 'Dark',
                        title: 'Dark theme',
                    },
                    {
                        type: 'Appearance',
                        code: 'Light',
                        title: 'Light theme',
                    },
                ],
            },
        },
        {
            iconLeft: <LanguageIcon />,
            title: 'Language : EngLish',
            iconRight: <RightIcon />,
            children: {
                titleTwo: 'Choose your language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Tieng Viet',
                    },
                    {
                        type: 'language',
                        code: 'fr',
                        title: 'France',
                    },
                ],
            },
        },
        {
            iconLeft: <LimitIcon />,
            title: 'Restricted Mode: Off',
            iconRight: <RightIcon />,
        },
        {
            iconLeft: <LocationIcon />,
            title: 'Location: VietNam',
            iconRight: <RightIcon />,
        },
        {
            iconLeft: <ShortCutKeyIcon />,
            title: 'Keyboard shortscut',
        },
        {
            iconLeft: <SettingIcon />,
            title: 'Setting',
        },
        {
            iconLeft: <HelpIcon />,
            title: 'Help',
        },
        {
            iconLeft: <FeedBackIcon />,
            title: 'Feed Back',
        },
    ];
    const SettinsLoginItem = [
        {
            iconLeft: <YourChannel />,
            title: 'Kênh của bạn',
        },
        {
            iconLeft: <YoutubeStudio />,
            title: 'Youtube studio',
        },
        {
            iconLeft: <SwitchAccountsIcon />,
            title: 'Chuyển đổi tài khoản ',
            iconRight: <RightIcon />,
        },
        {
            iconLeft: <LogOutIcon />,
            title: 'Đăng Xuất ',
        },
        {
            iconLeft: <TransactionIcon />,
            title: 'Giao dịch và mua gói thành viên',
        },
        {
            iconLeft: <MyDataIcon />,
            title: 'Dữ liệu của bạn trong Youtube',
        },
        {
            iconLeft: <DisplayIcon />,
            title: 'Appearance : Light',
            iconRight: <RightIcon />,
            children: {
                titleTwo: 'Appearance',
                data: [
                    {
                        type: 'Appearance',
                        code: 'device',
                        title: 'Use devices theme',
                    },
                    {
                        type: 'Appearance',
                        code: 'Dark',
                        title: 'Dark theme',
                    },
                    {
                        type: 'Appearance',
                        code: 'Light',
                        title: 'Light theme',
                    },
                ],
            },
        },
        {
            iconLeft: <LanguageIcon />,
            title: 'Language : EngLish',
            iconRight: <RightIcon />,
            children: {
                titleTwo: 'Choose your language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Tieng Viet',
                    },
                    {
                        type: 'language',
                        code: 'fr',
                        title: 'France',
                    },
                ],
            },
        },
        {
            iconLeft: <LimitIcon />,
            title: 'Chế độ hạn chế : Đã tắt',
            iconRight: <RightIcon />,
        },
        {
            iconLeft: <LocationIcon />,
            title: 'Location: VietNam',
            iconRight: <RightIcon />,
            children: {
                titleTwo: 'Chọn vị trí của bạn ',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Viet Nam',
                    },
                    {
                        type: 'language',
                        code: 'fr',
                        title: 'France',
                    },
                ],
            },
        },
        {
            iconLeft: <ShortCutKeyIcon />,
            title: 'Phím tắt',
        },
        {
            iconLeft: <SettingIcon />,
            title: 'Cài đặt',
        },
        {
            iconLeft: <HelpIcon />,
            title: 'Help',
        },
        {
            iconLeft: <FeedBackIcon />,
            title: 'Feed Back',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('IconSideBar_Logo')}>
                    <div className={cx('IconSideBar')}>
                        <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            fill="currentColor"
                            width="24px"
                            height="24px"
                            alt="IconSideBar"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                            ></path>
                        </svg>
                    </div>
                    <div className={cx('Logo')}>
                        <LogoYoutubeIcon className={cx('logo-icon')} />
                    </div>
                </div>
                {userLogin ? (
                    <div className={cx('search')}>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div
                                    className={userLogin ? cx('search-result_login') : cx('search-result_nologin')}
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    <PopperWrapper>
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('search-text')}>
                                <input
                                    placeholder="Tìm kiếm"
                                    ref={focus}
                                    value={searchValue}
                                    onChange={(e) => handleSearchValue(e)}
                                />
                                <button className={cx('keyboard')}>
                                    <FontAwesomeIcon className={cx('icon-key')} icon={faKeyboard} />
                                </button>
                                {/* Clear */}
                                {!!searchValue && (
                                    <button className={cx('clear-btn')} onClick={() => handleClear()}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            // width="24"
                                            // height="24px"
                                        >
                                            <g>
                                                <path d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                )}
                                {/* Search */}
                                <Tippy content="Tìm kiếm">
                                    <button className={cx('search-btn')}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                            width="24px"
                                            height="24px"
                                        >
                                            <g>
                                                <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </Tippy>
                            </div>
                        </Tippy>
                        <div className={cx('search-voice')}>
                            <svg
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                                focusable="false"
                                width="24"
                                height="24px"
                            >
                                <g>
                                    <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className={cx('search_noLogin')}>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div
                                    className={userLogin ? cx('search-result_login') : cx('search-result_nologin')}
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    <PopperWrapper>
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                        <SearchItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('search_Login-contains')}>
                                <div className={cx('search_text-noLogin')}>
                                    <input
                                        placeholder="Search"
                                        ref={focus}
                                        value={searchValue}
                                        onChange={(e) => handleSearchValue(e)}
                                    />
                                    {/* Clear */}
                                    {!!searchValue && (
                                        <button className={cx('nologin-clear_btn')} onClick={() => handleClear()}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                                // width="24"
                                                // height="24px"
                                            >
                                                <g>
                                                    <path d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </Tippy>

                        {/* Search */}
                        <Tippy content="Tìm kiếm">
                            <button className={cx('search_btn-noLogin')}>
                                <svg
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                    width="24px"
                                    height="24px"
                                >
                                    <g>
                                        <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
                                    </g>
                                </svg>
                            </button>
                        </Tippy>
                        <Tippy content="Voice">
                            <div className={cx('search-voice')}>
                                <svg
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                    width="24"
                                    height="24px"
                                >
                                    <g>
                                        <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </Tippy>
                    </div>
                )}

                {userLogin ? (
                    <div className={cx('action')}>
                        <Tippy
                            visible={visibleCreat}
                            interactive
                            placement="bottom"
                            render={(attrs) => (
                                <div className={cx('creat_box')} {...attrs} tabIndex="-1">
                                    <Button leftIcon={<MyVideoIcon />} className={cx('btn_dow')}>
                                        Tai video len
                                    </Button>
                                    <Button leftIcon={<LiveVideoIcon />} className={cx('btn_live')}>
                                        Phat truc tiep
                                    </Button>
                                </div>
                            )}
                            onClickOutside={hideCreat}
                        >
                            <button className={cx('creat-video')} onClick={visibleCreat ? hideCreat : showCreat}>
                                <CreatVideoIcon />
                            </button>
                        </Tippy>
                        <Tippy
                            content="Thông báo"
                            visible={visileNotification}
                            interactive
                            placement="bottom-start"
                            render={(attrs) => (
                                <div {...attrs} tabIndex="-1 " className={cx('Notification_box')}>
                                    <div className={cx('notification_action')}>
                                        <span>Thong bao</span>
                                        <Button to={config.routes.setting} className={cx('btn_setNoti')}>
                                            <SettingIcon />
                                        </Button>
                                    </div>
                                    <div className={cx('notification_display')}>
                                        <NotifiIcon className={cx('icon')} />
                                        <h3>Thong bao cua ban hien thi o day </h3>
                                        <span>
                                            Dang ki kenh yeu thich cua ban de nhan thong bao ve cac vido moi nhat{' '}
                                        </span>
                                    </div>
                                </div>
                            )}
                            onClickOutside={hideNoti}
                        >
                            <button
                                className={cx('notification_video')}
                                onClick={visileNotification ? hideNoti : showNoti}
                            >
                                <NotificationVideo />
                            </button>
                        </Tippy>
                        {/* User */}
                        <Menu
                            items={SettinsLoginItem}
                            visibleCheck={visible}
                            hideCheck={hide}
                            login={userLogin}
                            checkPlaceMent="left"
                        >
                            <button className={cx('user_account')} onClick={visible ? hide : show}>
                                <img
                                    src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg"
                                    alt="image-user"
                                />
                            </button>
                        </Menu>
                    </div>
                ) : (
                    <div className={cx('action_noLogin')}>
                        {/* Icon settings sidebar */}
                        <Menu items={SettingItems} visibleCheck={visible} hideCheck={hide} checkPlaceMent="bottom-end">
                            <button className={cx('setting_search')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className={cx('setting_icon')}
                                    onClick={visible ? hide : show}
                                />
                            </button>
                        </Menu>
                        <Link to="F8.com" className={cx('user-account_noLogin')}>
                            <FontAwesomeIcon icon={faCircleUser} className={cx('icon_user_noLogin')} />
                            <span className={cx('user_account-text_noLogin')}>SIGN IN</span>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;

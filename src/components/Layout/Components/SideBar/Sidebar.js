import {
    HomeIcon,
    DiscoverIcon,
    FollowingIcon,
    WatchedIcon,
    MyVideoIcon,
    ShortsVideoIcon,
    LibraryIcon,
    WatchLater,
    LikeIcon,
    SportsIcon,
    GameIcon,
    CreatorStudioIcon,
    YoutubeMusicICon,
    YoutubeKidIcon,
    YoutubeTvIcon,
    SettingIcon,
    HistoryReportIcon,
    HelpIcon,
    FeedBackIcon,
} from '~/components/Icon';
import config from '~/config';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Trang chủ" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Khám phá" to={config.routes.discover} icon={<DiscoverIcon />} />
                <MenuItem title="Shorts" to={config.routes.shorts} icon={<ShortsVideoIcon />} />
                <MenuItem title="Kênh đăng ký " to={config.routes.following} icon={<FollowingIcon />} />
                <div className={cx('group-one')}>
                    <MenuItem title="Thư viện  " to={config.routes.library} icon={<LibraryIcon />} />
                    <MenuItem title="Video đã xem" to={config.routes.watched} icon={<WatchedIcon />} />
                    <MenuItem title="Video của bạn" to={config.routes.myVideo} icon={<MyVideoIcon />} />
                    <MenuItem title="Xem sau" to={config.routes.watchLater} icon={<WatchLater />} />
                    <MenuItem title="Video đã thích" to={config.routes.videolikes} icon={<LikeIcon />} />
                </div>
                <div className={cx('group-one')}>
                    <h3 className={cx('title')}>KÊNH ĐĂNG KÝ </h3>
                    <MenuItem
                        title="F8 official"
                        check
                        to={config.routes.watched}
                        src="https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s88-c-k-c0x00ffffff-no-rj"
                        alt="F8 official"
                    />
                    <MenuItem
                        title="Program With Gio"
                        check
                        to={config.routes.watched}
                        src="https://yt3.ggpht.com/ytc/AMLnZu96cj8NMiuX4ncipmWLO0u7nJcrLkYvTlj6ePlq=s88-c-k-c0x00ffffff-no-rj"
                        alt="F8 official"
                    />
                    <MenuItem
                        title="Phạm Huy Hoàng"
                        check
                        to={config.routes.watched}
                        src="https://yt3.ggpht.com/ytc/AMLnZu_5e_MCPIF4pbx2t0BfeC3uN3DfZYDQHIiKxdO1mw=s88-c-k-c0x00ffffff-no-rj
                            "
                        alt="F8 official"
                    />
                </div>
                <div className={cx('group-one')}>
                    <h3 className={cx('title')}>KHÁM PHÁ </h3>
                    <MenuItem title="Trò chơi" to={config.routes.sports} icon={<SportsIcon />} />
                    <MenuItem title="Thể thao" to={config.routes.game} icon={<GameIcon />} />
                </div>
                <div className={cx('group-one')}>
                    <h3 className={cx('title')}>DỊCH VỤ KHÁC CỦA YOUTUBE </h3>
                    <MenuItem title="Creator Studio" to={config.routes.sports} icon={<CreatorStudioIcon />} />
                    <MenuItem title="Youtube Music" to={config.routes.game} icon={<YoutubeMusicICon />} />
                    <MenuItem title="Youtube Kids" to={config.routes.game} icon={<YoutubeKidIcon />} />
                    <MenuItem title="Youtube TV" to={config.routes.game} icon={<YoutubeTvIcon />} />
                </div>
                <div className={cx('group-one')}>
                    <MenuItem title="Cài đặt" to={config.routes.sports} icon={<SettingIcon />} />
                    <MenuItem title="Lịch sử báo cáo" to={config.routes.game} icon={<HistoryReportIcon />} />
                    <MenuItem title="Trợ giúp" to={config.routes.game} icon={<HelpIcon />} />
                    <MenuItem title="Phản hồi" to={config.routes.game} icon={<FeedBackIcon />} />
                </div>
                <div className={cx('group-one')}>
                    <div className={cx('group_footer')}>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Giới thiệu
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Báo chí
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Bản quyền
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Liên hệ với chúng tôi
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Người sáng tạo
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Quảng cáo
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Nhà phát triển
                        </Link>
                    </div>
                    <div className={cx('group_footer')}>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Điều khiển
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Quyền riêng tư
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Chính sách và an toàn
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Cách Youtube hoạt động
                        </Link>
                        <Link to={'/following'} className={cx('footer_sidebar')}>
                            Thử các tính năng mới
                        </Link>
                    </div>
                </div>
            </Menu>
        </aside>
    );
}
export default Sidebar;

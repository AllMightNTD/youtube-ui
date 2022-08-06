import React from 'react';
// import Slider from 'react-slick';
// // Import css files
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional

function SimpleSlider() {
    var DataActions = [
        {
            action: 'Tất cả',
            content: 'Tất cả',
        },
        {
            action: 'Danh sách kết hợp',
            content: 'Danh sách kết hợp',
        },
        {
            action: 'Âm nhạc',
            content: 'Âm nhạc',
        },
        {
            action: 'Trò chơi',
            content: 'Trò chơi',
        },
        {
            action: 'Trực tiếp',
            content: 'Trực tiếp',
        },
        {
            action: 'Hài kịch tình huống',
            content: 'Hài kịch tình huống',
        },
        {
            action: 'Bóng đá',
            content: 'Bóng đá',
        },
        {
            action: 'Phim hoạt hình',
            content: 'Phim hoạt hình',
        },
        {
            action: 'Thiên nhiên',
            content: 'Thiên nhiên',
        },
        {
            action: 'Mới tải lên gần đây',
            content: 'Mới tải lên gần đây',
        },
        {
            action: 'Đã xem ',
            content: 'Đã xem',
        },
        {
            action: 'Đề xuất mới',
            content: 'Đề xuất mới',
        },
    ];
    const cx = classNames.bind(styles);

    return (
        <div className={cx('container')}>
            <aside className={cx('header')}>
                {DataActions.map((item, index) => (
                    <button key={index} className={cx('action-item')}>
                        {item.content}
                    </button>
                ))}
            </aside>
        </div>
    );
}

export default SimpleSlider;

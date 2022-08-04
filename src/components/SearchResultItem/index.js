import { faMagnifyingGlass, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchResultItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('icon')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span className={cx('result')}>Ket qua 1 </span>
        </div>
    );
}

export default SearchItem;

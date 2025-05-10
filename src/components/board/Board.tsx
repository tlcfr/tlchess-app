import { getSquareColor } from '../../types/Color.ts';
import Square from '../square/Square.tsx';
import styles from './Board.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Board() {
  return (
    <div className={cx('container')}>
      {[...Array(8).keys()].map((rowIndex) => (
        <div key={rowIndex} className={cx('square-row')}>
          {[...Array(8).keys()].map((columnIndex) => (
            <Square
              key={rowIndex * 8 + columnIndex}
              color={getSquareColor(rowIndex, columnIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

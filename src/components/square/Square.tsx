import type { Color } from '../../types/Color.ts';
import styles from './Square.module.css';
import classNames from 'classnames/bind';
import type { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface SquareProps {
  color: Color;
  children?: ReactNode;
}

export default function Square(props: SquareProps) {
  const className = cx('square', props.color);

  return <div className={className}>{props.children}</div>;
}

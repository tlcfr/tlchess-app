export type Color = 'white' | 'black';

export function getSquareColor(rowIndex: number, columnIndex: number): Color {
  return (rowIndex + columnIndex) % 2 === 0 ? 'white' : 'black';
}

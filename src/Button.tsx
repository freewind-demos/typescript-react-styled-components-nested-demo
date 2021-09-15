import React, {FC} from 'react';

export type Props = {
  ttt: string
}

export const Button: FC<Props> = ({ttt}) => {
  return <button>{ttt}</button>
}

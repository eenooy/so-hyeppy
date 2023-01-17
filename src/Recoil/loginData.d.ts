import { atom } from 'recoil';
import { User } from '../Types/Types';

export const loginDataState = atom<User>({
  key: 'loginDataState',
  default: {
    id: '',
    password: '',
  },
});

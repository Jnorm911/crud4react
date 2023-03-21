// state/tableUpdateState.js
import { atom } from 'recoil';

export const tableUpdateState = atom({
  key: 'tableUpdate',
  default: false,
});

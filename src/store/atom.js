// src/store/atoms.js
import { atom } from 'recoil';

export const chatInputState = atom({
  key: 'chatInputState',
  default: '', // Default value for the chat input
});

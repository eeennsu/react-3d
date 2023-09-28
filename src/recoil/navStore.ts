import type { RecoilState } from 'recoil';
import { atom } from 'recoil';

export const navActiveState: RecoilState<string> = atom({
    key: 'navActiveState',
    default: ''
});

import type { RecoilState } from 'recoil';
import { atom } from 'recoil';

export const isDrawerOpenState: RecoilState<boolean> = atom({
    key: 'isDrawerOpenStore',
    default: false,
});



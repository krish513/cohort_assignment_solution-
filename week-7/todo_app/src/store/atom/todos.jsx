import { atom, selector, } from 'recoil';

export const todosAtom = atom({
    key : "todos",
    default : []
})
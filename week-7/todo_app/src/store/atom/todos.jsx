import { atom, selector, } from 'recoil';

export const todosAtom = atom({
    key : "todos",
    default : []
})

export const filterAtom = atom({
    key : "inputFilter",
    default : ""
})

export const filter = selector({
    key: "filter",
    get : ({get}) =>{
        const todos = get(todosAtom)
        const input = get(filterAtom)
        if(!input){
            return todos;
        }else{
            return todos.filter((x) => x.title.includes(input) || x.description.includes(input))
        }
    }
})
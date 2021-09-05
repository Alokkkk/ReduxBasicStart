// Action creator a function that helps to manage your actions

import { TOGGLE_TODO , ADD_TODO} from './actionType';

let idNextShow = 0;

export const addTodo = (text) => ({
    type:ADD_TODO,
    id:idNextShow++,
    text
});

export const toggleTodo = (id) => ({
    type : TOGGLE_TODO,
    id
});
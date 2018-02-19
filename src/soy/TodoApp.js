'use strict';

import templates from './TodoApp.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './TodoForm';
import './TodoItem';

import '../todo-app.scss';

class TodoApp extends Component {
    addTodo(newTodo) {
        this.todos = [...this.todos, newTodo];
    }

    handleTodoAdd(event) {
        this.addTodo(event.newTodo);
    }
    handleTodoClick(event){
        this.toggleTodo(event.index);
    }

    toggleTodo(clickedIndex) {
        this.todos = this.todos.map((todo, index) => {
            if(clickedIndex === index){
                todo.done = !todo.done;
            }
            return todo;
        });
    }
}
TodoApp.STATE = {
    todos: {
        value: [
            {
                done: false,
                title: 'Create Tasks',
                description: 'You should start by adding some new task below'
            },
            {
                done: false,
                title: 'Wash the dishes',
                description: 'Go to the sink, get the soap and do the job!'
            }
        ]
    }
}
Soy.register(TodoApp, templates);

export { TodoApp };
export default TodoApp;

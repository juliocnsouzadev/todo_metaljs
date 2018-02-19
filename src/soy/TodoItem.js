'use strict';

import templates from './TodoItem.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import TodoItemSoy from './TodoItem.soy.js';

class TodoItem extends Component {
    handleClick(event) {
        this.emit('todoClick', {
            index: this.index
        });
    }
}
TodoItem.STATE = {
    index:{
        value: null
    },

    todo: {
        value : null
    }
};
Soy.register(TodoItem, templates);

export { TodoItem };
export default TodoItem;

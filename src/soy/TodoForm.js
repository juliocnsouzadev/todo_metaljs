'use strict';

import templates from './TodoForm.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class TodoForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        if (this.value) {
            this.emit('todoAdd', {
                newTodo : {
                    title: this.value,
                    description : this.desc,
                    done : false
                }
            });
            this.value = '';
            this.desc = '';
        }
    }
    handleChangeValue(event) {
        this.value = event.target.value;
    }
    handleChangeDesc(event) {
        this.desc = event.target.value;
    }
}
TodoForm.STATE = {
    
        value : '', desc : ''
    
};
Soy.register(TodoForm, templates);

export { TodoForm };
export default TodoForm;

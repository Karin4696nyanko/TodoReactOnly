import React from 'react';
import { Component } from 'react';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: ' ',
            completion: false
        };
    }
    //todo�̒ǉ����\�b�h�̒�`
    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    //todo�̕ҏW���\�b�h�̐���

    //todo�̊����t���O�̏���
    //finshTodo = () => {
    //    const { todos, completion } = this.state;
    //    this.setState({
    //        todos:[...todos,completion]
    //    })
    //}

    //�o�^�{�^�����������Ƃ��̏���
    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }
    //�����{�^���������Ƃ��̏���
    addFin = (index) => {
        const { todos, name } = this.completion;
        this.setState({
            todos: [...todos.completion = true]

        })
    }
    //todo�̍폜���\�b�h�̒�`
    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }


    //HTML�ɂ��`��̂��߂�Render�֐��̍쐬
    render() {
        const { todos } = this.state;

        return (<div>
            <input type="text" onInput={this.onInput} />
            <button onClick={this.addTodo} > �o�^</button>

            <ul>
                {todos.map((todo, index) => <li keu={index}>
                    {todo}
                    <button onClick={() => { this.removeTodo(index) }}>�폜</button>
                    <button onClick={this.addFin}> ����</button>
                </li>)}
            </ul>
        </div>);

    }

}
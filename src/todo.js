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
    //todoの追加メソッドの定義
    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    //todoの編集メソッドの制作

    //todoの完了フラグの処理
    //finshTodo = () => {
    //    const { todos, completion } = this.state;
    //    this.setState({
    //        todos:[...todos,completion]
    //    })
    //}

    //登録ボタンを押したときの処理
    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }
    //完了ボタン押したときの処理
    addFin = (index) => {
        const { todos, name } = this.completion;
        this.setState({
            todos: [...todos.completion = true]

        })
    }
    //todoの削除メソッドの定義
    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }


    //HTMLによる描画のためのRender関数の作成
    render() {
        const { todos } = this.state;

        return (<div>
            <input type="text" onInput={this.onInput} />
            <button onClick={this.addTodo} > 登録</button>

            <ul>
                {todos.map((todo, index) => <li keu={index}>
                    {todo}
                    <button onClick={() => { this.removeTodo(index) }}>削除</button>
                    <button onClick={this.addFin}> 完了</button>
                </li>)}
            </ul>
        </div>);

    }

}
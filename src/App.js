import React, { Component } from "react";

import TodoInput from "./TodoInputs";
import "./index.css";

class App extends Component {
  constructor(props, checkbox) {
    super(props);
    // Вопрос на собеседовании
    this.checkbox = checkbox;
    this.state = {
      listItem: [],
      checccc: "stringmyyState",
    };

    this.checkbox = false;
    this.RefDescription = React.createRef();
    this.RefTitle = React.createRef();
  }

  addtoconsole = () => {
    console.log(this.checkbox);
    this.Checkbox();
    console.log(this.checkbox);
    if (this.checkbox == false) {
      return;
    }

    let date = new Date();

    let UserData = {
      id: (Math.random() * 10).toString(36),
      mydate: date.toLocaleTimeString(),
      classCheck: false,
      name: this.RefTitle.current.value,
      surname: this.RefDescription.current.value,
    };

    this.setState({
      listItem: [...this.state.listItem, UserData],
    });
    console.log(this.state.listItem);
    // !SetlistItems([...listItems, UserData]);
  };

  Enterdown = (e) => {
    if (e.keyCode == 13) {
      if (this.RefDescription.current.value && this.RefTitle.current.value) {
        this.addtoconsole();
        if (this.checkebox == true) {
          this.RefDescription.current.value = "";
          this.RefTitle.current.value = "";
        }
      } else if (this.RefDescription.current.value) {
        this.RefTitle.current.focus();
      } else if (this.RefTitle.current.value) {
        this.RefDescription.current.focus();
      }
    }
  };

  Checkbox = () => {
    if (this.RefTitle.current.value.length <= 3) {
      alert("Ведите больше символов");
      return (this.checkbox = false);
    } else {
      if (this.RefDescription.current.value.length <= 4) {
        alert("Введите больше символов");
        return (this.checkbox = false);
      } else if (this.RefDescription.current.value.length > 4) {
        return (this.checkbox = true);
      }
    }
  };

  //! была не забиндиная функция простая
  addTask = (e) => {
    e.preventDefault();

    this.addtoconsole();
    if (this.checkbox == true) {
      this.RefDescription.current.value = "";
      this.RefTitle.current.value = "";
    }
  };
  // ? Попробовать использовать методы масивов в стейтах таких как : (pop push slice )

  DeleteElem = (idenfication) => {
    // Тут нужно зделать фильт для удаления елемента
    this.setState({
      listItem: [
        ...this.state.listItem.filter((item) => item.id !== idenfication),
      ],
    });
  };

  // Стараемся зделать перезапись елемента в массиве
  EditDataDescription = (myidenfication) => {
    // SetlistItems([]);
  };
  // для изменения и зачеркивания етажа
  Columitem = (idenfication) => {
    // this.setState({
    //   listItem:[...this.state.listItem.map((item)=>item.id===idenfication)?{...item,complete:!}]
    // })
    // ...todos.map((todo) =>
    // todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
    // ),
    //! SetlistItems([...listItems.map((todo) => {})]);
    // ?Для добавления класа пока не будем писать этот функционал
  };
  render() {
    return (
      <div className="App">
        <div className="App-items">
          <TodoInput
            myprops={this.state.listItem}
            other="4"
            checkedd={this.state.checccc}
          />
          <div>
            <form className="MymainForm">
              <div>
                <input
                  className="inputTitle"
                  type="text"
                  placeholder="Title"
                  ref={this.RefTitle}
                  onKeyUp={this.Enterdown}
                />

                <input
                  className="inputMain"
                  type="text"
                  placeholder="Description"
                  ref={this.RefDescription}
                  onKeyUp={this.Enterdown}
                />
              </div>

              <button className="MyButton" onClick={this.addTask}>
                Add Todo
              </button>
              {/* добавления размера  */}
            </form>
            <ul>
              {this.state.listItem.map((item) => (
                <li
                  className={`Myli ${item.classCheck ? "ActiveMyli" : null}`}
                  onClick={() => {
                    this.Columitem(item.id);
                  }}
                  key={item.id}
                >
                  <div className="itemColum">
                    <div
                      className="ItemName"
                      onClick={() => this.EditDataDescription(item.id)}
                    >
                      {item.name}
                    </div>
                    <div
                      className="ItemSurname"
                      onClick={() => this.EditDataDescription(item.id)}
                    >
                      {item.surname}
                    </div>
                  </div>
                  <div>
                    <div
                      className="ItemDelete"
                      onClick={() => this.DeleteElem(item.id)}
                    >
                      ×
                    </div>
                    <div className="Mydate">({item.mydate})</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

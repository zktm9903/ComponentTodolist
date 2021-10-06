import Component from "../core/Component.js";
import clock from "./clock.js";
import todo from "./todo.js";

export default class Items extends Component {

  setup () {
    new clock();
  }

  template () {
    return `
    <div class="topOfMemoBox">
        <div class="title">
            <p>To-Do List</p>
        </div>
        <p id="current"></p>
    </div>

    <div id="ListBox"></div>

    <div id="inputBox">
        <input type="text" name="toDotext" id="toDotext">
        <img id="removeButton" src="./src/img/remove.png">
    </div>
    `
  }

  mounted(){
    //console.log('mounted');
    new todo(document.getElementById('ListBox'));
    //console.log(document.getElementById('ListBox'));
  }

  setState(){};

}
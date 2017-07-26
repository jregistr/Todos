import {Component, Input, OnInit} from '@angular/core';
import {TodoList} from "../../../../models/models";
import {EventEmitterService} from "../../../../services/event-emitter.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: TodoList = null;

  constructor() {
  }

  ngOnInit() {
  }

  onTrashClicked(): void {
    EventEmitterService.get("delete-todo-list").emit(this.todoList);
  }

}

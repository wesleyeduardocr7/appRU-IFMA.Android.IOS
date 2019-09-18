import { Component, OnInit } from '@angular/core';
import { TaskI} from '../../models/task.interface';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  segundaAlmoco: TaskI[];

  segundaJanta: TaskI[];

  today = Date.now();

  date = new Date();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => this.segundaAlmoco = res);
    this.todoService.getTodosJanta().subscribe(res => this.segundaJanta = res);
  }

  segmentChanged(ev: any) {
    console.log(ev);
  }

}

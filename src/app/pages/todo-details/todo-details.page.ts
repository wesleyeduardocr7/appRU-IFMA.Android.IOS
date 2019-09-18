import { Component, OnInit } from '@angular/core';
import { TaskI} from '../../models/task.interface';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  segundaAlmoco: TaskI = {
    salada: '',
    principal: '',
    guarnicao: '',
    cereal: '',
    leguminosa: '',
    vegetariano: '',
    fruta: '',

  };

  segundaAlmocoId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.segundaAlmocoId = this.route.snapshot.params['id'];
    if (this.segundaAlmocoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.todoService.getTodo(this.segundaAlmocoId).subscribe(todo => {
      loading.dismiss();;
      this.segundaAlmoco = todo;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();

    if (this.segundaAlmocoId) {
      this.todoService.updateTodo(this.segundaAlmoco, this.segundaAlmocoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    } else {
      this.todoService.addTodo(this.segundaAlmoco).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }
  async onRemoveTodo(idTodo: string) {
    this.todoService.removeTodo(idTodo);
  }
}



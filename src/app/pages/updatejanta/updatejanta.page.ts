import { Component, OnInit } from '@angular/core';
import { TaskI} from '../../models/task.interface';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-updatejanta',
  templateUrl: './updatejanta.page.html',
  styleUrls: ['./updatejanta.page.scss'],
})
export class UpdatejantaPage implements OnInit {

  segundaJanta: TaskI = {
    salada: '',
    principal: '',
    guarnicao: '',
    cereal: '',
    leguminosa: '',
    vegetariano: '',
    fruta: '',

  };

  segundaJantaId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.segundaJantaId = this.route.snapshot.params['id'];
    if (this.segundaJantaId) {
      this.loadTodoJanta();
    }
  }

  async loadTodoJanta() {
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.todoService.getTodoJanta(this.segundaJantaId).subscribe(todo => {
      loading.dismiss();;
      this.segundaJanta = todo;
    });
  }

  async saveTodoJanta() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();

    if (this.segundaJantaId) {
      this.todoService.updateTodoJanta(this.segundaJanta, this.segundaJantaId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    } else {
      this.todoService.addTodoJanta(this.segundaJanta).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }
  async onRemoveTodo(idTodo: string) {
    this.todoService.removeTodo(idTodo);
  }
}

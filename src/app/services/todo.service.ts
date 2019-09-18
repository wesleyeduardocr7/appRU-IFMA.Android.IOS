import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private segundaAlmocoCollection: AngularFirestoreCollection<TaskI>;
  private segundaAlmoco: Observable<TaskI[]>;

  
  private segundaJantaCollection: AngularFirestoreCollection<TaskI>;
  private segundaJanta: Observable<TaskI[]>;


  constructor(db:AngularFirestore) { 


    this.segundaAlmocoCollection = db.collection<TaskI>('segundaAlmoco');
    this.segundaJantaCollection = db.collection<TaskI>('segundaJanta');
   
    this.segundaAlmoco = this.segundaAlmocoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

    this.segundaJanta = this.segundaJantaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );


   

  }

  
  getTodos(){
    return this.segundaAlmoco;
  }

  getTodosJanta(){
    return this.segundaJanta;
  }





  getTodo(id: string){
    return this.segundaAlmocoCollection.doc<TaskI>(id).valueChanges();
  }

  getTodoJanta(id: string){
    return this.segundaJantaCollection.doc<TaskI>(id).valueChanges();
  }



  


  updateTodo(todo:TaskI, id: string){
    return this.segundaAlmocoCollection.doc(id).update(todo);
  }

  updateTodoJanta(todo:TaskI, id: string){
    return this.segundaJantaCollection.doc(id).update(todo);
  }






  
  addTodo(todo: TaskI){
    return this.segundaAlmocoCollection.add(todo);
  }

  addTodoJanta(todo: TaskI){
    return this.segundaJantaCollection.add(todo);
  }





  
  removeTodo(id: string){
    return this.segundaAlmocoCollection.doc(id).delete();
  }

  removeTodoJanta(id: string){
    return this.segundaJantaCollection.doc(id).delete();
  }

  


}

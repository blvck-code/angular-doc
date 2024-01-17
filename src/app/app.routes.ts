import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {FormComponent} from "./components/form/form.component";

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'form',
    component: FormComponent
  }
];

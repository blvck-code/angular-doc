import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../services/calculator';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  imports: [],
  template: `
    <p>Title: {{ taskTitle }}</p>
    @if (isAdmin) {
    <button>Erase database</button>
    } @else {
    <p>You are not authorized.</p>
    } @for(item of ingredientList; track item.name) {
    <li>{{ item.name }} - {{ item.quantity }}</li>
    }
    <p>Sum: {{ totalCost }}</p>

    <button (click)="transfromText()">Abracadabra!</button>
  `,
})
export class TodoListItemComponent {
  taskTitle = 'Read cup of coffee';
  isComplete = false;
  isAdmin = false;

  private calculatorSrv = inject(CalculatorService);
  totalCost = this.calculatorSrv.add(50, 25);

  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }

  transfromText() {
    this.taskTitle = this.taskTitle.toUpperCase();
  }
}

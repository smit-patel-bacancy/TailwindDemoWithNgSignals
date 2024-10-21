import { Component, computed, effect, signal } from '@angular/core';
import { NotificationServiceService } from 'src/services/notification-service.service';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list-signals',
  templateUrl: './todo-list-signals.component.html',
  styleUrls: ['./todo-list-signals.component.scss']
})
export class TodoListSignalsComponent {
  public todoList = signal<Todo[]>([]);
  public nextId = signal(1);
  public totalRemainingTasks = computed(() => this.todoList().length);

  constructor(private notificationService: NotificationServiceService) {

    effect(() => {
      console.warn('totalRemainingTasks count is: ' + this.totalRemainingTasks());

      if (this.totalRemainingTasks() !== 0) {
        this.notificationService.showNotification('Task List is Updated...👍 Total Tasks in the list is: ' + this.totalRemainingTasks());
      } else {
        this.notificationService.showNotification('Task List is Empty... You are work Free... Enjoy Day... 😀');
      }

      setTimeout(() => {
        this.notificationService.closeNotification();
      }, 2000);
    });

  }

  public addTodo(text: string): void {
    if (text.trim()) {
      this.todoList.update(todoList => [
        ...todoList,
        { id: this.nextId(), text, completed: false }
      ]);
      this.nextId.update(id => id + 1);
    }
  }

  public toggleTodo(id: number): void {
    this.todoList.update(todoList =>
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  public removeTodo(id: number): void {
    this.todoList.update(todoList => todoList.filter(todo => todo.id !== id));
  }

}

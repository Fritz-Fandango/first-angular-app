import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  @Output() addTask = new EventEmitter<string>();

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.isAddingTask = true;
    this.addTask.emit();
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}

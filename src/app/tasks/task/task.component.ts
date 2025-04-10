import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { type Task } from './task.model';

@Component({
    selector: 'app-task',
    imports: [CardComponent, DatePipe],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    return this.tasksService.deleteTask(this.task.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.scss'],
})
export class TasksDetailComponent implements OnInit {
  task: Task;

 constructor(
  private route: ActivatedRoute,
  private taskService: TaskService
) {
    
}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(id).subscribe((task) => {
      this.task = task;
    });
  }
}

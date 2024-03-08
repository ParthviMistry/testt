import { Component } from '@angular/core';
import { Todo } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent {
  id: any | undefined;
  todoData: Todo | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoData = new Todo();

    this.apiService.getTodoById(this.id).subscribe((data) => {
      this.todoData = data;
    });
  }
}

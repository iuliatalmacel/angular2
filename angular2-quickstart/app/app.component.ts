import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
    selector: 'my-app',
    template: '<div><input type="text" #myValue><button (click)="onClick(myValue.value)">My First Angular 2 App</button></div>'
})
export class AppComponent {
constructor(public todoService:TodoService){
	this.todoService = todoService
}
	onClick(value){
		this.todoService.todos.push(value);
		console.log(this.todoService);
	}
 }

import {Component, Input} from '@angular/core';

@Component({
	selector: 'book',
    templateUrl: 'book.component.html',
    styleUrls: [ 'bible.css', 'book.css' ],
	moduleId: 'app/bible/'
})
export class BookComponent {
	@Input() book; 
}
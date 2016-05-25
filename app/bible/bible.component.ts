import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {BibleService} from './bible.service';
import {BookComponent} from './book.component';

@Component({
	templateUrl: 'bible.component.html',
    providers: [BibleService],
    directives: [BookComponent, RouterLink],
	styleUrls: [ 'bible.css' ],
	moduleId: 'app/bible/'
})
export class BibleComponent implements OnInit {
	books: any;
	groups: any[];

    constructor(private _service: BibleService) {
	}

	ngOnInit() {
		this.books = this._service.getBooks()
		this.groups = []
		var group
		for (var book of this.books.nt) {
			var fullGroupName = book.group + book.subGroup
			if (!group || group.fullName != fullGroupName) {
				group = { name: book.group, fullName: fullGroupName, books: [] }
				this.groups.push(group)
			}
			group.books.push(book)
		}

		//this._service.getBooks()
		//	.subscribe(books => this.books = books);
	}
}
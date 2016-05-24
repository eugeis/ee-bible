import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {BibleService} from './bible.service';

@Component({
    templateUrl: 'app/bible/bible.component.html',
    providers: [BibleService],
    directives: [RouterLink]
})
export class BibleComponent implements OnInit {
    books: any[];
    
    constructor(private _service: BibleService){
	}

	ngOnInit(){
		this.books = this._service.getBooks()
		//this._service.getBooks()
		//	.subscribe(books => this.books = books);
	} 
}
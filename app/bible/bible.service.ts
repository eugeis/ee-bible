import {Injectable} from '@angular/core';

@Injectable()
export class BibleService {

	getBooks() {
		console.log('getBooks called');

		var json = '{ "books" : [' +
			'{ "name": "Evangelium nach Matthäus",  "abbr":"Mt",  "chapters":28, "verses":1071, "year": 57, "yearTo": 59, "author": "Matthäus", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Evangelium nach Markus",	  "abbr":"Mk",  "chapters":16, "verses":678, 	"year": 50, 							"author": "Mark", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Evangelium nach Lukas",	 	  "abbr":"Lk",  "chapters":24, "verses":1151, "year": 58, "yearTo": 65, "author": "Lukas", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Evangelium nach Johannes", "abbr":"Joh", "chapters":21, "verses":879, 	"year": 85, "yearTo": 90, "author": "Johannes", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Apostelgeschichte",	 			 "abbr":"Apg", "chapters":28, "verses":1007, 	"year": 61, "yearTo": 64, "author": "Lukas", "testament": "NT", "group": "history" },' +
			'{ "name": "Römer",	 									 "abbr":"Röm", "chapters":16, "verses":433, 	"year": 56, "yearTo": 58, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Korinter",	"num": 1, 					"abbr":"Kor", "chapters":16, "verses":437, 	"year": 55, 							"author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Korinter",	"num": 2, 					"abbr":"Kor", "chapters":13, "verses":257, 	"year": 55, "yearTo": 57, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Galater",	 								 "abbr":"Gal", "chapters":6,  "verses":149, 	"year": 48, "yearTo": 55, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Epheser",	 								 "abbr":"Eph", "chapters":6, "verses":155, 	  "year": 60, "yearTo": 63, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Philipper",	 							"abbr":"Phil", "chapters":4, "verses":104, 		"year": 61,  							"author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Kolosser",	 						   "abbr":"Kol", "chapters":4, "verses":95, 		"year": 58, "yearTo": 62, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Thessalonicher",	"num": 1,	"abbr":"Thess", "chapters":5, "verses":89, 	  "year": 50,               "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Thessalonicher",	"num": 2,	"abbr":"Thess", "chapters":3, "verses":47, 	  "year": 51, "yearTo": 52, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Timotheus",	"num": 1, 				"abbr":"Tim", "chapters":6, "verses":113, 	  "year": 62, "yearTo": 66, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Timotheus",	"num": 2, 				"abbr":"Tim", "chapters":4, "verses":83, 	  "year": 67,               "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Titus",	 									 "abbr":"Tit", "chapters":3, "verses":46,   	"year": 66, "yearTo": 66, "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Philemon",	 							"abbr":"Phlm", "chapters":1, "verses":25, 	  "year": 60,               "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Petrus",	 "num": 1,					 "abbr":"Petr", "chapters":5, "verses":105, 		"year": 60, "yearTo": 65, "author": "Petrus", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Petrus",	 "num": 2,					 "abbr":"Petr", "chapters":3, "verses":61, 		"year": 65, "yearTo": 68, "author": "Petrus", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Johannes",	"num": 1, 					 "abbr":"Joh", "chapters":5, "verses":105, 	"year": 85, "yearTo": 95, "author": "Johannes", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Johannes",	"num": 2, 					 "abbr":"Joh", "chapters":1, "verses":13, 		"year": 85, "yearTo": 95, "author": "Johannes", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Johannes",	"num": 3, 					 "abbr":"Joh", "chapters":1, "verses":14, 		"year": 85, "yearTo": 95, "author": "Johannes", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Hebräer",	 						  	"abbr":"Hebr", "chapters":13, "verses":303, 	"year": 65,               										"testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Jakobus",	 								 "abbr":"Jak", "chapters":5, "verses":108, 	  "year": 45,  							 "author": "Jakobus", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Judas",	 					 "abbr":"Jud", "chapters":1, "verses":25, 		"year": 60, "yearTo": 80, "author": "Judas", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Offenbarung",	 					 "abbr":"Off", "chapters":22, "verses":404, 		"year": 90, "yearTo": 95, "author": "Johannes", "testament": "NT", "group": "prophetic" }' +

			']}';

		//console.log(json);

		var ret = JSON.parse(json).books;
		return ret
	}
}
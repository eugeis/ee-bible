import {Injectable} from '@angular/core';

@Injectable()
export class BibleService {

	getBooks() {

		var json = '{ ' +
			'"info" : {' +
				'"legende" : { "name": "legende","abbr":"Abkr", "chapters":"Kap", "verses":"Verse", "year": "Jahr",  "keyWord": "Schlüsselwort", "mainIdea": "Hauptthema", "keyVerse": "Schl. Vers", "author": "Autor", "testament": "NT", "group": "legende" },' +
				'"groups" : { ' + 
					'"gospel": { "name": "Evangelien" },' +
					'"history": { "name": "Geschichtliche" },' +
					'"paulEpistels": { "name": "Paulusbriefe" },' +
					'"commonEpistels": { "name": "Allgemeine Briefe" },' +
					'"revelation": { "name": "Die Offenbarung des Johannes" },' +
					'"tora": { "name": "Die Fünf Bücher Mose" },' +
					'"wisdom": { "name": "Weisheitsbücher" },' +
					'"majorProphets": { "name": "Große Propheten" },' +
					'"minorProphets": { "name": "Kleine Propheten" }' +
				'}' +
			'},' +
			'"nt" : [' +
			'{ "name": "Evangelium nach Matthäus",  "abbr":"Mt",  "chapters":28, "verses":1071, "year": 57, "yearTo": 59,  "keyWord": "Königreich", "mainIdea": "Jesus: König u. Messias", "keyVerse": "1:1", "author": "Matthäus", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Evangelium nach Markus",	  "abbr":"Mk",  "chapters":16, "verses":678, 	"year": 50, 							 "keyWord": "Handeln", "mainIdea": "Jesus: der Knecht", "keyVerse": "10:45", "author": "Mark", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Evangelium nach Lukas",	 	  "abbr":"Lk",  "chapters":24, "verses":1151, "year": 58, "yearTo": 65,  "keyWord": "Menschensohn", "mainIdea": "Jesus: v. Menschenso. u. Erretter", "keyVerse": "19:10; 1:4", "author": "Lukas", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Evangelium nach Johannes", "abbr":"Joh", "chapters":21, "verses":879, 	"year": 85, "yearTo": 90,  "keyWord": "Glaube", "mainIdea": "Jesus: Sohn Gottes", "keyVerse": "21:20-21", "author": "Johannes", "testament": "NT", "group": "gospel" },' +
			'{ "name": "Apostelgeschichte",	 			 "abbr":"Apg", "chapters":28, "verses":1007, 	"year": 61, "yearTo": 64,  "keyWord": "Taten", "mainIdea": "Gemeinde durch HG", "keyVerse": "1:8", "author": "Lukas", "testament": "NT", "group": "history" },' +
			'{ "name": "Römer",	 									 "abbr":"Röm", "chapters":16, "verses":433, 	"year": 56, "yearTo": 58,  "keyWord": "Gerechtigkeit", "mainIdea": "Gerechtigkeit durch Glauben", "keyVerse": "5:1; 3:23-24", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Korinter",	"num": 1, 					"abbr":"Kor", "chapters":16, "verses":437, 	"year": 55, 							 "keyWord": "Ordnung", "mainIdea": "Satzung der Gemeinde", "keyVerse": "3:11;16:13-14", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Korinter",	"num": 2, 					"abbr":"Kor", "chapters":13, "verses":257, 	"year": 55, "yearTo": 57,  "keyWord": "Trost u. Dienst", "mainIdea": "Wesen des geistlichen Dienstes", "keyVerse": "6:4-8", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Galater",	 								 "abbr":"Gal", "chapters":6,  "verses":149, 	"year": 48, "yearTo": 55,  "keyWord": "Glauben", "mainIdea": "Gerechtigkeit durch Glauben", "keyVerse": "3:1-3; 5:1", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Epheser",	 								 "abbr":"Eph", "chapters":6, "verses":155, 	  "year": 60, "yearTo": 63,  "keyWord": "Gemeinde", "mainIdea": "Gemeinde", "keyVerse": "1:22-23", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Philipper",	 							"abbr":"Phil", "chapters":4, "verses":104, 		"year": 61,  							 "keyWord": "Freude", "mainIdea": "Freude", "keyVerse": "4:4", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Kolosser",	 						   "abbr":"Kol", "chapters":4, "verses":95, 		"year": 58, "yearTo": 62,  "keyWord": "Majestät", "mainIdea": "Majestät Christi", "keyVerse": "1:15-18; 2:9", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Thessalonicher",	"num": 1,	"abbr":"Thess", "chapters":5, "verses":89, 	  "year": 50,                "keyWord": "Wiederkunft", "mainIdea": "Wiederkunft Christi", "keyVerse": "5:1-3", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Thessalonicher",	"num": 2,	"abbr":"Thess", "chapters":3, "verses":47, 	  "year": 51, "yearTo": 52,  "keyWord": "Wiederkunft", "mainIdea": "Wiederkunft Christi", "keyVerse": "2:7-12", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Timotheus",	"num": 1, 				"abbr":"Tim", "chapters":6, "verses":113, 	  "year": 62, "yearTo": 66,  "keyWord": "Vorbild", "mainIdea": "Pastoraler Dienst", "keyVerse": "3:15; 4:16", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Timotheus",	"num": 2, 				"abbr":"Tim", "chapters":4, "verses":83, 	  "year": 67,                "keyWord": "Treue", "mainIdea": "Treue, Geistliches Testament v. Paulus", "keyVerse": "4:6-8", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Titus",	 									 "abbr":"Tit", "chapters":3, "verses":46,   	"year": 66, "yearTo": 66,  "keyWord": "Vorbild", "mainIdea": "Pastoraler Dienst", "keyVerse": "1:5", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Philemon",	 							"abbr":"Phlm", "chapters":1, "verses":25, 	  "year": 60,                "keyWord": "Annehmen", "mainIdea": "Veränderung", "keyVerse": "1:1", "author": "Paulus", "testament": "NT", "group": "paulEpistels" },' +
			'{ "name": "Hebräer",	 						  	"abbr":"Hebr", "chapters":13, "verses":303, 	"year": 65, "keyWord": "Besser", "mainIdea": "Besser", "keyVerse": "8:6",								"testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Jakobus",	 								 "abbr":"Jak", "chapters":5, "verses":108, 	  "year": 45,  							  "keyWord": "Werke", "mainIdea": "Glaube u. Werke", "keyVerse": "2:26", "author": "Jakobus", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Petrus",	 "num": 1,					 "abbr":"Petr", "chapters":5, "verses":105, 		"year": 60, "yearTo": 65,  "keyWord": "Leiden", "mainIdea": "Leiden", "keyVerse": "4:13", "author": "Petrus", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Petrus",	 "num": 2,					 "abbr":"Petr", "chapters":3, "verses":61, 		"year": 65, "yearTo": 68,  "keyWord": "Erinnern", "mainIdea": "Erkenntnis", "keyVerse": "1:3", "author": "Petrus", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Johannes",	"num": 1, 					 "abbr":"Joh", "chapters":5, "verses":105, 	"year": 85, "yearTo": 95,  "keyWord": "Gemeinschaft", "mainIdea": "Gemeinschaft, Wissen, Liebe", "keyVerse": "1:7", "author": "Johannes", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Johannes",	"num": 2, 					 "abbr":"Joh", "chapters":1, "verses":13, 		"year": 85, "yearTo": 95,  "keyWord": "Wahrheit", "mainIdea": "Wahrheit", "keyVerse": "4:3", "author": "Johannes", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Johannes",	"num": 3, 					 "abbr":"Joh", "chapters":1, "verses":14, 		"year": 85, "yearTo": 95,  "keyWord": "Gehilfen", "mainIdea": "Treue", "keyVerse": "5", "author": "Johannes", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Judas",	 					 "abbr":"Jud", "chapters":1, "verses":25, 		"year": 60, "yearTo": 80,  "keyWord": "Bewahrt", "mainIdea": "Bewahrung", "keyVerse": "1:3-4", "author": "Judas", "testament": "NT", "group": "commonEpistels" },' +
			'{ "name": "Offenbarung",	 					 "abbr":"Off", "chapters":22, "verses":404, 		"year": 90, "yearTo": 95,  "keyWord": "Vollendung", "mainIdea": "Konflikt u. Vollendung", "keyVerse": "1:8", "author": "Johannes", "testament": "NT", "group": "revelation" }' +
			']}';

		//console.log(json);

		var ret = JSON.parse(json);
		return ret
	}
}
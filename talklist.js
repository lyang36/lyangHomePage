
/************Put computer science pubs here****************/
var talkList = [
	talkEntry("Streaming Symmetric Norms via Measure Concentration", "12/2015", "MIT", "Theory Seminar", ""),
	talkEntry("Streaming Symmetric Norms via Measure Concentration", "02/2016", "DIMACS", "Theory Seminar", "")
	//talkEntry("Streaming Symmetric Norms via Measure Concentration", "02/2016", "DIMACS", "Theory Seminar", "")
];


function talkEntry(title, time, place, events, slides){
	return '<li>' + place + ": " + title + " (" + events + " " + time + ") " + 
		(slides=="" ? "" : (', <a href=' + slides + '>SLIDES </a>')) 
		+'</li>';
};

document.write('<ul class="nobullet">');
for (i = 0; i < talkList.length; i++) { 
	document.write(talkList[i]);
}
document.write('</ul>');

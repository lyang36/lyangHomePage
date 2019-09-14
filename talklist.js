
/************Put computer science pubs here****************/
var talkList = [
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "04/2019", "CS Seminar", "UT Dallas", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "04/2019", "ML Seminar", "TTIC", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "03/2019", "IE Seminar", "UIUC", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "03/2019", "CS Seminar", "PSU", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "03/2019", "iDDA Seminar", "CUHK-SZ", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "03/2019", "CS Seminar", "HKUST", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "03/2019", "ECE Seminar", "UC Davis", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "02/2019", "Stats Seminar", "Purdue University", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "02/2019", "IE Seminar", "UPitt", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "02/2019", "ECE Seminar", "University of Michigan", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "02/2019", "Biz Seminar", "NUS Biz School", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "02/2019", "ECE Seminar", "UCLA", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "01/2019", "SDSC Seminar", "CityU of Hongkong", ""),
  talkEntry("Learn Policy Optimally via Efficiently Utilizing Data", "01/2019", "CS Seiminar", "UC Santa Barbara", ""),
  talkEntry("Near-Optimal Time and Sample Complexities for for Solving Discounted Markov Decision Process with a Generative Mode", "11/2018", "INFORMS", "Phoniex", ""),
  talkEntry("Near-Optimal Time and Sample Complexities for for Solving Discounted Markov Decision Process with a Generative Mode", "10/2018", "IBM", "Seiminar", ""),
  talkEntry("Clustering High Dimensional Dynamic Data Streams", "08/2018", "Chinese Academy of Sciences", "Seiminar", ""),
  talkEntry("Clustering High Dimensional Dynamic Data Streams", "08/2018", "Shanghai University of Finance and Economics", "Seiminar", ""),
  talkEntry("Variance Reduction Methods for Sublinear Reinforcement Learning", "03/2018", "Deepmind", "Seiminar", ""),
  talkEntry("Clustering High Dimensional Dynamic Data Streams", "03/2018", "University of Warrick", "Workshop of Data Summarization", ""),
  talkEntry("Matrix Norms in Data Streams: Faster, Multi-Pass and Row-Order", "07/2018", "ICML", "Stockholm", ""),
  //talkEntry("Clustering High Dimensional Dynamic Data Streams", "03/2018", "University of Warrick", "Workshop of Data", ""),
  talkEntry("Clustering High Dimensional Dynamic Data Streams", "02/2018", "Carnegie Mellon University", "Theory Lunch", ""),
  talkEntry("Clustering High Dimensional Dynamic Data Streams", "11/2017", "Columbia University", "Theory Lunch", ""),
  talkEntry("Online Multiview Learning: Dropping Convexity for Better Efficiency", "08/2017", "ICML", "Sydney", ""),
  talkEntry("Streaming Symmetric Norms via Measure Concentration", "06/2017", "STOC", "Montreal", ""),
  talkEntry("Streaming Symmetric Norms via Measure Concentration", "11/2016", "Berkeley", "Theory Lunch", ""),
  talkEntry("Streaming Symmetric Norms via Measure Concentration", "11/2016", "Google Research", "Seminar", ""),
  talkEntry("Streaming Symmetric Norms via Measure Concentration", "09/2016", "University of Maryland", "Theory Seminar", ""),
	talkEntry("Streaming Symmetric Norms via Measure Concentration", "02/2016", "Rutgers University", "DIMACS Theory Seminar", ""),
  talkEntry("Streaming Symmetric Norms via Measure Concentration", "12/2015", "Massachusetts Institute of Technology", "Theory Seminar", "")
];


function talkEntry(title, time, place, events, slides){
	return '<li><b>' + place + "</b>: <i>" + title + "</i> (" + events + " " + time + ") " + 
		(slides=="" ? "" : (', <a href=' + slides + '>SLIDES </a>')) 
		+'</li>' ;
};

document.write('<ul>');
for (i = 0; i < talkList.length; i++) { 
	document.write(talkList[i]);
}
document.write('</ul>');

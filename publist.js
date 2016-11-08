
/************Put computer science pubs here****************/
var computerSciencePublist = [
	pubEntry('Sketches for Matrix Norms: Faster, Smaller and More General',
		'2016',
		'Manuscript',
		'Braverman, V., Stephen, C., Krauthgamer, R.',
		"https://arxiv.org/abs/1609.05885"
	),
	pubEntry('Clustering High Dimensional Dynamic Data Streams',
		'2016',
		'Manuscript',
		'Braverman, V., Frahling, G., Lang H., Sohler C.',
		""
	),
	pubEntry('Streaming Symmetric Norms via Measure Concentration',
		'2016',
		'Manuscript',
		'Blasiok, J. Braverman, V., Chestnut, S., Krauthgamer, R.',
		"http://arxiv.org/pdf/1511.01111.pdf"
	),
	pubEntry('Streaming Algorithms for Halo Finders ',
		'2015',
		'eScience',
		'Liu, Z., Ivkin, N, Neyrinck, M., Lemson, G., Szalay, A., Braverman, V., Budavari, T., Burns, T. and Wang, X.',
		"http://www.cs.jhu.edu/~zliu39/papers/escience15.pdf"
	),
	
	pubEntry('Streaming Space Complexity of Nearly All Functions of One Variable on Frequency Vectors' ,
		'2016',
		'PODS',
		'Braverman, V., Chestnut, S., Woodruff, D.',
		"http://arxiv.org/pdf/1601.07473.pdf"
	),

	pubEntry('New Bounds for the CLIQUE-GAP Problem using Graph Decomposition Theory' ,
		'2015',
		'MFCS',
		'Braverman, V., Liu, Z., Singh, T. Vinodchandran, N. V.',
		"http://www.cs.jhu.edu/~zliu39/papers/mfcs15.pdf"
	),
	
	pubEntry('New Time-Space Upperbounds for Directed Reachability in High-genus and H-minor-free Graphs' ,
		'2014',
		'FSTTCS',
		'Chakraborty, D., Pavan, A., Tewari, R. Vinodchandran, N. V.',
		"http://drops.dagstuhl.de/opus/volltexte/2014/4873/pdf/49.pdf"
	)
];

/*********Astronomy Publication Here***********/
var astronomyPublist = [
	pubEntry('Warmth elevating the depths: shallower voids with warm dark matter',
			'2015',
			'MNRAS',
			'Neyrinck, M., Aragon-Calvo, M., Falck, B., & Silk, J.',
			"http://arxiv.org/pdf/1411.5029.pdf"
	),
		
	pubEntry('Dark matter contribution to Galactic diffuse gamma ray emission',
			'2014',
			'Physical Review D',
			'Silk, J., Szalay, A., Wyse, R., Bozek, B., & Madau, P.',
			"https://arxiv.org/pdf/1312.0006.pdf"
	),
	
	pubEntry('The hierarchical nature of the spin alignment of dark matter haloes in filaments',
			'2013',
			'MNRAS',
			'Aragon-Calvo, M. F',
			"http://arxiv.org/pdf/1303.1590.pdf"
	),
	
	pubEntry('Ringing the initial Universe: the response of overdensity and transformed-density power spectra to initial spikes',
			'2013',
			'MNRAS',
			'Neyrinck, M.',
			"http://mnras.oxfordjournals.org/content/433/2/1628.short"
	),
	
	pubEntry('A GPU-Based Visualization Method for Computing Dark Matter Annihilation Signal',
			'2013',
			'ADASS',
			'Szalay, A.',
			""
	),
	
	pubEntry('Optical Study of Ultra-Luminous X-ray Source NGC1313 X-1',
			'2011',
			'Astrophysical Journal',
			'Feng, H., Kaaret, P.',
			"http://arxiv.org/pdf/1103.5281.pdf"
	)
];

/**publication List for fun **/
var forFunList=[
	pubEntry('Harmonicare: a novel wind instrument easy to learn and play',
			'2011',
			'Ubicomp',
			'Zhang, X, Wang Y., and Yi, H., Tao P.',
			"http://dl.acm.org/citation.cfm?id=2030189"
	)
]



function pubEntry(title, year, journual, coAuthors, pdfLink){
	return '<article> \
				<div class="inner"> \
				<ul class="nobullet"> \
					<li><b><i>' + title + ' (' + journual + ', '  + year + ')</i></b></li> \
					<li>With ' + coAuthors + '</li>' 
					+
					(pdfLink == "" ? "" : '<li><a href="'+pdfLink + '">PDF</a></li>')
				+
				'</ul> \
				</div> \
			</article>'
};


document.write('\
\
	<div class="features"> \
	<h4>Computer Science</h4> \
');

for (i = 0; i < computerSciencePublist.length; i++) { 
	document.write(computerSciencePublist[i]);
}

document.write('\
	<h4>Physics and Astronomy</h4> \
');

for (i = 0; i < astronomyPublist.length; i++) { 
	document.write(astronomyPublist[i]);
}


document.write('\
	<h4>For Fun</h4>'
);

for (i = 0; i < forFunList.length; i++) { 
	document.write(forFunList[i]);
}

document.write('\
</div> \
');

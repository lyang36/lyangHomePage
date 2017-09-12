
/***********************Preprints*********************/
var preprintList = [
	pubEntry('Dynamic Partition of Complex Networks',
		'2017',
		'Manuscript',
		'Vladimir Braverman, Tuo Zhao, Mengdi Wang',
		'https://arxiv.org/pdf/1705.07881.pdf'
	),
	
	pubEntry('Sketches for Matrix Norms: Faster, Smaller and More General',
		'2016',
		'Manuscript',
		'Braverman, V., Stephen, C., Krauthgamer, R. (Alphabetic order)',
		"https://arxiv.org/abs/1609.05885"
	),
	
	pubEntry('The Physical Systems Behind Optimization Algorithms',
		'2016',
		'Manuscript',
		'R. Arora, V. Braverman, Tuo Zhao',
		"https://arxiv.org/abs/1612.02803"
	)

]

/************Put conference pubs here****************/
var confList = [
	pubEntry('On Asymptotic Quadratic Convergence of Proximal Newton Method in High Dimensions',
			'2017',
			'NIPS',
			'Xingguo Li, Jason Ge, Jarvis Haupt, Tong Zhang, Tuo Zhao',
			"https://arxiv.org/abs/1706.06066"
	),
	pubEntry('Online Multiview Learning: Dropping Convexity for Better Efficiency',
			'2017',
			'ICML',
			'Zhehui Chen, Chris Li, Tuo Zhao',
			'https://arxiv.org/pdf/1702.08134.pdf'
		),
	pubEntry('Clustering High Dimensional Dynamic Data Streams',
		'2017',
		'ICML',
		'Braverman, V., Frahling, G., Lang H., Sohler C. (Alphabetic order)',
		"https://arxiv.org/abs/1706.03887"
	),
	pubEntry('Streaming Symmetric Norms via Measure Concentration',
		'2017',
		'STOC',
		'Blasiok, J. Braverman, V., Chestnut, S., Krauthgamer, R. (Alphabetic order)',
		"http://arxiv.org/pdf/1511.01111.pdf"
	),
	
	pubEntry('Streaming Space Complexity of Nearly All Functions of One Variable on Frequency Vectors' ,
		'2016',
		'PODS',
		'Braverman, V., Chestnut, S., Woodruff, D. (Alphabetic order)',
		"http://arxiv.org/pdf/1601.07473.pdf"
	),

	pubEntry('Streaming Algorithms for Halo Finders ',
		'2015',
		'eScience',
		'Liu, Z., Ivkin, N, Neyrinck, M., Lemson, G., Szalay, A., Braverman, V., Budavari, T., Burns, T. and Wang, X.',
		"http://www.cs.jhu.edu/~zliu39/papers/escience15.pdf"
	),
	
	
	pubEntry('New Bounds for the CLIQUE-GAP Problem using Graph Decomposition Theory' ,
		'2015',
		'MFCS',
		'Braverman, V., Liu, Z., Singh, T. Vinodchandran, N. V. (Alphabetic order)',
		"http://www.cs.jhu.edu/~zliu39/papers/mfcs15.pdf"
	),
	
	pubEntry('New Time-Space Upperbounds for Directed Reachability in High-genus and H-minor-free Graphs' ,
		'2014',
		'FSTTCS',
		'Chakraborty, D., Pavan, A., Tewari, R. Vinodchandran, N. V. (Alphabetic order)',
		"http://drops.dagstuhl.de/opus/volltexte/2014/4873/pdf/49.pdf"
	)
];

/*********Journal Publications Here***********/
var journalList = [

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
			"http://mnrasl.oxfordjournals.org/content/440/1/L46.short"
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
	),
	
	pubEntry('Harmonicare: a novel wind instrument easy to learn and play',
			'2011',
			'Ubicomp',
			'Zhang, X, Wang Y., and Yi, H., Tao P.',
			"http://dl.acm.org/citation.cfm?id=2030189"
	)
];


function pubEntry(title, year, journual, coAuthors, pdfLink){
	return '<article> \
				<div class="inner"> \
				<ul class="nobullet"> \
					<li><i>' + title + ' (<b style="color:#000000";>' + journual + '</b>, '  + year + ')</i></li> \
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
	<div class="features" id="pub-tcs"> \
	<h4>Preprints</h4>\
');

for (i = 0; i < preprintList.length; i++) { 
	document.write(preprintList[i]);
}

document.write('\
</div> \
');


document.write('\
\
	<div class="features" id="pub-ml"> \
	<h4>Conference Publications</h4> \
');

for (i = 0; i < confList.length; i++) { 
	document.write(confList[i]);
}

document.write('\
</div> \
');



document.write('\
		<div class="features" id="pub-astro">	\
	<h4>Journal Publications</h4> \
');

for (i = 0; i < journalList.length; i++) { 
	document.write(journalList[i]);
}
document.write('\
</div> \
');



/***********************Preprints*********************/
var selectedList = [
  pubEntry('Efficient Symmetric Norm Regression via Linear Sketching',
		'2019',
		'NeurIPS',
		'Zhao Song, Ruosong Wang, Hongyang Zhang, Peilin Zhong',
		''
	),

  pubEntry('Sample-Optimal Parametric Q-Learning with Linear Transition Models',
		'2019',
		'ICML',
		'Mengdi Wang',
		'https://arxiv.org/abs/1902.04779'
	),

  pubEntry('The One-Way Communication Complexity of Dynamic Time Warping Distance',
		'2019',
		'SoCG',
		'Vladimir Braverman,Moses Charikar, William Henry Kuszmaul, David Woodruff </br><b>Invited to the special issue for SoCG 2019.</b>',
		'https://arxiv.org/pdf/1903.03520.pdf',
	),

  pubEntry('Misspecified Nonconvex Statistical Optimization for Phase Retrieval',
		'2018',
    "Mathematical Programming",
		'Zhuoran Yang, Ethan X. Fang, Tuo Zhao, Zhaoran Wang, Matey Neykov',
		"https://arxiv.org/abs/1712.06245",
	),

  pubEntry('Near-Optimal Time and Sample Complexities for Solving Discounted Markov Decision Process with a Generative Mode',
		'2018',
		'NeurIPS',
		'Aaron Sidford, Mengdi Wang, Xian Wu, and Yinyu Ye',
		'https://arxiv.org/abs/1806.01492',
    'Best poster award of Princeton Day of Optimization (2018).  A result that resolves the long standing open-problem of the sample complexity of reinforcement learning with a generative model.'
	),
  
  pubEntry('Dimensionality Reduction for Stationary Time Series via Stochastic Nonconvex Optimization',
		'2018',
		'NeurIPS',
		'Minshuo Chen, Mengdi Wang, Tuo Zhao',
		'https://arxiv.org/pdf/1803.02312.pdf'
	),
  
  
	pubEntry('The Physical Systems Behind Optimization Algorithms',
		'2018',
		'NeurIPS',
		'R. Arora, V. Braverman, Tuo Zhao',
		"https://arxiv.org/abs/1612.02803",
    "A result that connects the optimalization algorithm with a physical system."
	),


	pubEntry('Matrix Norms in Data Streams: Faster, Multi-Pass and Row-Order',
		'2018',
		'ICML',
		'Vladimir Braverman, Stephen R. Chestnut, Robert Krauthgamer, Yi Li, David P. Woodruff',
		"https://arxiv.org/abs/1609.05885",
    "A time-and-space efficient streaming algorithm of estimating matrix norms."
	),


  pubEntry('Revisiting Frequency Moment Estimation in Random Order Streams',
		'2018',
		'ICALP',
		'Vladimir Braverman, Emanuele Viola, and David P. Woodruff ',
		'https://arxiv.org/abs/1803.02270'
	),
  
	pubEntry('Approximate Convex Hull of Data Streams',
		'2018',
		'ICALP',
		'Avrim Blum, Vladimir Braverman, Ananya Kumar, Harry Lang ',
		'https://arxiv.org/pdf/1712.04564.pdf'
	)
]

function pubEntry(title, year, journual, coAuthors, pdfLink, intro = ""){
	return '<article> \
				<div class="inner"> \
				<ul class="nobullet"> \
					<li><i>' + title + ' (<b style="color:#000000";>' + journual + '</b>, '  + year + ')</i></li> \
					<li>With ' + coAuthors + '</li><li>' 
          +
					(pdfLink == "" ? "" : '<a href="'+pdfLink + '">PDF</a> ')
          +
					(intro == "" ? "" : '<details><summary>Summary </summary><p><b>'+intro + '</b></p></details>') 
          +
				'</li></ul> \
				</div> \
			</article>'
};


document.write('\
	<div class="features" id="pub-astro">	\
		<h4>Recent Publications</h4> \
');

for (i = 0; i < selectedList.length; i++) { 
	document.write(selectedList[i]);
}
document.write('\
</div> \
');


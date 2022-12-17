const musics = [
	{title: 'Tech House vibes', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3', play: false, id: 1},
	
	{title: 'Hazy After Hours', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3', play: false, id: 2},

	{title: 'Hip Hop 02', author: 'by Lily J', mp3: 'https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3', play: false, id: 3},

	{title: 'A Very Happy Christmas', author: 'by Michael Ramir C.', mp3: 'https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3', play: false, id: 4},

	{title: 'Sun and His Daughter', author: 'by Eugenio Mininni', mp3: 'https://assets.mixkit.co/music/preview/mixkit-sun-and-his-daughter-580.mp3', play: false, id: 5},

	{title: 'Raising Me Higher', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-raising-me-higher-34.mp3', play: false, id: 6},

	{title: 'Driving Ambition', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3', play: false, id: 7},

	{title: 'Life is a Dream', author: 'by Michael Ramir C.', mp3: 'https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3', play: false, id: 8},

	{title: 'Serene View', author: 'by Arulo', mp3: 'https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3', play: false, id: 9},

	{title: 'Dance with Me', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-dance-with-me-3.mp3', play: false, id: 10},

	{title: 'Deep Urban', author: 'by Eugenio Mininni', mp3: 'https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3', play: false, id: 11},

	{title: 'Dreaming Big', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3', play: false, id: 12},

	{title: 'Hollidays', author: 'by Grigoriy Nuzhny', mp3: 'https://assets.mixkit.co/music/preview/mixkit-hollidays-690.mp3', play: false, id: 13},

	{title: 'C.B.P.D', author: 'by Arulo', mp3: 'https://assets.mixkit.co/music/preview/mixkit-cbpd-400.mp3', play: false, id: 14},

	{title: 'Complicated', author: 'by Arulo', mp3: 'https://assets.mixkit.co/music/preview/mixkit-complicated-281.mp3', play: false, id: 15},

	{title: 'Feeling Happy', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-feeling-happy-5.mp3', play: false, id: 16},

	{title: 'Cat Walk', author: 'by Arulo', mp3: 'https://assets.mixkit.co/music/preview/mixkit-cat-walk-371.mp3', play: false, id: 17},

	{title: 'Silent Descent', author: 'by Eugenio Mininni', mp3: 'https://assets.mixkit.co/music/preview/mixkit-silent-descent-614.mp3', play: false, id: 18},

	{title: 'Sleepy Cat', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3', play: false, id: 19},

	{title: 'Beautiful Dream', author: 'by Diego Nava', mp3: 'https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3', play: false, id: 20},

	{title: 'Playground Fun', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-playground-fun-12.mp3', play: false, id: 21},

	{title: 'Valley Sunset', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-valley-sunset-127.mp3', play: false, id: 22},

	{title: 'Games Worldbeat', author: 'by Bernardo R.', mp3: 'https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3', play: false, id: 23},

	{title: 'Island Beat', author: 'by Arulo', mp3: 'https://assets.mixkit.co/music/preview/mixkit-island-beat-250.mp3', play: false, id: 24},

	{title: 'BRIDGE N° 98', author: 'by Eugenio Mininni', mp3: 'https://assets.mixkit.co/music/preview/mixkit-bridge-n-98-621.mp3', play: false, id: 25},

	{title: 'Spirit in the Woods', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-spirit-in-the-woods-139.mp3', play: false, id: 26},

	{title: 'Getting Ready', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-getting-ready-46.mp3', play: false, id: 27},

	{title: 'Piano Reflections', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3', play: false, id: 28},

	{title: 'Summer Fun', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-summer-fun-13.mp3', play: false, id: 29},

	{title: 'Fun Times', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-fun-times-7.mp3', play: false, id: 30},

	{title: 'Pop 05', author: 'by Grigoriy Nuzhny', mp3: 'https://assets.mixkit.co/music/preview/mixkit-pop-05-695.mp3', play: false, id: 31},

	{title: 'Epical Drums 01', author: 'by Grigoriy Nuzhny', mp3: 'https://assets.mixkit.co/music/preview/mixkit-epical-drums-01-676.mp3', play: false, id: 32},

	{title: 'Relaxing in Nature', author: 'by Diego Nava', mp3: 'https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3', play: false, id: 33},
	 
	{title: 'Deep Meditation', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-deep-meditation-109.mp3', play: false, id: 34},

	{title: 'Just Kidding', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-just-kidding-11.mp3', play: false, id: 35},

	{title: 'Comical', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-comical-2.mp3', play: false, id: 36},

	{title: 'Sports Highlights', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-sports-highlights-51.mp3', play: false, id: 37},

	{title: 'Forest Treasure', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3', play: false, id: 38},

	{title: 'Delightful', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-delightful-4.mp3', play: false, id: 39},

	{title: 'Just Chill', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-just-chill-16.mp3', play: false, id: 40},

	{title: 'Uplift Me', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-uplift-me-35.mp3', play: false, id: 41},

	{title: 'Slow Trail', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-slow-trail-71.mp3', play: false, id: 42},

	{title: 'Motivating Mornings', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-motivating-mornings-33.mp3', play: false, id: 43},

	{title: 'Piano Horror', author: 'by Francisco Alvear', mp3: 'https://assets.mixkit.co/music/preview/mixkit-piano-horror-671.mp3', play: false, id: 44},

	{title: 'Kodama Night Town', author: 'by Alejandro Magaña (A. M.)', mp3: 'https://assets.mixkit.co/music/preview/mixkit-kodama-night-town-114.mp3', play: false, id: 45},

	{title: 'Tinsel and Mistletoe', author: 'by Ahjay Stelino', mp3: 'https://assets.mixkit.co/music/preview/mixkit-tinsel-and-mistletoe-93.mp3', play: false, id: 46},
]

export default musics
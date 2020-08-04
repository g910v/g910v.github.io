var massNumberEpisode = []; 
for (let i = 1; i < 9; i++) {
	massNumberEpisode.push("'.number-episode-"+i+"'");
}

for (let i = 0; i < 8; i++) {
	let trsf = $(massNumberEpisode[i]).css("transform");
	let trsfClean = parseInt(str.replace(/[^\d.]/g, ""));
	trsfClean += 45;
	$(massNumberEpisode[i]).css("transform", "rotateZ("+trsfClean+"deg)");
	let r = $(massNumberEpisode[i]).css("transform");
	alert(r);
}

/*
записываем свойство трансформ ротейтЗ в строку 
вычленяем из нее цифры 
прибавляем к ним 45 
записываем в css transform */
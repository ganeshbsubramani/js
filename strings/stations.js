var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
console.log(stations.length);
stations.forEach(function(item,index,stations){
    var stationCode = item.slice(0,3)
    var pos = item.indexOf(';',0);
    var city = item.slice(pos+1,item.length);
    console.log(stationCode + ': '+ city);
})
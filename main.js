setInterval(function(){ var day =new Date();
    var date1 = new Date('December 31, 2019 00:00:00');
    
    
    document.querySelector('#days').innerHTML =Math.floor((date1-day)/86400000);
    
    
    
    document.querySelector('#hours').innerHTML =Math.floor(((date1-day)/86400000- Math.floor((date1-day)/86400000))*24);
    var m = ((date1-day)/86400000- Math.floor((date1-day)/86400000))*24
    
    document.querySelector('#minuts').innerHTML =Math.floor((m-Math.floor(m))*60)
    
    var s =(m-Math.floor(m))*60
    
    document.querySelector('#seconds').innerHTML = Math.floor((s-Math.floor(s))*60) }, 1);






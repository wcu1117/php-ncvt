var Time=function(){function b(a){return("0"+a).slice(-2,3)}return{format:function(a,d){var d=d||1,c=new Date(a*1E3),f=b(c.getHours())+":"+b(c.getMinutes()),e="",e=b(c.getMonth()+1)+"\u6708"+b(c.getDate())+"\u65e5";switch(d){case 1:return e+" "+f;case 2:return e;case 3:return f+":"+b(c.getSeconds())}},changeHour:function(a){return Math.floor(a/60/60)+":"+Math.floor(a/60%60)}}}();

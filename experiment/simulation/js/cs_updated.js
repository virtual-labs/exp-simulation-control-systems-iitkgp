 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/

///problem tabs	
function problem1(){
	
document.getElementById("controller").src = "images/pr1.png";
document.getElementById("run1").style.display = "block";
document.getElementById("z").style.display = "block";
document.getElementById("run2").style.display = "none";
document.getElementById("run4").style.display = "none";
document.getElementById("run3").style.display = "none";
document.getElementById("k").style.display = "none";
document.getElementById("k2").style.display = "none";
document.getElementById("v").style.display = "none";
document.getElementById("speed").style.display = "none";
document.getElementById("armamp").style.display = "none";
document.getElementById("torque").style.display = "none";
document.getElementById("load_torque").style.display = "none";
document.getElementById('run3d').style.display = "block";
document.getElementById("sspan").style.display = "none";
document.getElementById("aspan").style.display = "none";
document.getElementById("tmspan").style.display = "none";
document.getElementById("tlspan").style.display = "none";
document.getElementById("vspan").style.display = "none";

document.getElementById("wpc_span").style.display = "none";
document.getElementById("wgc_span").style.display = "none";
document.getElementById("GM_span").style.display = "none";
document.getElementById("PM_span").style.display = "none";
document.getElementById('orange').style.display  = "none";
document.getElementById('omp').style.display  = "none";
}
function problem2(){
	
document.getElementById("controller").src = "images/pr2.png";
document.getElementById("run1").style.display = "none";
document.getElementById("run4").style.display = "none";
document.getElementById("run2").style.display = "block";
document.getElementById("run3").style.display = "none";
document.getElementById('run3d').style.display = "none";
document.getElementById("k").style.display = "block";
document.getElementById("k2").style.display = "none";
document.getElementById("z").style.display = "none";
document.getElementById("constp1").style.display = "none";
document.getElementById("v").style.display = "none";
document.getElementById("speed").style.display = "none";
document.getElementById("armamp").style.display = "none";
document.getElementById("torque").style.display = "none";
document.getElementById("load_torque").style.display = "none";
document.getElementById("sspan").style.display = "none";
document.getElementById("aspan").style.display = "none";
document.getElementById("tmspan").style.display = "none";
document.getElementById("tlspan").style.display = "none";
document.getElementById("vspan").style.display = "none";
document.getElementById("wpc_span").style.display = "none";
document.getElementById("wgc_span").style.display = "none";
document.getElementById("GM_span").style.display = "none";
document.getElementById("PM_span").style.display = "none";
document.getElementById('orange').style.display  = "none";
document.getElementById('omp').style.display  = "none";
}
function problem3(){
	
document.getElementById("controller").src = "images/pr3.png";
document.getElementById("run1").style.display = "none";
document.getElementById("run4").style.display = "none";
document.getElementById("run2").style.display = "none";
document.getElementById("run3").style.display = "block";
document.getElementById("orange").style.display = "block";
document.getElementById('omp').style.display  = "block";
document.getElementById('run3d').style.display = "none";
document.getElementById("k").style.display = "none";
document.getElementById("k2").style.display = "block";
document.getElementById("z").style.display = "none";
document.getElementById("constp1").style.display = "none";
document.getElementById("v").style.display = "none";
document.getElementById("speed").style.display = "none";
document.getElementById("armamp").style.display = "none";
document.getElementById("torque").style.display = "none";
document.getElementById("load_torque").style.display = "none";
document.getElementById("sspan").style.display = "none";
document.getElementById("aspan").style.display = "none";
document.getElementById("tmspan").style.display = "none";
document.getElementById("tlspan").style.display = "none";
document.getElementById("vspan").style.display = "none";
document.getElementById("wpc_span").style.display = "block";
document.getElementById("wgc_span").style.display = "block";
document.getElementById("GM_span").style.display = "block";
document.getElementById("PM_span").style.display = "block";
}
function problem4(){
	
document.getElementById("controller").src = "images/pr4.png";
document.getElementById("run1").style.display = "none";
document.getElementById("run2").style.display = "none";
document.getElementById("run4").style.display = "block";
document.getElementById("run3").style.display = "none";
document.getElementById('run3d').style.display = "none";
document.getElementById("k").style.display = "none";
document.getElementById("k2").style.display = "none";
document.getElementById("z").style.display = "none";
document.getElementById("constp1").style.display = "none";
document.getElementById("v").style.display = "block";
document.getElementById("speed").style.display = "block";
document.getElementById("armamp").style.display = "block";
document.getElementById("torque").style.display = "block";
document.getElementById("load_torque").style.display = "block";
document.getElementById("sspan").style.display = "block";
document.getElementById("aspan").style.display = "block";
document.getElementById("tmspan").style.display = "block";
document.getElementById("tlspan").style.display = "block";
document.getElementById("vspan").style.display = "block";
document.getElementById("wpc_span").style.display = "none";
document.getElementById("wgc_span").style.display = "none";
document.getElementById("GM_span").style.display = "none";
document.getElementById("PM_span").style.display = "none";
document.getElementById('orange').style.display  = "none";
document.getElementById('omp').style.display  = "none";
}
///problem tabs inner selections
	
function tostep(){///prob1 step selection
	
document.getElementById("seudo1").value = 1;	
	
}

function toimpulse(){///prob1 impulse selection
	
document.getElementById("seudo1").value = 2;	
	
} 

function step(){///problem1,step response
var yop = [];
var ytr = [];
var ytp = [];
var yts = [];

var dataOPPoints = [];
var trpoint =[];
var tppoint =[];
var tspoint =[];
	
var zeta = document.getElementById('z').value;
var wn = 5;

var omegad = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));
var phi = math.acos(zeta);

var tr = math.divide(math.subtract(math.pi,phi),omegad);
console.log('rise time ='+tr);

var tp = math.divide(math.pi,omegad);
console.log('peak time ='+ tp);

var ts = math.divide(4,math.multiply(zeta,wn));
console.log('settling time ='+ ts);

if(zeta == 0){///undamped
	
for(var t = 0; t<=10; t+=0.1){
	
yop[t] = math.subtract(1,math.cos(math.multiply(wn,t)));	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
ytr  = math.subtract(1,math.cos(math.multiply(wn,tr)));
ytp  = math.subtract(1,math.cos(math.multiply(wn,tp)));
///yts  = math.subtract(1,math.cos(math.multiply(wn,ts)));///cause ifinity

trpoint.push({x:(tr), y:(ytr)});
tppoint.push({x:(tp), y:(ytp)});
///tspoint.push({x:(ts), y:(yts)});	
}
	
if(zeta == 1){
	
for(var t = 0; t<=10; t+=0.1){///citically damped
	
var epart = math.pow(math.e,-math.multiply(wn,t));	
yop[t] = math.subtract(1, math.add(epart, math.multiply(wn,t,epart)));	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
//var epart_ctr = math.pow(math.e,-math.multiply(wn,tr));
//var epart_ctp = math.pow(math.e,-math.multiply(wn,tp));
//var epart_cts = math.pow(math.e,-math.multiply(wn,ts));
	
//ytr = math.subtract(1, math.add(epart_ctr, math.multiply(wn,tr,epart_ctr)));
//ytp = math.subtract(1, math.add(epart_ctp, math.multiply(wn,tr,epart_ctp)));
//yts = math.subtract(1, math.add(epart_cts, math.multiply(wn,tr,epart_cts)));

//trpoint.push({x:(tr), y:(ytr)});
//tppoint.push({x:(tp), y:(ytp)});
//tspoint.push({x:(ts), y:(yts)});		
}	
if(zeta > 0 && zeta < 1){///under damped

for(var t = 0; t<=10; t+=0.1){	
var wd = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));	
var theta = math.acos(zeta);	
var epart2 = math.pow(math.e,-math.multiply(zeta,wn,t)); 	
var rootz = math.sqrt(math.subtract(1, math.pow(zeta,2)));

yop[t] = math.subtract(1, math.multiply(math.divide(epart2,rootz), math.sin(math.add(math.multiply(wd,t),theta))));	
dataOPPoints.push({x:(t), y:(yop[t])});
}

//for(var t = 0; t <= tr; t += 0.1){	
var wd = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));	
var theta = math.acos(zeta);
var rootz = math.sqrt(math.subtract(1, math.pow(zeta,2)));
	
var epart_tr = math.pow(math.e,-math.multiply(zeta,wn,tr)); 	
var epart_tp = math.pow(math.e,-math.multiply(zeta,wn,tp));
var epart_ts = math.pow(math.e,-math.multiply(zeta,wn,ts));

ytr = math.subtract(1, math.multiply(math.divide(epart_tr,rootz), math.sin(math.add(math.multiply(wd,tr),theta))));
ytp = math.subtract(1, math.multiply(math.divide(epart_tp,rootz), math.sin(math.add(math.multiply(wd,tp),theta))));
yts = math.subtract(1, math.multiply(math.divide(epart_ts,rootz), math.sin(math.add(math.multiply(wd,ts),theta))));

trpoint.push({x:(tr), y:(ytr)});
tppoint.push({x:(tp), y:(ytp)});
tspoint.push({x:(ts), y:(yts)});
//}	
}

///system parameters
document.getElementById('orange').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
document.getElementById('ovspan').style.display  = "block";
var ov = math.multiply(math.pow(math.e, -math.divide(math.multiply(zeta,math.pi), math.sqrt(math.subtract(1, math.pow(zeta,2))))),100);///percentage overshoot
document.getElementById('oversut').innerHTML = ov;

document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none";  
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Step input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///tr axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints	
       },
	   {        
        type: "line",
		color:"red",
		showInLegend: true,
		legendText: "Rise Time",
        dataPoints:trpoint
       },
	   {        
        type: "line",
		color:"green",
		showInLegend: true,
		legendText: "Peak Time",
        dataPoints:tppoint
       },
	   {        
        type: "line",
		color:"#D16404",
		showInLegend: true,
		legendText: "Settling Time",
        dataPoints:tspoint
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	

///testing
mulstep();
	if(incr>1){
		document.getElementById('constp1').style.display='block';
	}
}
///problem functions
var incr=0,data1,data2,data3,data4,data5,trpoint1,trpoint2,trpoint3,trpoint4,trpoint5,tppoint1,
tppoint2,tppoint3,tppoint4,tppoint5,tspoint1,tspoint2,tspoint3,tspoint4,tspoint5;

var z1,z2,z3,z4,z5;

function mulstep(){///problem1,step response grouped plot
incr++;
var yop = [];
var ytr = [];
var ytp = [];
var yts = [];

var dataOPPoints = [];
var trpoint =[];
var tppoint =[];
var tspoint =[];
	
var zeta = document.getElementById('z').value;
if(incr==1){
	z1=zeta;
}
if(incr==2){
	z2=zeta;
}
if(incr==3){
	z3=zeta;
}
if(incr==4){
	z4=zeta;
}
if(incr==5){
	z5=zeta;
}
var wn = 5;

var omegad = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));
var phi = math.acos(zeta);

var tr = math.divide(math.subtract(math.pi,phi),omegad);
console.log('rise time ='+tr);

var tp = math.divide(math.pi,omegad);
console.log('peak time ='+ tp);

var ts = math.divide(4,math.multiply(zeta,wn));
console.log('settling time ='+ ts);

if(zeta == 0){///undamped
	
for(var t = 0; t<=10; t+=0.1){
	
yop[t] = math.subtract(1,math.cos(math.multiply(wn,t)));	
dataOPPoints.push({x:(t), y:(yop[t])});

}	
ytr  = math.subtract(1,math.cos(math.multiply(wn,tr)));
ytp  = math.subtract(1,math.cos(math.multiply(wn,tp)));
///yts  = math.subtract(1,math.cos(math.multiply(wn,ts)));///cause ifinity

trpoint.push({x:(tr), y:(ytr)});
tppoint.push({x:(tp), y:(ytp)});
///tspoint.push({x:(ts), y:(yts)});	
}
	
if(zeta == 1){
	
for(var t = 0; t<=10; t+=0.1){///citically damped
	
var epart = math.pow(math.e,-math.multiply(wn,t));	
yop[t] = math.subtract(1, math.add(epart, math.multiply(wn,t,epart)));	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
//var epart_ctr = math.pow(math.e,-math.multiply(wn,tr));
//var epart_ctp = math.pow(math.e,-math.multiply(wn,tp));
//var epart_cts = math.pow(math.e,-math.multiply(wn,ts));
	
//ytr = math.subtract(1, math.add(epart_ctr, math.multiply(wn,tr,epart_ctr)));
//ytp = math.subtract(1, math.add(epart_ctp, math.multiply(wn,tr,epart_ctp)));
//yts = math.subtract(1, math.add(epart_cts, math.multiply(wn,tr,epart_cts)));

//trpoint.push({x:(tr), y:(ytr)});
//tppoint.push({x:(tp), y:(ytp)});
//tspoint.push({x:(ts), y:(yts)});		
}	
if(zeta > 0 && zeta < 1){///under damped

for(var t = 0; t<=10; t+=0.1){	
var wd = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));	
var theta = math.acos(zeta);	
var epart2 = math.pow(math.e,-math.multiply(zeta,wn,t)); 	
var rootz = math.sqrt(math.subtract(1, math.pow(zeta,2)));

yop[t] = math.subtract(1, math.multiply(math.divide(epart2,rootz), math.sin(math.add(math.multiply(wd,t),theta))));	
dataOPPoints.push({x:(t), y:(yop[t])});
}

//for(var t = 0; t <= tr; t += 0.1){	
var wd = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));	
var theta = math.acos(zeta);
var rootz = math.sqrt(math.subtract(1, math.pow(zeta,2)));
	
var epart_tr = math.pow(math.e,-math.multiply(zeta,wn,tr)); 	
var epart_tp = math.pow(math.e,-math.multiply(zeta,wn,tp));
var epart_ts = math.pow(math.e,-math.multiply(zeta,wn,ts));

ytr = math.subtract(1, math.multiply(math.divide(epart_tr,rootz), math.sin(math.add(math.multiply(wd,tr),theta))));
ytp = math.subtract(1, math.multiply(math.divide(epart_tp,rootz), math.sin(math.add(math.multiply(wd,tp),theta))));
yts = math.subtract(1, math.multiply(math.divide(epart_ts,rootz), math.sin(math.add(math.multiply(wd,ts),theta))));

trpoint.push({x:(tr), y:(ytr)});

tppoint.push({x:(tp), y:(ytp)});

tspoint.push({x:(ts), y:(yts)});

}
if(incr==1){
	data1=dataOPPoints;
	tppoint1=tppoint;
	trpoint1=trpoint;
	tspoint1=tspoint;
}
if(incr==2){
	data2=dataOPPoints;
	tppoint2=tppoint;
	trpoint2=trpoint;
	tspoint2=tspoint;
}
if(incr==3){
	data3=dataOPPoints;
	tppoint3=tppoint;
	trpoint3=trpoint;
	tspoint3=tspoint;
}
if(incr==4){
	data4=dataOPPoints;
	tppoint4=tppoint;
	trpoint4=trpoint;
	tspoint4=tspoint;
}
if(incr==5){
	data5=dataOPPoints;
	tppoint5=tppoint;
	trpoint5=trpoint;
	tspoint5=tspoint;
}


///system parameters
document.getElementById('orange').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
document.getElementById('ovspan').style.display  = "block";
var ov = math.multiply(math.pow(math.e, -math.divide(math.multiply(zeta,math.pi), math.sqrt(math.subtract(1, math.pow(zeta,2))))),100);///percentage overshoot
document.getElementById('oversut').innerHTML = ov;

} 
function step_group1(){
	//mulstep();
	document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none";  
document.getElementById('constp1').style.display  = "none"; 
document.getElementById('chartContainer').style.display  = "block"; 	
	if(incr==1 && document.getElementById('yes_step1').checked==true){
	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Step input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///tr axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend: true,
		legendText: 'ζ ='+ z1,
        dataPoints:data1
       },
	   {        
        type: "line",
		color:"red",
		showInLegend: true,
		legendText: "Rise Time",
        dataPoints:trpoint1
       },
	   {        
        type: "line",
		color:"green",
		showInLegend: true,
		legendText: "Peak Time",
        dataPoints:tppoint1
       },
	   {        
        type: "line",
		color:"#D16404",
		showInLegend: true,
		legendText: "Settling Time",
        dataPoints:tspoint1
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	
	}
	if(incr==2 && document.getElementById('yes_step1').checked==true){
	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Step input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///tr axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend: true,
		legendText: 'ζ ='+ z1,
        dataPoints:data1
       },
	   {        
        type: "line",
		color:"red",
		showInLegend: true,
		legendText: "Rise Time",
        dataPoints:trpoint1
       },
	   {        
        type: "line",
		color:"green",
		showInLegend: true,
		legendText: "Peak Time",
        dataPoints:tppoint1
       },
	   {        
        type: "line",
		color:"#D16404",
		showInLegend: true,
		legendText: "Settling Time",
        dataPoints:tspoint1
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend: true,
		legendText: 'ζ ='+ z2,
        dataPoints:data2
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint2
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint2
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint2
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	
	}
	if(incr==3 && document.getElementById('yes_step1').checked==true){
	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Step input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///tr axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend: true,
		legendText: 'ζ ='+ z1,
        dataPoints:data1
       },
	   {        
        type: "line",
		color:"red",
		showInLegend: true,
		legendText: "Rise Time",
        dataPoints:trpoint1
       },
	   {        
        type: "line",
		color:"green",
		showInLegend: true,
		legendText: "Peak Time",
        dataPoints:tppoint1
       },
	   {        
        type: "line",
		color:"#D16404",
		showInLegend: true,
		legendText: "Settling Time",
        dataPoints:tspoint1
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend: true,
		legendText: 'ζ ='+ z2,
        dataPoints:data2
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint2
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint2
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint2
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend: true,
		legendText: 'ζ ='+ z3,
        dataPoints:data3
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint3
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint3
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint3
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	
	}
	if(incr==4 && document.getElementById('yes_step1').checked==true){
	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Step input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///tr axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend: true,
		legendText: 'ζ ='+ z1,
        dataPoints:data1
       },
	   {        
        type: "line",
		color:"red",
		showInLegend: true,
		legendText: "Rise Time",
        dataPoints:trpoint1
       },
	   {        
        type: "line",
		color:"green",
		showInLegend: true,
		legendText: "Peak Time",
        dataPoints:tppoint1
       },
	   {        
        type: "line",
		color:"#D16404",
		showInLegend: true,
		legendText: "Settling Time",
        dataPoints:tspoint1
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend: true,
		legendText: 'ζ ='+ z2,
        dataPoints:data2
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint2
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint2
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint2
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend: true,
		legendText: 'ζ ='+ z3,
        dataPoints:data3
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint3
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint3
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint3
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend: true,
		legendText: 'ζ ='+ z4,
        dataPoints:data4
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint4
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint4
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint4
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	
	}
	if(incr==5 && document.getElementById('yes_step1').checked==true){
	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Step input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///tr axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data5 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tr5 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///tp5 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///ts5 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend: true,
		legendText: 'ζ ='+ z1,
        dataPoints:data1
       },
	   {        
        type: "line",
		color:"red",
		showInLegend: true,
		legendText: "Rise Time",
        dataPoints:trpoint1
       },
	   {        
        type: "line",
		color:"green",
		showInLegend: true,
		legendText: "Peak Time",
        dataPoints:tppoint1
       },
	   {        
        type: "line",
		color:"#D16404",
		showInLegend: true,
		legendText: "Settling Time",
        dataPoints:tspoint1
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend: true,
		legendText: 'ζ ='+ z2,
        dataPoints:data2
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint2
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint2
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint2
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend: true,
		legendText: 'ζ ='+ z3,
        dataPoints:data3
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint3
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint3
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint3
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend: true,
		legendText: 'ζ ='+ z4,
        dataPoints:data4
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint4
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint4
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint4
       },
	   {        
        type: "spline",
		color:"#9003EC",
		showInLegend: true,
		legendText: 'ζ ='+ z5,
        dataPoints:data5
       },
	   {        
        type: "line",
		color:"red",
		//showInLegend: true,
		//legendText: "Rise Time",
        dataPoints:trpoint5
       },
	   {        
        type: "line",
		color:"green",
		//showInLegend: true,
		//legendText: "Peak Time",
        dataPoints:tppoint5
       },
	   {        
        type: "line",
		color:"#D16404",
		//showInLegend: true,
		//legendText: "Settling Time",
        dataPoints:tspoint5
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	
	}
} 

 
function impulse(){///problem1,impulse response
var yop = [];
var dataOPPoints = [];
	
var zeta = document.getElementById('z').value;
var wn = 5;

if(zeta == 0){///undamped
	
for(var t = 0; t<=10; t+=0.1){
	
yop[t] = math.multiply(wn,math.sin(math.multiply(wn,t)));	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
	
}
	
if(zeta == 1){
	
for(var t = 0; t<=10; t+=0.1){///citically damped
	
var epart = math.pow(math.e,-math.multiply(wn,t));	
yop[t] = math.multiply(math.pow(wn,2),t,epart);	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
	
}	
if(zeta > 0 && zeta < 1){///under damped

for(var t = 0; t<=10; t+=0.1){	
var wd = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));	
var theta = math.acos(zeta);	
var epart2 = math.pow(math.e,-math.multiply(zeta,wn,t)); 	
var rootz = math.sqrt(math.subtract(1, math.pow(zeta,2)));

yop[t] = math.multiply(math.divide(epart2,rootz), math.sin(math.multiply(wd,t)));	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
}
document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none";  
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Impulse input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	

///testing
mulimpulse();
	if(incrim>1){
		document.getElementById('constp1').style.display='block';
	}	
} 

var incrim=0,dataim1,dataim2,dataim3,dataim4,dataim5,zim1,zim2,zim3,zim4,zim5;
function mulimpulse(){
	incrim++;
var yop = [];
var dataOPPoints = [];
	
var zeta = document.getElementById('z').value;
if(incrim==1){
	zim1=zeta;
}
if(incrim==2){
	zim2=zeta;
}
if(incrim==3){
	zim3=zeta;
}
if(incrim==4){
	zim4=zeta;
}
if(incrim==5){
	zim5=zeta;
}
var wn = 5;

if(zeta == 0){///undamped
	
for(var t = 0; t<=10; t+=0.1){
	
yop[t] = math.multiply(wn,math.sin(math.multiply(wn,t)));	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
	
}
	
if(zeta == 1){
	
for(var t = 0; t<=10; t+=0.1){///citically damped
	
var epart = math.pow(math.e,-math.multiply(wn,t));	
yop[t] = math.multiply(math.pow(wn,2),t,epart);	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
	
}	
if(zeta > 0 && zeta < 1){///under damped

for(var t = 0; t<=10; t+=0.1){	
var wd = math.multiply(wn, math.sqrt(math.subtract(1, math.pow(zeta,2))));	
var theta = math.acos(zeta);	
var epart2 = math.pow(math.e,-math.multiply(zeta,wn,t)); 	
var rootz = math.sqrt(math.subtract(1, math.pow(zeta,2)));

yop[t] = math.multiply(math.divide(epart2,rootz), math.sin(math.multiply(wd,t)));	
dataOPPoints.push({x:(t), y:(yop[t])});
	
}	
}
if(incrim==1){
	dataim1=dataOPPoints;
}
if(incrim==2){
	dataim2=dataOPPoints;
}
if(incrim==3){
	dataim3=dataOPPoints;
}
if(incrim==4){
	dataim4=dataOPPoints;
}
if(incrim==5){
	dataim5=dataOPPoints;
}

document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";

}

function impulse_group1(){
	document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none"; 
 document.getElementById('constp1').style.display  = "none";
document.getElementById('chartContainer').style.display  = "block"; 

if(incrim==1 && document.getElementById('yes_step1').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Impulse input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'ζ ='+ zim1,
        dataPoints:dataim1
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incrim==2 && document.getElementById('yes_step1').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Impulse input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
	{///dataim2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'ζ ='+ zim1,
        dataPoints:dataim1
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'ζ ='+ zim2,
        dataPoints:dataim2
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incrim==3 && document.getElementById('yes_step1').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Impulse input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
	{///dataim2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'ζ ='+ zim1,
        dataPoints:dataim1
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'ζ ='+ zim2,
        dataPoints:dataim2
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'ζ ='+ zim3,
        dataPoints:dataim3
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incrim==4 && document.getElementById('yes_step1').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Impulse input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
	{///dataim2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'ζ ='+ zim1,
        dataPoints:dataim1
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'ζ ='+ zim2,
        dataPoints:dataim2
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'ζ ='+ zim3,
        dataPoints:dataim3
	
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'ζ ='+ zim4,
        dataPoints:dataim4
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incrim==5 && document.getElementById('yes_step1').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Transient Response for Unit Impulse input (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
	{///dataim2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim3 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim4 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim5 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'ζ ='+ zim1,
        dataPoints:dataim1
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'ζ ='+ zim2,
        dataPoints:dataim2
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'ζ ='+ zim3,
        dataPoints:dataim3
	
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'ζ ='+ zim4,
        dataPoints:dataim4
	
       },
	   {        
        type: "spline",
		color:"#9003EC",
		showInLegend:true,
		legendText:'ζ ='+ zim5,
        dataPoints:dataim5
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
}

///problem-2 root loci
function rootloci(){///problem2

	
///locus

var pol1 = 0;///oltf poles or fixed poles
var pol2 = -1;
var pol3 = -2;

var bkpoint = -0.42;
var centroid = math.divide(math.add(pol1,pol2,pol3),3);
var im1 = 1.414;
var im2 = -1.414;

var gain  = document.getElementById('k').value;
var roots = math.polynomialRoot(gain,2,3,1);

var cpol1 = roots[0];

var cpol2R = roots[1].re;
var cpol2I = roots[1].im;

var cpol3R = roots[2].re;
var cpol3I = roots[2].im;

document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none";  
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		//  animationDuration: 10000,
zoomEnabled: true,
zoomType:"xy", 		
	  title:{
      text: "Root Locus Plot ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "\u03c3",
		minimum:-10,
			maximum:10,
      },
    axisY: [
	      {///middle axis
            title: "j \u03c9",
			minimum:-10,
			maximum:10,
			
        },
		{///poles
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///closed loop poles
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///break away point
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///centroid
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///cuts in jw axis
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///locus
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      
	   {        
        type: "line",
		color:"black",
        dataPoints:[
		{ x: -100,  y: 0  },
			{ x: 100, y: 0  },
			{ x: 0, y: -100 },
			{ x: 0,  y: 100},	
		
		]
       },
	   {        
        type: "scatter",
		color:"#B47705",
		showInLegend: true,
		legendText: "Open loop poles",
		markerType:"cross",
        dataPoints:[
			{ x: pol1,  y: 0  },
			{ x: pol2, y: 0  },
			{ x: pol3, y: 0 },
					
		]	
       },
	   {        
        type: "scatter",
		color:"#3E9A69",
		showInLegend: true,
		legendText: "Closed loop poles",
		markerType:"cross",
        dataPoints:[
			{ x: cpol1,  y: 0  },
			{ x: cpol2R, y: cpol2I  },
			{ x: cpol3R, y: cpol3I },
			
					
		]	
       },
	   {        
        type: "scatter",
		color:"#C30776",
		showInLegend: true,
		legendText: "Break-away point",
        dataPoints:[
		{ x: bkpoint,  y: 0  },
			
		]
       },
	   {        
        type: "scatter",
		color:"blue",
		showInLegend: true,
		legendText: "Centroid",
        dataPoints:[
		{ x: centroid,  y: 0  },
			
		]
       },
       {        
        type: "scatter",
		color:"red",
		markerType:"cross",
        dataPoints:[
			{ x: 0,  y: im1 },
			{ x: 0,  y: im2 },
								
		]	
       },
	   {        
        type: "spline",
		color:"#C31729",
		
        dataPoints:[
			{ x: 0,  y: im2 },
			{ x: bkpoint,  y: 0 },
			{ x: 0,  y: im1 },
			
								
		]	
       },
	   
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	

	
} 

function loci_plot_impulse(){///prob2 unit impulse
	
var dataOPPoints = [];
var output = [];	
var gain  = document.getElementById('k').value;
var roots = math.polynomialRoot(gain,2,3,1);

var cpol1 = roots[0];

var cpol2 = roots[1];

var cpol3 = roots[2];	
	

///Partial fraction co-effs
var coeff1 =  math.divide(gain,math.multiply(math.subtract(cpol1,cpol2),math.subtract(cpol1,cpol3)));
var coeff2 =  math.divide(gain,math.multiply(math.subtract(cpol2,cpol1),math.subtract(cpol2,cpol3)));	
var coeff3 =  math.divide(gain,math.multiply(math.subtract(cpol3,cpol1),math.subtract(cpol3,cpol2)));	

for(var t =0; t<=10; t+=0.1){
var fpart = math.multiply(coeff1,math.pow(math.e,math.multiply(cpol1,t)));
var spart = math.multiply(coeff2,math.pow(math.e,math.multiply(cpol2,t)));
var tpart = math.multiply(coeff3,math.pow(math.e,math.multiply(cpol3,t)));

 output[t] = (math.multiply(1,math.add(fpart,spart,tpart))).re;
dataOPPoints.push({x:(t), y:(output[t])});

}

document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none"; 
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	

///testing
loci_plot_mulimpulse();
	if(incrim2>1){
		document.getElementById('constp2').style.display='block';
	}	
}

var incrim2=0,dataim21,dataim22,dataim23,dataim24,dataim25,kim1,kim2,kim3,kim4,kim5;
function loci_plot_mulimpulse(){
	incrim2++;
	var dataOPPoints = [];
var output = [];	
var gain  = document.getElementById('k').value;
if(incrim2==1){
	kim1=gain;
}
if(incrim2==2){
	kim2=gain;
}
if(incrim2==3){
	kim3=gain;
}
if(incrim2==4){
	kim4=gain;
}
if(incrim2==5){
	kim5=gain;
}
var roots = math.polynomialRoot(gain,2,3,1);

var cpol1 = roots[0];

var cpol2 = roots[1];

var cpol3 = roots[2];	
	

///Partial fraction co-effs
var coeff1 =  math.divide(gain,math.multiply(math.subtract(cpol1,cpol2),math.subtract(cpol1,cpol3)));
var coeff2 =  math.divide(gain,math.multiply(math.subtract(cpol2,cpol1),math.subtract(cpol2,cpol3)));	
var coeff3 =  math.divide(gain,math.multiply(math.subtract(cpol3,cpol1),math.subtract(cpol3,cpol2)));	

for(var t =0; t<=10; t+=0.1){
var fpart = math.multiply(coeff1,math.pow(math.e,math.multiply(cpol1,t)));
var spart = math.multiply(coeff2,math.pow(math.e,math.multiply(cpol2,t)));
var tpart = math.multiply(coeff3,math.pow(math.e,math.multiply(cpol3,t)));

 output[t] = (math.multiply(1,math.add(fpart,spart,tpart))).re;
dataOPPoints.push({x:(t), y:(output[t])});

}
if(incrim2==1){
	dataim21=dataOPPoints;
}
if(incrim2==2){
	dataim22=dataOPPoints;
}
if(incrim2==3){
	dataim23=dataOPPoints;
}
if(incrim2==4){
	dataim24=dataOPPoints;
}
if(incrim2==5){
	dataim25=dataOPPoints;
}
document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
	
}

function impulse_group2(){
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none";
document.getElementById('constp2').style.display  = "none"; 
document.getElementById('chartContainer').style.display  = "block";

 if(incrim2==1 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K ='+ kim1,
        dataPoints:dataim21	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}	
if(incrim2==2 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///dataim2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K ='+ kim1,
        dataPoints:dataim21
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K ='+ kim2,
        dataPoints:dataim22
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}

if(incrim2==3 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///dataim22 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim23 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K ='+ kim1,
        dataPoints:dataim21
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K ='+ kim2,
        dataPoints:dataim22
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'K ='+ kim3,
        dataPoints:dataim23
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}	
if(incrim2==4 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///dataim22 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim23 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim24 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K ='+ kim1,
        dataPoints:dataim21
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K ='+ kim2,
        dataPoints:dataim22
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'K ='+ kim3,
        dataPoints:dataim23
	
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'K ='+ kim4,
        dataPoints:dataim24
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}	

if(incrim2==5 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///dataim22 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim23 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim24 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///dataim25 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K ='+ kim1,
        dataPoints:dataim21
	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K ='+ kim2,
        dataPoints:dataim22
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'K ='+ kim3,
        dataPoints:dataim23
	
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'K ='+ kim4,
        dataPoints:dataim24
	
       },
	   {        
        type: "spline",
		color:"#9003EC",
		showInLegend:true,
		legendText:'K ='+ kim5,
        dataPoints:dataim25
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}	
	
}

function loci_plot_step(){///prob2 unit step
	
var dataOPPoints = [];
var output = [];	
var gain  = document.getElementById('k').value;
var roots = math.polynomialRoot(gain,2,3,1);

var cpol1 = roots[0];

var cpol2 = roots[1];

var cpol3 = roots[2];	
	

///Partial fraction co-effs
var stepcoeff = math.divide(gain,math.multiply(math.subtract(0,cpol1),math.subtract(0,cpol2),math.subtract(0,cpol3)));
var coeff1 =  math.divide(gain,math.multiply(cpol1,math.subtract(cpol1,cpol2),math.subtract(cpol1,cpol3)));
var coeff2 =  math.divide(gain,math.multiply(cpol2,math.subtract(cpol2,cpol1),math.subtract(cpol2,cpol3)));	
var coeff3 =  math.divide(gain,math.multiply(cpol3,math.subtract(cpol3,cpol1),math.subtract(cpol3,cpol2)));	

for(var t =0; t<=10; t+=0.1){
var fpart = math.multiply(coeff1,math.pow(math.e,math.multiply(cpol1,t)));
var spart = math.multiply(coeff2,math.pow(math.e,math.multiply(cpol2,t)));
var tpart = math.multiply(coeff3,math.pow(math.e,math.multiply(cpol3,t)));

 output[t] = (math.multiply(1,math.add(stepcoeff,fpart,spart,tpart))).re;
dataOPPoints.push({x:(t), y:(output[t])});

}

document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "none";
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	
	///testing
loci_plot_mulstep();
	if(incr2>1){
		document.getElementById('constp2').style.display='block';
	}
}

var incr2=0,data21,data22,data23,data24,data25,ks1,ks2,ks3,ks4,ks5;

function loci_plot_mulstep(){
	incr2++;
	var dataOPPoints = [];
var output = [];	
var gain  = document.getElementById('k').value;
if(incr2==1){
	ks1=gain;
}
if(incr2==2){
	ks2=gain;
}
if(incr2==3){
	ks3=gain;
}
if(incr2==4){
	ks4=gain;
}
if(incr2==5){
	ks5=gain;
}
var roots = math.polynomialRoot(gain,2,3,1);

var cpol1 = roots[0];

var cpol2 = roots[1];

var cpol3 = roots[2];	
	

///Partial fraction co-effs
var stepcoeff = math.divide(gain,math.multiply(math.subtract(0,cpol1),math.subtract(0,cpol2),math.subtract(0,cpol3)));
var coeff1 =  math.divide(gain,math.multiply(cpol1,math.subtract(cpol1,cpol2),math.subtract(cpol1,cpol3)));
var coeff2 =  math.divide(gain,math.multiply(cpol2,math.subtract(cpol2,cpol1),math.subtract(cpol2,cpol3)));	
var coeff3 =  math.divide(gain,math.multiply(cpol3,math.subtract(cpol3,cpol1),math.subtract(cpol3,cpol2)));	

for(var t =0; t<=10; t+=0.1){
var fpart = math.multiply(coeff1,math.pow(math.e,math.multiply(cpol1,t)));
var spart = math.multiply(coeff2,math.pow(math.e,math.multiply(cpol2,t)));
var tpart = math.multiply(coeff3,math.pow(math.e,math.multiply(cpol3,t)));

 output[t] = (math.multiply(1,math.add(stepcoeff,fpart,spart,tpart))).re;
dataOPPoints.push({x:(t), y:(output[t])});

}
if(incr2==1){
	data21=dataOPPoints;
}
if(incr2==2){
	data22=dataOPPoints;
}
if(incr2==3){
	data23=dataOPPoints;
}
if(incr2==4){
	data24=dataOPPoints;
}
if(incr2==5){
	data25=dataOPPoints;
}
document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";

}

function step_group2(){
	
	document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "none";
document.getElementById('constp2').style.display  = "none";
document.getElementById('chartContainer').style.display  = "block"; 

if(incr2==1 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K =' + ks1,
        dataPoints:data21
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}
if(incr2==2 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///dataim2 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K =' + ks1,
        dataPoints:data21	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K =' + ks2,
        dataPoints:data22
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}
if(incr2==3 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///data22 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data23 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K =' + ks1,
        dataPoints:data21	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K =' + ks2,
        dataPoints:data22
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'K =' + ks3,
        dataPoints:data23
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}
if(incr2==4 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///data22 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data23 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data24 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K =' + ks1,
        dataPoints:data21	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K =' + ks2,
        dataPoints:data22
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'K =' + ks3,
        dataPoints:data23
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'K =' + ks4,
        dataPoints:data24
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}
if(incr2==5 && document.getElementById('yes_step2').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (volts vs. sec) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Amplitude (volts)",
			
			//maximum:0.03,
        },
		{///data22 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data23 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data24 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data25 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"black",
		showInLegend:true,
		legendText:'K =' + ks1,
        dataPoints:data21	
       },
	   {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'K =' + ks2,
        dataPoints:data22
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'K =' + ks3,
        dataPoints:data23
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'K =' + ks4,
        dataPoints:data24
       },
	   {        
        type: "spline",
		color:"#9003EC",
		showInLegend:true,
		legendText:'K =' + ks5,
        dataPoints:data25
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}
}


///problem-4 Dynamic response of PMMC DC Motor single plot

function DC_Motor(){
var omega ;
var dataOPPoints = [];
	
var kT = 0.015 ;///torque const. acc. to manual
var kb = 0.066; ///back emf const. acc. to manual
var Ra = 3.3; ///armature resistance acc. to manual
var J = math.multiply(30,math.pow(10,-6));///moment of inertia acc. to manual	
var B = 0; ///viscous friction const. acc. to manual
var BL = 0.00001;///acc. to manual T = BL * w

var Ea = document.getElementById('v').value;
var KM = math.divide(kT,math.add(math.multiply(Ra,B),math.multiply(kT,kb)));
var Taum = math.divide(math.multiply(Ra,J),math.add(math.multiply(Ra,B),math.multiply(kT,kb)));

for(var t = 0; t<=10; t+=0.1){
	
omega = math.multiply(math.multiply(Ea,KM), math.subtract(1,math.pow(math.e,-math.divide(t,Taum))));

var Eb = math.subtract(math.multiply(0.303,Ea),math.multiply(0.02,omega));//math.multiply(kb,omega);
console.log('Eb = '+Eb);

var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi));

var ia = math.divide(math.subtract(Ea,Eb),Ra);
console.log('ia = '+ia);

var T = math.multiply(kT,ia);///motor torque
console.log('T = '+T);

var TL = math.multiply(BL,omega);///load torque
console.log('TL = '+TL);
	
dataOPPoints.push({x:(t), y:(omega)});	
}

document.getElementById('speed').value = omega;
document.getElementById('armamp').value = ia;
document.getElementById('torque').value = T;
document.getElementById('load_torque').value = TL;

document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
//document.getElementById('ospan').style.display  = "none";
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none"; 
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Speed vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Speed (rad/s)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"red",
        dataPoints:dataOPPoints
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
	///testing
DC_Motor_mulplot();
	if(incr3>1){
		document.getElementById('constp3').style.display='block';
	}
}

var incr3=0,data31,data32,data33,data34,data35,vs1,vs2,vs3,vs4,vs5;
function DC_Motor_mulplot(){
	incr3++;
	var omega ;
var dataOPPoints = [];
	
var kT = 0.015 ;///torque const. acc. to manual
var kb = 0.066; ///back emf const. acc. to manual
var Ra = 3.3; ///armature resistance acc. to manual
var J = math.multiply(30,math.pow(10,-6));///moment of inertia acc. to manual	
var B = 0; ///viscous friction const. acc. to manual
var BL = 0.00001;///acc. to manual T = BL * w

var Ea = document.getElementById('v').value;
if(incr3==1){
	vs1=Ea;
}
if(incr3==2){
	vs2=Ea;
}
if(incr3==3){
	vs3=Ea;
}
if(incr3==4){
	vs4=Ea;
}
if(incr3==5){
	vs5=Ea;
}
var KM = math.divide(kT,math.add(math.multiply(Ra,B),math.multiply(kT,kb)));
var Taum = math.divide(math.multiply(Ra,J),math.add(math.multiply(Ra,B),math.multiply(kT,kb)));

for(var t = 0; t<=10; t+=0.1){
	
omega = math.multiply(math.multiply(Ea,KM), math.subtract(1,math.pow(math.e,-math.divide(t,Taum))));

var Eb = math.subtract(math.multiply(0.303,Ea),math.multiply(0.02,omega));//math.multiply(kb,omega);
console.log('Eb = '+Eb);

var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi));

var ia = math.divide(math.subtract(Ea,Eb),Ra);
console.log('ia = '+ia);

var T = math.multiply(kT,ia);///motor torque
console.log('T = '+T);

var TL = math.multiply(BL,omega);///load torque
console.log('TL = '+TL);
	
dataOPPoints.push({x:(t), y:(omega)});	
}
if(incr3==1){
	data31=dataOPPoints;
}
if(incr3==2){
	data32=dataOPPoints;
}
if(incr3==3){
	data33=dataOPPoints;
}
if(incr3==4){
	data34=dataOPPoints;
}
if(incr3==5){
	data35=dataOPPoints;
}
document.getElementById('speed').value = omega;
document.getElementById('armamp').value = ia;
document.getElementById('torque').value = T;
document.getElementById('load_torque').value = TL;

document.getElementById('orange').style.display  = "none";
document.getElementById('ovspan').style.display  = "none";
}

function DC_group(){
document.getElementById('plotbucket').style.display  = "block";
document.getElementById('chartContainer2').style.display  = "none";
document.getElementById('constp3').style.display  = "none";
document.getElementById('chartContainer').style.display  = "block";

if(incr3==1 && document.getElementById('yes_step3').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Speed vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Speed (rad/s)",
			
			//maximum:0.03,
        },
		
		],
	data: [
      {        
        type: "spline",
		color:"red",
		showInLegend:true,
		legendText:'V =' + vs1,
        dataPoints:data31
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incr3==2 && document.getElementById('yes_step3').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Speed vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Speed (rad/s)",
			
			//maximum:0.03,
        },
		{///data32 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"red",
		showInLegend:true,
		legendText:'V =' + vs1,
        dataPoints:data31
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'V =' + vs2,
        dataPoints:data32
	
       },
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incr3==3 && document.getElementById('yes_step3').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Speed vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Speed (rad/s)",
			
			//maximum:0.03,
        },
		{///data32 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data33 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"red",
		showInLegend:true,
		legendText:'V =' + vs1,
        dataPoints:data31
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'V =' + vs2,
        dataPoints:data32
	
       },
       {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'V =' + vs3,
        dataPoints:data33
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incr3==4 && document.getElementById('yes_step3').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Speed vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Speed (rad/s)",
			
			//maximum:0.03,
        },
		{///data32 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data33 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
		},
		
	  {///data34 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"red",
		showInLegend:true,
		legendText:'V =' + vs1,
        dataPoints:data31
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'V =' + vs2,
        dataPoints:data32
	
       },
       {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'V =' + vs3,
        dataPoints:data33
	
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'V =' + vs4,
        dataPoints:data34
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
if(incr3==5 && document.getElementById('yes_step3').checked==true){	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Speed vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Speed (rad/s)",
			
			//maximum:0.03,
        },
		{///data32 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data33 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
		},
		
	  {///data34 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///data35 axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		
		],
	data: [
      {        
        type: "spline",
		color:"red",
		showInLegend:true,
		legendText:'V =' + vs1,
        dataPoints:data31
	
       },
	   {        
        type: "spline",
		color:"blue",
		showInLegend:true,
		legendText:'V =' + vs2,
        dataPoints:data32
	
       },
       {        
        type: "spline",
		color:"#87DD12",
		showInLegend:true,
		legendText:'V =' + vs3,
        dataPoints:data33
	
       },
	   {        
        type: "spline",
		color:"#03C2EC",
		showInLegend:true,
		legendText:'V =' + vs4,
        dataPoints:data34
	
       },
	   {        
        type: "spline",
		color:"#9003EC",
		showInLegend:true,
		legendText:'V =' + vs5,
        dataPoints:data35
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
}
}


///Bode plot problem 3 using closed loop tf

/* function Bode(){

var databodePoints =[];
var dataphasePoints	= [];

var num = document.getElementById('k2').value;

document.getElementById('orange').style.display  = "block";
//document.getElementById('ospan').style.display  = "block";

///find pols of cltf of oltf = k/s(s+1)(s+2)
var roots = math.polynomialRoot(num,2,3,1);

var cpol1 = roots[0];///alpha

var cpol2R = roots[1].re;///-beta
var cpol2I = roots[1].im;///gamma

var alpha = cpol1;
var beta = -cpol2R;
var gamma = cpol2I;

var betasqr = math.pow(beta,2);
var gammasqr = math.pow(gamma,2);

var omegarange = document.getElementById('orange').value;
for(var omega = 0.1; omega<= omegarange; omega++){
	
var omega2 = math.pow(omega,2);
var Apart1 = math.multiply(alpha,math.add(betasqr,gammasqr));
var Apart2 = math.multiply(omega2,math.subtract(alpha,math.multiply(2,beta)));
var A = math.subtract(Apart1,Apart2);

var Bpart1 = math.multiply(omega,math.add(betasqr,gammasqr,-math.multiply(2,alpha,beta)));
var Bpart2 = math.pow(omega,3);
var B = math.subtract(Bpart1,Bpart2);

var deno1 = math.pow(math.divide(A,num),2);
var deno2 = math.pow(math.divide(B,num),2);
var deno = math.sqrt(math.add(deno1,deno2));
var gain = math.divide(1,deno);
var dbgain = math.multiply(20,math.log10(gain));

var p1 = math.divide(math.subtract(math.multiply(2,omega),math.pow(omega,3)),num);
var p2 = math.subtract(1,math.divide(math.multiply(3,omega2),num));
var p = math.divide(p1,p2);
/* var pdeno = math.add(math.pow(num,2),math.multiply(math.subtract(4,math.multiply(6,num)),omega2),math.multiply(5,math.pow(omega,4)),math.pow(omega,6));
var pnum1 = math.multiply(num,math.subtract(num,math.multiply(3,omega2)));
var pnum2 = math.multiply(num,math.subtract(math.multiply(2,omega),math.pow(omega,3)));
var p1 = math.divide(pnum1,pdeno);
var p2 = -math.divide(pnum2,pdeno); */
/* var num1 = math.subtract(math.multiply(2,omega),math.pow(omega,3));
var num2 = math.subtract(num,math.multiply(3,omega2));
var numf = math.divide(num1,num2); *

var phase = -math.multiply(math.atan(numf),math.divide(180,math.pi));

//var phase = math.add(-90,-math.multiply(math.atan(omega),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(omega,2)),math.divide(180,math.pi)));
	
databodePoints.push({x:(omega), y:(dbgain)});
dataphasePoints.push({x:(omega), y:(phase)});

}
///calculation of wpc and GM
var w_pc = math.sqrt(2);///from calculation
var omega_pc2 = math.pow(w_pc,2);
var deno1_pc = omega_pc2;
var deno2_pc = math.add(omega_pc2,1);
var deno3_pc = math.add(omega_pc2,4);
var deno_pc = math.sqrt(math.multiply(deno1_pc,deno2_pc,deno3_pc));
var gain_wpc = math.divide(num,deno_pc);
var GM = math.divide(1,gain_wpc);
var GMdB = math.multiply(20,math.log10(GM));

///calculation of wgc and PM
var constant1 = math.subtract(4,math.multiply(6,num));//-math.pow(num,2);
var roots = math.polynomialRoot(0,constant1,5,1);
var w_gc = math.sqrt(roots[1]);
console.log('w_gc='+w_gc);
var p1gc = math.divide(math.subtract(math.multiply(2,w_gc),math.pow(w_gc,3)),num);
var p2gc = math.subtract(1,math.divide(math.multiply(3,math.pow(w_gc,2)),num));
var p = math.divide(p2,p1);

var p_gc = -math.multiply(math.atan2(p1gc,p2gc),math.divide(180,math.pi));
//var p_gc = math.add(-90,-math.multiply(math.atan(w_gc),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(w_gc,2)),math.divide(180,math.pi)));
console.log(p_gc);
var PM = math.add(180,p_gc);

document.getElementById("wpc").value = w_pc;
document.getElementById("wgc").value = w_gc;
document.getElementById("GM").value = GMdB;
document.getElementById("PM").value = PM;

document.getElementById('ovspan').style.display  = "none";	
document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
		animationEnabled: true,
		animationDuration: 10000,
		zoomEnabled: true,
		zoomType:"xy",		  
	  title:{
      text: "Bode Plot (Gain  vs. Angular frequency) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
		 logarithmic:true,
        interlacedColor: "#FADA9E",
        title: "Angular frequency (rad/sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Gain (dB/decade)",
			
			//maximum:0.03,
        },

		],
	data: [
      {        
        type: "line",
		color:"red",
        dataPoints:databodePoints
	
       },
	   
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*
	
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
		animationEnabled: true,
		animationDuration: 10000,
		zoomEnabled: true,
		zoomType:"xy",		  
	  title:{
      text: "Bode Plot (Phase vs. Angular frequency) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
		 logarithmic:true,
        interlacedColor: "#FADA9E",
        title: "Angular frequency (rad/sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Phase (degree)",
			
			//maximum:0.03,
        },
	
		],
	data: [
      {        
        type: "line",
		color:"blue",
        dataPoints:dataphasePoints
	
       },
	   
      ]	
	});

	chart2.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	window.print();
	});	
	
} */
///Bode plot problem 3

function Bode(){

var databodePoints =[];
var dataphasePoints	= [];

var num = document.getElementById('k2').value;

document.getElementById('orange').style.display  = "block";
//document.getElementById('ospan').style.display  = "block";

var omegarange = document.getElementById('orange').value;
for(var omega = 0.1; omega<= omegarange; omega+=0.1){
	
var omega2 = math.pow(omega,2);
var deno1 = omega2;
var deno2 = math.add(omega2,1);
var deno3 = math.add(omega2,4);
var deno = math.sqrt(math.multiply(deno1,deno2,deno3));
var gain = math.divide(num,deno);
var dbgain = math.multiply(20,math.log10(gain));

var phase = math.add(-90,-math.multiply(math.atan(omega),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(omega,2)),math.divide(180,math.pi)));
	
databodePoints.push({x:(omega), y:(dbgain)});
dataphasePoints.push({x:(omega), y:(phase)});

}
///calculation of wpc and GM
var w_pc = math.sqrt(2);///from calculation
var omega_pc2 = math.pow(w_pc,2);
var deno1_pc = omega_pc2;
var deno2_pc = math.add(omega_pc2,1);
var deno3_pc = math.add(omega_pc2,4);
var deno_pc = math.sqrt(math.multiply(deno1_pc,deno2_pc,deno3_pc));
var gain_wpc = math.divide(num,deno_pc);
var GM = math.divide(1,gain_wpc);
var GMdB = math.multiply(20,math.log10(GM));
var gmplot = math.subtract(0,GMdB);
///calculation of wgc and PM
var constant = -math.pow(num,2);
var roots = math.polynomialRoot(constant,4,5,1);
var w_gc = math.sqrt(roots[1]);
var p_gc = math.add(-90,-math.multiply(math.atan(w_gc),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(w_gc,2)),math.divide(180,math.pi)));
console.log(p_gc);
var PM = math.add(180,p_gc);
var pmplot = math.subtract(PM,180);

document.getElementById("wpc").value = w_pc;
document.getElementById("wgc").value = w_gc;
document.getElementById("GM").value = GMdB;
document.getElementById("PM").value = PM;

document.getElementById('ovspan').style.display  = "none";	
document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
		animationEnabled: true,
		animationDuration: 10000,
		zoomEnabled: true,
		zoomType:"xy",		  
	  title:{
      text: "Bode Plot (Gain  vs. Angular frequency) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
		 logarithmic:true,
        interlacedColor: "#FADA9E",
        title: "Angular frequency (rad/sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Gain (dB/decade)",
			minimum:-150,
			maximum:100,
        },
		{///Gain cross over frequency
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///phase cross over frequency
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///Gain margin
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		
		],
	data: [
      {        
        type: "line",
		color:"red",
        dataPoints:databodePoints
	
       },
	    {        
        type: "line",
		color:"gray",
		markerSize: 2,
		showInLegend: true,
		legendText: "Gain cross over frequency",
		lineDashType: "dash",
        dataPoints:[
		{ x: w_gc,  y: -150  },
		{ x: w_gc,  y: 100  },			
		]
       },
	   {        
        type: "line",
		color:"powderblue",
		markerSize: 2,
		showInLegend: true,
		legendText: "Phase cross over frequency",
		lineDashType: "dash",
        dataPoints:[
		{ x: w_pc,  y: -150  },
		{ x: w_pc,  y: 100  },			
		]
       },
	    {        
        type: "line",
		lineThickness:3,
		color:"#C30776",
		markerSize:2,
		showInLegend: true,
		legendText: "Gain Margin",
        dataPoints:[
		{ x: w_pc,  y: gmplot  },
		{ x: w_pc,  y: 0  },
		]
       },
	   ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	
	
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
		animationEnabled: true,
		animationDuration: 10000,
		zoomEnabled: true,
		zoomType:"xy",		  
	  title:{
      text: "Bode Plot (Phase vs. Angular frequency) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
		 logarithmic:true,
        interlacedColor: "#FADA9E",
        title: "Angular frequency (rad/sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Phase (degree)",
			minimum:-300,
			maximum:100,
        },
		{///Gain cross over frequency
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///phase cross over frequency
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///-180 deg phase line
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///Phase margin
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
	
		],
	data: [
      {        
        type: "line",
		color:"blue",
        dataPoints:dataphasePoints
	  },
	  
	   {        
        type: "line",
		color:"gray",
		markerSize: 2,
		showInLegend: true,
		legendText: "Gain cross over frequency",
		lineDashType: "dash",
        dataPoints:[
		{ x: w_gc,  y: -300  },
		{ x: w_gc,  y: 100  },			
		]
       },
	   {        
        type: "line",
		color:"powderblue",
		markerSize: 2,
		showInLegend: true,
		legendText: "Phase cross over frequency",
		lineDashType: "dash",
        dataPoints:[
		{ x: w_pc,  y: -300  },
		{ x: w_pc,  y: 100  },			
		]
       },
	   {        
        type: "line",
		color:"#6A8A31",
		markerSize: 2,
		//showInLegend: true,
		//legendText: "Phase cross over frequency",
		lineDashType: "dash",
        dataPoints:[
		{ x: 0.1,  y: -180  },
		{ x: omegarange,  y: -180  },			
		]
       },
	   {        
        type: "line",
		color:"black",
		showInLegend: true,
		//markerSize: 2,
		lineThickness: 3,
		legendText: "Phase Margin",
        dataPoints:[
		{ x: w_gc,  y: -180  },
		{ x: w_gc,  y: pmplot},
			
		]
       },
	   
      ]	
	});

	chart2.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	window.print();
	});	
	
}
///problem3 Nyquist plot

function Nyquist(){
	
var dataNyPoints =[];
var datamirPoints =[];


var num = document.getElementById('k2').value;

document.getElementById('orange').style.display  = "block";
//document.getElementById('ospan').style.display  = "block";

var omegarange = document.getElementById('orange').value;
for(var omega = 0.1; omega<= omegarange; omega+=1){
	
var omega2 = math.pow(omega,2);
var deno1 = omega2;
var deno2 = math.add(omega2,1);
var deno3 = math.add(omega2,4);
var deno = math.sqrt(math.multiply(deno1,deno2,deno3));
var gain = math.divide(num,deno);
var gaindb = math.multiply(20,math.log10(gain));
//console.log('gain ='+ gain);

var phase = math.abs(math.add(-90,-math.multiply(math.atan(omega),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(omega,2)),math.divide(180,math.pi))));
//console.log('angle ='+ phase);
///WRONG CALCULATION IGNORE
var subAngle = math.subtract(phase,90);

//var sinAlpha = math.multiply(math.sin(subAngle),math.divide(180,math.pi));
//var cosAlpha = math.multiply(math.cos(subAngle),math.divide(180,math.pi));

//var actAngle = math.subtract(-90,subAngle);
//console.log('angle ='+ actAngle);
//var tanValue = math.multiply(math.tan(actAngle),math.divide(180,math.pi));


///RIGHT CALCULATION
var xcoordinate = math.multiply(gain,math.sin(subAngle));
var ycoordinate = math.multiply(gain,math.cos(subAngle));

//console.log(xcoordinate+'\n'+ ycoordinate);


	
dataNyPoints.push({x:(-xcoordinate), y:(ycoordinate)});
datamirPoints.push({x:(-xcoordinate), y:(-ycoordinate)});
//dataphasePoints.push({x:(omega), y:(phase)});

}
///for getting starting and ending co ordinates of nyquist infinite magnitude half circle
var w = 0.1;
var w2 = math.pow(w,2);
var d1 = w2;
var d2 = math.add(w2,1);
var d3 = math.add(w2,4);
var d = math.sqrt(math.multiply(d1,d2,d3));
var g = math.divide(num,d);
//console.log('gain ='+ gain);

var p = math.abs(math.add(-90,-math.multiply(math.atan(w),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(w,2)),math.divide(180,math.pi))));
//console.log('angle ='+ phase);

var sAngle = math.subtract(p,90);

var sAlpha = math.multiply(math.sin(sAngle),math.divide(180,math.pi));
var cAlpha = math.multiply(math.sin(sAngle),math.divide(180,math.pi));

var xco = math.multiply(g,math.sin(sAngle));
var yco = math.multiply(g,math.cos(sAngle));


///calculation of wpc and GM
var w_pc = math.sqrt(2);///from calculation
var omega_pc2 = math.pow(w_pc,2);
var deno1_pc = omega_pc2;
var deno2_pc = math.add(omega_pc2,1);
var deno3_pc = math.add(omega_pc2,4);
var deno_pc = math.sqrt(math.multiply(deno1_pc,deno2_pc,deno3_pc));
var gain_wpc = math.divide(num,deno_pc);
var GM = math.divide(1,gain_wpc);
var GMdB = math.multiply(20,math.log10(GM));
document.getElementById('ovspan').style.display  = "none";

///calculation of wgc and PM
var constant = -math.pow(num,2);
var roots = math.polynomialRoot(constant,4,5,1);
//console.log(roots);
var w_gc = math.sqrt(roots[1]);
var p_gc = math.add(-90,-math.multiply(math.atan(w_gc),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(w_gc,2)),math.divide(180,math.pi)));
var PM = math.add(180,p_gc);

///for getting the gain and phase at w_gc
var wg = w_gc;
var wg2 = math.pow(wg,2);
var dg1 = wg2;
var dg2 = math.add(wg2,1);
var dg3 = math.add(wg2,4);
var dg = math.sqrt(math.multiply(dg1,dg2,dg3));
var gg = math.divide(num,dg);
var ggdb = math.multiply(20,math.log10(gg));
//console.log('gain ='+ gain);

var pg = math.abs(math.add(-90,-math.multiply(math.atan(wg),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(wg,2)),math.divide(180,math.pi))));
//console.log('angle ='+ phase);

var sgAngle = math.subtract(pg,90);

var sgAlpha = math.multiply(math.sin(sgAngle),math.divide(180,math.pi));
var cgAlpha = math.multiply(math.sin(sgAngle),math.divide(180,math.pi)); 

var xgco = math.multiply(gg,math.sin(sgAngle));
var ygco = math.multiply(gg,math.cos(sgAngle));

///for getting the gain and phase at w_pc
var wp = w_pc;
var wp2 = math.pow(wp,2);
var dpg1 = wp2;
var dpg2 = math.add(wp2,1);
var dpg3 = math.add(wp2,4);
var dpg = math.sqrt(math.multiply(dpg1,dpg2,dpg3));
var gpg = math.divide(num,dpg);
var gpgdb = math.multiply(20,math.log10(gpg));
//console.log('gain ='+ gain);

var ppg = math.abs(math.add(-90,-math.multiply(math.atan(wp),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(wp,2)),math.divide(180,math.pi))));
//console.log('angle ='+ phase);

var spgAngle = math.round(math.subtract(ppg,90));

var spgAlpha = math.multiply(math.sin(spgAngle),math.divide(180,math.pi));
var cpgAlpha = math.multiply(math.sin(spgAngle),math.divide(180,math.pi));

var xpgco = math.multiply(gpg,math.sin(spgAngle));
var ypgco = math.multiply(gpg,math.cos(spgAngle));



document.getElementById("wpc").value = w_pc;
document.getElementById("wgc").value = w_gc;
document.getElementById("GM").value = GMdB;
document.getElementById("PM").value = PM;


document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "none"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
		animationEnabled: true,
		animationDuration: 10000,
		zoomEnabled: true,
		zoomType:"xy",		  
	  title:{
      text: "Nyquist Plot ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
		 
        interlacedColor: "#FADA9E",
        title: "Real Axis of G(s) H(s)",
		maximum:100,
		minimum:-100
      },
    axisY: [
	      {/////output Y axis
            title: "Imaginary Axis of G(s) H(s)",
			maximum:100,
			minimum:-100
        },
		{
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///show unit circle
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///show wpc
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},
		{///show wgc
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		},

		],
	data: [
	{
	type: "line",
		color:"black",
        dataPoints:[
	   { x: 180, y: 0 },
       { x: -180, y: 0 },
       { x: 0, y: 0 },
       { x: 0, y: 150 },
       { x: 0, y: -150 },
	]} , 
      {
		showInLegend: true,
		legendText:"Polar plot",  
        type: "spline",
		color:"red",
        dataPoints:dataNyPoints
	
       },
	   {
		showInLegend: true,
		legendText:"Mirror image", 
        type: "spline",
		color:"green",
        dataPoints:datamirPoints
	
       },
	   {
	type: "spline",
		color:"gray",
		showInLegend: true,
		legendText:"Infinite magnitude half circle in clock wise direction",
		lineDashType: "dash",
		markerSize: 2,
        dataPoints:[
	   { x: -xco, y:-yco },
       { x: 0, y: 80 },
	   { x: 20, y: 70 },
	   { x: 27, y: 0 },
	   { x: 20, y: -70 },
       { x: 0, y: -80 },
       { x: -xco, y:yco },
       
	]} ,
	{
	type: "scatter",
	markerType:"cross",
		color:"#7412DD",
		showInLegend:true,
		legendText:'Critical point',
        dataPoints:[
	   { x: -1, y: 0 }
       /* { x: 0, y: 1 },
       { x: 1, y: 0 },
       { x: 0, y: -1 },
       { x: -1, y: 0 } */
	]} ,
	{
	type: "scatter",
		color:"blue",
		showInLegend:true,
		legendText:'Phase cross over frequency',
        dataPoints:[
	   { x: -w_pc, y: 0 }
       
	]} ,
	{
	type: "scatter",
		color:"#F99123",
		showInLegend:true,
		legendText:'Gain cross over frequency',
        dataPoints:[
	   { x: -w_gc, y: ygco }
       
	]} ,
	   
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
}	
	


///problem simulations
///for problem1 single plots
function problem1_simulation(){
	
if(document.getElementById('seudo1').value == 1){
	
	step();
}	
	
if(document.getElementById('seudo1').value == 2){
	
	impulse();
}	
	
} 
///for problem1 multiple plots
function problem1_mulsimulation(){
	
if(document.getElementById('seudo1').value == 1){
	
	step_group1();
}	
	
if(document.getElementById('seudo1').value == 2){
	
	impulse_group1();
}	
	
} 
 
///for problem2 single plots of output response
 function loci_plot(){
	
if(document.getElementById('seudo1').value == 1){
	
	loci_plot_step();
}	
	
if(document.getElementById('seudo1').value == 2){
	
	loci_plot_impulse();
}	
	
} 

///for problem2 multiple plots of output response
 function loci_mulplot(){
	
if(document.getElementById('seudo1').value == 1){
	
	step_group2();
}	
	
if(document.getElementById('seudo1').value == 2){
	
	impulse_group2();
}	
	
} 

///clear plot

function Refresh(){
	
	document.getElementById('plotbucket').style.display = "none";
	document.getElementById("result").style.display = "none";
	document.getElementById("orange").style.display = "none";
	document.getElementById("ovspan").style.display = "none";
	document.getElementById("exportChart").style.display = "none";
	document.getElementById("wpc").value = "";
	document.getElementById("wgc").value = "";
	document.getElementById("GM").value = "";
	document.getElementById("PM").value = "";
} 
 
function ok3d(){
	document.getElementById('tester').style.display = "none";
	document.getElementById('3dok').style.display = "none";
} 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
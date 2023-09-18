 
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
}
function problem3(){
	
document.getElementById("controller").src = "images/pr3.png";
document.getElementById("run1").style.display = "none";
document.getElementById("run4").style.display = "none";
document.getElementById("run2").style.display = "none";
document.getElementById("run3").style.display = "block";
document.getElementById("orange").style.display = "block";
document.getElementById('run3d').style.display = "none";
document.getElementById("k").style.display = "none";
document.getElementById("k2").style.display = "block";
document.getElementById("z").style.display = "none";
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
}
///problem tabs inner selections
	
function tostep(){///prob1 step selection
	
document.getElementById("seudo1").value = 1;	
	
}

function toimpulse(){///prob1 impulse selection
	
document.getElementById("seudo1").value = 2;	
	
} 

///problem functions
 
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
      text: "Transient Response for Unit Step input (v vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Volt(v)",
			
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
      text: "Transient Response for Unit Impulse input (v vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Volt(v)",
			
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
      text: "Root Locus Plot "
	  
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
      text: "Output Response Plot (v vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Volt(v)",
			
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
      text: "Output Response Plot (v vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Volt(v)",
			
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
	
}

///problem-4 Dynamic response of PMMC DC Motor

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
      text: "Output Response Plot (Speed vs. Time) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Speed(rad/s)",
			
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
}

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

///calculation of wgc and PM
var constant = -math.pow(num,2);
var roots = math.polynomialRoot(constant,4,5,1);
var w_gc = math.sqrt(roots[1]);
var p_gc = math.add(-90,-math.multiply(math.atan(w_gc),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(w_gc,2)),math.divide(180,math.pi)));
var PM = math.subtract(180,p_gc);

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
      text: "Bode Plot (Gain(dB) vs. Angular frequency) "
	  
      },
	  
	  axisX:{
		 logarithmic:true,
        interlacedColor: "#FADA9E",
        title: "Angular frequency(rad/sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Gain(dB/decade)",
			
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
	chart.exportChart({format: "jpg"})});*/	
	
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
		animationEnabled: true,
		animationDuration: 10000,
		zoomEnabled: true,
		zoomType:"xy",		  
	  title:{
      text: "Bode Plot (Phase(degree) vs. Angular frequency) "
	  
      },
	  
	  axisX:{
		 logarithmic:true,
        interlacedColor: "#FADA9E",
        title: "Angular frequency(rad/sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Phase(degree)",
			
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
//console.log('gain ='+ gain);

var phase = math.abs(math.add(-90,-math.multiply(math.atan(omega),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(omega,2)),math.divide(180,math.pi))));
//console.log('angle ='+ phase);

var subAngle = math.subtract(phase,90);

var sinAlpha = math.multiply(math.sin(subAngle),math.divide(180,math.pi));
var cosAlpha = math.multiply(math.sin(subAngle),math.divide(180,math.pi));

//var actAngle = math.subtract(-90,subAngle);
//console.log('angle ='+ actAngle);
//var tanValue = math.multiply(math.tan(actAngle),math.divide(180,math.pi));



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
document.getElementById('ovspan').style.display  = "none";

///calculation of wgc and PM
var constant = -math.pow(num,2);
var roots = math.polynomialRoot(constant,4,5,1);
console.log(roots);
var w_gc = math.sqrt(roots[1]);
var p_gc = math.add(-90,-math.multiply(math.atan(w_gc),math.divide(180,math.pi)),-math.multiply(math.atan(math.divide(w_gc,2)),math.divide(180,math.pi)));
var PM = math.subtract(180,p_gc);



document.getElementById("wpc").value = w_pc;
document.getElementById("wgc").value = w_gc;
document.getElementById("GM").value = GM;
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
      text: "Nyquist Plot "
	  
      },
	  
	  axisX:{
		 
        interlacedColor: "#FADA9E",
        title: "Real Axis",
		maximum:100,
		minimum:-100
      },
    axisY: [
	      {/////output Y axis
            title: "Imaginary Axis",
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
		legendText:"Nyquist Plot",  
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
        dataPoints:[
	   { x: -xco, y:-yco },
       { x: 0, y: 80 },
	   { x: 20, y: 70 },
	   { x: 27, y: 0 },
	   { x: 20, y: -70 },
       { x: 0, y: -80 },
       { x: -xco, y:yco },
       
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
 
function problem1_simulation(){
	
if(document.getElementById('seudo1').value == 1){
	
	step();
}	
	
if(document.getElementById('seudo1').value == 2){
	
	impulse();
}	
	
} 
 
 function loci_plot(){
	
if(document.getElementById('seudo1').value == 1){
	
	loci_plot_step();
}	
	
if(document.getElementById('seudo1').value == 2){
	
	loci_plot_impulse();
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
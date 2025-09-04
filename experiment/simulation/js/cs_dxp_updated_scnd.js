 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/

///problem tabs	
function problem1(){
window.location.assign('index.html');

}

function scw(){
	document.getElementById('scope_chk').value = 1;
	DC_Motor_Speed();
}
function sci(){
	document.getElementById('scope_chk').value = 2;
	DC_Motor_Current();
}
function sct(){
	document.getElementById('scope_chk').value = 3;
	DC_Motor_TL();
}

function calcDC(){
	if(document.getElementById('Rs').value != 0 && document.getElementById('Ra').value != 0 && document.getElementById('K').value != 0 && document.getElementById('Ke').value != 0 && document.getElementById('J').value != 0 && document.getElementById('Rs').value != 0){
	var k = document.getElementById('K').value;//0.015 ;///torque const. acc. to manual
var ke = document.getElementById('Ke').value;//0.066; ///back emf const. acc. to manual it is also known as Ke
var Ra = document.getElementById('Ra').value;//3.3; ///armature resistance acc. to manual
var J = document.getElementById('J').value;//math.multiply(30,math.pow(10,-6));///moment of inertia acc. to manual	
var B = 0; ///viscous friction const. acc. to manual
var BL = 0.00001;///acc. to manual T = BL * w
var Rs = document.getElementById('Rs').value;//0.3;///acc. manual source resistance
var vs = 10;///acc. manual supply voltage in V

var au = math.divide(1,Ra).toPrecision(3);
var a0 = math.divide(ke,Ra);
var bi = math.round(math.divide(k,J));
var bt = math.round(math.divide(1,J));

document.getElementById('Au').value = au;
document.getElementById('A0').value = a0;
document.getElementById('Bi').value = bi;
document.getElementById('BT').value = bt;

$('#Rss').val(Rs);
	$('#Aus').val(au);
	$('#A0s').val(a0);
	$('#Bis').val(bi);
	$('#BTs').val(bt);
	$('#BLs').val(BL);
	}
	else{
		alert('Enter the dc motor parameter values.');
	}
	
}

///problem-4 Dynamic response of PMMC DC Motor single plot

function DC_Motor_Speed(){
var omega ;
var dataOPPoints = [];///for speed
/* var dataCurrent = [];///for ia
var dataTork = [];///for T */
	
var k = document.getElementById('K').value;//0.015 ;///torque const. acc. to manual
var ke = document.getElementById('Ke').value;//0.066; ///back emf const. acc. to manual it is also known as Ke
var Ra = document.getElementById('Ra').value;//3.3; ///armature resistance acc. to manual
var J = document.getElementById('J').value;//document.getElementById('J').value;//math.multiply(30,math.pow(10,-6));///moment of inertia acc. to manual	
var B = 0; ///viscous friction const. acc. to manual
var BL = 0.00001;///acc. to manual T = BL * w
var Rs = document.getElementById('Rs').value;//0.3;///acc. manual source resistance
var vs = 10;///acc. manual supply voltage in V

var au = document.getElementById('Au').value;//math.divide(1,Ra).toPrecision(3);
var a0 = document.getElementById('A0').value;//math.divide(ke,Ra);
var bi = document.getElementById('Bi').value;//math.round(math.divide(k,J));
var bt = document.getElementById('BT').value;//math.round(math.divide(1,J));

 var alpha = math.divide(math.multiply(bi,au),math.add(1,math.multiply(au,Rs)));
console.log(alpha);
var beta = math.divide(math.add(math.multiply(bt,BL),math.multiply(au,Rs,bt,BL),math.multiply(bi,a0)),math.add(1,math.multiply(au,Rs)));
console.log(beta);
var mulconst = math.divide(math.multiply(alpha,vs),beta);
console.log(mulconst);
var timelimit = document.getElementById('ST').value;
/* var alpha = math.multiply(bi,au);
console.log(alpha);
var beta = math.multiply(math.subtract(math.multiply(bi,au),math.multiply(bt,BL)),math.add(1,math.multiply(au,Rs)));
console.log(beta);
var mulconst = math.divide(math.multiply(alpha,vs),beta);
console.log(mulconst); */


//var Ea = document.getElementById('v').value;
//var KM = math.divide(kT,math.add(math.multiply(Ra,B),math.multiply(kT,kb)));
//var Taum = math.divide(math.multiply(Ra,J),math.add(math.multiply(Ra,B),math.multiply(kT,kb)));

for(var t = 0; t<=timelimit; t+=0.1){
	
//omega = math.multiply(math.multiply(Ea,KM), math.subtract(1,math.pow(math.e,-math.divide(t,Taum))));

omega = math.multiply(mulconst, math.subtract(1,math.pow(math.e,-math.multiply(t,beta))));//speed in rad/s

//var Eb = math.subtract(math.multiply(0.303,Ea),math.multiply(0.02,omega));//math.multiply(kb,omega);
/* console.log('Eb = '+Eb);

var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi)); */

//var ia = math.divide(math.subtract(Ea,Eb),Ra);
//console.log('ia = '+ia);

var ia = math.divide(math.subtract(math.multiply(au,vs),math.multiply(a0,omega)),math.add(1,math.multiply(au,Rs)));

/* var T = math.multiply(kT,ia);///motor torque
console.log('T = '+T); */

var TL = math.multiply(BL,omega);///load torque
//console.log('TL = '+TL);

if(document.getElementById('scope_chk').value == 1){	
dataOPPoints.push({x:(t), y:(omega)});	///speed in rad/s
}
if(document.getElementById('scope_chk').value == 2){	
dataOPPoints.push({x:(t), y:(ia)});	///current in amp
}
if(document.getElementById('scope_chk').value == 3){	
dataOPPoints.push({x:(t), y:(TL)});	///torque in nm
}
//dataCurrent.push({x:(t), y:(ia)});	///current in amp
//dataTork.push({x:(t), y:(TL)});	///Load toque N-m

}


document.getElementById('plotbucket').style.display  = "block";

document.getElementById('chartContainer').style.display  = "block"; 
document.getElementById('chartContainer').style.height = 70+"%";///new addition to show broader plot eccept bode	
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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */
	///testing
/* DC_Motor_mulplot();
	if(incr3>1){
		document.getElementById('constp3').style.display='block';
	} */
}

function DC_Motor_Current(){
var omega ;
var dataOPPoints = [];///for speed
/* var dataCurrent = [];///for ia
var dataTork = [];///for T */
	
var k = document.getElementById('K').value;//0.015 ;///torque const. acc. to manual
var ke = document.getElementById('Ke').value;//0.066; ///back emf const. acc. to manual it is also known as Ke
var Ra = document.getElementById('Ra').value;//3.3; ///armature resistance acc. to manual
var J = document.getElementById('J').value;//math.multiply(30,math.pow(10,-6));///moment of inertia acc. to manual	
var B = 0; ///viscous friction const. acc. to manual
var BL = 0.00001;///acc. to manual T = BL * w
var Rs = document.getElementById('Rs').value;//0.3;///acc. manual source resistance
var vs = 10;///acc. manual supply voltage in V

var au = document.getElementById('Au').value;//math.divide(1,Ra).toPrecision(3);
var a0 = document.getElementById('A0').value;//math.divide(ke,Ra);
var bi = document.getElementById('Bi').value;//math.round(math.divide(k,J));
var bt = document.getElementById('BT').value;//math.round(math.divide(1,J));

var alpha = math.divide(math.multiply(bi,au),math.add(1,math.multiply(au,Rs)));
console.log(alpha);
var beta = math.divide(math.add(math.multiply(bt,BL),math.multiply(au,Rs,bt,BL),math.multiply(bi,a0)),math.add(1,math.multiply(au,Rs)));
console.log(beta);
var mulconst = math.divide(math.multiply(alpha,vs),beta);
console.log(mulconst);
var timelimit = document.getElementById('ST').value;
//var Ea = document.getElementById('v').value;
//var KM = math.divide(kT,math.add(math.multiply(Ra,B),math.multiply(kT,kb)));
//var Taum = math.divide(math.multiply(Ra,J),math.add(math.multiply(Ra,B),math.multiply(kT,kb)));

for(var t = 0; t<=timelimit; t+=0.1){
	
//omega = math.multiply(math.multiply(Ea,KM), math.subtract(1,math.pow(math.e,-math.divide(t,Taum))));

omega = math.multiply(mulconst, math.subtract(1,math.pow(math.e,-math.multiply(t,beta))));//speed in rad/s

//var Eb = math.subtract(math.multiply(0.303,Ea),math.multiply(0.02,omega));//math.multiply(kb,omega);
/* console.log('Eb = '+Eb);

var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi)); */

//var ia = math.divide(math.subtract(Ea,Eb),Ra);
//console.log('ia = '+ia);

var ia = math.divide(math.subtract(math.multiply(au,vs),math.multiply(a0,omega)),math.add(1,math.multiply(au,Rs)));

/* var T = math.multiply(kT,ia);///motor torque
console.log('T = '+T); */

var TL = math.multiply(BL,omega);///load torque
//console.log('TL = '+TL);

if(document.getElementById('scope_chk').value == 1){	
dataOPPoints.push({x:(t), y:(omega)});	///speed in rad/s
}
if(document.getElementById('scope_chk').value == 2){	
dataOPPoints.push({x:(t), y:(ia)});	///current in amp
}
if(document.getElementById('scope_chk').value == 3){	
dataOPPoints.push({x:(t), y:(TL)});	///torque in nm
}
//dataCurrent.push({x:(t), y:(ia)});	///current in amp
//dataTork.push({x:(t), y:(TL)});	///Load toque N-m

}


document.getElementById('plotbucket').style.display  = "block";

document.getElementById('chartContainer').style.display  = "block"; 
document.getElementById('chartContainer').style.height = 70+"%";///new addition to show broader plot eccept bode	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Armature current vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Armature current (A)",
			
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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */
	///testing
/* DC_Motor_mulplot();
	if(incr3>1){
		document.getElementById('constp3').style.display='block';
	} */
}
function DC_Motor_TL(){
var omega ;
var dataOPPoints = [];///for speed
/* var dataCurrent = [];///for ia
var dataTork = [];///for T */
	
var k = document.getElementById('K').value;//0.015 ;///torque const. acc. to manual
var ke = document.getElementById('Ke').value;//0.066; ///back emf const. acc. to manual it is also known as Ke
var Ra = document.getElementById('Ra').value;//3.3; ///armature resistance acc. to manual
var J = document.getElementById('J').value;//math.multiply(30,math.pow(10,-6));///moment of inertia acc. to manual	
var B = 0; ///viscous friction const. acc. to manual
var BL = 0.00001;///acc. to manual T = BL * w
var Rs = document.getElementById('Rs').value;//0.3;///acc. manual source resistance
var vs = 10;///acc. manual supply voltage in V

var au = document.getElementById('Au').value;//math.divide(1,Ra).toPrecision(3);
var a0 = document.getElementById('A0').value;//math.divide(ke,Ra);
var bi = document.getElementById('Bi').value;//math.round(math.divide(k,J));
var bt = document.getElementById('BT').value;//math.round(math.divide(1,J));

var alpha = math.divide(math.multiply(bi,au),math.add(1,math.multiply(au,Rs)));
console.log(alpha);
var beta = math.divide(math.add(math.multiply(bt,BL),math.multiply(au,Rs,bt,BL),math.multiply(bi,a0)),math.add(1,math.multiply(au,Rs)));
console.log(beta);
var mulconst = math.divide(math.multiply(alpha,vs),beta);
console.log(mulconst);
var timelimit = document.getElementById('ST').value;
//var Ea = document.getElementById('v').value;
//var KM = math.divide(kT,math.add(math.multiply(Ra,B),math.multiply(kT,kb)));
//var Taum = math.divide(math.multiply(Ra,J),math.add(math.multiply(Ra,B),math.multiply(kT,kb)));

for(var t = 0; t<=timelimit; t+=0.1){
	
//omega = math.multiply(math.multiply(Ea,KM), math.subtract(1,math.pow(math.e,-math.divide(t,Taum))));

omega = math.multiply(mulconst, math.subtract(1,math.pow(math.e,-math.multiply(t,beta))));//speed in rad/s

//var Eb = math.subtract(math.multiply(0.303,Ea),math.multiply(0.02,omega));//math.multiply(kb,omega);
/* console.log('Eb = '+Eb);

var N = math.divide(math.multiply(omega,60),math.multiply(2,math.pi)); */

//var ia = math.divide(math.subtract(Ea,Eb),Ra);
//console.log('ia = '+ia);

var ia = math.divide(math.subtract(math.multiply(au,vs),math.multiply(a0,omega)),math.add(1,math.multiply(au,Rs)));

/* var T = math.multiply(kT,ia);///motor torque
console.log('T = '+T); */

var TL = math.multiply(BL,omega);///load torque
//console.log('TL = '+TL);

if(document.getElementById('scope_chk').value == 1){	
dataOPPoints.push({x:(t), y:(omega)});	///speed in rad/s
}
if(document.getElementById('scope_chk').value == 2){	
dataOPPoints.push({x:(t), y:(ia)});	///current in amp
}
if(document.getElementById('scope_chk').value == 3){	
dataOPPoints.push({x:(t), y:(TL)});	///torque in nm
}
//dataCurrent.push({x:(t), y:(ia)});	///current in amp
//dataTork.push({x:(t), y:(TL)});	///Load toque N-m

}


document.getElementById('plotbucket').style.display  = "block";

document.getElementById('chartContainer').style.display  = "block"; 
document.getElementById('chartContainer').style.height = 70+"%";///new addition to show broader plot eccept bode	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Output Response Plot (Load Torque vs. Time) ",
	  fontFamily: "Times New Roman",
	  fontSize: 25,
      },
	  
	  axisX:{
        interlacedColor: "#FADA9E",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Load Torque (N.m)",
			
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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */
	///testing
/* DC_Motor_mulplot();
	if(incr3>1){
		document.getElementById('constp3').style.display='block';
	} */
}

function start_simulation(){
	if(document.getElementById('Rs').value != 0 && document.getElementById('Ra').value != 0 && document.getElementById('K').value != 0 && document.getElementById('Ke').value != 0 && document.getElementById('J').value != 0 && document.getElementById('Rs').value != 0 && !isNaN(document.getElementById('Au').value) && !isNaN(document.getElementById('A0').value) && !isNaN(document.getElementById('Bi').value) && !isNaN(document.getElementById('BT').value)){
	
	if(document.getElementById('ST').value !=0 && document.getElementById('ST').value >=10 && document.getElementById('ST').value <=1000){
	document.getElementById('wscope').style.display = "block";
	document.getElementById('iscope').style.display = "block";
	document.getElementById('tscope').style.display = "block";
	var BL = 0.00001;///acc. to manual T = BL * w
	var Rs = document.getElementById('Rs').value;//0.3;///acc. manual source resistance
	//var vs = 10;///acc. manual supply voltage in V
	/* var au = document.getElementById('Au').value;//math.divide(1,Ra).toPrecision(3);
	var a0 = document.getElementById('A0').value;//math.divide(ke,Ra);
	var bi = document.getElementById('Bi').value;//math.round(math.divide(k,J));
	var bt = document.getElementById('BT').value;//math.round(math.divide(1,J));

	$('#Rss').val(Rs);
	$('#Aus').val(au);
	$('#A0s').val(a0);
	$('#Bis').val(bi);
	$('#BTs').val(bt);
	$('#BLs').val(BL); */
	}
	if(document.getElementById('ST').value ==0 || document.getElementById('ST').value <10 || document.getElementById('ST').value >1000){
		alert('Check the range of the desired time of simulation in instructions.');
	}
	}
	
	else{
		alert('Check the instructions. Calculate the simulation parameters properly.');
	}
			
}




//////////////////////////////////////////////////////old group plots for five different values of voltages/////////////////////////////////////////////////////////////////
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
document.getElementById('chartContainer').style.height = 70+"%";///new addition to show broader plot eccept bode

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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */	
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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */	
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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */	
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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */	
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
	/* document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})}); */	
}
}




///clear plot

function Refresh(){
	
	document.getElementById('plotbucket').style.display = "none";
	document.getElementById("result").style.display = "none";
	
	document.getElementById("exportChart").style.display = "none";
	
} 
 
 ///code for downloading the plot area
function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

function saveImg(){
html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    }); 
	
	
}
 
 
 
 
 
 
 
 
 
 
 
 
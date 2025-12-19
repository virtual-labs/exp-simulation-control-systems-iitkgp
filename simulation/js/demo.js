/* This  script file is edited by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/



jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
                var o = instance.getOffset(el, true),
                    o2 = instance.getOffset(el),
                    s = jsPlumb.getSize(el),
                    pxy = [e.pageX || e.clientX, e.pageY || e.clientY],
                    c = [pxy[0] - (o.left + (s[0] / 2)), pxy[1] - (o.top + (s[1] / 2))],
                    oo = [c[0] / s[0], c[1] / s[1]],
                    DIST = 350,
                    l = o2.left + (oo[0] * DIST),
                    t = o2.top + (oo[1] * DIST);

                var id = el.getAttribute("id");
                instance.animate(el, {left: l, top: t}, { duration: 350, easing: 'easeOutBack' });
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
	// for all live red connection//
        endpoint = {
            anchors: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 3, stroke: "black" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint);
					},
					
			
					
			endpoint_oven = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 15, stroke: "black" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 1,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare_oven = function (elId) {
            initAnimation(elId);            			
			
            return instance_black.addEndpoint(elId, endpoint_oven);
					},		
					

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 162;
            var x = (0.2 * w) + Math.floor(Math.random() * (0.5 * w));
            var y = (0.2 * h) + Math.floor(Math.random() * (0.6 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "./images/littledot.png" } ],
        Connector: [ "Bezier", { curviness:0.1 } ],
        Container: "canvas"
    });
	
	instance_black = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "./images/ovendot.png" } ],
        Connector: [ "Bezier", { curviness:-8 } ],
        Container: "canvas"
    });
	
	/*jsPlumb.connect({ 
  sourceId:"bd3",
  targetId:"bd5",
  connector: [ "Bezier", { curviness:175 } ],
  paintStyle:{ lineWidth:25, strokeStyle:'yellow' }
});*/

	
	
	
	
	
	

    // suspend drawing and initialise.
    instance.batch(function () {
        var /* e1 = prepare("bd1"), */            
            e2 = prepare("bd2"),
			e3 = prepare("bd3"),
            e4 = prepare("bd4"),
			e5 = prepare("bd5"),
			e6 = prepare("bd6"),
            e7 = prepare("bd7"),
			e8 = prepare("bd8"),
			e9 = prepare("bd9"),
            e10 = prepare("bd10"),			
			e11 = prepare("bd11"),
			e12 = prepare("bd12"),            
            e13 = prepare("bd13"),
			e14 = prepare("bd14"),
            e15 = prepare("bd15"),
			e16 = prepare("bd16"),
			e17 = prepare("bd17"),
            e18 = prepare("bd18"),
			e19 = prepare("bd19"),
			e20 = prepare("bd20"),
            e21 = prepare("bd21"),			
			e22 = prepare("bd22"),
			e23 = prepare("bd23"),            
            e24 = prepare("bd24"),
			e25 = prepare("bd25"),
            e26 = prepare("bd26"),
			e27 = prepare("bd27"),
			e28 = prepare("bd28"),
            e29 = prepare("bd29"),
			e30 = prepare("bd30");
			           
           		
            
            var name1, name2; 
			 //delete clicked connection
      instance.bind("click", function (conn, originalEvent) {
		  
           
				
				///NEW ADDED FOR LOOP TO DISPLAY ENDPOINT NAMES DURING DELETE CONNECTION
		 for(var cpoint =2; cpoint<=30; cpoint++){
			 if(conn.sourceId=='bd'+cpoint){
				 name1 = document.getElementById(conn.sourceId).getAttribute("name");
			 }
			 if(conn.targetId=='bd'+cpoint){ 
		  name2= document.getElementById(conn.targetId).getAttribute("name");
		 }
		 } 
           if ( confirm('Delete connection from'+' ' + name1 +' '+ 'to' + ' '+ name2 + '?')) {////for clicking on a connection
               instance.deleteConnection(conn);			  
			         }
		   
       }); 
		
		
		   
		
		
  

   


    });
	
	 document.getElementById("run4").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

      
        var correct_connections_2_3 = [
            {
                "source": "bd2",
                "target": "bd3"
            },

            {
                "source": "bd3",
                "target": "bd2"
            }
        ];

        var correct_connections_4_5 = [
            {
                "source": "bd4",
                "target": "bd5"
            },

            {
                "source": "bd5",
                "target": "bd4"
            }
        ];        

        var correct_connections_6_7 = [
            {
                "source": "bd6",
                "target": "bd7"
            },
    
            {
                "source": "bd7",
                "target": "bd6"
            }
        ];

        var correct_connections_8_26 = [
            {
                "source": "bd8",
                "target": "bd26"
            },

            {
                "source": "bd26",
                "target": "bd8"
            }
        ];

        var correct_connections_26_9 = [
            {
                "source": "bd26",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd26"
            }
        ];
		var correct_connections_10_11 = [
            {
                "source": "bd10",
                "target": "bd11"
            },

            {
                "source": "bd11",
                "target": "bd10"
            }
        ];
		var correct_connections_12_13 = [
            {
                "source": "bd12",
                "target": "bd13"
            },

            {
                "source": "bd13",
                "target": "bd12"
            }
        ];
		var correct_connections_14_15 = [
            {
                "source": "bd14",
                "target": "bd15"
            },

            {
                "source": "bd15",
                "target": "bd14"
            }
        ];
		var correct_connections_15_19 = [
            {
                "source": "bd15",
                "target": "bd19"
            },

            {
                "source": "bd19",
                "target": "bd15"
            }
        ];
		var correct_connections_18_29 = [
            {
                "source": "bd18",
                "target": "bd29"
            },

            {
                "source": "bd29",
                "target": "bd18"
            }
        ];
		var correct_connections_29_17 = [
            {
                "source": "bd29",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd29"
            }
        ];
		var correct_connections_16_28 = [
            {
                "source": "bd16",
                "target": "bd28"
            },

            {
                "source": "bd28",
                "target": "bd16"
            }
        ];
		var correct_connections_15_21 = [
            {
                "source": "bd15",
                "target": "bd21"
            },

            {
                "source": "bd21",
                "target": "bd15"
            }
        ];
		var correct_connections_19_21 = [
            {
                "source": "bd19",
                "target": "bd21"
            },

            {
                "source": "bd21",
                "target": "bd19"
            }
        ];
		var correct_connections_20_25 = [
            {
                "source": "bd20",
                "target": "bd25"
            },

            {
                "source": "bd25",
                "target": "bd20"
            }
        ];
		var correct_connections_26_23 = [
            {
                "source": "bd26",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd26"
            }
        ];
		var correct_connections_22_24 = [
            {
                "source": "bd22",
                "target": "bd24"
            },

            {
                "source": "bd24",
                "target": "bd22"
            }
        ];
		var correct_connections_26_27 = [
            {
                "source": "bd26",
                "target": "bd27"
            },

            {
                "source": "bd27",
                "target": "bd26"
            }
        ];
		var correct_connections_29_30 = [
            {
                "source": "bd29",
                "target": "bd30"
            },

            {
                "source": "bd30",
                "target": "bd29"
            }
        ];
		var correct_connections_17_30 = [
            {
                "source": "bd17",
                "target": "bd30"
            },

            {
                "source": "bd30",
                "target": "bd17"
            }
        ];
		var correct_connections_18_30 = [
            {
                "source": "bd18",
                "target": "bd30"
            },

            {
                "source": "bd30",
                "target": "bd18"
            }
        ];
		var correct_connections_18_17 = [
            {
                "source": "bd18",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd18"
            }
        ];
		var correct_connections_23_8 = [
            {
                "source": "bd23",
                "target": "bd8"
            },

            {
                "source": "bd8",
                "target": "bd23"
            }
        ];
		var correct_connections_23_9 = [
            {
                "source": "bd23",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd23"
            }
        ];
		var correct_connections_27_8 = [
            {
                "source": "bd27",
                "target": "bd8"
            },

            {
                "source": "bd8",
                "target": "bd27"
            }
        ];
		var correct_connections_27_9 = [
            {
                "source": "bd27",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd27"
            }
        ];
		var correct_connections_8_9 = [
            {
                "source": "bd8",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd8"
            }
        ];
		var correct_connections_23_27 = [
            {
                "source": "bd23",
                "target": "bd27"
            },

            {
                "source": "bd27",
                "target": "bd23"
            }
        ];
        
		       //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "bd2",
                "target": "bd3"
            },
    
            {
                "source": "bd3",
                "target": "bd2"
            },
            
            {
                "source": "bd4",
                "target": "bd5"
            },

            {
                "source": "bd5",
                "target": "bd4"
            },

            {
                "source": "bd6",
                "target": "bd7"
            },
    
            {
                "source": "bd7",
                "target": "bd6"
            },
			
			{
                "source": "bd8",
                "target": "bd26"
            },

            {
                "source": "bd26",
                "target": "bd8"
            },
			
			{
                "source": "bd26",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd26"
            },
			
            {
                "source": "bd10",
                "target": "bd11"
            },

            {
                "source": "bd11",
                "target": "bd10"
            },
			{
                "source": "bd12",
                "target": "bd13"
            },

            {
                "source": "bd13",
                "target": "bd12"
            },
			{
                "source": "bd14",
                "target": "bd15"
            },

            {
                "source": "bd15",
                "target": "bd14"
            },
			{
                "source": "bd15",
                "target": "bd19"
            },

            {
                "source": "bd19",
                "target": "bd15"
            },
			{
                "source": "bd18",
                "target": "bd29"
            },

            {
                "source": "bd29",
                "target": "bd18"
            },
			{
                "source": "bd29",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd29"
            },
			{
                "source": "bd16",
                "target": "bd28"
            },

            {
                "source": "bd28",
                "target": "bd16"
            },
			{
                "source": "bd15",
                "target": "bd21"
            },

            {
                "source": "bd21",
                "target": "bd15"
            },
			{
                "source": "bd19",
                "target": "bd21"
            },

            {
                "source": "bd21",
                "target": "bd19"
            },
			{
                "source": "bd20",
                "target": "bd25"
            },

            {
                "source": "bd25",
                "target": "bd20"
            },
			{
                "source": "bd26",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd26"
            },
			{
                "source": "bd22",
                "target": "bd24"
            },

            {
                "source": "bd24",
                "target": "bd22"
            },
			{
                "source": "bd26",
                "target": "bd27"
            },

            {
                "source": "bd27",
                "target": "bd26"
            },
			{
                "source": "bd29",
                "target": "bd30"
            },

            {
                "source": "bd30",
                "target": "bd29"
            },
			{
                "source": "bd17",
                "target": "bd30"
            },

            {
                "source": "bd30",
                "target": "bd17"
            },
			{
                "source": "bd18",
                "target": "bd30"
            },

            {
                "source": "bd30",
                "target": "bd18"
            },
			{
                "source": "bd18",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd18"
            },
			{
                "source": "bd23",
                "target": "bd8"
            },

            {
                "source": "bd8",
                "target": "bd23"
            },
			{
                "source": "bd23",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd23"
            },
			{
                "source": "bd27",
                "target": "bd8"
            },

            {
                "source": "bd8",
                "target": "bd27"
            },
			{
                "source": "bd27",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd27"
            },
			{
                "source": "bd8",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd8"
            },
			{
                "source": "bd23",
                "target": "bd27"
            },

            {
                "source": "bd27",
                "target": "bd23"
            }
			 
        ];

        var actual_connections = instance.getAllConnections();

				var is_connected_2_3 = false;
				var is_connected_4_5 = false;
				var is_connected_6_7 = false;
				var is_connected_8_26 = false;
				var is_connected_26_9 = false;
				var is_connected_10_11 = false;
				var is_connected_12_13 = false;
				var is_connected_14_15 = false;
				var is_connected_15_19 = false;
				var is_connected_18_29 = false;
				var is_connected_29_17 = false;
				var is_connected_16_28 = false;
				var is_connected_15_21 = false;
				var is_connected_19_21 = false;
				var is_connected_20_25 = false;
				var is_connected_26_23 = false;
				var is_connected_22_24 = false;
				var is_connected_26_27 = false;
				var is_connected_29_30 = false;
				var is_connected_17_30 = false;
				var is_connected_18_30 = false;
				var is_connected_18_17 = false;
				var is_connected_23_8 = false;
				var is_connected_23_9 = false;
				var is_connected_27_8 = false;
				var is_connected_27_9 = false;
				var is_connected_8_9 = false;
				var is_connected_23_27 = false;
				
       
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });

        //checking for 3_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_5){
                is_connected_4_5 = correct_connections_4_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_7){
                is_connected_6_7 = correct_connections_6_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_26){
                is_connected_8_26 = correct_connections_8_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_26_9){
                is_connected_26_9 = correct_connections_26_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_11){
                is_connected_10_11 = correct_connections_10_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_12_13){
                is_connected_12_13 = correct_connections_12_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_15){
                is_connected_14_15 = correct_connections_14_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_15_19){
                is_connected_15_19 = correct_connections_15_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_29){
                is_connected_18_29 = correct_connections_18_29.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_29_17){
                is_connected_29_17 = correct_connections_29_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_16_28){
                is_connected_16_28 = correct_connections_16_28.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_15_21){
                is_connected_15_21 = correct_connections_15_21.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_19_21){
                is_connected_19_21 = correct_connections_19_21.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_20_25){
                is_connected_20_25 = correct_connections_20_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_26_23){
                is_connected_26_23 = correct_connections_26_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_22_24){
                is_connected_22_24 = correct_connections_22_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_26_27){
                is_connected_26_27 = correct_connections_26_27.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_29_30){
                is_connected_29_30 = correct_connections_29_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_30){
                is_connected_17_30 = correct_connections_17_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_30){
                is_connected_18_30 = correct_connections_18_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_17){
                is_connected_18_17 = correct_connections_18_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_8){
                is_connected_23_8 = correct_connections_23_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_9){
                is_connected_23_9 = correct_connections_23_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_27_8){
                is_connected_27_8 = correct_connections_27_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_27_9){
                is_connected_27_9 = correct_connections_27_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_9){
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_27){
                is_connected_23_27 = correct_connections_23_27.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		
        if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && is_connected_8_26 && is_connected_26_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_29 && is_connected_29_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && (is_connected_26_23 || is_connected_23_8 || is_connected_23_9) && is_connected_22_24 && (is_connected_26_27 || is_connected_27_8 || is_connected_27_9) && (is_connected_29_30 || is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
			
		else if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && is_connected_8_26 && is_connected_26_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_29 && is_connected_29_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && (is_connected_26_23 || is_connected_23_8 || is_connected_23_9 || is_connected_23_27) && is_connected_22_24 && (is_connected_29_30 || is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
		else if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && !is_connected_8_26 && !is_connected_26_9 && is_connected_8_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_29 && is_connected_29_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && ( is_connected_23_8 || is_connected_23_9) && is_connected_22_24 && (is_connected_27_8 || is_connected_27_9) && (is_connected_29_30 || is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
			else if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && !is_connected_8_26 && !is_connected_26_9 && is_connected_8_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_29 && is_connected_29_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && ( is_connected_23_8 || is_connected_23_9 || is_connected_23_27) && is_connected_22_24 && (is_connected_29_30 || is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
		else if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && is_connected_8_26 && is_connected_26_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && (is_connected_26_23 || is_connected_23_8 || is_connected_23_9) && is_connected_22_24 && (is_connected_26_27 || is_connected_27_8 || is_connected_27_9) && (is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
			else if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && is_connected_8_26 && is_connected_26_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && (is_connected_26_23 || is_connected_23_8 || is_connected_23_9 || is_connected_23_27) && is_connected_22_24  && (is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
			else if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && !is_connected_8_26 && !is_connected_26_9 && is_connected_8_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && (is_connected_23_8 || is_connected_23_9) && is_connected_22_24 && (is_connected_27_8 || is_connected_27_9) && (is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
			else if (is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && !is_connected_8_26 && !is_connected_26_9 && is_connected_8_9 && is_connected_10_11 && is_connected_12_13 && is_connected_14_15 && is_connected_15_19 && is_connected_18_17 && is_connected_16_28 && (is_connected_15_21 || is_connected_19_21) && is_connected_20_25 && (is_connected_23_8 || is_connected_23_9 || is_connected_23_27) && is_connected_22_24 && (is_connected_17_30 || is_connected_18_30) && !unallowed_connection_present ) {
			
			  
            alert("RIGHT CONNECTION");
			
			document.getElementById('simulate').disabled=false;
			
            }
	    else {
			alert("Wrong connection. Go through the instructions properly.");
			
			document.getElementById('simulate').disabled=true;
		
		}
			
			
			
			



    });
});


	
	
	
	
	
	
	
	
	
	
	
	
	
	








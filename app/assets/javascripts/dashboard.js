//= require jsapi
//= require jquery.jsPlumb-1.5.5

 
 jsPlumb.ready(function() {

    var color = "gray";

		var instance = jsPlumb.getInstance({
			// notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
			// than the curves on the first demo, which use the default curviness value.			
			Connector : [ "Bezier", { curviness:30 } ],
			DragOptions : { cursor: "pointer", zIndex:2000 },
			PaintStyle : { strokeStyle:color, lineWidth:2 },

			EndpointStyle : { radius:5, fillStyle:color },
			HoverPaintStyle : {strokeStyle:"#ec9f2e" },
			EndpointHoverStyle : {fillStyle:"#ec9f2e" },
			Container:"mainPanel"
		});


    var chartWindow2 = jsPlumb.getSelector("#chartWindow2");

    instance.addEndpoint(chartWindow2, {
					uuid:"chartWindow2-right",
					anchor:"Right",
					maxConnections:-1
				});


    var chartWindow11 = jsPlumb.getSelector("#chartWindow11");

    instance.addEndpoint(chartWindow11, {
					uuid:"chartWindow11-left",
					anchor:"Left",
					maxConnections:-1
				});


    instance.connect({uuids:["chartWindow2-right", "chartWindow11-left"]});


    var chartWindow3 = jsPlumb.getSelector("#chartWindow3");
    instance.addEndpoint(chartWindow3, {
					uuid:"chartWindow3-right",
					anchor:"Right",
					maxConnections:-1
				});

    var chartWindow12 = jsPlumb.getSelector("#chartWindow12");
    instance.addEndpoint(chartWindow12, {
					uuid:"chartWindow12-left",
					anchor:"Left",
					maxConnections:-1
				});

    var chartWindow13 = jsPlumb.getSelector("#chartWindow13");
    instance.addEndpoint(chartWindow13, {
					uuid:"chartWindow13-left",
					anchor:"Left",
					maxConnections:-1
				});

    var chartWindow14 = jsPlumb.getSelector("#chartWindow14");
    instance.addEndpoint(chartWindow14, {
					uuid:"chartWindow14-left",
					anchor:"Left",
					maxConnections:-1
				});

    instance.connect({uuids:["chartWindow3-right", "chartWindow12-left"]});
    instance.connect({uuids:["chartWindow3-right", "chartWindow13-left"]});
    instance.connect({uuids:["chartWindow3-right", "chartWindow14-left"]});
    

    var chartWindow4 = jsPlumb.getSelector("#chartWindow4");
    instance.addEndpoint(chartWindow4, {
					uuid:"chartWindow4-right",
					anchor:"Right",
					maxConnections:-1
				});

    var chartWindow15 = jsPlumb.getSelector("#chartWindow4");
    instance.addEndpoint(chartWindow14, {
					uuid:"chartWindow14-left",
					anchor:"Left",
					maxConnections:-1
				});

    instance.connect({uuids:["chartWindow4-right", "chartWindow14-left"]});


    var chartWindow15 = jsPlumb.getSelector("#chartWindow15");
    instance.addEndpoint(chartWindow15, {
					uuid:"chartWindow15-left",
					anchor:"Left",
					maxConnections:-1
				});
    instance.connect({uuids:["chartWindow4-right", "chartWindow15-left"]});


    var chartWindow5 = jsPlumb.getSelector("#chartWindow5");
    instance.addEndpoint(chartWindow5, {
					uuid:"chartWindow5-right",
					anchor:"Right",
					maxConnections:-1
				});

    var chartWindow16 = jsPlumb.getSelector("#chartWindow16");
    instance.addEndpoint(chartWindow16, {
					uuid:"chartWindow16-left",
					anchor:"Left",
					maxConnections:-1
				});
    instance.connect({uuids:["chartWindow4-right", "chartWindow15-left"]});

    instance.connect({uuids:["chartWindow5-right", "chartWindow14-left"]});
    instance.connect({uuids:["chartWindow5-right", "chartWindow15-left"]});
    instance.connect({uuids:["chartWindow5-right", "chartWindow16-left"]});


    var chartWindow6 = jsPlumb.getSelector("#chartWindow6");
    instance.addEndpoint(chartWindow6, {
					uuid:"chartWindow6-right",
					anchor:"Right",
					maxConnections:-1
				});

    var chartWindow17 = jsPlumb.getSelector("#chartWindow17");
    instance.addEndpoint(chartWindow17, {
					uuid:"chartWindow17-left",
					anchor:"Left",
					maxConnections:-1
				});

    instance.connect({uuids:["chartWindow6-right", "chartWindow17-left"]});

    var chartWindow7 = jsPlumb.getSelector("#chartWindow7");
    instance.addEndpoint(chartWindow7, {
					uuid:"chartWindow7-right",
					anchor:"Right",
					maxConnections:-1
				});

    instance.connect({uuids:["chartWindow7-right", "chartWindow17-left"]});



    var chartWindow22 = jsPlumb.getSelector("#chartWindow22");
    instance.addEndpoint(chartWindow22, {
					uuid:"chartWindow22-right",
					anchor:"Right",
					maxConnections:-1
				});

    var chartWindow24 = jsPlumb.getSelector("#chartWindow24");
    instance.addEndpoint(chartWindow24, {
					uuid:"chartWindow24-left",
					anchor:"Left",
					maxConnections:-1
				});

    instance.connect({uuids:["chartWindow22-right", "chartWindow24-left"]});


     var chartWindow19 = jsPlumb.getSelector("#chartWindow19");
    instance.addEndpoint(chartWindow19, {
					uuid:"chartWindow19-left",
					anchor:"Left",
					maxConnections:-1
				});

    instance.addEndpoint(chartWindow11, {
					uuid:"chartWindow11-right",
					anchor:"Right",
					maxConnections:-1
				});

    instance.addEndpoint(chartWindow12, {
					uuid:"chartWindow12-right",
					anchor:"Right",
					maxConnections:-1
				});

    instance.addEndpoint(chartWindow13, {
					uuid:"chartWindow13-right",
					anchor:"Right",
					maxConnections:-1
				});

    instance.connect({uuids:["chartWindow11-right", "chartWindow19-left"]});
    instance.connect({uuids:["chartWindow12-right", "chartWindow19-left"]});
    instance.connect({uuids:["chartWindow13-right", "chartWindow19-left"]});


     var chartWindow20 = jsPlumb.getSelector("#chartWindow20");
     instance.addEndpoint(chartWindow20, {
					uuid:"chartWindow20-left",
					anchor:"Left",
					maxConnections:-1
				});

     instance.connect({uuids:["chartWindow12-right", "chartWindow20-left"]});
     instance.connect({uuids:["chartWindow13-right", "chartWindow20-left"]});


    instance.addEndpoint(chartWindow14, {
					uuid:"chartWindow14-right",
					anchor:"Right",
					maxConnections:-1
				});

    instance.addEndpoint(chartWindow15, {
					uuid:"chartWindow15-right",
					anchor:"Right",
					maxConnections:-1
				});

    instance.addEndpoint(chartWindow16, {
					uuid:"chartWindow16-right",
					anchor:"Right",
					maxConnections:-1
				});

    instance.addEndpoint(chartWindow17, {
					uuid:"chartWindow17-right",
					anchor:"Right",
					maxConnections:-1
				});


 instance.connect({uuids:["chartWindow14-right", "chartWindow20-left"]});
 instance.connect({uuids:["chartWindow15-right", "chartWindow20-left"]});
 instance.connect({uuids:["chartWindow16-right", "chartWindow20-left"]});
 instance.connect({uuids:["chartWindow17-right", "chartWindow20-left"]});


 instance.addEndpoint(chartWindow19, {
					uuid:"chartWindow19-right",
					anchor:"Right",
					maxConnections:-1
				});

 instance.addEndpoint(chartWindow20, {
					uuid:"chartWindow20-right",
					anchor:"Right",
					maxConnections:-1
				});

 instance.addEndpoint(chartWindow22, {
					uuid:"chartWindow22-left",
					anchor:"Left",
					maxConnections:-1
				});

 instance.connect({uuids:["chartWindow19-right", "chartWindow22-left"]});
 instance.connect({uuids:["chartWindow20-right", "chartWindow22-left"]});


	$( "#chartWindow2" ).mouseover(function() {
		$( "#chartWindow2" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow11" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
		$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
		$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

		instance.select({source:"chartWindow2"}).setHover(true);

	});
	 $( "#chartWindow2" ).mouseout(function() {
		$( "#chartWindow2" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow11" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

		instance.select({source:"chartWindow2"}).setHover(false);
	});

	 $( "#chartWindow2" ).click(function() {
			window.location = '/behavior';
	});

	 // Coordination/collaboration
	 $( "#chartWindow3" ).mouseover(function() {
		$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow12" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow13" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow14" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
		$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
		$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
		$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );
		
		instance.select({source:"chartWindow3"}).setHover(true);
	});
	 $( "#chartWindow3" ).mouseout(function() {
		$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow12" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow13" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow14" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );
		
		instance.select({source:"chartWindow3"}).setHover(false);
	});

	 $( "#chartWindow3" ).click(function() {
			
			window.location = '/behavior';
	});

	 // Training, Detailing
	 $( "#chartWindow4" ).mouseover(function() {
		$( "#chartWindow4" ).removeClass( "activities" ).addClass( "orange" );	
		instance.select({source:"chartWindow4"}).setHover(true);
	});
	  $( "#chartWindow4" ).mouseout(function() {
		$( "#chartWindow4" ).removeClass( "orange" ).addClass( "activities" );	
		instance.select({source:"chartWindow4"}).setHover(false);
	});

	  // Tools
	 $( "#chartWindow5" ).mouseover(function() {
		$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );	
	});
	  $( "#chartWindow5" ).mouseout(function() {
		$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );	
	});

	// Increasing supply of existing
	 $( "#chartWindow6" ).mouseover(function() {
		$( "#chartWindow6" ).removeClass( "activities" ).addClass( "orange" );	
	});
	  $( "#chartWindow6" ).mouseout(function() {
		$( "#chartWindow6" ).removeClass( "orange" ).addClass( "activities" );	
	});

	  // Improved treatment presentations
	 $( "#chartWindow7" ).mouseover(function() {
		$( "#chartWindow7" ).removeClass( "activities" ).addClass( "orange" );	
	});
	  $( "#chartWindow7" ).mouseout(function() {
		$( "#chartWindow7" ).removeClass( "orange" ).addClass( "activities" );	
	});



});


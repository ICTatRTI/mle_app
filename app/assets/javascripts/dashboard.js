//= require jsapi
//= require jquery.jsPlumb-1.5.5

 
 jsPlumb.ready(function() {


	 $( "#chartWindow2" ).click(function() {
			window.location = '/behavior';
	  });
	 $( "#chartWindow11" ).click(function() {
			window.location = '/community';
	  });




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
		instance.select({source:"chartWindow11"}).setHover(true);
		instance.select({source:"chartWindow19"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	});
	 $( "#chartWindow2" ).mouseout(function() {
		$( "#chartWindow2" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow11" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

		instance.select({source:"chartWindow2"}).setHover(false);
		instance.select({source:"chartWindow11"}).setHover(false);
		instance.select({source:"chartWindow19"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
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
		instance.select({source:"chartWindow12"}).setHover(true);
		instance.select({source:"chartWindow13"}).setHover(true);
		instance.select({source:"chartWindow14"}).setHover(true);
		instance.select({source:"chartWindow19"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);
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
		instance.select({source:"chartWindow3"}).setHover(false);
		instance.select({source:"chartWindow12"}).setHover(false);
		instance.select({source:"chartWindow13"}).setHover(false);
		instance.select({source:"chartWindow14"}).setHover(false);
		instance.select({source:"chartWindow19"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	});

	 $( "#chartWindow3" ).click(function() {
			
			window.location = '/behavior';
	});

	 // Training, Detailing
	 $( "#chartWindow4" ).mouseover(function() {
	 	$( "#chartWindow4" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow14" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow15" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
		$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

		instance.select({source:"chartWindow4"}).setHover(true);
		instance.select({source:"chartWindow14"}).setHover(true);
		instance.select({source:"chartWindow15"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);
		instance.select({source:"chartWindow24"}).setHover(true);

	 });
	 $( "#chartWindow4" ).mouseout(function() {
	 	$( "#chartWindow4" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow14" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow15" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

		instance.select({source:"chartWindow4"}).setHover(false);
		instance.select({source:"chartWindow14"}).setHover(false);
		instance.select({source:"chartWindow15"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
		instance.select({source:"chartWindow24"}).setHover(false);
	});

	  // Tools
	 $( "#chartWindow5" ).mouseover(function() {
		$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow14" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow15" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow16" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
		$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
		$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

		instance.select({source:"chartWindow5"}).setHover(true);
		instance.select({source:"chartWindow14"}).setHover(true);
		instance.select({source:"chartWindow15"}).setHover(true);
		instance.select({source:"chartWindow16"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	});
	  $( "#chartWindow5" ).mouseout(function() {
		$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );	
		$( "#chartWindow14" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow15" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow16" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

		instance.select({source:"chartWindow5"}).setHover(false);
		instance.select({source:"chartWindow14"}).setHover(false);
		instance.select({source:"chartWindow15"}).setHover(false);
		instance.select({source:"chartWindow16"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	});

	// Increasing supply of existing
	 $( "#chartWindow6" ).mouseover(function() {
		$( "#chartWindow6" ).removeClass( "activities" ).addClass( "orange" );	
		$( "#chartWindow17" ).removeClass( "functions" ).addClass( "orange" );	
		$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );	
		$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
		$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

		instance.select({source:"chartWindow6"}).setHover(true);
		instance.select({source:"chartWindow17"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	});
	  $( "#chartWindow6" ).mouseout(function() {
		$( "#chartWindow6" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow17" ).removeClass( "orange" ).addClass( "functions" );	
		$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );	

		instance.select({source:"chartWindow6"}).setHover(false);
		instance.select({source:"chartWindow17"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	});

	  // Improved treatment presentations
	 $( "#chartWindow7" ).mouseover(function() {
		$( "#chartWindow7" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow17" ).removeClass( "functions" ).addClass( "orange" );	
		$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );	
		$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
		$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );	

		instance.select({source:"chartWindow7"}).setHover(true);
		instance.select({source:"chartWindow17"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);
	});
	  $( "#chartWindow7" ).mouseout(function() {
		$( "#chartWindow7" ).removeClass( "orange" ).addClass( "activities" );	
		$( "#chartWindow17" ).removeClass( "orange" ).addClass( "functions" );	
		$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );	

		instance.select({source:"chartWindow7"}).setHover(false);
		instance.select({source:"chartWindow17"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	});

	 // Functions
	 // Community Knowledge

	 $( "#chartWindow11").mouseover(function() {
	 	$( "#chartWindow11" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow2" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
		$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
		$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

		instance.select({source:"chartWindow11"}).setHover(true);
		instance.select({source:"chartWindow2"}).setHover(true);
		instance.select({source:"chartWindow19"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	 });
	 $( "#chartWindow11" ).mouseout(function() {
	 	$( "#chartWindow11" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow2" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
		$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

		instance.select({source:"chartWindow11"}).setHover(false);
		instance.select({source:"chartWindow2"}).setHover(false);
		instance.select({source:"chartWindow19"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	 });	

	 // Financing
	 $( "#chartWindow12").mouseover(function() {
	 	$( "#chartWindow12" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow12"}).setHover(true);
		instance.select({target:"chartWindow12"}).setHover(true);
		instance.select({source:"chartWindow19"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);
	 });
	 $( "#chartWindow12" ).mouseout(function() {
		$( "#chartWindow12" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow12"}).setHover(false);
		instance.select({target:"chartWindow12"}).setHover(false);
		instance.select({source:"chartWindow19"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	 });

	 // Governance and leadership
	 $( "#chartWindow13").mouseover(function() {
	 	$( "#chartWindow13" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow13"}).setHover(true);
		instance.select({target:"chartWindow13"}).setHover(true);
		instance.select({source:"chartWindow19"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);
	 });
	 $( "#chartWindow13" ).mouseout(function() {
	 	$( "#chartWindow13" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow13"}).setHover(false);
		instance.select({target:"chartWindow13"}).setHover(false);
		instance.select({source:"chartWindow19"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	 });

	 // Health information
	 $( "#chartWindow14").mouseover(function() {
	 	$( "#chartWindow14" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow4" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow14"}).setHover(true);
		instance.select({target:"chartWindow14"}).setHover(true);
		instance.select({source:"chartWindow19"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	 });
	 $( "#chartWindow14" ).mouseout(function() {
	 	$( "#chartWindow14" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow4" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow14"}).setHover(false);
		instance.select({target:"chartWindow14"}).setHover(false);
		instance.select({source:"chartWindow19"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);

	 });

	 //Human resources - PUBLIC
	 $( "#chartWindow15").mouseover(function() {
	 	$( "#chartWindow15" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow4" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow15"}).setHover(true);
		instance.select({target:"chartWindow15"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);
	 });
	 $( "#chartWindow15" ).mouseout(function() {
	 	$( "#chartWindow15" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow4" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow15"}).setHover(false);
		instance.select({target:"chartWindow15"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	 });


	 //Human resources - PRIVATE
	 $( "#chartWindow16").mouseover(function() {
	 	$( "#chartWindow16" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow16"}).setHover(true);
		instance.select({target:"chartWindow16"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	 });
	 $( "#chartWindow16" ).mouseout(function() {
	 	$( "#chartWindow16" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow16"}).setHover(false);
		instance.select({target:"chartWindow16"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);
	 });

	 //Medicines equipment 
	 $( "#chartWindow17").mouseover(function() {
	 	$( "#chartWindow17" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow6" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow7" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow17"}).setHover(true);
		instance.select({target:"chartWindow17"}).setHover(true);
		instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	 });
	 $( "#chartWindow17" ).mouseout(function() {
	 	$( "#chartWindow17" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow6" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow7" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow17"}).setHover(false);
		instance.select({target:"chartWindow17"}).setHover(false);
		instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);

	 });


	 //  Outputs
	 // Prompt Care Seeking
	 $( "#chartWindow19").mouseover(function() {
	 	$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow11" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow12" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow13" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow2" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow19"}).setHover(true);
		instance.select({target:"chartWindow19"}).setHover(true);
		instance.select({target:"chartWindow11"}).setHover(true);
		instance.select({target:"chartWindow12"}).setHover(true);
		instance.select({target:"chartWindow13"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	 });
	 $( "#chartWindow19" ).mouseout(function() {
	 	$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow11" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow12" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow13" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow2" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow19"}).setHover(false);
		instance.select({target:"chartWindow19"}).setHover(false);
		instance.select({target:"chartWindow11"}).setHover(false);
		instance.select({target:"chartWindow12"}).setHover(false);
		instance.select({target:"chartWindow13"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);

	 });

	 //  Availabilty of Quality Care
	 $( "#chartWindow20").mouseover(function() {
		$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
		$( "#chartWindow12" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow13" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow14" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow15" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow16" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow17" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow4" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow6" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow7" ).removeClass( "activities" ).addClass( "orange" );
		$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow20"}).setHover(true);
		instance.select({target:"chartWindow20"}).setHover(true);
		instance.select({target:"chartWindow12"}).setHover(true);
		instance.select({target:"chartWindow13"}).setHover(true);
		instance.select({target:"chartWindow14"}).setHover(true);
		instance.select({target:"chartWindow15"}).setHover(true);
		instance.select({target:"chartWindow16"}).setHover(true);
		instance.select({target:"chartWindow17"}).setHover(true);
		instance.select({source:"chartWindow22"}).setHover(true);

	 });
	 $( "#chartWindow20" ).mouseout(function() {
		$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
		$( "#chartWindow12" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow13" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow14" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow15" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow16" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow17" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow4" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow6" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow7" ).removeClass( "orange" ).addClass( "activities" );
		$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow20"}).setHover(false);
		instance.select({target:"chartWindow20"}).setHover(false);
		instance.select({target:"chartWindow12"}).setHover(false);
		instance.select({target:"chartWindow13"}).setHover(false);
		instance.select({target:"chartWindow14"}).setHover(false);
		instance.select({target:"chartWindow15"}).setHover(false);
		instance.select({target:"chartWindow16"}).setHover(false);
		instance.select({target:"chartWindow17"}).setHover(false);
		instance.select({source:"chartWindow22"}).setHover(false);

	 });


	 // Outcomes
	 $( "#chartWindow22").mouseover(function() {
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow11" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow12" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow13" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow14" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow15" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow16" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow17" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow2" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow4" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow6" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow7" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );

	 	instance.select({source:"chartWindow22"}).setHover(true);
		instance.select({target:"chartWindow22"}).setHover(true);
		instance.select({target:"chartWindow19"}).setHover(true);
		instance.select({target:"chartWindow20"}).setHover(true);
		instance.select({target:"chartWindow11"}).setHover(true);
		instance.select({target:"chartWindow12"}).setHover(true);
		instance.select({target:"chartWindow13"}).setHover(true);
		instance.select({target:"chartWindow14"}).setHover(true);
		instance.select({target:"chartWindow15"}).setHover(true);
		instance.select({target:"chartWindow16"}).setHover(true);
		instance.select({target:"chartWindow17"}).setHover(true);

	 	
	 });
	 $( "#chartWindow22" ).mouseout(function() {
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow11" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow12" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow13" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow14" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow15" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow16" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow17" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow2" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow4" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow6" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow7" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );

	 	instance.select({source:"chartWindow22"}).setHover(false);
		instance.select({target:"chartWindow22"}).setHover(false);
		instance.select({target:"chartWindow19"}).setHover(false);
		instance.select({target:"chartWindow20"}).setHover(false);
		instance.select({target:"chartWindow11"}).setHover(false);
		instance.select({target:"chartWindow12"}).setHover(false);
		instance.select({target:"chartWindow13"}).setHover(false);
		instance.select({target:"chartWindow14"}).setHover(false);
		instance.select({target:"chartWindow15"}).setHover(false);
		instance.select({target:"chartWindow16"}).setHover(false);
		instance.select({target:"chartWindow17"}).setHover(false);
	 	
	 });

	 // Goals
	 $( "#chartWindow24").mouseover(function() {
	 	$( "#chartWindow24" ).removeClass( "goals" ).addClass( "orange" );
	 	$( "#chartWindow22" ).removeClass( "outcomes" ).addClass( "orange" );
	 	$( "#chartWindow11" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow12" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow13" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow14" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow15" ).removeClass( "functions" ).addClass( "orange" );
	 	$( "#chartWindow16" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow17" ).removeClass( "functions" ).addClass( "orange" );
		$( "#chartWindow19" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow20" ).removeClass( "outputs" ).addClass( "orange" );
	 	$( "#chartWindow2" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow3" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow4" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow5" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow6" ).removeClass( "activities" ).addClass( "orange" );
	 	$( "#chartWindow7" ).removeClass( "activities" ).addClass( "orange" );

	 	instance.select({source:"chartWindow22"}).setHover(true);
		instance.select({target:"chartWindow22"}).setHover(true);
		instance.select({target:"chartWindow19"}).setHover(true);
		instance.select({target:"chartWindow20"}).setHover(true);
		instance.select({target:"chartWindow11"}).setHover(true);
		instance.select({target:"chartWindow12"}).setHover(true);
		instance.select({target:"chartWindow13"}).setHover(true);
		instance.select({target:"chartWindow14"}).setHover(true);
		instance.select({target:"chartWindow15"}).setHover(true);
		instance.select({target:"chartWindow16"}).setHover(true);
		instance.select({target:"chartWindow17"}).setHover(true);


	 });
	 $( "#chartWindow24" ).mouseout(function() {
	 	$( "#chartWindow24" ).removeClass( "orange" ).addClass( "goals" );
	 	$( "#chartWindow22" ).removeClass( "orange" ).addClass( "outcomes" );
	 	$( "#chartWindow11" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow12" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow13" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow14" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow15" ).removeClass( "orange" ).addClass( "functions" );
	 	$( "#chartWindow16" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow17" ).removeClass( "orange" ).addClass( "functions" );
		$( "#chartWindow19" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow20" ).removeClass( "orange" ).addClass( "outputs" );
	 	$( "#chartWindow2" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow3" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow4" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow5" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow6" ).removeClass( "orange" ).addClass( "activities" );
	 	$( "#chartWindow7" ).removeClass( "orange" ).addClass( "activities" );

	 	instance.select({source:"chartWindow22"}).setHover(false);
		instance.select({target:"chartWindow22"}).setHover(false);
		instance.select({target:"chartWindow19"}).setHover(false);
		instance.select({target:"chartWindow20"}).setHover(false);
		instance.select({target:"chartWindow11"}).setHover(false);
		instance.select({target:"chartWindow12"}).setHover(false);
		instance.select({target:"chartWindow13"}).setHover(false);
		instance.select({target:"chartWindow14"}).setHover(false);
		instance.select({target:"chartWindow15"}).setHover(false);
		instance.select({target:"chartWindow16"}).setHover(false);
		instance.select({target:"chartWindow17"}).setHover(false);

	 });

});


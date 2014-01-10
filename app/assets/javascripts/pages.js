//= require jsapi
//= require jquery-jvectormap-1.2.2.min
//= require nigeria-districts
//= require jquery.jsPlumb-1.5.5



jsPlumb.ready(function() {
    //alert("test");

    var color = "gray";

		var instance = jsPlumb.getInstance({
			// notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
			// than the curves on the first demo, which use the default curviness value.			
			Connector : [ "Bezier", { curviness:50 } ],
			DragOptions : { cursor: "pointer", zIndex:2000 },
			PaintStyle : { strokeStyle:color, lineWidth:2 },
			
			EndpointStyle : { radius:9, fillStyle:color },
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

});
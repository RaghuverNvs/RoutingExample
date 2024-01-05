sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("RoutingExample.controller.S1", {
		handleNext: function(){
		  var sid = this.getView().byId("sid").getValue();
		  var routeObj = this.getOwnerComponent().getRouter();// Router Obj 
		  routeObj.navTo("Screen3", {
		  	"enteredEntry" : sid
		  });
		}
	});
});
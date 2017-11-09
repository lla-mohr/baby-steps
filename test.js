var app = angular.module("app", []);

app.controller("TileCtrl", function() {
  this.tiles = [{title:"Contract Center", links:[{name:'View Current Contacts'},{name:'Request a Contract'},{name:'Assign Resource to Contract'}],icon:'fa fa-book fa-stack-1x'},
				{title:"Hiring Manager Center", links:[{name:'Assign Resources to PID'},{name:'Hiring Manager View'}],icon:'fa fa-briefcase fa-stack-1x'}];
});
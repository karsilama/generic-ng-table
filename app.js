(function(){
	
  "use strict";
  
  var myApp = angular.module("myApp", []);
  
  myApp.controller("TableController", function(){
    
    		this.users = [
        	{
          	name : "jesus",
            surename : "colavita",
            level : "god"
          },
          {
          	name : "ezequiel",
            surename : "kaplan",
            level : "zegunda pozizion del array"
          },
          {
          	name : "janio",
            surename : "isacura",
            level : "venezolano boton"
          }
        ];
  });
  
})()

"use strict";

angular.module("shroomFinder", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/shroom.html",
      controller: "ShroomCtrl"
    })
    .otherwise("/")
});



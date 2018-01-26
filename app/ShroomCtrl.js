'use strict';

angular.module("shroomFinder").controller("ShroomCtrl", function($scope, ShroomFactory) {

  ShroomFactory.getShrooms()
  .then( (shroomData) => {
    console.log(Object.values(shroomData.data));
    $scope.mushrooms = Object.values(shroomData.data);
  });

});
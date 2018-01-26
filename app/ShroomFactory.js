'use strict';

angular.module("shroomFinder").factory("ShroomFactory", function($q, $http){
    
    let getShrooms = () => {
      return $q( (resolve, reject) => {
        $http
        .get("https://mushroom-mainia.firebaseio.com/mushrooms.json")
        .then( (shrooms) => {
          resolve(shrooms);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
  
    return { getShrooms };
  
  
  
  });
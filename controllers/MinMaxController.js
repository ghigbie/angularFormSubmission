(function(){
   var MinMaxController = function($scope, $http) {
       $scope.formModel = {};

       $scope.onSubmit = function () {
           console.log("Hey I/'m Submitted!");
           console.log($scope.formModel);
       };
   };

   MinMaxController.$inject = ['$scope'];

   angular.module('minmax')
       .controller('MinMaxController', MinMaxController);

}());
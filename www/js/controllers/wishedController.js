app.controller('WishedCtrl', function ($scope, $http,getWishedById) {
	 $scope.usersList =[];
   var userId = 1;

	 getWishedById.all(userId).success(function (response) { 
      console.log(response);
      $scope.usersList = response[0].wishers;
   });
})
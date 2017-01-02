angular.module('rickAndMorty').controller('episodesCtrl', function($scope, $firebaseObject, $firebaseArray){

const rootRef = firebase.database().ref().child('-K_Bsi17VsPSI_RsXgU7');
           const refOne= rootRef.child('season_1');
           const refTwo= rootRef.child('season_2');
           $scope.arrayOne = $firebaseArray(refOne);
           $scope.arrayTwo = $firebaseArray(refTwo);
           const auth = firebase.auth();
});
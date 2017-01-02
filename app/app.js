var config = {
    apiKey: "AIzaSyBuGE4KFUkS0gObf4q9vzxiN5Tb8FLLq0Y",
    authDomain: "rick-and-morty.firebaseapp.com",
    databaseURL: "https://rick-and-morty.firebaseio.com",
    storageBucket: "rick-and-morty.appspot.com",
    messagingSenderId: "1070403491394"
  };
  firebase.initializeApp(config);
 
angular.module('rickAndMorty', ['ui.router', 'firebase'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.when('', '/');
 

  $stateProvider
    .state('home', {
      controller: 'homeCtrl',
      url: '/',
      templateUrl: '/app/home/home.html'
    })

    .state('about', {
      controller: 'aboutCtrl',
      url: '/about',
      templateUrl: '/app/about/about.html'
    })
    .state('episodes', {
      controller: 'episodesCtrl',
      url: '/episodes',
      templateUrl: '/app/episodes/episodes.html'
    })
});


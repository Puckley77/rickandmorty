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
      url: '/',
      templateUrl: 'home/home.html'
    })

    .state('about', {
      controller: 'aboutCtrl',
      url: '/about',
      templateUrl: 'about/about.html'
    })

    .state('episodes', {
      controller: 'episodesCtrl',
      url: '/episodes',
      templateUrl: 'episodes/episodes.html'
    })

    .state('art', {
      url: '/art',
      templateUrl: 'art/art.html'
    })

});


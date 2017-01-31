angular.module('rickAndMorty')
    .controller('aboutCtrl', function ($scope, $timeout) {

        $scope.first = false;
        $scope.second = false;
        $scope.third = false;
        $scope.fourth = false;
        $scope.fifth = false;
        $scope.sixth = false;
        $scope.seventh = false;
        $scope.eighth = false;
        $scope.ninth = false;
        $scope.tenth = false;
        $scope.eleventh = false;
        $scope.twelth = false;
        $scope.thirdteenth = false;
        $scope.fourteenth = false;
        $scope.fifthteenth = false;
        $scope.bubble1 = false;
        $scope.bubble2 = false;

        var runOne = true;

        $scope.startConvo = function () {
           if(runOne){ 
            runOne = false
            document.getElementById('convo-clip').play()
            $scope.first = true;
            $scope.bubble2 = true;

            $timeout(function () {
                $scope.first = false;
                $scope.bubble2 = false;
                $scope.second = true;
                $scope.bubble1 = true;

                $timeout(function () {
                    $scope.second = false;
                    $scope.bubble1 = false;
                    $scope.third = true;
                    $scope.bubble2 = true;

                    $timeout(function () {
                        $scope.third = false;
                        $scope.bubble2 = false;
                        $scope.fourth = true;
                        $scope.bubble2 = true;

                        $timeout(function () {
                            $scope.fourth = false;
                            $scope.bubble2 = false;
                            $scope.fifth = true;
                            $scope.bubble1 = true;

                            $timeout(function () {
                                $scope.fifth = false;
                                $scope.bubble1 = false;
                                $scope.sixth = true;
                                $scope.bubble2 = true;

                                $timeout(function () {
                                    $scope.sixth = false;
                                    $scope.bubble2 = false;
                                    $scope.seventh = true;
                                    $scope.bubble1 = true;

                                    $timeout(function () {
                                        $scope.seventh = false;
                                        $scope.bubble1 = false;
                                        $scope.eighth = true;
                                        $scope.bubble2 = true;

                                        $timeout(function () {
                                            $scope.eighth = false;
                                            $scope.bubble2 = false;
                                            $scope.ninth = true;
                                            $scope.bubble1 = true;

                                            $timeout(function () {
                                                $scope.ninth = false;
                                                $scope.bubble1 = false;
                                                $scope.tenth = true;
                                                $scope.bubble2 = true;

                                                $timeout(function () {
                                                    $scope.tenth = false;
                                                    $scope.bubble2 = false;
                                                    $scope.eleventh = true;
                                                    $scope.bubble2 = true;

                                                    $timeout(function () {
                                                        $scope.eleventh = false;
                                                        $scope.bubble2 = false;
                                                        $scope.twelth = true;
                                                        $scope.bubble2 = true;

                                                        $timeout(function () {
                                                            $scope.twelth = false;
                                                            $scope.bubble2 = false;
                                                            $scope.thirdteenth = true;
                                                            $scope.bubble1 = true;

                                                            $timeout(function () {
                                                                $scope.thirdteenth = false;
                                                                $scope.bubble1 = false;
                                                                $scope.fourteenth = true;
                                                                $scope.bubble2 = true;

                                                                $timeout(function () {
                                                                    $scope.fourteenth = false;
                                                                    $scope.bubble2 = false;
                                                                    $scope.fifthteenth = true;
                                                                    $scope.bubble1 = true;

                                                                    $timeout(function () {
                                                                        $scope.fifthteenth = false;
                                                                        $scope.bubble1 = false;

                                                                        $timeout(function() {
                                                                            runOne = true;
                                                                        }, 2000)
                                                                    }, 600) // oh man
                                                                }, 3000) //come on morty. please morty. you have to do it morty
                                                            }, 800) //in my butt?
                                                        }, 3600) //you got to do it for grandpa morty. youve got to put these seeds inside your butt morty
                                                    }, 5400) //i mean youre young. youve got your whole life ahead of you, and your anal cavity is still taut yet malleable
                                                }, 3400) //and theyll fall right out of mine. ive done this too many times
                                            }, 500) //*whimpers*
                                        }, 5000) //well somebodys gotta do it morty, these seeds arent gonna get through customs unless they are in somebodys rectum morty.
                                    }, 2700) //oh geez rick, i really don't want to have to do that
                                }, 2100) //put them way up inside there as far as they can fit
                            }, 675) //in my butt?
                        }, 3000) //and im gonna need you to put them waaay up inside your butthole morty
                    }, 3200) //when we get to customs, im gonna need you to take these seeds into the bathroom
                }, 700) //uh oh
           }, 4900)//We’re gonna have to go through inter-dimensional customs. Soooo, you’re gonna have to do me a real solid.
        } 
        }

    });
angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope', '$state', '$ionicHistory', '$window',
    function($scope, $state, $ionicHistory, $window) {
            
    }
])

.controller('RegisterCtrl', ['$scope', '$state', '$ionicHistory', '$window',
    function($scope, $state, $ionicHistory, $window) {
            
    }
])


.controller('LocationsCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$ionicPopover',
    function($scope, $state, $ionicHistory, $window, $ionicPopover) {
        
        $scope.locations = [
            {
                city: 'Munich',
                country: 'Germany',
                photo: 'img/locations/munich-04.png'
            },
            {
                city: 'Ljubljana',
                country: 'Slovenia',
                photo: 'img/locations/ljubljana-04.png'
            },
            {
                city: 'Split',
                country: 'Croatia',
                photo: 'img/locations/split-04.png'
            },
            {
                city: 'Hvar',
                country: 'Croatia',
                photo: 'img/locations/hvar-04.png'
            },
            {
                city: 'Prague',
                country: 'Czech Republic',
                photo: 'img/locations/prague-04.png'
            },
            {
                city: 'Krakow',
                country: 'Poland',
                photo: 'img/locations/krakow-04.png'
            },
            {
                city: 'Grodek',
                country: 'Poland',
                photo: 'img/locations/grodek-04.png'
            }
        ];
        
        $scope.showFAB = false;
        
    }
])

.controller('DetailsCtrl', ['$scope', '$state', '$ionicHistory', '$window',
    function($scope, $state, $ionicHistory, $window) {
            
    }
])
;



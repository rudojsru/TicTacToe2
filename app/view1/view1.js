'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$http', function ($http) {
        var URL = "http://localhost:8080";
        var self = this;
        this.zmienna = {};
        this.szukanyPokoj = 1;

        this.pobierzDane = function () {
            $http.get(URL + "/room/get/" + self.szukanyPokoj)
                .then(
                    function (odpowiedz) { // ta funkcja wykona sie jesli bedzie sukces
                        console.log(odpowiedz);
                        // system.out.println
                        self.zmienna = odpowiedz.data;
                    },
                    function (odpowiedzWPrzypadkBledu) { // ta funkcja jesli bedzie blad

                    });
        };

    }]);
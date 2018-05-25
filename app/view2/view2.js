'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$http', function ($http) {
        var self = this;
        var URL = "http://localhost:8080";
        this.listaPokojow = [];

        this.roomCreateDto = {
            'name': ''
        };

        this.dodajPokoj = function () {
            $http.post(URL + '/room/add', self.roomCreateDto)
                .then(
                    function (odpowiedz) {
                        console.log(odpowiedz);
                    },
                    function (odpowiedzNaBlad) {
                        console.log(odpowiedzNaBlad);
                    });
        };
    }]);
angular.module('alurapic')
    .factory('tokenInterceptor', function ($window) {

        var interceptor = {}

        interceptor.response = function (response) {
            var token = response.headers('x-access-token');

            if (token) {
                console.log('Token armazenado no navegador')
                $window.sessionStorage.token = token;
            }

            return response;
        };

        return interceptor;

    });
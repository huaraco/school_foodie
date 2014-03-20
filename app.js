var app = angular.module('cooKeyApp', ['ngRoute', 'firebase', 'ngSanitize', 'ui.bootstrap']);

app.directive('backButton', function () {
    return {
        restrict: 'A',

        link: function (scope, element, attrs) {
            element.bind('click', goBack);

            function goBack() {
                history.back();
                scope.$apply();
            }
        }
    }
});

app.directive('youtube', function($sce) {
    return {
        restrict: 'E',
        scope: { code:'=' },
        replace: true,
        template: '<iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
        link: function (scope) {
            scope.$watch('code', function (newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl(newVal);
                }
            });
        }
    };
});

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/recipe',
            {
                controller: 'recipeController',
                templateUrl: 'views/recipe.html'
            })
        .when('/recipe/:recipeId',
            {
                controller: 'recipeDetailController',
                templateUrl: 'views/recipeDetail.html'
            })
        .when('/diy',
            {
                controller: 'diyController',
                templateUrl: 'views/diy.html'
            })
        .when('/diy/result',
            {
                controller: 'diyResultController',
                templateUrl: 'views/diyResult.html'
            })
        .when('/care',
            {
                controller: 'careController',
                templateUrl: 'views/care.html'
            })
        .when('/care/:careId',
            {
                controller: 'careDetailController',
                templateUrl: 'views/careDetail.html'
            })
        .when('/promotion',
            {
                controller: 'promotionController',
                templateUrl: 'views/promotion.html'
            })
        .when('/promotion/:storeId',
            {
                controller: 'promotionListController',
                templateUrl: 'views/promotionList.html'
            })
        .when('/ingredient',
            {
                controller: 'ingredientController',
                templateUrl: 'views/ingredient.html'
            })
        .when('/ingredient/:ingredientId',
            {
                controller: 'ingredientDetailController',
                templateUrl: 'views/ingredientDetail.html'
            })
        .otherwise({
            redirectTo: '/recipe'
        });
});
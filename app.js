var app = angular.module('cooKeyApp', ['ngRoute','firebase','ngSanitize']);

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
        .when('/careDetail/:careId',
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
        .otherwise({
            redirectTo: '/recipe'
        });
});
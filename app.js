var app = angular.module('cooKeyApp', ['ngRoute']);

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
        .when('/care',
            {
                controller: 'careController',
                templateUrl: 'views/care.html'
            })
        .when('/promotion',
            {
                controller: 'promotionController',
                templateUrl: 'views/promotion.html'
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
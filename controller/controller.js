app.controller('rootController', function ($scope, $location) {
    $scope.root = 1;

    $scope.range = function (n) {
        return _.range(n);
    };

    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

app.controller('recipeController', function ($scope, cooKeyService) {
    $scope.recipes = cooKeyService.getRecipes();
});

app.controller('recipeDetailController', function ($scope, $routeParams, cooKeyService) {

    init();
    function init() {
        var recipeId = ($routeParams.recipeId) ? parseInt($routeParams.recipeId) : 0;
        if (recipeId > 0) {
            $scope.recipe = cooKeyService.getRecipe(recipeId);
        }
    }

});

app.controller('diyController', function ($scope, cooKeyService) {

});

app.controller('careController', function ($scope, cooKeyService) {

});

app.controller('promotionController', function ($scope, cooKeyService) {

});

app.controller('ingredientController', function ($scope, cooKeyService) {

});
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

    $scope.diyIngredients = [];

    
    
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
    $scope.categories = cooKeyService.getCategories();

    $scope.selectedCategoryId = $scope.categories[0].id;

    $scope.showCategory = function (categoryId) {
        $scope.selectedCategoryId = categoryId;
    }

    $scope.showIngredients = function (categoryId) {
        return cooKeyService.getIngredientsOfCateogry(categoryId);
    }

    $scope.addIngredient = function (ingredient) {

        if (!_.contains($scope.selectedIngredients, ingredient))
            $scope.$parent.diyIngredients.push(ingredient);
    }

    $scope.removeIngredient = function (ingredient) {
        $scope.$parent.diyIngredients = $scope.$parent.diyIngredients.filter(function (item) {
            return item != ingredient;
        });
    }
});

app.controller('diyResultController', function ($scope, cooKeyService) {
    $scope.resultRecipes = [];
    init();

    function init() {
        var diyIngredients = $scope.$parent.diyIngredients;
        var diyIds = _.map(diyIngredients, function (item) { return item.id });
        var recipes = cooKeyService.getRecipes();
        $scope.resultRecipes = _.filter(recipes, function (item) {
            var ids = _.map(item.ingredients, function (item) { return item.id });
            return _.intersection(ids, diyIds).length == diyIds.length
        })
        
    }
});

app.controller('careController', function ($scope, cooKeyService) {
    $scope.articles = cooKeyService.getArticles();
    $scope.previousArticles = cooKeyService.getPreviousArticles();
    $scope.featuredArticles = cooKeyService.getFeaturedArticles();
    
});

app.controller('careDetailController', function ($scope, $routeParams, cooKeyService) {
    init();
    function init() {
        var careId = ($routeParams.careId) ? parseInt($routeParams.careId) : 0;
        if (careId > 0) {
            $scope.article = cooKeyService.getArticle(careId);
        }
    }
});

app.controller('promotionController', function ($scope, $firebase, cooKeyService) {
    $scope.stores = cooKeyService.getPromotions();
});

app.controller('promotionListController', function ($scope, $routeParams, cooKeyService,$firebase) {
    init();
    function init() {
        var storeId = ($routeParams.storeId) ? parseInt($routeParams.storeId) : 0;
        if (storeId > 0) {
            $scope.promotions = cooKeyService.getStore(storeId);// $firebase(promotionRef);
        }
    }
});

app.controller('ingredientController', function ($scope, cooKeyService) {

});
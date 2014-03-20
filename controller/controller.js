app.controller('rootController', function ($scope, $location) {
    $scope.root = 1;

    $scope.range = function (n) {
        return _.range(n);
    };
    $scope.getLocation = function () {
        return $location.path();
    }

    $scope.getClass = function (path) {

        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }

    $scope.diyIngredients = [];
    $scope.searchPlaceholder = '';
});

app.controller('recipeController', function ($scope, cooKeyService) {
    $scope.recipes = cooKeyService.getRecipes();
    $scope.$parent.searchPlaceholder = 'Recipe';
	spinner.stop();
});

app.controller('recipeDetailController', function ($scope, $routeParams, $sce, cooKeyService) {

    init();
    function init() {
        var recipeId = ($routeParams.recipeId) ? parseInt($routeParams.recipeId) : 0;
        if (recipeId > 0) {
            $scope.recipe = cooKeyService.getRecipe(recipeId);
            $scope.recipe.steps.test = $sce.trustAsHtml("<b>test</b>");
        }
    }

});

app.controller('diyController', function ($scope, $location, cooKeyService) {
    $scope.categories = cooKeyService.getCategories();

    $scope.selectedCategoryId = $scope.categories[0].id;

    $scope.showCategory = function (categoryId) {
        $scope.selectedCategoryId = categoryId;
    }

    $scope.showIngredients = function (categoryId) {
        return cooKeyService.getIngredientsOfCateogry(categoryId);
    }

    $scope.addIngredient = function (ingredient) {
        if (!_.contains($scope.$parent.diyIngredients, ingredient))
            $scope.$parent.diyIngredients.push(ingredient);
    }

    $scope.removeIngredient = function (ingredient) {
        $scope.$parent.diyIngredients = $scope.$parent.diyIngredients.filter(function (item) {
            return item != ingredient;
        });
    }

    $scope.checkIngredient = function () {
        if ($scope.search == "Continue") {
            $scope.search == "Go";
            $location.path('/diy/result');
        }
            

        var conflicts = cooKeyService.getConflicts();
        var diyIngredientIds = _.map($scope.$parent.diyIngredients, function (item) { return item.id });
        
        var foundConflicts = _.filter(conflicts, function (conflict) {
            var iA = conflict.ingredientA;
            var iB = conflict.ingredientB;
            return (_.contains(diyIngredientIds, iA) && _.contains(diyIngredientIds, iB));
        });
        if (foundConflicts.length > 0) {
            _.each(foundConflicts, function(item) {
                $scope.alerts.push({ type: 'danger', msg: item.description });
            });
            $scope.search = "Continue";
        } else {
            $location.path('/diy/result');    
        }
        
    }

    $scope.search = "Go";

    $scope.alerts = [];

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };


    $scope.ingredients = cooKeyService.getIngredients();
    $scope.$parent.searchKeyWord = '';
    $scope.$parent.searchPlaceholder = 'Ingredient';
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
    $scope.todayArticles = cooKeyService.getTodayArticles();
    $scope.previousArticles = cooKeyService.getPreviousArticles();
    $scope.featuredArticles = cooKeyService.getFeaturedArticles();
    $scope.$parent.searchPlaceholder = "article";
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
    $scope.$parent.searchKeyWord = '';
    $scope.$parent.searchPlaceholder = 'Postal Code';
    $scope.location = true;
    $scope.stores = cooKeyService.getPromotions();
    console.log($scope.stores);
});

app.controller('promotionListController', function ($scope, $routeParams, cooKeyService, $firebase) {
    init();
    function init() {
        var storeId = ($routeParams.storeId) ? parseInt($routeParams.storeId) : 0;
        if (storeId > 0) {
            $scope.promotions = cooKeyService.getStore(storeId);// $firebase(promotionRef);
        }
    }

    $scope.$parent.searchPlaceholder = 'ingredient';
});

app.controller('ingredientController', function ($scope, cooKeyService) {
    $scope.categories = cooKeyService.getCategories();

    $scope.ingredients = cooKeyService.getIngredients();
    $scope.specialIngredients = cooKeyService.getSpecialIngredients(5);
    $scope.$parent.searchKeyWord = '';
    $scope.$parent.searchPlaceholder = 'Ingredient';
    $scope.ingredientSearch = '';
});

app.controller('ingredientDetailController', function ($scope, $routeParams, cooKeyService) {
    init();

    function init() {
        var ingredientId = ($routeParams.ingredientId) ? parseInt($routeParams.ingredientId) : 0;
        if (ingredientId > 0) {
            $scope.ingredient = cooKeyService.getIngredient(ingredientId);
        }
    }
});
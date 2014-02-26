app.service('cooKeyService', function () {
	this.getRecipes = function(){
		return recipes;
	};

    this.getRecipe = function(id) {
        return _.findWhere(recipes, {id: id})
    };

	var recipes = [
		{
			id: 1,
			name: 'Chili Grab',
			dLvl: 'Hard',
			spicy: 3,
			duration: 35,
			img: 'chiligrab1.jpg'
		},
		{
			id: 2,
			name: 'Curry Chicken',
			dLvl: 'Median',
			spicy: 1,
			duration: 35,
			img: 'currychicken1.jpg'
		},
		{
			id: 2,
			name: 'Fragrant Pepper Chicken',
			dLvl: 'Easy',
			spicy: 2,
			duration: 15,
			img: 'chicken2.jpg'
		}
	];
});
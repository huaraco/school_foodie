app.service('cooKeyService', function () {
    var root = this;

    this.getRecipes = function () {
        return recipes;
    };

    this.getRecipe = function (id) {
        return _.findWhere(recipes, { id: id })
    };

    this.getCategories = function() {
        return categories;
    }

    //get ingredients of certain category
    this.getIngredientsOfCateogry = function(categoryId) {
        return _.where(ingredients, { categoryId: categoryId });
    };

    var categories = [
        {
            id: 1,
            name: 'meat'
        },
        {
            id: 2,
            name: 'vegetable'
        },
        {
            id: 3,
            name: 'sea food'
        },
        {
            id: 4,
            name: 'others'
        }
    ];

    var ingredients = [
        {
            id: 1,
            name: 'chili',
            unit: 'g',
            categoryId: 4,
            img: ''
        },
        {
            id: 2,
            name: 'grab',
            unit: '',
            categoryId: 3,
            img: ''
        },
        {
            id: 3,
            name: 'pork',
            unit: '',
            categoryId: 1,
            img: ''
        },
        {
            id: 4,
            name: 'cabbage',
            unit: '',
            categoryId: 2,
            img: ''
        },
        {
            id: 5,
            name: 'beef',
            unit: '',
            categoryId: 1,
            img: ''
        },
        {
            id: 6,
            name: 'chicken',
            unit: '',
            categoryId: 1,
            img: ''
        },
    ];

    var recipes = [
    {
        id: 1,
        name: 'Chili Grab',
        dLvl: 'Hard',
        spicy: 3,
        duration: 35,
        img: 'chiligrab1.jpg',
        description: 'Chili Grab is a traditional singaporean food',
        isHot: true,
        ingredients: [
            {
                id: 1,
                name: 'chili',
                quantity: 20,
                unit: 'g'
            },
            {
                id: 2,
                name: 'grab',
                quantity: 2,
                unit: ''
            }
        ],
        steps: [
            {
                sequence: 1,
                name: 'prepare',
                description: 'clean your dishes',
                img: '',
            },
            {
                sequence: 2,
                name: 'cook',
                description: 'cook your dishes',
                img: '',
            }
        ]
    },
    {
        id: 2,
        name: 'Curry Chicken',
        dLvl: 'Median',
        spicy: 1,
        duration: 35,
        img: 'currychicken1.jpg',
        description: 'Chili Grab is a traditional singaporean food',
        ingredients: [
            {
                id: 1,
                name: 'chili',
                quantity: 20,
                unit: 'g'
            },
            {
                id: 6,
                name: 'chicken',
                quantity: 2,
                unit: ''
            }
        ],
        steps: [
            {
                sequence: 1,
                name: 'prepare',
                description: 'clean your dishes',
                img: '',
            },
            {
                sequence: 2,
                name: 'cook',
                description: 'cook your dishes',
                img: '',
            }
        ]
    },
    {
        id: 3,
        name: 'Fragrant Pepper Chicken',
        dLvl: 'Easy',
        spicy: 2,
        duration: 15,
        img: 'chicken2.jpg',
        description: 'Chili Grab is a traditional singaporean food',
        ingredients: [
            {
                id: 1,
                name: 'chili',
                quantity: 20,
                unit: 'g'
            },
            {
                id: 6,
                name: 'chicken',
                quantity: 2,
                unit: ''
            }
        ],
        steps: [
            {
                sequence: 1,
                name: 'prepare',
                description: 'clean your dishes',
                img: '',
            },
            {
                sequence: 2,
                name: 'cook',
                description: 'cook your dishes',
                img: '',
            }
        ]
    }
    ];
});
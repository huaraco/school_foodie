app.service('cooKeyService', function ($firebase) {
    var root = this;

    this.getRecipes = function () {
        return recipes;
    };

    this.getArticles = function () {
        return articles;
    };
    this.getFeaturedArticles = function () {
        return featuredArticles;
    }
    this.getPreviousArticles = function () {
        return previousArticles;
    }

    this.getRecipe = function (id) {
        return _.findWhere(recipes, { id: id })
    };
    this.getArticle = function (id) {
        return _.findWhere(articles,{id:id})
    }

    this.getCategories = function() {
        return categories;
    }

    //get ingredients of certain category
    this.getIngredientsOfCateogry = function (categoryId) {
        return _.where(ingredients, { categoryId: categoryId });
    };

    this.getPromotions = function(){
        var storeRef = new Firebase("https://is306cookey.firebaseio.com/Store");
        return $firebase(storeRef);
    }

    this.getStore = function(stroeId){
        var promotionRef = new Firebase("https://is306cookey.firebaseio.com/Store/"+stroeId+"/promotion");
        return $firebase(promotionRef);
    }

    this.getIngredient = function (id) {
        var ingredient = _.findWhere(ingredients, { id: id });
        ingredient.recipes = _.filter(recipes, function(recipe) {
            return !_.isUndefined(_.findWhere(recipe.ingredients, { id: id }));
        });
        return ingredient;
    }

    this.getIngredients = function() {
        return ingredients;
    }

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
            img: 'chilli.jpg',
            description: 'chili is spicy'
        },
        {
            id: 2,
            name: 'crab',
            unit: '',
            categoryId: 3,
            img: 'crab.jpg',
            description: ''
        },
        {
            id: 3,
            name: 'pork',
            unit: '',
            categoryId: 1,
            img: 'pork.jpg',
            description: ''
        },
        {
            id: 4,
            name: 'cabbage',
            unit: '',
            categoryId: 2,
            img: 'cabbage.jpg',
            description: ''
        },
        {
            id: 5,
            name: 'beef',
            unit: '',
            categoryId: 1,
            img: 'beef.jpg',
            description: ''
        },
        {
            id: 6,
            name: 'chicken',
            unit: '',
            categoryId: 1,
            img: 'chicken.jpg',
            description: ''
        },
    ];

    var recipes = [
      {
          id: 1,
          name: 'Chilli Crab',
          dLvl: 'Hard',
          spicy: 3,
          duration: 35,
          img: 'chiligrab1.jpg',
          description: 'Chili Grab is a traditional singaporean food',
          isHot: true,
          ingredients: [
              {
                  id: 1,
                  name: 'chilli',
                  quantity: 20,
                  unit: 'g'
              },
              {
                  id: 2,
                  name: 'crab',
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
          description: 'chilli Grab is a traditional singaporean food',
          ingredients: [
              {
                  id: 1,
                  name: 'chilli',
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
                  description: 'clean your dishes <a href="#/recipe/1">chilli crab</a>',
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
          description: 'chilli Grab is a traditional singaporean food',
          ingredients: [
              {
                  id: 1,
                  name: 'chilli',
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

    var previousArticles = [
      {
          id: 1,
          name: 'New science confirms raw milk is remarkably safe',
          content: 'How Safe Is Splenda (Sucralose)?',
          img: 'care_milk.jpg',
          author: 'Ethan A. Huff',
          copyright: 'Medical News Today',
          date: '02/07/2013'
      },
      {
          id: 2,
          name: 'Eight foods that help fight allergies',
          content: 'How Safe Is Splenda (Sucralose)?',
          img: 'care_8food.jpg',
          author: 'Sandeep Godiyal',
          copyright: 'Medical News Today',
          date: '02/07/2013'
      }

    ];

    var articles = [
    {
        id: 1,
        name: 'Peanut butter helps diagnose Alzheimers disease',
        content: 'adfasdfasdfasfd',
        img: 'care_peanutButter.jpg',
        author: 'Belinda Weber',
        copyright: 'Medical News Today',
        date: '12/10/2013'
    },
    {
        id: 2,
        name: 'How Safe Is Splenda (Sucralose)?',
        content: 'How Safe Is Splenda (Sucralose)?',
        img: 'care_splenda.jpg',
        author: 'Christian Nordqvist',
        copyright: 'Medical News Today',
        date: '25/06/2013'
    },
     {
         id: 3,
         name: 'Hot chocolate may prevent memory decline',
         content: 'How Safe Is Splenda (Sucralose)?',
         img: 'care_chocolate.jpg',
         author: 'Dr.Catharine Paddock',
         copyright: 'Medical News Today',
         date: '08/08/2013'
     },
      {
          id: 4,
          name: 'Quinoa nutritional benefits',
          content: 'How Safe Is Splenda (Sucralose)?',
          img: 'care_quinoa.jpg',
          author: 'Yanjun',
          copyright: 'Medical News Today',
          date: '09/08/2013'
      },
      {
          id: 5,
          name: 'Five healthy snacks you can enjoy without guilt',
          content: 'How Safe Is Splenda (Sucralose)?',
          img: 'care_snack.jpg',
          author: 'Sandeep Godiyal',
          copyright: 'Medical News Today',
          date: '11/07/2013'
      }
    
    ];

    var featuredArticles = [
   {
       id: 1,
       name: 'Peanut butter helps diagnose Alzheimers disease',
       content: 'adfasdfasdfasfd',
       img: 'care_peanutButter.jpg',
       author: 'Belinda Weber',
       copyright: 'Medical News Today',
       date: '12/10/2013'
   },
   
    {
        id: 2,
        name: 'Hot chocolate may prevent memory decline',
        content: 'How Safe Is Splenda (Sucralose)?',
        img: 'care_chocolate.jpg',
        author: 'Dr.Catharine Paddock',
        copyright: 'Medical News Today',
        date: '08/08/2013'
    },
     
     {
         id: 3,
         name: 'Five healthy snacks you can enjoy without guilt',
         content: 'How Safe Is Splenda (Sucralose)?',
         img: 'care_snack.jpg',
         author: 'Sandeep Godiyal',
         copyright: 'Medical News Today',
         date: '11/07/2013'
     },
    
     {
         id: 4,
         name: 'Eight foods that help fight allergies',
         content: 'How Safe Is Splenda (Sucralose)?',
         img: 'care_8food.jpg',
         author: 'Sandeep Godiyal',
         copyright: 'Medical News Today',
         date: '01/07/2013'
     }
    ];

});
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
        return _.findWhere(articles, { id: id })
    }

    this.getCategories = function () {
        return categories;
    }

    //get ingredients of certain category
    this.getIngredientsOfCateogry = function (categoryId) {
        return _.where(ingredients, { categoryId: categoryId });
    };

    this.getPromotions = function () {
        return stores;
        //var storeRef = new Firebase("https://is306cookey.firebaseio.com/Store");
        //return $firebase(storeRef);
    }

    this.getStore = function (stroeId) {
        var store = _.findWhere(stores, { id: stroeId });
        return store.promotion;
        //var promotionRef = new Firebase("https://is306cookey.firebaseio.com/Store/" + stroeId + "/promotion");
        //return $firebase(promotionRef);
    }

    this.getIngredient = function (id) {
        var ingredient = _.findWhere(ingredients, { id: id });
        ingredient.recipes = _.filter(recipes, function (recipe) {
            return !_.isUndefined(_.findWhere(recipe.ingredients, { id: id }));
        });
        return ingredient;
    }

    this.getIngredients = function () {
        return ingredients;
    }

    var categories = [
        {
            id: 1,
            name: 'Meat'
        },
        {
            id: 2,
            name: 'Vegetable'
        },
        {
            id: 3,
            name: 'Seafood'
        },
        {
            id: 4,
            name: 'Others'
        }
    ];

    var ingredients = [
        {
            id: 1,
            name: 'Chili',
            unit: 'g',
            categoryId: 4,
            img: 'chilli.jpg',
            description: 'Chili is spicy'
        },
        {
            id: 2,
            name: 'Crab',
            unit: '',
            categoryId: 3,
            img: 'Crab.jpg',
            description: ''
        },
        {
            id: 3,
            name: 'Pork',
            unit: '',
            categoryId: 1,
            img: 'pork.jpg',
            description: ''
        },
        {
            id: 4,
            name: 'Cabbage',
            unit: '',
            categoryId: 2,
            img: 'cabbage.jpg',
            description: ''
        },
        {
            id: 5,
            name: 'Beef',
            unit: '',
            categoryId: 1,
            img: 'beef.jpg',
            description: ''
        },
        {
            id: 6,
            name: 'Chicken',
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
                  name: 'mud crabs or soft shelled crabs',
                  quantity: 450,
                  unit: 'g'
              },
              {
                  id: 2,
                  name: 'plain flour',
                  quantity: 4,
                  unit: 'tbsp'
              },
              {
                  id: 3,
                  name: 'vegetable oil',
                  quantity: 3,
                  unit: 'tbsp'
              },
              {
                  id: 4,
                  name: 'cloves garlic, roughly chopped',
                  quantity: 8,
                  unit: ''
              },
              {
                  id: 5,
                  name: 'fresh red chilli, roughly chopped',
                  quantity: 8,
                  unit: ''
              },
              {
                  id: 6,
                  name: 'egg',
                  quantity: 1,
                  unit: ''
              },
              {
                  id: 7,
                  name: 'spring onions (scallions), cut into finger length',
                  quantity: 2,
                  unit: ''
              },
              {
                  id: 8,
                  name: 'freshly squeezed lime or lemon juice',
                  quantity: 1,
                  unit: 'tsp'
              },
              {
                  id: 9,
                  name: 'small bunch coriander plant (cilantro)',
                  quantity: 1,
                  unit: ''
              }
          ],
          steps: [
              {
                  sequence: 1,
                  name: 'Mix together for Sauce',
                  description: '1 cup of water, 5 tbsp tomato catsup, 1 1/2 to 3 tbsp sugar, or according to taste, 1 1/2 tsp cornflour, 1 tsp pounded brown preserved soya beans or dark miso (optional), 1/4 tsp salt',
                  img: '',
              },
              {
                  sequence: 2,
                  name: 'Heat',
                  description: 'Heat the oil in a wok or shallow saucepan over high heat. ',
                  img: '',
              },
              {
                  sequence: 3,
                  name: 'Heat',
                  description: 'Add garlic and stir-fry for 1 minute. ',
                  img: '',
              },
              {
                  sequence: 4,
                  name: 'Heat',
                  description: 'Add the chilli, stir-fry till fragrant. For mud crabs, add at this stage. Fry well till shells start turning red, add sauce ingredients stir well, cover with lid and simmer till shells are red. ',
                  img: '',
              },
              {
                  sequence: 5,
                  name: 'Heat',
                  description: 'Break eggs into the wok and streak with a fork, simmer till cooked. Squeeze lime juice over and stir in scallions. ',
                  img: '',
              },
              {
                  sequence: 6,
                  name: 'Heat',
                  description: 'For soft-shelled crabs, cut each crab into four, dry well, dredge in flour and deep fry till golden brown and crispy. Make the sauce as above, but omit the mud crabs. ',
                  img: '',
              },
              {
                  sequence: 7,
                  name: 'Heat',
                  description: 'Toss soft shelled crabs in sauce just before serving.',
                  img: '',
              }
          ],
          url: '//www.youtube.com/embed/oI3qHUFfyXo'
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
      },
         {
             id: 3,
             name: 'Quinoa nutritional benefits',
             content: 'How Safe Is Splenda (Sucralose)?',
             img: 'care_quinoa.jpg',
             author: 'Yanjun',
             copyright: 'Medical News Today',
             date: '09/08/2013',
             tag: 'Quinoa'
         },
      {
          id: 4,
          name: 'Five healthy snacks you can enjoy without guilt',
          content: 'How Safe Is Splenda (Sucralose)?',
          img: 'care_snack.jpg',
          author: 'Sandeep Godiyal',
          copyright: 'Medical News Today',
          date: '11/07/2013',
          tag: 'Snack'
      },


    ];

    var articles = [
         {
             id: 1,
             name: 'The Nutrition of Crab',
             content: 'How Safe Is Splenda (Sucralose)?',
             img: 'care_crab.png',
             author: 'Janet D. Embanecido',
             copyright: 'Medical News Today',
             date: '18/03/2014',
             tag: 'crab'
         },

                 {
                     id: 2,
                     name: 'Omega-3 in fish: How eating fish helps your heart',
                     content: 'How Safe Is Splenda (Sucralose)?',
                     img: 'care_fish.jpg',
                     author: 'Mayo Clinic Staff',
                     copyright: 'Medical News Today',
                     date: '18/03/2014',
                     tag: 'fish'
                 },
                     {
                         id: 3,
                         name: 'The Amazing Health Benefits of Black Pepper',
                         content: 'How Safe Is Splenda (Sucralose)?',
                         img: 'care_blackpepper.jpg',
                         author: 'Kassidy Emmerson',
                         copyright: 'Medical News Today',
                         date: '18/03/2014',
                         tag: 'blackpepper'
                     },
        {
            id: 4,
            name: 'Peanut butter helps diagnose Alzheimers disease',
            content: 'adfasdfasdfasfd',
            img: 'care_peanutButter.jpg',
            author: 'Belinda Weber',
            copyright: 'Medical News Today',
            date: '18/03/2014',
            tag: 'Peanut'
        },
    {
        id: 5,
        name: 'How Safe Is Splenda (Sucralose)?',
        content: 'How Safe Is Splenda (Sucralose)?',
        img: 'care_splenda.jpg',
        author: 'Christian Nordqvist',
        copyright: 'Medical News Today',
        date: '18/03/2014',
        tag: 'Splenda'
    },
     {
         id: 6,
         name: 'Hot chocolate may prevent memory decline',
         content: 'How Safe Is Splenda (Sucralose)?',
         img: 'care_chocolate.jpg',
         author: 'Dr.Catharine Paddock',
         copyright: 'Medical News Today',
         date: '18/03/2014',
         tag: 'Chocolate'
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
       date: '12/10/2013',
       tag: 'Peanut'
   },

    {
        id: 2,
        name: 'Hot chocolate may prevent memory decline',
        content: 'How Safe Is Splenda (Sucralose)?',
        img: 'care_chocolate.jpg',
        author: 'Dr.Catharine Paddock',
        copyright: 'Medical News Today',
        date: '08/08/2013',
        tag: 'Chocolate'
    },

     {
         id: 3,
         name: 'Five healthy snacks you can enjoy without guilt',
         content: 'How Safe Is Splenda (Sucralose)?',
         img: 'care_snack.jpg',
         author: 'Sandeep Godiyal',
         copyright: 'Medical News Today',
         date: '11/07/2013',
         tag: 'Snack'
     },

     {
         id: 4,
         name: 'Eight foods that help fight allergies',
         content: 'How Safe Is Splenda (Sucralose)?',
         img: 'care_8food.jpg',
         author: 'Sandeep Godiyal',
         copyright: 'Medical News Today',
         date: '01/07/2013',
         tag: 'Beef'
     }
    ];

    var stores =  
    [
        {
            "id": 1,
            "postal": 768545,
            "name": "Cold Storage",
            "promotion": [
                {
                    "origPrice": "1 for 3",
                    "isHot": true,
                    "name": "Choy Sum",
                    "promotionPrice": "0.59 for 3",
                    "validtill": "31 Mar 2014",
                    "img": "choysum.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "name": "Carrot",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "carrot.jpg"
                }, {
                    "origPrice": "2 per kg",
                    "isHot": true,
                    "name": "Pork",
                    "promotionPrice": "1.59 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "pork.jpg"
                }, {
                    "origPrice": "1 per 500g",
                    "isHot": false,
                    "name": "Cabbage",
                    "promotionPrice": "0.59 per 500g",
                    "validtill": "31 Mar 2014",
                    "img": "cabbage.jpg"
                }, {
                    "origPrice": "1 per 100g",
                    "isHot": false,
                    "name": "Eggplant",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "eggplant.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Potato",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "potato.jpg"
                }, {
                    "origPrice": "5 per pack",
                    "isHot": false,
                    "name": "Egg",
                    "promotionPrice": "3.99 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "egg.jpg"
                }, {
                    "origPrice": "10 per kg",
                    "isHot": false,
                    "name": "Prawn",
                    "promotionPrice": "7.99 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "prawn.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Salmon",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "salmon.jpg"
                }, {
                    "origPrice": "0.7 per pack",
                    "isHot": false,
                    "name": "Tofu",
                    "promotionPrice": "0.59 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "tofu.jpg"
                }, {
                    "origPrice": "1 ea",
                    "isHot": false,
                    "name": "Cucumber",
                    "promotionPrice": "0.8 ea",
                    "validtill": "31 Mar 2014",
                    "img": "cucumber.jpg"
                }, {
                    "origPrice": "0.99 per 100g",
                    "isHot": false,
                    "name": "Onion",
                    "promotionPrice": "0.59 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "onion.jpg"
                }, {
                    "origPrice": "0.8 per 100g",
                    "isHot": false,
                    "name": "Ikan Bilis",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "ikan bilis.jpg"
                }
            ],
            "img": "Cold Storage.jpeg"
        }, {
            "id": 2,
            "postal": 768111,
            "name": "Giant",
            "promotion": [
                {
                    "origPrice": "1 for 3",
                    "isHot": true,
                    "name": "Choy Sum",
                    "promotionPrice": "0.59 for 3",
                    "validtill": "31 Mar 2014",
                    "img": "choysum.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "name": "Carrot",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "carrot.jpg"
                }, {
                    "origPrice": "2 per kg",
                    "isHot": true,
                    "name": "Pork",
                    "promotionPrice": "1.59 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "pork.jpg"
                }, {
                    "origPrice": "1 per 500g",
                    "isHot": false,
                    "name": "Cabbage",
                    "promotionPrice": "0.59 per 500g",
                    "validtill": "31 Mar 2014",
                    "img": "cabbage.jpg"
                }, {
                    "origPrice": "1 per 100g",
                    "isHot": false,
                    "name": "Eggplant",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "eggplant.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Potato",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "potato.jpg"
                }, {
                    "origPrice": "5 per pack",
                    "isHot": false,
                    "name": "Egg",
                    "promotionPrice": "3.99 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "egg.jpg"
                }, {
                    "origPrice": "10 per kg",
                    "isHot": false,
                    "name": "Prawn",
                    "promotionPrice": "7.99 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "prawn.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Salmon",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "salmon.jpg"
                }, {
                    "origPrice": "0.7 per pack",
                    "isHot": false,
                    "name": "Tofu",
                    "promotionPrice": "0.59 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "tofu.jpg"
                }, {
                    "origPrice": "1 ea",
                    "isHot": false,
                    "name": "Cucumber",
                    "promotionPrice": "0.8 ea",
                    "validtill": "31 Mar 2014",
                    "img": "cucumber.jpg"
                }, {
                    "origPrice": "0.99 per 100g",
                    "isHot": false,
                    "name": "Onion",
                    "promotionPrice": "0.59 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "onion.jpg"
                }, {
                    "origPrice": "0.8 per 100g",
                    "isHot": false,
                    "name": "Ikan Bilis",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "ikan bilis.jpg"
                }
            ],
            "img": "Giant.jpg"
        }, {
            "id": 3,
            "postal": 768321,
            "name": "NTUC FairPrice",
            "promotion": [
                {
                    "origPrice": "1 for 3",
                    "isHot": true,
                    "name": "Choy Sum",
                    "promotionPrice": "0.59 for 3",
                    "validtill": "31 Mar 2014",
                    "img": "choysum.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "name": "Carrot",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "carrot.jpg"
                }, {
                    "origPrice": "2 per kg",
                    "isHot": true,
                    "name": "Pork",
                    "promotionPrice": "1.59 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "pork.jpg"
                }, {
                    "origPrice": "1 per 500g",
                    "isHot": false,
                    "name": "Cabbage",
                    "promotionPrice": "0.59 per 500g",
                    "validtill": "31 Mar 2014",
                    "img": "cabbage.jpg"
                }, {
                    "origPrice": "1 per 100g",
                    "isHot": false,
                    "name": "Eggplant",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "eggplant.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Potato",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "potato.jpg"
                }, {
                    "origPrice": "5 per pack",
                    "isHot": false,
                    "name": "Egg",
                    "promotionPrice": "3.99 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "egg.jpg"
                }, {
                    "origPrice": "10 per kg",
                    "isHot": false,
                    "name": "Prawn",
                    "promotionPrice": "7.99 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "prawn.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Salmon",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "salmon.jpg"
                }, {
                    "origPrice": "0.7 per pack",
                    "isHot": false,
                    "name": "Tofu",
                    "promotionPrice": "0.59 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "tofu.jpg"
                }, {
                    "origPrice": "1 ea",
                    "isHot": false,
                    "name": "Cucumber",
                    "promotionPrice": "0.8 ea",
                    "validtill": "31 Mar 2014",
                    "img": "cucumber.jpg"
                }, {
                    "origPrice": "0.99 per 100g",
                    "isHot": false,
                    "name": "Onion",
                    "promotionPrice": "0.59 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "onion.jpg"
                }, {
                    "origPrice": "0.8 per 100g",
                    "isHot": false,
                    "name": "Ikan Bilis",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "ikan bilis.jpg"
                }
            ],
            "img": "NTUC FairPrice.png"
        }, {
            "id": 4,
            "postal": 768555,
            "name": "Sheng Siong",
            "promotion": [
                {
                    "origPrice": "1 for 3",
                    "isHot": true,
                    "name": "Choy Sum",
                    "promotionPrice": "0.59 for 3",
                    "validtill": "31 Mar 2014",
                    "img": "choysum.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "name": "Carrot",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "carrot.jpg"
                }, {
                    "origPrice": "2 per kg",
                    "isHot": true,
                    "name": "Pork",
                    "promotionPrice": "1.59 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "pork.jpg"
                }, {
                    "origPrice": "1 per 500g",
                    "isHot": false,
                    "name": "Cabbage",
                    "promotionPrice": "0.59 per 500g",
                    "validtill": "31 Mar 2014",
                    "img": "cabbage.jpg"
                }, {
                    "origPrice": "1 per 100g",
                    "isHot": false,
                    "name": "Eggplant",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "eggplant.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Potato",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "potato.jpg"
                }, {
                    "origPrice": "5 per pack",
                    "isHot": false,
                    "name": "Egg",
                    "promotionPrice": "3.99 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "egg.jpg"
                }, {
                    "origPrice": "10 per kg",
                    "isHot": false,
                    "name": "Prawn",
                    "promotionPrice": "7.99 per kg",
                    "validtill": "31 Mar 2014",
                    "img": "prawn.jpg"
                }, {
                    "origPrice": "2 for 5",
                    "isHot": false,
                    "name": "Salmon",
                    "promotionPrice": "0.99 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "salmon.jpg"
                }, {
                    "origPrice": "0.7 per pack",
                    "isHot": false,
                    "name": "Tofu",
                    "promotionPrice": "0.59 per pack",
                    "validtill": "31 Mar 2014",
                    "img": "tofu.jpg"
                }, {
                    "origPrice": "1 ea",
                    "isHot": false,
                    "name": "Cucumber",
                    "promotionPrice": "0.8 ea",
                    "validtill": "31 Mar 2014",
                    "img": "cucumber.jpg"
                }, {
                    "origPrice": "0.99 per 100g",
                    "isHot": false,
                    "name": "Onion",
                    "promotionPrice": "0.59 for 5",
                    "validtill": "31 Mar 2014",
                    "img": "onion.jpg"
                }, {
                    "origPrice": "0.8 per 100g",
                    "isHot": false,
                    "name": "Ikan Bilis",
                    "promotionPrice": "0.59 per 100g",
                    "validtill": "31 Mar 2014",
                    "img": "ikan bilis.jpg"
                }
            ],
            "img": "Sheng Siong.jpeg"
        }
    ];

});
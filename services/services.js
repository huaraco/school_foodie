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
            name: 'Chilli',
            unit: 'g',
            categoryId: 2,
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
        },{
            id: 7,
            name: 'Flour',
            unit: '',
            categoryId: 4,
            img: 'flour.jpg',
            description: ''
        },{
            id: 8,
            name: 'Cilantro',
            unit: '',
            categoryId: 2,
            img: 'corianderplant.jpg',
            description: ''
        },{
            id: 9,
            name: 'Garlic',
            unit: '',
            categoryId: 4,
            img: 'garlic.jpg',
            description: ''
        },{
            id: 10,
            name: 'Lime',
            unit: '',
            categoryId: 4,
            img: 'lime.jpg',
            description: ''
        },{
            id: 11,
            name: 'Spring Onion',
            unit: '',
            categoryId: 2,
            img: 'springOnion.jpg',
            description: ''
        },{
            id: 12,
            name: 'Vegetable Oil',
            unit: '',
            categoryId: 4,
            img: 'vegetableoil.jpg',
            description: ''
        },
		{
            id: 13,
            name: 'Egg',
            unit: '',
            categoryId: 1,
            img: 'egg.jpg',
            description: ''
        },
		{
            id: 14,
            name: 'Potato',
            unit: '',
            categoryId: 2,
            img: 'potato.jpg',
            description: ''
        },{
            id: 15,
            name: 'Onion',
            unit: '',
            categoryId: 2,
            img: 'onion.jpg',
            description: ''
        },{
            id: 16,
            name: 'Dried Red Chilli',
            unit: '',
            categoryId: 2,
            img: 'driedredchilli.jpg',
            description: ''
        },{
            id: 17,
            name: 'Tumeric',
            unit: '',
            categoryId: 4,
            img: 'tumeric.jpg',
            description: ''
        },{
            id: 18,
            name: 'Galangal',
            unit: '',
            categoryId: 4,
            img: 'galangal.jpg',
            description: ''
        },{
            id: 19,
            name: 'Ginger',
            unit: '',
            categoryId: 2,
            img: 'ginger.jpg',
            description: ''
        },{
            id: 20,
            name: 'Candlenut',
            unit: '',
            categoryId: 4,
            img: 'candlenut.jpg',
            description: ''
        },{
            id: 21,
            name: 'Belachan',
            unit: '',
            categoryId: 4,
            img: 'belachan.jpg',
            description: ''
        },{
            id: 22,
            name: 'Lemongrass',
            unit: '',
            categoryId: 4,
            img: 'lemongrass.jpg',
            description: ''
        },{
            id: 23,
            name: 'Ground Coriander',
            unit: '',
            categoryId: 4,
            img: 'groundcoriander.jpg',
            description: ''
        },{
            id: 24,
            name: 'Pandan',
            unit: '',
            categoryId: 4,
            img: 'pandan.jpg',
            description: ''
        },{
            id: 25,
            name: 'Kaffir Lime Leave',
            unit: '',
            categoryId: 4,
            img: 'kaffirlimeleave.jpg',
            description: ''
        },{
            id: 26,
            name: 'Coconut Milk',
            unit: '',
            categoryId: 4,
            img: 'coconutmilk.jpg',
            description: ''
        },{
            id: 27,
            name: 'Salt',
            unit: '',
            categoryId: 4,
            img: 'salt.jpg',
            description: ''
        },{
            id: 28,
            name: 'Sugar',
            unit: '',
            categoryId: 4,
            img: 'sugar.jpg',
            description: ''
        },{
            id: 29,
            name: 'Dijon Mustard',
            unit: '',
            categoryId: 4,
            img: 'dijonmustard.jpg',
            description: ''
        },{
            id: 30,
            name: 'Olive Oil',
            unit: '',
            categoryId: 4,
            img: 'oliveoil.jpg',
            description: ''
        },{
            id: 31,
            name: 'Balsamic Vinegar',
            unit: '',
            categoryId: 4,
            img: 'balsamicvinegar.jpg',
            description: ''
        },{
            id: 32,
            name: 'Light Soy Sauce',
            unit: '',
            categoryId: 4,
            img: 'soysauce.jpg',
            description: ''
        },{
            id: 33,
            name: 'Honey',
            unit: '',
            categoryId: 4,
            img: 'honey.jpg',
            description: ''
        },{
            id: 34,
            name: 'Tamarind Paste',
            unit: '',
            categoryId: 4,
            img: 'tamarindpaste.jpg',
            description: ''
        },{
            id: 35,
            name: 'Paprika Powder',
            unit: '',
            categoryId: 4,
            img: 'paprikapowder.jpg',
            description: ''
        },{
            id: 36,
            name: 'Ground Chilli Pepper',
            unit: '',
            categoryId: 4,
            img: 'groundchillipepper.jpg',
            description: ''
        },{
            id: 37,
            name: 'Hoisin Sauce',
            unit: '',
            categoryId: 4,
            img: 'hoisinsauce.jpg',
            description: ''
        },{
            id: 38,
            name: 'Dark Soy Sauce',
            unit: '',
            categoryId: 4,
            img: 'darksoysauce.jpg',
            description: ''
        },{
            id: 39,
            name: 'Shaoxing rice wine',
            unit: '',
            categoryId: 4,
            img: 'shaoxingricewine.jpg',
            description: ''
        },{
            id: 40,
            name: 'Red fermented tofu',
            unit: '',
            categoryId: 4,
            img: 'redfermentedtofu.jpg',
            description: ''
        },{
            id: 41,
            name: 'Fice Spice Powder',
            unit: '',
            categoryId: 4,
            img: 'fivespicepowder.gif',
            description: ''
        },{
            id: 42,
            name: 'Sesame oil',
            unit: '',
            categoryId: 4,
            img: 'sesameoil.jpg',
            description: ''
        },{
            id: 43,
            name: 'Food Coloring Fluid',
            unit: '',
            categoryId: 4,
            img: 'coloringfluid.jpg',
            description: ''
        },{
            id: 44,
            name: 'Abalone',
            unit: '',
            categoryId: 3,
            img: 'abalone.jpg',
            description: ''
        },{
            id: 45,
            name: 'Lobster',
            unit: '',
            categoryId: 3,
            img: 'lobster.png',
            description: ''
        },{
            id: 46,
            name: 'Prawn',
            unit: '',
            categoryId: 3,
            img: 'prawn.jpg',
            description: ''
        },{
            id: 47,
            name: 'Grouper',
            unit: '',
            categoryId: 3,
            img: 'grouper.jpg',
            description: ''
        }
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
                  id: 2,
                  name: 'mud crabs or soft shelled crabs',
                  quantity: 450,
                  unit: 'g'
              },
              {
                  id: 7,
                  name: 'plain flour',
                  quantity: 4,
                  unit: 'tbsp'
              },
              {
                  id: 12,
                  name: 'vegetable oil',
                  quantity: 3,
                  unit: 'tbsp'
              },
              {
                  id: 9,
                  name: 'cloves garlic, roughly chopped',
                  quantity: 8,
                  unit: ''
              },
              {
                  id: 1,
                  name: 'fresh red chilli, roughly chopped',
                  quantity: 8,
                  unit: ''
              },
              {
                  id: 13,
                  name: 'egg',
                  quantity: 1,
                  unit: ''
              },
              {
                  id: 11,
                  name: 'spring onions (scallions), cut into finger length',
                  quantity: 2,
                  unit: ''
              },
              {
                  id: 10,
                  name: 'freshly squeezed lime',
                  quantity: 1,
                  unit: 'tsp'
              },
              {
                  id: 8,
                  name: 'small bunch coriander plant (cilantro)',
                  quantity: 1,
                  unit: ''
              }
          ],
          steps: [
              {
                  sequence: 1,
                  name: 'Mix together for Sauce',
                  description: '<b>Mix together for Sauce</b>: 1 cup of water, 5 tbsp tomato catsup, 1 1/2 to 3 tbsp sugar, or according to taste, 1 1/2 tsp cornflour, 1 tsp pounded brown preserved soya beans or dark miso (optional), 1/4 tsp salt',
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
          url: 'http://www.youtube.com/embed/oI3qHUFfyXo'
      },
      {
          id: 2,
          name: 'Curry Chicken',
          dLvl: 'Medium',
          spicy: 1,
          duration: 35,
          img: 'currychicken1.jpg',
          description: 'Tasty curry chicken ever!',
          ingredients: [
              {
                  id: 6,
                  name: 'Whole chicken, cut into 12-14 pieces',
                  quantity: 1,
                  unit: 'kg'
              },
              {
                  id: 14,
                  name: 'Small potatoes, peels and halved',
                  quantity: 5,
                  unit: ''
              },
              {
                  id: 15,
                  name: 'Large onion, peels and cut into wedges',
                  quantity: 1,
                  unit: ''
              },
              {
                  id: 16,
                  name: 'Long dried red chillies, soaked in hot water, drained, coarsely groun',
                  quantity: 10,
                  unit: 'g'
              },
              {
                  id: 1,
                  name: 'Long fresh red chillies, coarsely ground',
                  quantity: 2,
                  unit: ''
              },
              {
                  id: 17,
                  name: 'Piece fresh tumeric',
                  quantity: 4,
                  unit: 'cm'
              },
              {
                  id: 18,
                  name: 'Piece galangal, sliced',
                  quantity: 4,
                  unit: 'cm'
              },
              {
                  id: 19,
                  name: 'Piece ginger, skinned',
                  quantity: 4,
                  unit: 'cm'
              },
              {
                  id: 9,
                  name: 'Garlic, peeled',
                  quantity: 3,
                  unit: 'cloves'
              },
              {
                  id: 20,
                  name: 'Candlenuts',
                  quantity: 2,
                  unit: ''
              },
              {
                  id: 21,
                  name: 'Balachan, wrapped in foil and toasted in a dry pan until fragrant',
                  quantity: 1,
                  unit: 'rounded tbsp'
              },
              {
                  id: 22,
                  name: 'Lemongrass, white part only',
                  quantity: 2,
                  unit: 'stalks'
              },
              {
                  id: 23,
                  name: 'Ground coriander',
                  quantity: 2,
                  unit: 'tbsp'
              }
			  ,{
                  id: 12,
                  name: 'Oil',
                  quantity: 1,
                  unit: ''
              },{
                  id: 24,
                  name: 'Pandan, tied to a knot',
                  quantity: 1,
                  unit: ''
              },{
                  id: 25,
                  name: 'Kaffir lime leaf',
                  quantity: 2,
                  unit: ''
              },{
                  id: 26,
                  name: 'Coconut milk',
                  quantity: 2,
                  unit: 'cups'
              },{
                  id: 27,
                  name: 'Salt',
                  quantity: 1,
                  unit: 'tsp'
              },{
                  id: 28,
                  name: 'Sugar',
                  quantity: '1/2',
                  unit: 'tsp'
              }
          ],
          steps: [
              {
                  sequence: 1,
                  name: 'prepare',
                  description: 'In a blender or mortar and pestle, grind onion, chillies, tumeric, galangal, ginger, garlic, candlenuts and balachan to a paste. (The paste is called Rempah)',
                  img: '',
              },
              {
                  sequence: 2,
                  name: 'cook',
                  description: 'Heat 4 tbsp of oil in a large pot, add the rempah and lemongrass and cook on medium heat until fragrant. Add the ground coriander and cook for a further 5 minutes.',
                  img: '',
              },
              {
                  sequence: 3,
                  name: 'cook',
                  description: 'Add chicken pieces, pandan and kaffir lime leaves. Stir until well coated, then add the potatoes and coconut milk, stir well and cook until both chicken and potatoes are cooked and tender. Season with salt and sugar. Be careful not to break up the potatoes when stirring.',
                  img: '',
              }
          ],
		  url: 'N/A'
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
      },
      {
          id: 4,
          name: 'Beef Steak',
          dLvl: 'Medium',
          spicy: 0,
          duration: 15,
          img: 'beefsteak.png',
          description: 'Beef Steak',
          ingredients: [
              {
                  id: 5,
                  name: 'Beefsteak',
                  quantity: 2,
                  unit: 'lbs'
              },
              {
                  id: 9,
                  name: 'Garlic Cloves',
                  quantity: 4,
                  unit: ''
              },
              {
                  id: 29,
                  name: 'Dijon Mustard',
                  quantity: 2,
                  unit: 'tbsp'
              },
              {
                  id: 30,
                  name: 'Olive Oil',
                  quantity: 2,
                  unit: 'tbsp'
              },
              {
                  id: 31,
                  name: 'Balsamic Vinegar',
                  quantity: 2,
                  unit: 'tbsp'
              },
              {
                  id: 32,
                  name: 'Soy Sauce',
                  quantity: 3,
                  unit: 'tbsp'
              },
              {
                  id: 27,
                  name: 'Salt',
                  quantity: '1/4',
                  unit: 'tsp'
              },
              {
                  id: 33,
                  name: 'Honey',
                  quantity: 1,
                  unit: 'tsp'
              },
              {
                  id: 34,
                  name: 'Tamarind Paste',
                  quantity: 2,
                  unit: 'tbsp'
              },
              {
                  id: 35,
                  name: 'Paprika',
                  quantity: 1,
                  unit: ''
              },
              {
                  id: 36,
                  name: 'Ground Chilli Pepper',
                  quantity: 1,
                  unit: ''
              }
          ],
          steps: [
              {
                  sequence: 1,
                  name: 'prepare',
                  description: 'Dissolve 2 ounces of tamarind in 1/4 cup of boiling water, stir until thoroughly dissolved.',
                  img: '',
              },
              {
                  sequence: 2,
                  name: 'prepare',
                  description: 'Pass the mixture through a strainer.',
                  img: '',
              },
              {
                  sequence: 3,
                  name: 'direction',
                  description: 'Mash garlic cloves into a small bowl.',
                  img: '',
              },
              {
                  sequence: 4,
                  name: 'direction',
                  description: 'Add dijon mustard, olive oil, balsamic vinegar, soy sauce, paprika as preferred, salt, ground chili pepper, honey, and mix thoroughly.',
                  img: '',
              },
              {
                  sequence: 5,
                  name: 'direction',
                  description: 'Add the tamarind paste and stir to combine until well blended.',
                  img: '',
              },
              {
                  sequence: 6,
                  name: 'direction',
                  description: 'Pour the mixture into a plastic bag with zip lock.',
                  img: '',
              },
              {
                  sequence: 7,
                  name: 'direction',
                  description: 'Place the beefsteaks into the plastic bag and zip/seal tight.',
                  img: '',
              },
              {
                  sequence: 8,
                  name: 'direction',
                  description: 'Rub and spread the mixture across the beef surface evenly.',
                  img: '',
              },
              {
                  sequence: 9,
                  name: 'direction',
                  description: 'Marinate the beef overnight or at least for 8 hours, keep in a refrigerator.',
                  img: '',
              },
              {
                  sequence: 10,
                  name: 'direction',
                  description: 'Spray a grill pan with cooking spray.',
                  img: '',
              },
              {
                  sequence: 11,
                  name: 'direction',
                  description: 'Grill the steaks, flip the steak over so both sides get cooked thoroughly.',
                  img: '',
              },
              {
                  sequence: 12,
                  name: 'direction',
                  description: 'For medium rare, bring the interior temperature to 135º to 145º F (57º to 63º C), or for well done 160º to 212º F (71º to 100º C).',
                  img: '',
              }
          ],
		  url: 'http://www.youtube.com/embed/VioFJSm6zI0'
      },
	  {
          id: 5,
          name: 'Char Siew - Chinese Barbecued Pork',
          dLvl: 'Medium',
          spicy: 0,
          duration: '8hrs',
          img: 'charsiew.jpg',
          description: 'This is the best recipe to make Char siu, so check it out.',
          ingredients: [
              {
                  id: 3,
                  name: 'Sliced pork',
                  quantity: 500,
                  unit: 'g'
              },
              {
                  id: 9,
                  name: 'Cloves of garlic ',
                  quantity: 5,
                  unit: 'grated'
              },
              {
                  id: 19,
                  name: 'Grated ginger ',
                  quantity: 5,
                  unit: 'cm'
              },
              {
                  id: 33,
                  name: 'Honey ',
                  quantity: 4,
                  unit: 'tbsp'
              },
              {
                  id: 37,
                  name: 'Hoisin Sauce ',
                  quantity: 2,
                  unit: 'tbsp'
              },
              {
                  id: 32,
                  name: 'Light soy sauce',
                  quantity: 5,
                  unit: 'grated'
              },
              {
                  id: 38,
                  name: 'Dark Soy Sauce',
                  quantity: 1,
                  unit: 'tbsp'
              },
              {
                  id: 39,
                  name: 'Shaoxing rice wine',
                  quantity: 1,
                  unit: 'tbsp'
              },
              {
                  id: 40,
                  name: 'Red fermented tofu',
                  quantity: 2,
                  unit: 'tbsp'
              },
              {
                  id: 41,
                  name: 'Five spice powder',
                  quantity: 1,
                  unit: 'tsp'
				  }
              ,
              {
                  id: 42,
                  name: 'Sesame oil',
                  quantity: 1,
                  unit: 'tsp'
              },
              {
                  id: 43,
                  name: 'Food Coloring Fluid',
                  quantity: 1,
                  unit: 'tsp'
              }
          ],
          steps: [
              {
                  sequence: 1,
                  name: 'prepare',
                  description: 'Mix the ingredient',
                  img: '',
              },
              {
                  sequence: 2,
                  name: 'cook',
                  description: 'Marinate the pork for 6 hours in the fridge With 3/4 of the marinate',
                  img: '',
              },
              {
                  sequence: 3,
                  name: 'cook',
                  description: 'Roast the pork next to the fire for 15 minutes (add a wood chunk for extra smoke flavour)',
                  img: '',
              },
              {
                  sequence: 4,
                  name: 'cook',
                  description: 'Roast the pork for 15 over the fire',
                  img: '',
              },
              {
                  sequence: 5,
                  name: 'cook',
                  description: 'Mob the pork with the marinate in the last 5 minutes',
                  img: '',
              }
          ],
		  url:'http://www.youtube.com/embed/wX95BQ0VfoY'
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
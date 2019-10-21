
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {title: 'Spicy Vegan Potato Curry',
         category: 'Main Dishes',
         imgURL: 'https://images.media-allrecipes.com/userphotos/720x405/7123953.jpg',
         description: 'Abundant spices make this better than any restaurant curry I have tasted.',
         username: 'MeganLee12',
         location: 'San Diego, CA'
        },
        {title: 'Seven Layer Dip',
          category: 'Appetizers',
          imgURL: 'https://images.media-allrecipes.com/userphotos/720x405/672622.jpg',
          description: 'This is a great party dip because it is best served at room temperature. You can set it out on the table early and finish cooking the rest of your meal',
          username: 'DPEREZ7',
          location: 'Chicago, IL'
         },
         {title: 'Rigatoni alla Genovese',
          category: 'Pasta',
          imgURL: 'https://images.media-allrecipes.com/userphotos/720x405/3489951.jpg',
          description: 'I have no idea why this amazingly flavorful Genovese-style meat sauce is not way more popular than it is. It is quite simply one of the best pasta sauces you will ever taste, thanks to a very slow cooking process, and massive amounts of onions',
          username: 'Chef John',
          location: 'Atlanta, GA'
         },
         {title: 'Chocolate Sauce and Hot Fudge Recipes',
          category: 'Dessert',
          imgURL: 'https://images.media-allrecipes.com/userphotos/720x405/970611.jpg',
          description: "This is my step-mom's syrup recipe, and everyone says it's better than Hershey's! Great on ice cream, in chocolate milk, or drizzled on warm brownies",
          username: 'Zen K.',
          location: 'Portland, OR'
         },
      ]);
    });
};

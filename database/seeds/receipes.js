
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('receipes').truncate()
      // Inserts seed entries
      return knex('receipes').insert([
        {
          title: 'Chocolate Sauce and Hot Fudge Recipes',
          category: 'Dessert',
          imgURL: 'https://images.media-allrecipes.com/userphotos/720x405/970611.jpg',
          description: "This is my step-mom's syrup recipe, and everyone says it's better than Hershey's! Great on ice cream, in chocolate milk, or drizzled on warm brownies",
          username: 'Zen K.',
          location: 'Portland, OR'
       }
      ]);
    
};

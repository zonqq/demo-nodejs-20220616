module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          title: "Post 01",
          content:
            "Post content 01",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          userId: 2,
          title: 'Post 02',
          content:
            "Post content 02",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Posts", null, {})
};
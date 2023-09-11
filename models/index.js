// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belong to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Tags belong to many Products through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // 'tag_id' is the foreign key in the ProductTag model
  foreignKey: 'tag_id',
})




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

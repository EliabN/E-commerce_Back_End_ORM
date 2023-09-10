// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasOne(Product, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// TODO:Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.hasMany(ProductTag, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

const router = require('express').Router();
const { Category, Product } = require('../../models');

//TODO:
// The `/api/categories` endpoint

// GET all category
router.get('/', async (req, res) => {
  // To find all categories and associated Products
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET category by id
router.get('/:id', async (req, res) => {
  // Find one category by its `id` value and associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new category
router.post('/', async (req, res) => {
  // Create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// PUT update a category
router.put('/:id', async (req, res) => {
  // Update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// POST delete a new category
router.delete('/:id', async (req, res) => {
  // Delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;

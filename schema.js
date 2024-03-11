const Sequelize = require('sequelize');

const sequelize = new Sequelize('mydb', 'myuser', 'mypassword', {
  host: 'localhost',
  dialect: 'mysql'
});

const ProductCategory = sequelize.define('ProductCategory', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  SKU: Sequelize.STRING,
  category_id: Sequelize.INTEGER,
  inventory_id: Sequelize.INTEGER,
  price: Sequelize.DECIMAL(10, 2),
  discount_id: Sequelize.INTEGER,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

const ProductInventory = sequelize.define('ProductInventory', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

const Discount = sequelize.define('Discount', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  discount_percent: Sequelize.DECIMAL(5, 2),
  active: Sequelize.BOOLEAN,
  created_at: Sequelize.DATE,
  modified_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
});

sequelize.sync()
  .then(() => {
    console.log('Database schema created successfully.');
  })
  .catch((error) => {
    console.error('Error creating database schema:', error);
  });


1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.\
   Answer: The relationship between the Product and Product_Category is that product defines individual products while product_catagory defines wider categories. every product is associated with specific category through a foreign key relationship using the “category_id” attribute.This allows querying and categorization of products efficiently based on their categories.

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?\
   Answer:  Every product in the “Product” table has a valid category assigned, we can add a foreign key between the category_id column in the Product table and the id column in the product_Category table. this maintains data integrity by rejecting invalid category IDs during insertion.
  

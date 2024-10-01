DROP DATABASE IF EXISTS gestion_recipes;
CREATE database gestion_recipes;
use gestion_recipes;

CREATE TABLE recipes (
    id int primary key auto_increment,
    title VARCHAR(100) unique NOT NULL,
    ingredients TEXT not null,
    type VARCHAR(50) NOT NULL 
);


INSERT INTO recipes (title, ingredients, type) 
VALUES 
('Spaghetti Carbonara', 'Spaghetti, Eggs, Parmesan, Pancetta, Pepper', 'Italian'),
('Chicken Curry', 'Chicken, Curry Powder, Coconut Milk, Onion, Garlic', 'Indian'),
('Caesar Salad', 'Romaine Lettuce, Croutons, Parmesan, Caesar Dressing', 'Salad'),
('Sushi Roll', 'Rice, Nori, Salmon, Avocado, Cucumber', 'Japanese'),
('Tacos', 'Tortillas, Beef, Lettuce, Cheese, Tomato, Sour Cream', 'Mexican');

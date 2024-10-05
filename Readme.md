# API de Gestion des Recettes

Cette API permet de gérer des recettes de cuisine, incluant la création, la lecture, la mise à jour et la suppression des recettes (opérations CRUD). L'API utilise une base de données MySQL pour stocker les recettes, et inclut des validations des données grâce à express-validator.

## Prérequis

- Node.js (version 14+ recommandée)
- MySQL (version 5.7+)
- Postman (pour les tester de l'API)
- Docker (pour la containerisation)

# Installation

1. Cloner le projet :

```bash
git clone https://github.com/Mamoudou12/gestion-recette-api.git
```

```bash
cd gestion-recette-api
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer la base de données :

- Créer un fichier .env à la racine de votre projet
- copier les informations qui se trouvent dans le fichier .env.example puis utiliser les dans votre fichier .env
- Mettre à jour les informations de connexion à la base de données (hôte, utilisateur, mot de passe, nom de la base de données).

4. Importer via la ligne de commande le script sql :

```bash
mysql -u [nom_utilisateur] -p [nom_base_de_donnees] < [chemin/vers/script.sql]
```

5. Démarrer le serveur :

```bash
npm start
```

## Endpoints de l'API

1. Récupérer toutes les recettes

- URL : /recipes
- Méthode : GET
- Description : Renvoie la liste de toutes les recettes.
- Exemple de réponse :

```bash
[
{
"id": 1,
"title": "Lasagnes",
"ingredients": "Pâtes, Sauce tomate, Fromage",
"type": "Plat"
},
{
"id": 2,
"title": "Tarte aux pommes",
"ingredients": "Pommes, Pâte brisée, Sucre",
"type": "Dessert"
}
]
```

2. Récupérer une recette par ID

- URL : /recipes/:id
- Méthode : GET
- Paramètres : id (Requis, entier)
- Description : Renvoie une recette spécifique par son ID.
- Exemple de réponse :
  ```bash
  {
  "id": 1,
  "title": "Lasagnes",
  "ingredients": "Pâtes, Sauce tomate, Fromage",
  "type": "Plat"
  }
  ```

3. Créer une nouvelle recette

- URL : /recipes
- Méthode : POST
- Corps :
  ```bash
  {
  "title": "Titre de la recette",
  "ingredients": "Liste des ingrédients",
  "type": "Type de recette (Entrée, Plat, Dessert)"
  }
  ```
- Exemple de réponse :
  ```bash
  {
  "message": "Recipe created successfully",
  "recipeId": 3
  }
  ```

4.  Mettre à jour une recette

- URL : /recipes/:id
- Méthode : PUT
- Paramètres : id (Requis, entier)
- Description : Mets à jour une recette spécifique par son ID.
- Corps :

```bash
{
"title": "Titre mis à jour",
"ingredients": "Ingrédients mis à jour",
"type": "Type mis à jour"
}
```

- Exemple de réponse :

```bash
{
"message": "Recipe updated successfully"
}
```

5. Supprimer une recette

- URL : /recipes/:id
- Méthode : DELETE
- Paramètres : id (Requis, entier)
- Description : Supprime une recette spécifique par son ID.
- Exemple de réponse :

```bash
{
"message": "Recipe deleted successfully"
}
```

### Codes de Statut HTTP

- 200 OK : La requête a été traitée avec succès.
- 201 Created : Une nouvelle ressource a été créée.
- 400 Bad Request : Les données fournies ne sont pas valides.
- 404 Not Found : La ressource demandée n'a pas été trouvée.
- 500 Internal Server Error : Une erreur serveur est survenue.

## Tests unitaires

Des tests unitaires sont proposé pour vérifier le bon fonctionnement des fonctionnalités CRUD.

- Framework utilisé : Jasmine
- Executer les tests:

```bash
npm test
```

## Analyse et formatage du code

Pour l'analyse statique du code j'ai utillisé ESLint et Prettier pour le formatage. Ces outils sont configurés pour maintenir un code propre et cohérent.

Pour l'analyse du code Executer les commandes suivants:

- Recherche des erreur:

```bash
npm run lint
```

- Fixer les erreurs corrigeable par ESLint:

```bash
npm run lint:fix
```

- formatage du code:

```bash
npm run format
```

## Instruction pour docker

1. Les étapes pour construire et lancer le conteneur Docker:

```bash
docker-compose up --build
```

2. Lancer les conteneurs existants avec docker compose

```bash
docker compose up -d
```

## Collection Postman

Pour vous faciliter le tester des différents endpoints de l'API, vous pouvez utiliser la collection Postman incluse dans ce projet. Elle contient toutes les requêtes configurées pour interagir avec l'API.

- Importer la collection dans postman pour éfectuer les tests

# Auteurs

[Mamoudou Adama Ba ](https://github.com/Mamoudou12)

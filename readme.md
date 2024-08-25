# File Manager in Node.js

**File Manager in Node.js** est une API simple et efficace développée en **Node.js** pour gérer et stocker des fichiers dans **Firebase Storage**. Cette API permet de télécharger, gérer et récupérer des fichiers en utilisant **Multer** pour l'upload des fichiers et **Mongoose** pour gérer les métadonnées associées dans une base de données MongoDB.

## Fonctionnalités

- **Téléchargement de fichiers** : Upload de fichiers via des requêtes HTTP.
- **Stockage sécurisé** : Les fichiers sont stockés dans **Firebase Storage**.
- **Gestion des fichiers** : CRUD des métadonnées des fichiers dans MongoDB.
- **Architecture MVC** : Le projet est structuré selon une architecture Modèle-Vue-Contrôleur pour une meilleure maintenabilité.

## Structure du Projet

Le projet est organisé comme suit :

```
|-- src/
|   |-- config/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|-- .env
|-- package.json
|-- README.md
|-- index.js
```

- **src/config/** : Contient les fichiers pour configurer les bases de donnees.
- **src/controllers/** : Contient les contrôleurs pour gérer les requêtes HTTP liées aux fichiers.
- **src/models/** : Contient les modèles Mongoose pour la structure des métadonnées des fichiers.
- **src/routes/** : Définit les routes de l'API pour la gestion des fichiers.
- **index.js** : Point d'entrée principal de l'application.

## Installation

### Prérequis

- **Node.js** version 16 ou supérieure
- **MongoDB** pour la base de données
- **Firebase** configuré pour le stockage de fichiers

### Étapes d'installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/niedjo/file-manager-in-node.js.git
   cd file-manager-in-node.js
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement** :
   Créez un fichier `.env` à la racine du projet avec les informations suivantes :
   ```
   MONGO_URI=<votre_uri_mongodb>
   FIREBASE_API_KEY=<votre_cle_api_firebase>
   FIREBASE_AUTH_DOMAIN=<votre_domaine_auth_firebase>
   FIREBASE_PROJECT_ID=<votre_id_projet_firebase>
   FIREBASE_STORAGE_BUCKET=<votre_bucket_firebase>
   FIREBASE_MESSAGING_SENDER_ID=<votre_sender_id_firebase>
   FIREBASE_APP_ID=<votre_app_id_firebase>
   ```

4. **Lancez l'application** :
   ```bash
   npm start
   ```

## Utilisation

### Endpoints de l'API

- **Upload d'une image**
  - `POST /api/upload` : Télécharge une nouvelle image et stocke ses métadonnées dans MongoDB.

- **Récupérer toutes les images**
  - `GET /api/images` : Récupère la liste de toutes les images avec leurs métadonnées.

- **Récupérer une image par ID**
  - `GET /api/images/:id` : Récupère une image spécifique par son ID.

- **Supprimer une image**
  - `DELETE /api/images/:id` : Supprime une image par son ID et ses métadonnées associées.

### Exemple de Modèle de Données

#### Image

```javascript
{
    imageName: String,
    imageUri: String,
    createdAt: Date,
    updatedAt: Date
}
```

## Technologies Utilisées

- **Node.js** : Pour la création de l'API.
- **Express** : Pour gérer les requêtes HTTP.
- **Mongoose** : Pour la gestion des métadonnées dans MongoDB.
- **Firebase** : Pour le stockage des fichiers.
- **Multer** : Pour le traitement des fichiers téléchargés.

## License

Ce projet est sous licence ISC. es fonctionnalités, les étapes d'installation, les endpoints disponibles, et les technologies utilisées.
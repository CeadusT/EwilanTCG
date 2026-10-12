# Gwendalavir's Battle — Deckbuilder

Code source du deckbuilder web **Gwendalavir's Battle**, version **1.8**.

Le projet contient :

- le Deckbuilder et sa bibliothèque de cartes ;
- le Card Studio ;
- la gestion des decks et de la corbeille ;
- les imports/exports JSON, Excel, PDF, PDF « low conso » et TTS ;
- les modèles Excel d'importation.

## Structure du projet

- `public/gwendalavir-v09.html` : application principale (interface, logique et styles) ;
- `app/page.tsx` : page d'intégration de l'application ;
- `public/` : modèles Excel et ressources statiques ;
- `app/`, `build/`, `scripts/` : enveloppe Vinext/Cloudflare utilisée pour l'hébergement.

Les cartes, decks et réglages créés dans l'application sont principalement conservés dans le stockage local du navigateur. Ils ne sont donc pas automatiquement partagés entre plusieurs navigateurs ou ordinateurs.

## Prérequis

- Node.js `22.13.0` ou plus récent ;
- pnpm `11.25.0` (recommandé via Corepack) ;
- Git pour envoyer le projet sur GitHub.

## Installation locale

```bash
corepack enable
pnpm install
pnpm dev
```

Le terminal affiche ensuite l'adresse locale à ouvrir, généralement `http://localhost:5173`.

## Générer une version de production

```bash
pnpm build
pnpm start
```

## Mettre le projet sur GitHub

Crée d'abord un dépôt vide sur GitHub, puis exécute les commandes suivantes depuis ce dossier :

```bash
git init
git add .
git commit -m "Ajout du deckbuilder Gwendalavir's Battle v1.8"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/NOM-DU-DEPOT.git
git push -u origin main
```

Remplace `TON-COMPTE` et `NOM-DU-DEPOT` par les valeurs de ton dépôt.

## Fichiers non inclus

L'archive ne contient pas les dépendances (`node_modules`), les résultats de compilation (`dist`) ni l'historique Git du site d'origine. Ils sont volontairement exclus afin d'obtenir un dépôt propre et léger.


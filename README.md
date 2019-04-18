# Application de test WCU

Réaliser avec Ionic
Par Maximilien COSTA

## Installation

Une fois le git clone fini.

Il faut installer les module :

```
cd TestIonicWCU
npm install
```

IMPORTANT : Si vous n'avez jamais utiliser Ionic, il faut donc l'installer avec la commande suivante :

```
npm install -g ionic
```

## Commande Ionic

### Créer un projet : 

Commande de création de projet :

```
ionic start myApp tabs
```

[Documentation](https://ionicframework.com/docs/installation/cli#start-an-app) - Documentation sur la création d'un projet


### Lancer l'application dans le navigateur :

Pour lancer l'application dans le navigateur, il faut utiliser la commande suivante :

```
ionic serve -l
```

[Documentation](https://ionicframework.com/docs/cli/commands/serve) - Documentation sur la commande serve


### Générer une nouvelle page :

La commande pour génrérer une nouvelle page (ou nouvelle view) est la suivante :

```
ionic generate page <nom de la page>
```

[Documentation](https://ionicframework.com/docs/cli/commands/generate) - Pour toute autre information sur la génération d'élément voir la documentation officiel


### Ajouter la plateform Android [IMPORTANT]:

Cette commande est nécessaire afin de pouvoir compiler et de tester l'application sur un téléphone Android.

``` 
ionic cordova platform add android
```

[Documentation](https://ionicframework.com/docs/cli/commands/cordova-platform) - Documentation sur la commande cordova platform


### Test l'application sur le téléphone :

Cette commande permet de compiler et de lancer l'application sur le téléphone, à condition qu'il soit connecter au pc.

```
ionic cordova run android --device
```

[Documentation](https://ionicframework.com/docs/cli/commands/cordova-run) - Documentation sur la commande cordova run


## Autre lien utile

[Documentation Ionic](https://ionicframework.com/docs/)

[Documentation des Ui Components](https://ionicframework.com/docs/components) - Documentation sur tout les éléments graphique pour la partie front de l'application

[Geolocation](https://ionicframework.com/docs/native/geolocation) - Documentation sur le plugin de géolocalisation

[Sim](https://ionicframework.com/docs/native/sim) - Documentation sur le plugin qui lit les informations de la carte sim du téléphone

[Liste des icons ionic](https://ionicframework.com/docs/v3/ionicons/) - Liste des icons disponible dans ionic


## Explication sur les fichiers

Dossier important ./src/app : Toute les pages et autre fichiers important de l'application :

### Fichier ./src/app/app.module.ts : 

Ce fichier est important lors de l'instalation de divers modules.

Comme vous pouvez voir aux lignes 12 et 13, on import les différents module de Géolocalisation et de la carte Sim.

Afin que les modules soient reconnue par l'application, il faut aussi les mettre dans la partie "providers"
Exemple avec les module Geolocation et Sim, aux lignes 26 et 27.

### Fichier ./src/app/app.component.ts : 

Dans ce fichier, on renseigne les différentes pages qui seront indexé dans le menu de l'application.
Pour cela on utilise le format suivant :

```
{
    title: 'Sim', // sera le titre de la page visible dans le menu
    url: '/sim', // lien vers la page
    icon: 'logo-rss' // icon qui s'affichera dans le menu
}
```

### Fichier ./src/app/app-routing.module.ts :

Fichier de route des différentes pages.

### Dossier .src/app/sim :

Dans ce dossier il y a 3 fichiers qui sont important :
* sim.page.html : Fichier qui permet manipuler la partie front de la page en question. (réf: Documentation des Ui Components) (HTML & TypeScript)
* sim.page.scss : Fichier de style, c'est là où on peut travailler le css. (CSS)
* sim.page.ts : Le fichier le plus important, c'est ici où on va pouvoir mettre les modules et les différentes fonctions. C'est le fichier qui s'occupe du back de la page. (Angular)
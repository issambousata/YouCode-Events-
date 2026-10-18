# YouCode-Events-
# 🚀 YouCode Events

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![Git Flow](https://img.shields.io/badge/Git_Flow-F05032?style=for-the-badge&logo=git&logoColor=white)](https://nvie.com/posts/a-successful-git-branching-model/)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/)
[![GitHub Projects](https://img.shields.io/badge/GitHub_Projects-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

---

## 📌 À propos du projet

**YouCode Events** est une plateforme web centralisée conçue pour regrouper tous les événements organisés par YouCode (ateliers, conférences, hackathons, rencontres professionnelles). 

L'objectif de ce projet est de concevoir une maquette complète et un Design System sur Figma, puis de les intégrer sous forme de **5 pages web statiques, responsives (Mobile-First) et accessibles (WCAG)**, le tout en travaillant en équipe via un workflow rigoureux sur Git & GitHub.

---

## 👥 Équipe et Répartition des Pages


### 1. Faissal
- `index.html` : Page d'accueil
- `inscription.html` : Page d'inscription
- Footer réutilisable

### 2. Issam
- `evenements.html` : Liste des événements
- `evenement-detail.html` : Détails d'un événement
- `intervenants.html` : Intervenants et partenaires
- Header réutilisable
- `menu.js` : Gestion du menu de navigation

### Fichiers communs
- `css/` : Styles globaux et responsive design
- `assets/images/` : Images du projet
- `README.md` : Documentation du projet

### Workflow Git
- Chaque membre travaille sur sa branche `feature/*`.
- Les modifications sont intégrées via des Pull Requests vers `develop`.
- La branche `main` contient la version finale validée.

## 🛠️ Technologies Utilisées

*   **Design & UI/UX :** Figma (Auto Layout, Design System, Composants & Variantes).
*   **Structure & Style :** HTML5 Sémantique, CSS3 Pur (Variables CSS, Flexbox, CSS Grid).
*   **Icônes & Typographie :** Google Fonts (Poppins / Inter), Lucide Icons / Font Awesome.
*   **Scripting léger :** JavaScript Vanilla (uniquement pour l'ouverture/fermeture du menu mobile et le respect de l'accessibilité ARIA).
*   **Versioning & Gestion de Projet :** Git, GitHub (Git Flow, Pull Requests, Code Reviews), GitHub Projects / Jira.

---

## 📁 Structure du Projet

```text
## Structure du projet

```text
YouCode-Events-/
├── .vscode/
├── assets/
│   └── images/
├── css/
├── index.html
├── evenements.html
├── evenement-detail.html
├── intervenants.html
├── inscription.html
├── menu.js
└── README.md
```


# Portfolio BTS SIO SISR — Dimitri C.

Portfolio en ligne réalisé dans le cadre du **BTS SIO option SISR** (Solutions d'Infrastructure, Systèmes et Réseaux), session 2026. Ce site regroupe mes situations professionnelles, mon tableau de synthèse E4, ma veille technologique et mon CV.

🔗 **Site publié** : <https://portfolioDC.github.io>

---

## 🧭 Structure du site

```
portfolioDC.github.io/
├── index.html              · page d'accueil + hero
├── about.html              · parcours, formation, stages
├── competences.html        · blocs 1 & 2 · certifications
├── projets.html            · index des 7 projets SISR
├── projets/
│   ├── active-directory.html
│   ├── pfsense.html
│   ├── vlan-cisco.html
│   ├── supervision-zabbix.html
│   ├── glpi.html
│   ├── serveur-linux.html
│   └── sauvegarde-veeam.html
├── veille.html             · veille techno (ransomwares)
├── e4.html                 · tableau de synthèse E4
├── contact.html            · formulaire + infos
├── css/style.css           · design system complet
├── js/main.js              · interactions (menu, anims)
└── assets/
    ├── documents/CV-Dimitri-C.pdf
    └── images/*.svg        · schémas d'architecture
```

---

## 🚀 Publier sur GitHub Pages

### 1. Créer le dépôt

Sur GitHub, créez un nouveau dépôt **public** avec exactement ce nom :

```
portfolioDC.github.io
```

> Le nom du repo doit correspondre à `<votre-pseudo-github>.github.io` pour que Pages fonctionne à la racine.

### 2. Pousser le contenu

Depuis le dossier du portfolio :

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit : portfolio BTS SIO SISR"
git remote add origin https://github.com/<votre-pseudo>/portfolioDC.github.io.git
git push -u origin main
```

### 3. Activer GitHub Pages

1. Dans le repo GitHub → onglet **Settings**
2. Menu de gauche → **Pages**
3. Section *Build and deployment* → Source : **Deploy from a branch**
4. Branch : `main` / Folder : `/ (root)` → **Save**

Le site est accessible à `https://<votre-pseudo>.github.io` au bout de 1 à 2 minutes.

---

## ✏️ À personnaliser avant publication

Cherchez et remplacez dans tous les fichiers HTML :

| Placeholder | À remplacer par |
|---|---|
| `dimitri.contact@exemple.com` | votre vraie adresse e-mail |
| `06 XX XX XX XX` | votre numéro (dans le CV) |
| `linkedin.com/in/dimitri-c-sisr` | l'URL réelle de votre profil LinkedIn |
| `github.com/portfolioDC` | votre pseudo GitHub |
| `Lycée [À compléter]` | le nom de votre établissement |

Fichiers à modifier principalement : `contact.html`, `about.html`, `/home/claude/cv-source.html` (puis régénérer le PDF si besoin).

Pour régénérer le CV PDF après modification :

```bash
pip install playwright && playwright install chromium
python3 -c "
from playwright.sync_api import sync_playwright
import os
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto('file://' + os.path.abspath('cv-source.html'))
    pg.pdf(path='assets/documents/CV-Dimitri-C.pdf', format='A4',
           print_background=True, margin={'top':'0','bottom':'0','left':'0','right':'0'})
    b.close()
"
```

---

## 🛠 Stack technique

- **HTML5 sémantique**, **CSS3** avec variables personnalisées (design tokens)
- **Vanilla JavaScript** (pas de framework, pas de build step)
- **Google Fonts** : Bricolage Grotesque + Manrope + JetBrains Mono
- **SVG** inline pour les schémas et les icônes
- Compatible mobile (breakpoint 768px)
- Accessible : contrastes AA, landmarks ARIA, navigation clavier

Aucune dépendance externe autre que Google Fonts → temps de chargement < 1 seconde.

---

## 📄 Licence

Contenu personnel. Le code du design peut être librement réutilisé.

---

## 👤 Contact

**Dimitri C.** — Étudiant BTS SIO SISR
- E-mail : *à compléter*
- LinkedIn : *à compléter*
- GitHub : *à compléter*

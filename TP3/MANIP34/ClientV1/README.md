# ecommerce
Exemple d'utilisation des modules ejs , express, sqlite3 avec node js 

L'exemple de boutique en ligne fait partie du TP3: Moteur de Template avec Node.js . 
Dans cet exemple vous pouvez visualiser une liste de produit stockée dans une base de données SQLITE
<h2>Etape 1: Création de la base de données SQLITE avec DB Browser</h2>
1. télécharger DB Browser https://sqlitebrowser.org/ <br>
création de la base de données produit.db <br>

CREATE TABLE IF NOT EXISTS "Produits" (<br>
	"Ref"	TEXT,<br>
	"Libelle"	TEXT NOT NULL,<br>
	"PU"	REAL NOT NULL,<br>
	"Description"	TEXT,<br>
	"URL_img"	TEXT,<br>
	"Dispo"	TEXT,<br>
	"IdCat"	NUMERIC,<br>
	PRIMARY KEY("Ref")<br>
);<br>

2.Ajouter des produits à la base de données manulemment :<br>
INSERT INTO "Produits" ("Ref","Libelle","PU","Description","URL_img","Dispo","IdCat") VALUES ('T102','Table classique',230.0,'table de cuisine','T102.jpg','oui',NULL);<br>
INSERT INTO "Produits" ("Ref","Libelle","PU","Description","URL_img","Dispo","IdCat") VALUES ('T101','Table cuisine Luxy ',850.0,'Table cuisine Luxy - 4 chaises -110*70cm - Blanc & Rouge','T101.jpg','oui',NULL);<br>
INSERT INTO "Produits" ("Ref","Libelle","PU","Description","URL_img","Dispo","IdCat") VALUES ('T103','TABLE DE REPAS CASPER',549.0,'TABLE DE REPAS CASPER L180 x H79 x P90','T103.jpg','oui',1);<br>
INSERT INTO "Produits" ("Ref","Libelle","PU","Description","URL_img","Dispo","IdCat") VALUES ('104','Table Luxy werzalit-Blanc',939.0,'Table Luxy werzalit en blanc avec 4 chaises Matière : Peinture en époxy anti corrosion Tissu des chaises anti tâches','104.jpg','oui',1);<br>
INSERT INTO "Produits" ("Ref","Libelle","PU","Description","URL_img","Dispo","IdCat") VALUES ('105','Table Luxy noir et rouge - avec 6 chaises',987.0,'Table cuisine avec 6 chaises noir et rouge Dimension : 120*60 cm Matière : Verre, Métal, Peinture en époxy anti corrosion Couleur : Rouge et noir','105.jpg','oui',1);<br>
INSERT INTO "Produits" ("Ref","Libelle","PU","Description","URL_img","Dispo","IdCat") VALUES ('106','Salle à manger Luxy Avec 6 Chaises| Chêne Blanc',989.0,'Dimensions : 120 m *80 cm Structure: métallique  Tissu: velours Couleurs assises: Noir','106.jpg','oui',1);<br>
INSERT INTO "Produits" ("Ref","Libelle","PU","Description","URL_img","Dispo","IdCat") VALUES ('107','Table à manger',585.0,'décor chêne clair et couleurs au choix, MDF Stratifié L 180 x l 90 x H 78 cm','107.jpg','oui',1);<br>
COMMIT;<br>

<h2>Etape 2 : Installation</h2><br>
Pour installer l'exemple il suffit d’exécuter la commande suivante :<br>
npm install<br>
<h2>Etape 3 :</h2> <br>
Exécuter sur le teminal <br>
npm run start<br>
ouvrir http://localhost:3000/ sur votre navigateur <br>

<h2>secreen shot</h2>
![image](https://user-images.githubusercontent.com/75450121/209013374-df06f2cc-126c-48fc-9187-4c2619dee87c.png)
![This is an image](https://user-images.githubusercontent.com/75450121/209013374-df06f2cc-126c-48fc-9187-4c2619dee87c.png)

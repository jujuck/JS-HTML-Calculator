## L'objectif de l'exercice est de mettre en place une interface graphique pour notre workshop calculatrice en console
git clone le workshop et suit les étapes... a chacune d'elles, retrouvent le commit correspondant aux codes de correction pour ne pas être bloqué... Mais pense à joure le jeu, chercher par soi même est la seule vraie façon de progresser

## Etapes
- 1/ Créer une fonction `addValue()` dans votre *script.js* affichant un `console.log('OK')` et mettez un place son appel sur les <td> ayant une valeur numérique via l'ttribut `onclick=...`. 
- 2/ Passez la valeur numérique du `<td>` en arguments et la récupérer dans la fonction `addValue(num)`. Console logger la valeur récupérée.
- 3/ Créer plusieurs variables pour mémoriser les données et les étapes (valeur1 = "", valeur2 = "", opérateur = "", step1 = true) avec un scope globale (`let`)
- 4/ Dans un premier temps, la fonction `addValue()` permet de concaténer le chiffre cliqué à la valeur1 (Les valeurs récupérées sont au format `string` et doivent le rester à cette étape);
- 5/ Créer une fonction `addOperator(operotor)` pour mémoriser l'opérateur. Puis dans la même fonction, passez votre variable `step1` à `false` (Cela nous permet de passer en mémorisation de la valeur 2);
- 6/ Dans votre fonction `addValue(num)`, mettre en place une condition (`if ... else`). Si step1 est à `true`, je concaténe `valeur1`, sinon je concatène `valeur2`

C'est fait, je mémorise maintenant les valeurs nécéssaire à mon calcul..
Passons à l'affichage...
- 7/ Créeons une nouvelle variable ```let display = ""```;
Puis créeons une nouvelle fonction `updateDisplay()`. Celle-ci va mettre à jour notre affichage.
Dans cette fonction, nous allons modifier le `innerText` de notre élément `result` en concatenant directement la valeur des
```
innerText = valeur1 + " " + operator + " " valeur2
```
!!! Utilise un `getElementById()` et un `literal String` si tu veux.
Maintenant, appelle cette fonction à la fin des fonctions `addValue(num)` et `addOperator()`

Si tout se passe bien, tu dois pouvoir voir ton affichage se mettre à jour à chaque nouvelle entrée... Console

# Passons maintenant au calcul
Hep, hep, mais on a déjà fait cette partie là, avec un `switch`... Alors let's go.
Récupère ton code de l'atelier "Introduction au JS"
- 1/ Créer une fonction de `calcu()` en `if...else` ou `switch` pour calculer le résultat. Pense à l'implémenter au `onclick` de la touche *=*
- 2/ Appelle la fonction `addValue(result)` en lui passant le résultat en arguments
- 3/ Modifie la fonction `addValue(result)` pour qu'elle accepte `result` comme argument. Si le `result` est définie (Check it), alors ajoute on fait :
```
innerText = valeur1 + " " + operator + " " valeur2 + " = " + result
```


Cool, on a notre résultat !!! Congratulations
# Reste à effacer nos entrées (Réinitialisation)
- 1/ Créer une fonction `fullReset()` qui sera appellée au `onclick` du la touche *C*
- 2/ Dans cette fonction, réinitialise les variables à `""` et la variable step1 à `true`;
- 3/ Enfin, rappelle la fonction ed mise à jour de l'affichage

# Bonus
    Mise en place d'un script avec une balise HTML pour l'affichage des alertes utilisateurs (Pas un nombre, ...)

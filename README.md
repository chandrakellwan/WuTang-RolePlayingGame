# WuTang-RPG 

WuTang-RPG is an interactive role-playing game for web browsers. The application dynamically updates the HTML pages with the jQuery library.

App link: https://chandrakellwan.github.io/WuTang-RolePlayingGame/

This app utilizes: 
<br>
<strong>HTML</strong>
<br>
<strong>CSS</strong>
<br>
<strong>jQuery</strong>

![rpgscreen](https://user-images.githubusercontent.com/25890329/32874025-95a197fc-ca5d-11e7-8cff-57ac759dce6f.png)

## How the game works:

* When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

* The player must then defeat all of the remaining fighters.

* The player chooses an opponent by clicking on an enemy's picture.

* Once the player selects an opponent, that enemy is moved to a `defender area`.

* The player will now be able to click the `attack` button.

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 

* For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30, and so on).

* The enemy character only has `Counter Attack Power`. 

* Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power`, and `Counter Attack Power` of each character is different.

* A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to    grind `Attack Power` and to take on enemies before they lose all of their `Health Points(HP)`.

* The player wins the game by defeating all enemy characters. The player loses the game if their character's `HP` falls to zero or below.


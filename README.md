# durakAndMolniya
A simple terminal-based node.js game where you control a hero to avoid lightning bolts from clouds & other enemies. Based on song "Дурак и молния" from Король и Шут band.

```                 
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░𝕯𝖚𝖗𝖆𝖐░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░ & ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░𝕸𝖔𝖑𝖓𝖞𝖆░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▒░▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒████████▒██▓▒▒▓▒░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░▒▒░▒▓██░████▓█████▓████▒▓▓░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒█▓▒▓▓▓█▒████▒▓███▓▓▓██▓██████░▓▓▓▓▒▒▒░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓░██▓▓█▓▓████▓▓████▓▓▓██▓███▓▒▓▓▓▓▓█▒▓▒▒▒▒░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓███▓█▓▓██████▓███████▓▓███▓▓███▓▓██████▓████▓▒▓░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓███▒█▒██▓▓██▓▓██████████▓▓████▓▓▓▓▒▓██████████▓▒▓░░▒▒░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒░░░▒███▓▓▓██▓▓██▓░▒▓█████▓▒░▒███████▓▓▓███▓██▓█▓▓▓█░▓▒▒░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░█▒░░░░░▒▓██▓▓▓▓██▓▓███████████▓▓▓██▓▓▓▓▓▓███▓▓▓███▓▓▓██▓▓▒▒░░░
░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓█▒░░░░░▒░░▓▓▓█▓██▓█████▓██▓████▓███▒▓█▓██▓▒███████▓███▒███▓▓░░░
░░░░░░░░░░░░░░▒▒░░░░░░▓███▒░░░░░░░▒░░░▓█▓▓▓████▒▒▓▓███▓▓▒▒▓███▓▓██▓██▒███▓▓▓▓▓▓▓▓▓███▓▒▒░░
░░░░░░░░░░░▒▓█████▓▒▒█▓▓▓▓▓▓▓▓▒▒░░░░░░▒▓▓▓▓█████▓▒░░░░░▒▓███████▓▓██▓▓██▓▓▓██▓███████▒▓░░░
░░░░░░░░▒▒▓▓▒▒▒▓████▒▓██████▓▓▓▓█▒░░░▒▒░▒▒▓▓▒▓▓█████████████▓▓▓████████▓▓██▓▒█████▓▓▒▒░░░░
░░░░░░░▒▓▓░░░░░░▓█████████▓░░░░░░░▒▒▒░░░░▒░░░░▒▓██▓▓▓▓▓▓▓▓▒░░▒▒▒▒▓████▓▓▓▒▒▒░▒▒▒▓▓▒░░░░░░░
░░░░░░░░░░░░░░░░▒▒▒▒▒▓███▓░▒▒▒▒░░░░▒▒░░░░▒░░░░░▓▒░░░░▒▓░░░░▒█████▒▒▒▒▒▒░░▓█░░░░▒▓░░░░░░░░░
░░░░░░░░░░░░░░░░▒▒██░░░██▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▒░░░░█▓░░░░▒▓▒▒░░▒█████▒▓███▓░░▓▓▒▒▒░▒▒░░░░░░░░░░
░░░░░░░░░░░░░░░░░▒█░░▓░▒▒▒▒░▒▒▒▓▓▓▓▒███████▒░█▒░▒░░▒▒░░░░▓█████▒▓███▓░░▓▒░█▒░▒▒░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▒▒▓▓░░▒░░▓▓▒▒███▓▓▓▒░▒█████▒▒▒░░░░░░░▒█████▓░▓███▓░░▒░░▓▒░▓░░░▒░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▓▒▒▓█▓▓█▒░░░░░░░███▒▓▓▒░░▒▒░▒█████▒░▒███▓░░░░▒▒░░▒░░▓▒░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░▒▓▒▒▓▒▒▒▓█▓▓█▓▒█▓░░░░░░▓▓▓██▓▒▒░░░▓█████▒░▒████▓▓▓▒░░░░░░░▓▓░░░░░░░░░░░
░░░░░░░░░░░░▓▓▓▒░░▒▒▓▓▓▒▓▓▓▓▓██▓████▒░░░░░▒▒▒▓███▓▓░░▒█████▒▒██████▒░░░▒▒░░░▒▒░░░░░░░░░░░░
░░░░░░░░░░░▒███▓░▒░▓▓▓▓█▓▒█▓██▓▒████▓█░░░▒░░░░▓▒▒▒░░▒████▒░░▒████▒░░░▒▓▓░░░▒░░░░░░░░░░░░░░
░░░░░░░░░░░░▓██▓▓▓▓███▓▒░░▒▒█████████▓▒░░░░░░░░░░░░▓███▒░░░░███▓░░░░▒██▒░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░▒▓▓▒██████▓░░░░░░▓█████▓▓▓▓██▒▒░░░░░░░▒███▓░░░░▒██▓░░░░░▒▓▒░░░▒▒░░░░░░░░░░░░░░░
░░░░░░░░░░░▒▓▒▒░░▒▒▒▒░░░░░░░░▒▓▓▓▓███████▒░░░░░░▓██▓░░░░░▓█▓▒░░░▒░▒▒░░░░▓▒░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓███████░░░░░▒██▓░░░░░░▓█▒░░░▒▒░░░░░░▒▓░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░▒▒▓█████████████▓░░░░▓█▓░░▒▒░░░▓▒░░░░▓▒░░▒▒░░▓▓░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░▒▓▓████████████████▓░░░░▓▓░░▒█▒░░▒▓░░░░░▒░░░▒▒░▒█▓░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░▓██████████████████░░░░▒▓░░░░▓▓░░▒▒░░░░░░░░░▒░░▓█▓░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▓█████▓▓▓▓▓▓███████▒░░░▒▒░░░░▓░░░░░░░░░░▒▒░░░░▓██▓░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░▒██████░░░░░░▓██████▒░░░░░░░░░░░░░░░░░░░▒▓▒░░░▒▓█████▒░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░▓██████▒░░░░░░▓█████▓▓▓▓▒▒░▓▒░░▒▒▒░░░░░▒▓█▓▒░░░▒▓██▓▒░░░░░░░░░░░░░░░░░░░░░░
░░░░░░▒▒▒░░░░░▓█████▓▒░░░░░░░▓███████████████████░░░░░▒█▒░░░░░▓█▓▒░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░█▓░░░░░▓████▓▒░░░░░░░░░░▒▓██▓▓▓▓▓▓▓▒▒▓▓▓▓███░░░░▓▒░░░░░▒█▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░▒██▓▒▒▓▓████▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓█▓░░▒░░░░░░▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░▒███████▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▓▓░░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░▒████▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░░▒▒░░▒▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░▒▓▒░░░░░░░░░░░░░▒▓██▓▓▓▒▒▓▒▒▒▒███▒▒▓▓████▓████▓████▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```
***

## Installation

1. Clone the repository:

```sh
   git clone https://github.com/yourusername/terminal-game.git
   cd terminal-game
```

2. Install dependencies

```
npm install
```

## Start

```
npm start
```

## Controls

Use the arrow keys to move the hero left and right. 
Ctrl+C to exit the game. 
Ctrl+S to restart.

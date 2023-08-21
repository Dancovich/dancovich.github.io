// COMO ADICIONAR ITEMS A ESSA LISTA
//
// - Mantenha a estrutura abaixo, não mude o nome dos comandos
// - Os campos 'tipo' e 'jogador' podem ser editados. Use aspas simples. Não mude o nome
//    do campo (tipo deve se manter assim, jogador também, etc).
// - O campo 'dados' é uma lista, cada par de 'titulo' e 'descrição' corresponde
//    a um item da lista a ser escolhido aleatoriamente.
// - Cada item do campo dados deve seguir o padrão abaixo
//     {
//       'titulo': 'Titulo do Item',
//       'descricao': 'Descrição do Item, exemplo, plataforma de um jogo',
//     }
// - Separe cada item por uma vírgula. Não coloque vírgula no último item

export function adicionarLista() {
  window.pushFile({
    'tipo': 'ZERADO NO CFX',
    'jogador': 'Eric',
    'dados': [
      {
        'titulo': 'Adventure',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'H.E.R.O.',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'Teddy Apple',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'Pitfall',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'Superman',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'Riddle Of The Sphinx',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'Raiders Of The Lost Ark',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'E.T. The Extra-Terrestrial',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'Nenhum',
        'descricao': 'Atari 5200'
      },
      {
        'titulo': 'Nenhum',
        'descricao': 'Atari 7800'
      }, 
      {
        'titulo': 'Kazumi Ninja',
        'descricao': 'Atari Jaguar'
      }, 
      {
        'titulo': 'Quest For The Golden Chalice',
        'descricao': 'ColecoVision'
      },
      {
        'titulo': 'Pitfall II: Lost Caverns',
        'descricao': 'MSX'
      },
      {
        'titulo': 'Magical Kid Wiz',
        'descricao': 'MSX'
      },    
      {
        'titulo': 'Alex Kidd In Miracle World',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Hang-On',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Snail Maze',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Shinobi',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Altered Beast',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Zillion II: Tri Formation',
        'descricao': 'Master System'
      },
      {
        'titulo': 'R-Type',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Out Run 3-D',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Castle Of Illusion Starring Mickey Mouse',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Kenseiden',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Gangster Town',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Astro Warrior',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Great Basketball',
        'descricao': 'Master System'
      },
      {
        'titulo': 'ESWAT: City Under Siege',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Rocky',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Black Belt',
        'descricao': 'Master System'
      },
      {
        'titulo': 'SpellCaster',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Super Monaco GP',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Vigilante',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Alex Kidd In High-Tech World',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Wonder Boy',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Zillion',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Gain Ground',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Double Dragon',
        'descricao': 'Master System'
      },
      {
        'titulo': 'The Cyber Shinobi',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Choplifter',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Ghostbusters',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Aztec Adventure: The Golden Road To Paradise',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Out Run',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Psycho Fox',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Paperboy',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Pro Wrestling',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Dynamite Dux',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Assault City',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Great Volleyball',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Golden Axe',
        'descricao': 'Master System'
      },
      {
        'titulo': 'The Lucky Dime Caper',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Moonwalker',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Thunder Blade',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Space Harrier 3-D',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Super Off Road',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Rambo III',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Phantasy Star',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Great Soccer',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Captain Silver',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Golvellius: Valley Of Doom',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Lord Of The Sword',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Galaxy Force',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Asterix',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Dick Tracy',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Cloud Master',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Alex Kidd In Shinobi World',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Rastan',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Global Defense',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Action Fighter',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Danan: The Jungle Fighter',
        'descricao': 'Master System'
      },
      {
        'titulo': 'R.C. Grand Prix',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Ghouls\'n Ghosts',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Blade Eagle 3D',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Master Of Darkness',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Golden Axe Warrior',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Out Run',
        'descricao': 'Game Gear'
      },
      {
        'titulo': 'Castlevania',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Castlevania II: Simon\'s Quest',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Double Dragon II: The Revenge',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Journey To Silius',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Crisis Force',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Astyanax',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'TwinBee',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Stinger',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'TwinBee 3',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'The Legend Of Zelda',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Zelda II: The Adventure Of Link',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Vice: Project Doom',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Trojan',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Dragon Spirit: The New Legend',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Castle Of Dragon',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Metroid',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'The Legends Of Owlia',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Batman: Arkham VR',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Cosmic Epsilon',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Tetra Star: The Fighter',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'The Immortal',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'The Legend Of Prince Valiant',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Dragon Fighter',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Kirby\'s Dream Land',
        'descricao': 'Game Boy/GBC'
      },
      {
        'titulo': 'Ninja Five-O',
        'descricao': 'Game Boy Advance'
      },
      {
        'titulo': 'Castlevania: Aria Of Sorrow',
        'descricao': 'Game Boy Advance'
      },
      {
        'titulo': 'Iridion 3D',
        'descricao': 'Game Boy Advance'
      },
      {
        'titulo': 'Metroid Fusion',
        'descricao': 'Game Boy Advance'
      },
      {
        'titulo': 'Altered Beast',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Golden Axe',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Super Monaco GP',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Moonwalker',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'World Championship Soccer',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'The Revenge Of Shinobi',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Thunder Force II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Ghostbusters',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Strider',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Mystic Defender',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Shadow Dancer',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Batman',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Alien Storm',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Sword Of Sodan',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Zoom',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'ESWAT: City Under Siege',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Castle Of Illusion Starring Mickey Mouse',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Burning Force',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Last Battle',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Ghouls´n Ghosts',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Forgotten World',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Spider-Man Vs. The Kingpin',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Master Of Monsters',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Lakers Versus Celtics And The NBA Playoffs',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Sonic The Hedgehog',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Pay Riley Basketball',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Thunder Force III',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Arrow Flash',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Dangerous Seed',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Dynamite Duke',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Out Run',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Crossfire',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Midnight Resistance',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Street Smart',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'DJ Boy',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Quackshot Starring Donald Duck',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Super Volleyball',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Streets Of Rage',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Crack Down',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Runark',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Fantasia',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Final Zone',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Wonder Boy III: Monster Lair',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Fatman',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Shadow Blasters',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Rambo III',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Wrestle War',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Bimini Run',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Sword Of Vermilion',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Pit Fighter',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Starflight',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Golden Axe II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Twin Cobra',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Phantasy Star III',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'ToeJam & Earl',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'El Viento',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'King\'s Bounty',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Double Dragon II: The Revenge',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'M-1 Abrams Battle Tank',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Fire Mustang',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Back To The Future III',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Verytex',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Dino Land',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Paperboy',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Heavy Nova',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Saint Sword',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Hellfire',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'PGA Tour Golf',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Rolling Thunder II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'The Immortal',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Granada',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Tecmo World Cup \'92',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Bulls Versus Lakers And The NBA Playoffs',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Hard Drivin\'',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Wonder Boy In Monster World',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Desert Strike: Return To The Gulf',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Olimpic Gold',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Sol-Deace',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Toki: Going Ape Spit',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Road Rash',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Taz-Mania',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'The Terminator',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Splatterhouse II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'David Robinson\'s Supreme Court',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Master Of Weapon',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Task Force Harrier EX',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Galaxy Force II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Cadash',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'World Trophy Soccer',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Deadly Moves',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Strider II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Out Of This World',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Predator II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Flashback: The Quest For Identity',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Golden Axe III',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'G-Loc',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'F22 Interceptor',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Klax',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Chakan: The Forever Man',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Splatterhouse III',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'James Pond: Underwater Agent',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Shadow Of The Beast',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'World Of Illusion Starring Mickey Mouse And Donald Duck',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Thunder Force IV',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Shadow Of The Beast II',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Streets Of Rage 2',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Ghouls\'n Ghosts',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Gaiares',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Prince Of Persia',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Out Run 2019',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Aladdin',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Pink Goes To Hollywood',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'NHL Hockey',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'FIFA International Soccer',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Dark Castle',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Centurion: Defender Of Rome',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Art Of Fighting',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'The Simpsons: Bart Vs. The Space Mutants',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Sonic The Hedgehog 2',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Sonic The Hedgehog 3',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Cristal Pony Tales',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Gauntlet IV',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Ristar',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Shinobi III: Return Of The Ninja Master',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Dahna',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Skeleton Krew',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Gley Lancer',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Twinkle Tale',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'YS III: Wanderer\'s From Ys',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Mystical Fighter',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Light Crusader',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Shining Force',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Beyond Oasis',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Arkagis Revolution',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Blades Of Vengeance',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Crusader Of Centy',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Demons Of Asteborg',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Castlevania Bloodlines',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Mad Stalker',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'M.U.S.H.A.',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Road Avenger',
        'descricao': 'Sega CD'
      },
      {
        'titulo': 'F-Zero',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Street Fighter II: Champion Edition',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Star Fox',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Chrono Trigger',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Super Metroid',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Top Gear',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'The King Of Dragons',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'The Legend Of Zelda: A Link To The Past',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Skyblazer',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Super Castlevania IV',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Run Saber',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'The King Of Demons',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Darius Twin',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Nosferatu',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Musya',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Super Aleste',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Demon\'s Crest',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Super Valis IV',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Hyper Iria',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Magical Chase',
        'descricao': 'PC Engine'
      },
      {
        'titulo': 'Out Run',
        'descricao': 'PC Engine'
      },
      {
        'titulo': 'R-Type Part 1',
        'descricao': 'PC Engine'
      },
      {
        'titulo': 'The Legendary Axe',
        'descricao': 'PC Engine'
      },
      {
        'titulo': 'Rayxanber III',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Kaze Kiri Ninja Action',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Exile',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Castlevania: Rondo Of Blood',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Ys IV: The Dawn Of Ys',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Lucienne\'s Quest',
        'descricao': '3DO'
      },
      {
        'titulo': 'Out Of This World',
        'descricao': '3DO'
      },
      {
        'titulo': 'Crossed Swords',
        'descricao': 'Neo Geo CD'
      },
      {
        'titulo': 'Out Run',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Astal',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Radiant Silvergun',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Soukyugurentai Otokuyo',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Shinrei Jusatsushi Tarōmaru',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'The Legend Of Zelda: Ocarina Of Time',
        'descricao': 'Nintendo 64'
      },
      {
        'titulo': 'Star Fox 64',
        'descricao': 'Nintendo 64'
      },
      {
        'titulo': 'Klonoa: Door To The Phantomile',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Castlevania: Symphony Of The Night',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Final Fantasy VII',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Silent Hill',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Resident Evil',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Koudelka',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Overblood',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Resident Evil 2',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'F-Zero GX',
        'descricao': 'GameCube'
      },
      {
        'titulo': 'Redux: Dark Matters',
        'descricao': 'Dreamcast'
      },
      {
        'titulo': 'Zero Gunner 2',
        'descricao': 'Dreamcast'
      },
      {
        'titulo': 'Under Defeat',
        'descricao': 'Dreamcast'
      },
      {
        'titulo': 'Rez',
        'descricao': 'Dreamcast'
      },
      {
        'titulo': 'Golden Axe',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Gal\'s Panic',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Street Fighter II: Champion Edition',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Street Fighter II: World Warriors',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Captain Commando',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Strider',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Double Dragon',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Knights Of The Round',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'GigaWing',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Progear',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Ganryou',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Altered Beast',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Three Wonders - Midnight Wanderers: Quest For The Chariot',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Blazing Star',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Battle Circuit',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Prehistoric Isle 2',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Alien Vs. Predator',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Shadow Of The Colossus',
        'descricao': 'PlayStation 2'
      },
      {
        'titulo': 'God Of War',
        'descricao': 'PlayStation 2'
      },
      {
        'titulo': 'God Of War 2',
        'descricao': 'PlayStation 2'
      },
      {
        'titulo': 'Ico',
        'descricao': 'PlayStation 2'
      },
      {
        'titulo': 'Silent Hill 2',
        'descricao': 'PlayStation 2'
      },
      {
        'titulo': 'God Of War 3',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Bayonetta',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Sonic The Hedgehog 4: Episode 1',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Soldner X2: Final Prototype',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Super Stardust HD',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Enslaved: Odyssey To The West',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'BioShock 2',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'God Of War: Ascension',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'The Last Of Us',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Diablo III',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Beyond Two Souls',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Castle Of Illusion Starring Mickey Mouse',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Child Of Light',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Dishonored',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Red Dead Redemption',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'Demon\'s Souls',
        'descricao': 'PlayStation 3'
      },
      {
        'titulo': 'R-Type Dimensions - R-Type',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'R-Type Dimensions - R-Type 2',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Ikaruga',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'After Burner Climax',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Halo: ODST',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Alan Wake',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Halo Reach',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Castlevania: Harmony Of Despair',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Limbo',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Out Run Online Arcade',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Shinobi',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': '1Up',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Deadlight',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Double Dragon Neon',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Lego Batman: The Videogame',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Halo 4',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Dead Space 3',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'BioShock Infinit',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Bloodborne',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Geometry Wars 3: Dimensions Evolved',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Shadow Of The Beast',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Dark Souls III',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Uncharted: Drake\'s Fortune',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Uncharted 2: Among Thieves',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Bloodstained: Ritual Of The Night',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Dark Souls II',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Metroid Prime',
        'descricao': 'Wii'
      },
      {
        'titulo': 'Metroid Prime 2: Echoes',
        'descricao': 'Wii'
      },
      {
        'titulo': 'Resident Evil 4',
        'descricao': 'Wii'
      },
      {
        'titulo': 'Metroid: Other M',
        'descricao': 'Wii'
      },
      {
        'titulo': 'Star Fox Zero',
        'descricao': 'Wii U'
      },
      {
        'titulo': 'Bayonetta 2',
        'descricao': 'Wii'
      },
      {
        'titulo': 'The Legend Of Zelda: Link\'s Awakening',
        'descricao': 'Switch'
      },
      {
        'titulo': 'Oniken',
        'descricao': 'Switch'
      },
      {
        'titulo': 'Odallus: The Dark Call',
        'descricao': 'Switch'
      },
      {
        'titulo': 'Axiom Verge',
        'descricao': 'Switch'
      },
      {
        'titulo': 'Huntdown',
        'descricao': 'Switch'
      },
      {
        'titulo': 'Syder Arcade',
        'descricao': 'OUYA'
      },
      {
        'titulo': 'Donkey-Me',
        'descricao': 'OUYA'
      },
      {
        'titulo': 'Monkey Island 2: LeChuck\'s Revenge',
        'descricao': 'PC'
      },
      {
        'titulo': 'Indiana Jones And The Last Crusade',
        'descricao': 'PC'
      },
      {
        'titulo': 'Indiana Jones And The Fate Of Atlantis',
        'descricao': 'PC'
      },
      {
        'titulo': 'Maniac Mansion: Day Of The Tentacle',
        'descricao': 'PC'
      },
      {
        'titulo': 'Countdown',
        'descricao': 'PC'
      },
      {
        'titulo': 'Martian Memorandum',
        'descricao': 'PC'
      },
      {
        'titulo': 'Out Of This World',
        'descricao': 'PC'
      },
      {
        'titulo': 'Flashback: The Quest For Identity',
        'descricao': 'PC'
      },
      {
        'titulo': 'Golden Axe',
        'descricao': 'PC'
      },
      {
        'titulo': 'Wolfenstein 3D',
        'descricao': 'PC'
      },
      {
        'titulo': 'Sam & Max Hit The Road',
        'descricao': 'PC'
      },
      {
        'titulo': 'Doom',
        'descricao': 'PC'
      },
      {
        'titulo': 'Astrofire',
        'descricao': 'PC'
      },
      {
        'titulo': 'Prince Of Persia',
        'descricao': 'PC'
      },
      {
        'titulo': 'Taipei',
        'descricao': 'PC'
      },
      {
        'titulo': 'Quest For Glory: So You Want To Be A Hero',
        'descricao': 'PC'
      },
      {
        'titulo': 'Doom 2',
        'descricao': 'PC'
      },
      {
        'titulo': 'The Legend Of Kyrandia',
        'descricao': 'PC'
      },
      {
        'titulo': 'Centurion: Defender Of Rome',
        'descricao': 'PC'
      },
      {
        'titulo': 'King\'s Quest VI: Heir Today, Gone Tomorrow',
        'descricao': 'PC'
      },
      {
        'titulo': 'Tie Fighter',
        'descricao': 'PC'
      },
      {
        'titulo': 'Quest For Glory 2: Trial By Fire',
        'descricao': 'PC'
      },
      {
        'titulo': 'Raptor: Call Of The Shadows',
        'descricao': 'PC'
      },
      {
        'titulo': 'Strip Poker II',
        'descricao': 'PC'
      },
      {
        'titulo': 'Prince Of Persia 2: The Shadow And The Flame',
        'descricao': 'PC'
      },
      {
        'titulo': 'Quest For Glory 3: Wages Of War',
        'descricao': 'PC'
      },
      {
        'titulo': 'Out Run',
        'descricao': 'PC'
      },
      {
        'titulo': 'Alone In The Dark',
        'descricao': 'PC'
      },
      {
        'titulo': 'Full Throttle',
        'descricao': 'PC'
      },
      {
        'titulo': 'Alone In The Dark 2',
        'descricao': 'PC'
      },
      {
        'titulo': 'The Secret Of Monkey Island',
        'descricao': 'PC'
      },
      {
        'titulo': 'The Dig',
        'descricao': 'PC'
      },
      {
        'titulo': 'BioForge',
        'descricao': 'PC'
      },
      {
        'titulo': 'Quake',
        'descricao': 'PC'
      },
      {
        'titulo': 'Alone In The Dark 3',
        'descricao': 'PC'
      },
      {
        'titulo': 'Gabriel Knight II: The Beast Within',
        'descricao': 'PC'
      },
      {
        'titulo': 'The Curse Of Monkey Island',
        'descricao': 'PC'
      },
      {
        'titulo': 'Phantasmagoria',
        'descricao': 'PC'
      },
      {
        'titulo': 'Quake II',
        'descricao': 'PC'
      },
      {
        'titulo': 'The Elder Scrolls IV: Oblivion',
        'descricao': 'PC'
      },
      {
        'titulo': 'Crysis',
        'descricao': 'PC'
      },
      {
        'titulo': 'Call Of Duty 4: Modern Warfare',
        'descricao': 'PC'
      },
      {
        'titulo': 'Fallout 3',
        'descricao': 'PC'
      },
      {
        'titulo': 'Prince Of Persia (2008)',
        'descricao': 'PC'
      },
      {
        'titulo': 'Mirror\'s Edge',
        'descricao': 'PC'
      },
      {
        'titulo': 'Tomb Raider: Underworld',
        'descricao': 'PC'
      },
      {
        'titulo': 'Dead Space',
        'descricao': 'PC'
      },
      {
        'titulo': 'Call Of Duty: Modern Warfare 2',
        'descricao': 'PC'
      },
      {
        'titulo': 'BioShock',
        'descricao': 'PC'
      },
      {
        'titulo': 'Prince Of Persia: The Two Thrones',
        'descricao': 'PC'
      },
      {
        'titulo': 'Mass Effect',
        'descricao': 'PC'
      },
      {
        'titulo': 'Mass Effect 2',
        'descricao': 'PC'
      },
      {
        'titulo': 'Portal',
        'descricao': 'PC'
      },
      {
        'titulo': 'You Have To Burn The Rope',
        'descricao': 'PC'
      },
      {
        'titulo': 'Trine',
        'descricao': 'PC'
      },
      {
        'titulo': 'Ys Complete - Ys I: The Vanished Omens',
        'descricao': 'PC'
      },
      {
        'titulo': 'Fallout: New Vegas',
        'descricao': 'PC'
      },
      {
        'titulo': 'Dead Space 2',
        'descricao': 'PC'
      },
      {
        'titulo': 'Call Of Duty: Black Ops',
        'descricao': 'PC'
      },
      {
        'titulo': 'Jamestown: Legend Of The Lost Colony',
        'descricao': 'PC'
      },
      {
        'titulo': 'The Binding Of Isaac',
        'descricao': 'PC'
      },
      {
        'titulo': 'Mass Effect 3',
        'descricao': 'PC'
      },
      {
        'titulo': 'Bastion',
        'descricao': 'PC'
      },
      {
        'titulo': 'Diablo',
        'descricao': 'PC'
      },
      {
        'titulo': 'Dead Space 3',
        'descricao': 'PC'
      },
      {
        'titulo': 'Stasis',
        'descricao': 'PC'
      },
      {
        'titulo': 'Super Meat Boy',
        'descricao': 'PC'
      },
      {
        'titulo': 'Inside',
        'descricao': 'PC'
      },
      {
        'titulo': 'Lifeless Planet',
        'descricao': 'PC'
      },
      {
        'titulo': 'Cave Story',
        'descricao': 'PC'
      },
      {
        'titulo': 'Wizorb',
        'descricao': 'PC'
      },
      {
        'titulo': 'Alwa\'s Awakening',
        'descricao': 'PC'
      },
      {
        'titulo': 'Hyper Light Drifter',
        'descricao': 'PC'
      },
      {
        'titulo': 'Zadette',
        'descricao': 'PC'
      },
      {
        'titulo': 'Enemy: Tempest Of Violence',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Enemy 2: Missing In Action',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Ninja Warriors',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Landstalker',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Blazing Lazers',
        'descricao': 'PC Engine'
      },
      {
        'titulo': 'Edo No Kiba',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Metal Dragon',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Valis: The Fantasm Soldier',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Armored Warriors',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Eco Fighters',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Cyborg 009',
        'descricao': 'Sega CD'
      },
      {
        'titulo': 'Kendo Rage',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Warriors Of Fate',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Willow',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Renny Blaster',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Tiger Road',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Hihou Densetsu: Chris No Bouken',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Valis II',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Zed Blade',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Elemental Master',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Lionheart',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Alien Storm',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Aldynes',
        'descricao': 'TurboGrafx'
      },
      {
        'titulo': 'Fantasy Zone II',
        'descricao': 'Master System'
      },
      {
        'titulo': 'RoboCop',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Dynamite Dux',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Metal Mutant',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Teenage Mutant Ninja Turtles: Turtles in Time',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Riot City',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Midnight Resistance',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Gungage',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Organism',
        'descricao': 'Commodore 64'
      },
      {
        'titulo': 'Rolling Thunder 3',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Gardis Light',
        'descricao': 'Sharp X68000'
      },
      {
        'titulo': 'Low G Man: The Low Gravity Man',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Shadow Complex',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Invasores Do Cosmos',
        'descricao': 'Odyssey'
      },
      {
        'titulo': 'Shatterhand',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Resident Evil 3: Nemesis',
        'descricao': 'GameCube'
      },
      {
        'titulo': 'Turtles Shredder\'s Revenge',
        'descricao': 'Switch'
      },
      {
        'titulo': 'The King Of Dragons',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Metal Law',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Lorna',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Gaia Seed',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Submarine Attack',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Bad Dudes',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'RobertCop 2 Vs Dragonninja',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Gaia Crusaders',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Adulting',
        'descricao': 'Game Boy'
      },
      {
        'titulo': 'Zombiehunter Bob',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Quake',
        'descricao': 'Nintendo 64'
      },
      {
        'titulo': 'One',
        'descricao': 'PlayStation'
      },
      {
        'titulo': 'Ys II Ancient Ys Vanished – The Final Chapter',
        'descricao': 'PC'
      },
      {
        'titulo': 'Blaynix',
        'descricao': 'PC'
      },
      {
        'titulo': 'Beast Vs. Aliens',
        'descricao': 'Fangame'
      },
      {
        'titulo': 'Tracy NESCapades',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Rekt',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Shadow Of The ninja',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'In Utero',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'After Burner II',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'The Plague',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Bay Route',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Gargoyles',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Prisoners Of War',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Stranded',
        'descricao': 'PC'
      },
      {
        'titulo': 'Out Zone',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Vampire Survivor',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'F-Zero X',
        'descricao': 'Nintendo 64'
      },
      {
        'titulo': 'U.N. Squadron',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Keystone Kapers',
        'descricao': 'Atari 2600'
      },
      {
        'titulo': 'Shattering Jaws',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'AshGuine',
        'descricao': 'MSX'
      },
      {
        'titulo': 'Quest For The Golden Chalice',
        'descricao': 'ColecoVision'
      },
      {
        'titulo': 'Magician Lord',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Double Dragon',
        'descricao': 'Zeebo'
      },
      {
        'titulo': 'Seitar',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Forgotten Worlds',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Wrath Of The Demon',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Metal Black',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Street Fighter 2: Special Champion Edition',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Super Street Fighter 2: The New Challengers',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Space Invaders 91',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Doman: Grzechy Ardana',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'In The Hunt',
        'descricao': 'Arcade'
      },
      {
        'titulo': 'Mad Dog McCree',
        'descricao': '3DO'
      },
      {
        'titulo': 'GG Aleste 3',
        'descricao': 'Game Gear'
      },
      {
        'titulo': 'Agony',
        'descricao': 'Amiga'
      },
      {
        'titulo': 'Pole Position',
        'descricao': 'Atari 2600'
      }
     ]
  });
}

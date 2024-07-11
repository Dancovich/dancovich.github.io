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
    'jogador': 'Danilo',
    'dados': [
      {
        'titulo': 'Life Force',
        'descricao': 'NES'
      },
      {
        'titulo': 'Chrono Trigger',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Ultima 8',
        'descricao': 'PC DOS'
      },
      {
        'titulo': 'Prince of Persia',
        'descricao': 'PC DOS'
      },
      {
        'titulo': 'Prince of Persia 2: The Shadow and the Flame',
        'descricao': 'PC DOS'
      },
      {
        'titulo': 'Super Mario Bros',
        'descricao': 'NES'
      },
      {
        'titulo': 'Super Mario Bros 2',
        'descricao': 'NES'
      },
      {
        'titulo': 'Super Mario Bros 3',
        'descricao': 'NES'
      },
      {
        'titulo': 'Kirby\'s Adventure',
        'descricao': 'NES'
      },
      {
        'titulo': 'Castlevania',
        'descricao': 'NES'
      },
      {
        'titulo': 'Castlevania 2',
        'descricao': 'NES'
      },
      {
        'titulo': 'Kid Dracula',
        'descricao': 'NES'
      },
      {
        'titulo': 'Castlevania: Symphony of the Night',
        'descricao': 'Playstation'
      },
      {
        'titulo': 'Castlevania: Aria of Sorrow',
        'descricao': 'Nintendo DS'
      },
      {
        'titulo': 'Castlevania: Dawn of Sorrow',
        'descricao': 'Nintendo 3DS'
      },
      {
        'titulo': 'Bloodstained: Ritual of the Night',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Ghost Sweeper Mikami',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Gears of War 2',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Gears of War 3',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Gears of War 4',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Gears of War 5',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Call of Duty',
        'descricao': 'PC Windows'
      },
      {
        'titulo': 'Call of Duty 2',
        'descricao': 'PC Windows'
      },
      {
        'titulo': 'Call of Duty 3',
        'descricao': 'Playstation 2'
      },
      {
        'titulo': 'Call of Duty Black Ops',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Elder Scroll\'s IV: Oblivion',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Elder Scroll\'s V: Skyrim',
        'descricao': 'PC Windows'
      },
      {
        'titulo': 'Fallout 3',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Devil May Cry 3',
        'descricao': 'Playstation 2'
      },
      {
        'titulo': 'Legacy of Kain: Soul Reaver',
        'descricao': 'PC Windows'
      },
      {
        'titulo': 'Shadowgate',
        'descricao': 'NES'
      },
      {
        'titulo': 'Megaman',
        'descricao': 'NES'
      },
      {
        'titulo': 'Megaman 2',
        'descricao': 'NES'
      },
      {
        'titulo': 'Megaman 3',
        'descricao': 'NES'
      },
      {
        'titulo': 'Megaman 4',
        'descricao': 'NES'
      },
      {
        'titulo': 'Megaman 5',
        'descricao': 'NES'
      },
      {
        'titulo': 'Megaman 6',
        'descricao': 'NES'
      },
      {
        'titulo': 'Megaman 7',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Megaman 8',
        'descricao': 'Playstation'
      },
      {
        'titulo': 'Megaman X',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Megaman X2',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Megaman X3',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Megaman X8',
        'descricao': 'PC Windows'
      },
      {
        'titulo': 'Final Fight',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Final Fight 2',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Final Fight 3',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Ikaruga',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Double Dragon',
        'descricao': 'NES'
      },
      {
        'titulo': 'Double Dragon 2',
        'descricao': 'NES'
      },
      {
        'titulo': 'Super Double Dragon',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Phantasy Star',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Phantasy Star IV: The End of Millenium',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Final Fantasy III',
        'descricao': 'Nintendo DS'
      },
      {
        'titulo': 'Final Fantasy V',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Final Fantasy VI',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Final Fantasy VII',
        'descricao': 'Playstation'
      },
      {
        'titulo': 'Final Fantasy VIII',
        'descricao': 'Playstation'
      },
      {
        'titulo': 'Final Fantasy IX',
        'descricao': 'Playstation'
      },
      {
        'titulo': 'Final Fantasy X',
        'descricao': 'Playstation 2'
      },
      {
        'titulo': 'Rival Turf',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Brawl Brothers',
        'descricao': 'SNES'
      },
      {
        'titulo': 'The Peace Keepers',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Cabal',
        'descricao': 'NES'
      },
      {
        'titulo': 'Ghost Busters',
        'descricao': 'NES'
      },
      {
        'titulo': 'Felix the Cat',
        'descricao': 'NES'
      },
      {
        'titulo': 'Tunic',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Yakuza',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Yakuza 2',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Yakuza: Like a Dragon',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Yakuza: Infinite Wealth',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Like a Dragon Gaiden: The Man Who Erased His Name',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Monster Hunter World',
        'descricao': 'Xbox One X'
      },
      {
        'titulo': 'Monster Hunter World: Iceborne',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Monster Hunter Rise',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Forza Horizon 2',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Forza Horizon 3',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Forza Horizon 4',
        'descricao': 'Xbox One X'
      },
      {
        'titulo': 'Forza Horizon 5',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Forza Motorsports 5',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Forza Motorsports 6',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Forza Motorsports 7',
        'descricao': 'Xbox One X'
      },
      {
        'titulo': 'Too Human',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Bionic Commando Rearmed',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Burnout Paradise',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Braid',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'R-Type Dimensions',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Prince of Persia Classic',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Street Fighter 2',
        'descricao': 'SNES'
      },
      {
        'titulo': 'Street Fighter Alpha',
        'descricao': 'PSOne'
      },
      {
        'titulo': 'Street Fighter Alpha 2',
        'descricao': 'PSOne'
      },
      {
        'titulo': 'Street Fighter Alpha 3',
        'descricao': 'PSOne'
      },
      {
        'titulo': 'Street Fighter 4',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Street Fighter 5',
        'descricao': 'PC'
      },
      {
        'titulo': 'Street Fighter 6',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'The King of Fighters 94',
        'descricao': 'Neo Geo'
      },
      {
        'titulo': 'The King of Fighters 95',
        'descricao': 'Neo Geo'
      },
      {
        'titulo': 'The King of Fighters 96',
        'descricao': 'Neo Geo'
      },
      {
        'titulo': 'The King of Fighters 97',
        'descricao': 'Neo Geo'
      },
      {
        'titulo': 'The King of Fighters 98',
        'descricao': 'Neo Geo'
      },
      {
        'titulo': 'The King of Fighters 99',
        'descricao': 'Neo Geo'
      },
      {
        'titulo': 'Nier Replicant',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'Nier Automata',
        'descricao': 'Xbox Series X'
      },
      {
        'titulo': 'The Legend of Zelda: Ocarina of Time',
        'descricao': 'Nintendo 3DS'
      },
      {
        'titulo': 'The Legend of Zelda: Majora\'s Mask',
        'descricao': 'Nintendo 3DS'
      },
      {
        'titulo': 'The Legend of Zelda: A Link to the Past',
        'descricao': 'SNES'
      },
      {
        'titulo': 'The Legend of Zelda: A Link between Worlds',
        'descricao': 'Nintendo 3DS'
      },
      {
        'titulo': 'The Legend of Zelda: The Minish Cap',
        'descricao': 'Nintendo DS'
      },
      {
        'titulo': 'The Legend of Zelda: Ocarina of Time',
        'descricao': 'Nintendo 3DS'
      },
      {
        'titulo': 'Castlevania: Order of Ecclesia',
        'descricao': 'Nintendo DS'
      },
      {
        'titulo': 'Golden Sun',
        'descricao': 'Gameboy Advance'
      }
    ]
  });
}

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
    'tipo': 'JOGUEI A TOALHA',
    'jogador': 'Eric',
    'dados': [
      {
        'titulo': 'Shinobi Legions',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Ninja Gaiden',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Fantasy Zone 2',
        'descricao': 'Master System'
      },
      {
        'titulo': 'Actraiser 2',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Lagrange Point',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Albert Odyssey',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Shantae',
        'descricao': 'Game Boy Color'
      },
      {
        'titulo': 'Fhey Area',
        'descricao': 'Sega CD'
      },
      {
        'titulo': 'Mega Man X',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Castlevania III',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Gekido Advance',
        'descricao': 'Game Boy Advance'
      },
      {
        'titulo': 'Gradius V',
        'descricao': 'PlayStation 2'
      },
      {
        'titulo': 'Kick Master',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Cyber Shadow',
        'descricao': 'Xbox One'
      },
      {
        'titulo': 'Equinox',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Panzer Dragoon',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'R-Type Final',
        'descricao': 'PlayStation 2'
      },
      {
        'titulo': 'Shadow Complex',
        'descricao': 'Xbox 360'
      },
      {
        'titulo': 'Rolling Thunder',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Blazeon',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Jackal',
        'descricao': 'Nintendo'
      },
      {
        'titulo': 'Hissatsu!',
        'descricao': 'Saturn'
      },
      {
        'titulo': 'Sorcery Saga',
        'descricao': 'Mega Drive'
      },
      {
        'titulo': 'Silent Debuggers',
        'descricao': 'PC Engine'
      },
      {
        'titulo': 'Sekiro',
        'descricao': 'PlayStation 4'
      },
      {
        'titulo': 'Killing Time',
        'descricao': '3DO'
      },
      {
        'titulo': 'Operation Logic Bomb',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Brain Lord',
        'descricao': 'Super Nintendo'
      },
      {
        'titulo': 'Carrier',
        'descricao': 'Dreamcast'
      },
      {
        'titulo': 'Hellfire S',
        'descricao': 'PC Engine CD'
      },
      {
        'titulo': 'Star Wars Arcade',
        'descricao': 'Mega 32X'
      },
      {
        'titulo': 'Masters Of The Universe',
        'descricao': 'Atari ST'
      },
      {
        'titulo': 'Gemini Wing',
        'descricao': 'Arcade'
      }
    ]
  });
}

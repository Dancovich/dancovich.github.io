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
   ,
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
    }
    {
      'titulo': 'Nenhum',
      'descricao': 'Atari 7800'
    }  
    {
      'titulo': 'Quest For The Golden Chalice',
      'descricao': 'ColecoVision'
    }
    {
      'titulo': 'Pitfall II: Lost Caverns',
      'descricao': 'MSX'
    }                 
    {
      'titulo': 'Magical Kid Wiz',
      'descricao': 'MSX'
    }    
    {
      'titulo': 'Alex Kidd In Miracle World',
      'descricao': 'Master System'
    },
]
  });
}

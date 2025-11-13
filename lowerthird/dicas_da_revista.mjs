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
    'tipo': 'DICAS DA REVISTA',
    'jogador': 'Eric',
    'dados': [
      {
        'titulo': 'Toda vez que um ovo malhado for quebrado, dele sairá um deus da morte',
        'descricao': 'Ação Games Nº 3'
      },
      {
        'titulo': 'Sai de baixo! Pintou sujeira: como é pentelho este velhinho',
        'descricao': 'Ação Games Nº 41'
      },
      {
        'titulo': 'A chave da porta que você pegou lá atrás serve para abrir portas que o levarão a outros locais da fase',
        'descricao': 'Ação Games Nº 3'
      },
      {
        'titulo': 'Para obter o continue nesse game, espere pela tela de game over',
        'descricao': 'Ação Games Nº 3'
      },
      {
        'titulo': 'Não gaste magias à toa em Biggs e Wedge',
        'descricao': 'Super GamePower Nº 62'
      },
      {
        'titulo': 'Para conseguir vencer o computador em qualquer nível de dificuldade não é preciso nenhum esforço sobrenatural',
        'descricao': 'Super GamePower Nº 3'
      },
      {
        'titulo': 'Quando aparecer um cara que ataca de perto, não vacile. Atire no ato',
        'descricao': 'Super GamePower Nº 87'
      },
      {
        'titulo': 'A munição é ilimitada, por isso fique sempre atirando enquanto explora novos territórios',
        'descricao': 'Super GamePower Nº 42'
      },
      {
        'titulo': 'Quanto mais poderoso você for, mais fácil será derrotar seus inimigos',
        'descricao': 'Guia Games, Abril 92'
      },
      {
        'titulo': 'No túnel do planeta verde não pare de atirar e soltar mísseis, pois assim você derrotará os inimigos ao aparecerem na tela',
        'descricao': 'Videogame Nº 4'
      },
      {
        'titulo': 'Para pegar a manha, aprenda a mover-se e atirar com precisão',
        'descricao': 'Super GamePower Nº 60'
      },
      {
        'titulo': 'Mate a maioria dos inimigos apenas apertando o botão de ataque',
        'descricao': 'Super GamePower Nº 60'
      },
      {
        'titulo': 'Consulte o mapa sempre que possível para não se perder no cenário',
        'descricao': 'Revista Playstation Nº 9'
      },
      {
        'titulo': 'Procure falar com todos durante o jogo, pois eles dão informações muito importantes',
        'descricao': 'Super GamePower Nº 3'
      },
      {
        'titulo': 'As vezes o jogo indica para apertar os botões (A, B ou C). Fique esperto!',
        'descricao': 'Super GamePower Nº 3'
      },
      {
        'titulo': 'Verifique tudo a fim de conseguir itens e dicas',
        'descricao': 'Super GamePower Nº 3'
      },
      {
        'titulo': 'Lembre-se de que você possui diversas armas. Use-as quando for preciso',
        'descricao': 'Super GamePower Nº 80'
      }
      ,
      {
        'titulo': 'Quando estiver na floresta, pule os barris rolantes para que eles não roubem boa parte de sua energia',
        'descricao': 'Super GamePower Nº 15'
      }
      ,
      {
        'titulo': 'Não seja tímido com seus oponentes, se algum otário ficar no seu caminho, jogue-o para fora',
        'descricao': 'Super GamePower Nº 74'
      }
      ,
      {
        'titulo': 'Evite ao máximo ficar entre dois soldados para não levar um empurrão e poupe sua energia, porque o caminho é longo',
        'descricao': 'Supergame Nº 01'
      }
      ,
      {
        'titulo': 'Para acabar com essa cobra na moleza, atire na cabeça da bicha',
        'descricao': 'Super GamePower Nº 42'
      }
      ,
      {
        'titulo': 'Fique esperto para não se chocar com os inimigos que vem por baixo',
        'descricao': 'Super GamePower Nº 42'
      }
      ,
      {
        'titulo': 'Tome cuidado quando for colar na traseira de algum carro pois uma colisão nunca é bem-vinda',
        'descricao': 'Super GamePower Nº 72'
      },
      {
        'titulo': 'Fique ligado nesta manha: no Versus Mode, mantenha os adversários no canto e desfira socus, chutes etc.',
        'descricao': 'Ação Games Nº 40'
      },
      {
        'titulo': 'Pegue a bandagem na cesta de lixo.',
        'descricao': 'Super Game Power Nº 21'
      },
      {
        'titulo': 'A diretoria dá as diretrizes a serem seguidas.',
        'descricao': 'Super Game Power Nº 17'
      },
      {
        'titulo': 'E fique ligado: quando você perde uma vida, perde também a arma que usava.',
        'descricao': 'Ação Games Nº 21'
      },
      {
        'titulo': 'Na tela título pressione X, Select, A, Select, Y, A, X, Select.',
        'descricao': 'Nintendo World Nº 46'
      }
    ]
  });
}

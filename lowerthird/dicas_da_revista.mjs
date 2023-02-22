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
        'descricao': 'Super Game Power Nº 62'
      },
      {
        'titulo': 'Para conseguir vencer o computador em qualquer nível de dificuldade não é preciso nenhum esforço sobrenatural',
        'descricao': 'Super Game Power Nº 3'
      },
      {
        'titulo': 'Quando aparecer um cara que ataca de perto, não vacile. Atire no ato',
        'descricao': 'Super Game Power Nº 87'
      },
      {
        'titulo': 'A munição é ilimitada, por isso fique sempre atirando enquanto explora novos territórios',
        'descricao': 'Super Game Power Nº 42'
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
        'descricao': 'Super Game Power Nº 60'
      },
      {
        'titulo': 'Mate a maioria dos inimigos apenas apertando o botão de ataque',
        'descricao': 'Super Game Power Nº 60'
      },
      {
        'titulo': 'Consulte o mapa sempre que possível para não se perder no cenário',
        'descricao': 'Revista Playstation Nº 9'
      },
      {
        'titulo': 'Procure falar com todos durante o jogo, pois eles dão informações muito importantes',
        'descricao': 'Super Game Power Nº 3'
      },
      {
        'titulo': 'As vezes o jogo indica para apertar os botões (A, B ou C). Fique esperto!',
        'descricao': 'Super Game Power Nº 3'
      },
      {
        'titulo': 'Verifique tudo a fim de conseguir itens e dicas',
        'descricao': 'Super Game Power Nº 3'
      },
      {
        'titulo': 'Lembre-se de que você possui diversas armas. Use-as quando for preciso',
        'descricao': 'Super Game Power Nº 80'
      }
      ,
      {
        'titulo': 'Quando estiver na floresta, pule os barris rolantes para que eles não roubem boa parte de sua energia',
        'descricao': 'Super Game Power Nº 15'
      }
      ,
      {
        'titulo': 'Não seja tímido com seus oponentes, se algum otário ficar no seu caminho, jogue-o para fora',
        'descricao': 'Super Game Power Nº 74'
      }
    ]
  });
}

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
        'titulo': 'Sai de baixo! Pintou sujeira: como é pentelho este velhinho.',
        'descricao': 'Ação Games Nº 41'
      },
      {
        'titulo': 'A chave da porta que você pegou lá atrás serve para abrir portas que o levarão a outros locais da fase.',
        'descricao': 'Ação Games Nº 3'
      },
      {
        'titulo': 'Para obter o continue nesse game, espere pela tela de game over.',
        'descricao': 'Ação Games Nº 3'
      },
      {
        'titulo': 'Não gaste magias à toa em Biggs e Wedge.',
        'descricao': 'Super Game Power Nº 62'
      },
      {
        'titulo': 'Para conseguir vencer o computador em qualquer nível de dificuldade não é preciso nenhum esforço sobrenatural.',
        'descricao': 'Super Game Power Nº 3'
      }
    ]
  });
}

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
        'tipo': 'DICAS AÇÃO GAMES',
        'jogador': 'Eric',
        'dados': [
            {
                'titulo': 'Toda vez que um ovo malhado for quebrado, dele sairá um deus da morte',
                'descricao': 'Wonder Boy - Master System',
                'extra': 'Ação Games Nº 3'
            }
        ]
    });
}

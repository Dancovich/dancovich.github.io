export function adicionarLista() {
    window.pushFile({
        'tipo': 'CONTADOR BARATA',
        'jogador': 'Eric',
        'dados': [
            {
                'titulo': 'Prince of Persia The Sands of Time (PS3)',
                'descricao': 'Baratas voadoras'
            },
            {
                'titulo': 'Arcus Odyssey (Mega Drive)',
                'descricao': 'Barata na 4ª fase'
            },
            {
                'titulo': 'Pier Solar (Mega Drive)',
                'descricao': 'Baratas em cavernas'
            },
            {
                'titulo': 'Kabuki Quantum Fighter (Nintendo)',
                'descricao': 'Barata meio alien por sinal'
            }
        ]
    });
}

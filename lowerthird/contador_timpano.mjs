export function adicionarLista() {
    window.pushFile({
        'tipo': 'CONTADOR TÍMPANO',
        'jogador': 'Eric',
        'dados': [
            {
                'titulo': 'Altered Beast (Mega Drive)',
                'descricao': 'Abertura, 2ª fase e mais'
            },
            {
                'titulo': 'Indiana Jones Greatest Adventures (Super NES)',
                'descricao': 'Tímpano na "Well Of Souls" perto da arca'
            },
            {
                'titulo': 'Sonic The Hedgehog (Mega Drive)',
                'descricao': 'Tímpano na música do chefe'
            },
            {
                'titulo': 'Incredible Crisis (PS1)',
                'descricao': 'Créditos depois da introdução'
            }
        ]
    });
}

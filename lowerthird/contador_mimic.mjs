export function adicionarLista() {
    window.pushFile({
        'tipo': 'CONTADOR MIMIC',
        'jogador': 'Eric',
        'dados': [
            {
                'titulo': 'Zenki Battle Raiden - Super NES',
                'descricao': 'Tumba se torna uma aranha'
            },
            {
                'titulo': 'Devilish - Mega Drive',
                'descricao': 'Mimico na 4ª fase'
            }
        ]
    });
}

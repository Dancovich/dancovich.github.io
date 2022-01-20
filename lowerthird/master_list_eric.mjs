// ADICIONANDO NOVAS LISTAS
//
// - Use uma das listas existentes como modelo, crie o novo arquivo com a extensão ".js"
//   e coloque-o na mesma pasta dos demais
// - Nesse arquivo, use o comando "import {adicionarLista as [nomeUnico]} from './nome_do_arquivo'".
//   Não coloque a extensão .js nesse comando. Use os comandos existentes como modelo. [nomeUnico]
//   deve ser um nome que usa apenas letras e não deve conter espaços.
// - O formato desse nome precisa ser o de letras minúsculas, mas para cada palavra depois da primeira a primeira letra
//   dessa palavra precisa ser maiúscula. Exemplo, o nome 'adicionar revistas da coleção' ficaria 'adicionarRevistasDaColecao'.
// - Ao final do arquivo, insira o comando "nomeUnico();", ou seja, use o nome que você criou e
//   adicione (); (parênteses e ponto-e-vírgula) ao final.

import {adicionarLista as adicionarTerminadosEric} from './jogos_terminados_eric.mjs';
import {adicionarLista as adicionarBacklogEric} from './backlog_eric.mjs';

adicionarTerminadosEric();
adicionarBacklogEric();

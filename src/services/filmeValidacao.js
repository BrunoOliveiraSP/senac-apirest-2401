

export function validarFilme(filme) {
  if (filme.nome == undefined || filme.nome == '')
    throw new Error('Nome do filme é obrigatório!');

  if (filme.sinopse == undefined || filme.sinopse == '')
    throw new Error('Sinopse do filme é obrigatória!');

  if (filme.avaliacao == undefined || filme.avaliacao < 0)
    throw new Error('Avaliação do filme é obrigatória!');
  
}
switch (prompt('Como está o clima?')) {
    case 'chuvoso':
      console.log('Lembre-se de levar um guarda-chuva.');
      break;
    case 'ensolarado':
      console.log('Vista roupas leves.');
    case 'nublado':
      console.log('Saia para a rua.');
      break;
    default:
      console.log('Tipo de tempo desconhecido.');
      break;
  }
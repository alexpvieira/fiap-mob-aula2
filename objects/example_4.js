// criando um objeto vazio
var student = {};

// adicionando elementos ao objeto com colchetes e aspas
student ['name'] = 'Carolina';
student['pontos' ] = 2500;

// adicionando elementos ao objeto com a notação de ponto
student.courses = ['Enter para JS', 'Enter to UX'];
student.isActive = true;

console.log(student);

// removendo uma chave
delete student.isActive;

console.log(student);
const bhaskara = (a, b, c) => {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Não tem raízes reais";
    } 
    else if (delta === 0) {
        return `Só tem uma raiz: ${-b / (2 * a)}`
    } 
    else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Raiz 1:${raiz1} - Raiz 2:${raiz2}`;
    }
};
  
bhaskara(1, -5, 6);
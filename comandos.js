var nome = prompt(`Quem vem lá ?`);

if (nome == 'none'){
    insignia.style.display = 'none'
}

alert(`Seja Bem-Vindo(a) ${nome}`)

/*if (nome = ''){
    window.document.html = 'none'
}*/

var insignia = window.document.getElementById('insignia')

if (nome.includes('\__|__/')){
    
    insignia.style.display = 'flex';
}else{
    insignia.style.display = 'none'
}

var n1 = Number(prompt('escreva um numero'))
var n2 = Number(prompt('escreva outro numero'))

var soma = n1 + n2

alert(`a soma de ${n1} e ${n2} é ${soma}`)

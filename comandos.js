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


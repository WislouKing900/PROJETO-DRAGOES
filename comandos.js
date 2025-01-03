var nome = prompt(`Quem é você ?`);
alert(`Seja Bem-Vindo(a) ${nome}`)

var insignia = window.document.getElementById('insignia')

if (nome.includes('\__|__/')){
    
    insignia.style.display = 'flex';
}else{
    insignia.style.display = 'none'
}


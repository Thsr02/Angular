// function criptografar(){
//    var txt = document.getElementById('txt1')
//     console.log(txt.value)

//     // var  = txt.value;
// };

  var texto2 = [];
  var mostrar = "";
  var res = "";
  var alfabetoCrip = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', 'p', '?', '*', '-', '%'];

  var alfabeto =     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', '?', '.'];
var texto = [];

async function loadFile(file) {
    let text = await file.text();
    texto = text;
    

    let letra;
    let alfabetoLetra;
    let position;
    let subst;
    // console.log(this.alfabeto);
    for(let i = 0; i < this.texto.length; i++) {
      letra = this.texto[i];
      for (let j = 0; j < this.alfabeto.length; j++) {
        alfabetoLetra = this.alfabeto[j];
        if(letra == alfabetoLetra) {
          position = j;
          subst = this.alfabetoCrip[j];
          
          
          this.texto2.push(subst);
          this.mostrar += this.texto2[i]; 

        }
        
      }
    }
    this.mostrar += '?';
    // console.log(this.texto2);
    this.texto2 = [];
    this.texto = [];
    this.res = this.mostrar;
    this.texto = this.res;
    console.log(this.res);

    texto = document.getElementById('output').textContent = res;

    
  }
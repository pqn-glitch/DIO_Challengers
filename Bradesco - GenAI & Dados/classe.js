class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:
const heroi1 = new Heroi("Malagueta", 15, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Eteovaldo", 16, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("JackChan", 18, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Flash", 17, "ninja");
heroi4.atacar();

//class on javaScript
class Player{
    constructor(nombres, colorSombrero){        //definicion de un metodo constructor
        this._nombre = nombres;
        this._colorSombrero = colorSombrero;
    }
    saltar(){};                                 //deficion de un metodo saltar();
    correr(){};
    saludar(){                                  //deficion del metod saludar();
        return `Hola soy ${this._nombre} mi sombrero es ${this._colorSombrero}`; //retorna un mesaje 
    }

}
//var nombrePlayers = prompt('Introduce tu nombre');
//var colorPlayers = prompt('INtroduce tu color de sombrero');
let player1 = new Player(nombrePlayers,colorPlayers);
let player2 = new Player('LUIGI','VERDE');
let player3 = new Player('Jorge','Black');
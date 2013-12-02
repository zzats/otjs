/*
Singleton-mallissa perinteinen literaalitoteutus on hyväksyttävä tapa. 
*/
function SingletonObject() {

	this.instance = null;

	this.getInstance = function() {
		if(this.instance === null) {
			return this.instance = new SingletonObject();
		} else {
			return this.instance;
		}
	}
}
/*
Selkein olion määrittely saadaan aikaiseksi kuitenkin Javastakin tutulla konstruktoritoteutuksella.
*/
function Product(material, cost) {
   
         this.material = material;
         this.cost = cost;
         this.totalCost = function() { this.material*this.cost };
}
   
   var product = new Product(100, 50);

/* 

*/




class Goods2 extends Goods {
    constructor(name,price,image,count,sale){
        super(name,price,image,count)
        this.sale = false;
    }
      draw() {
        const div = super.draw();
if (this.sale) {
	let s = document.createElement('h2');
	s.textContent = 'SALE';
	div.append(s);
}
return div;
      }
}
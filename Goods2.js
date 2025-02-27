

class Goods2 extends Goods {
    constructor(name,price,image,count,sale){
        super(name,price,image,count)
        this.sale = sale;
    }
      draw() {
        const div = super.draw();
if (this.sale) {
	let s = document.createElement('h2');
	s.textContent = 'SALE';
	div.append(s);
}else{
    let s = document.createElement('h2');
	s.textContent = 'WE WILL WAIT YOU NEXT TIME';
	div.append(s);
}
return div;
      }
}
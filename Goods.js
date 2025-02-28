// class Goods {
//     constructor(name,price,image,count){
//         this.name = name;
//         this.price = price;
//         this.image = image;
//         this.count = count;
//     }
//     draw(){
//        const div = document.createElement('div');
//        div.classList.add('goods');
       
//        const head1 = document.createElement('h1');
//        head1.textContent = this.name;

//        const paragraph = document.createElement('p');
//        paragraph.classList.add('price');
//        paragraph.textContent = this.price;

//        const image = document.createElement('img');
//        image.src = this.image;
//        image.alt = this.name;

//        div.append(head1);
//        div.append(paragraph);
//        div.append(image)

//        return div;
//     }

// }

function Goods(name,price,image,count){
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
}
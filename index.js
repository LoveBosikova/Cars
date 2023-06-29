// Наша база

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

// Классы

class Transport {
    constructor( type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo(){
        return {
            type: this.type,
            price: this.price,
            brand: this.brand,
        }
    }

    getType() {
        return this.type;
    }

    getPrice(){
        return this.price;
    }

    getBrand(){
        return this.brand;
    }

    getImgSrc(){
        return this.image;
    }
}

class Car extends Transport {
    constructor(type, price, brand, image, doors) {
    super(type, price, brand, image);
    this.doors = doors;
    }
    getDoorsCount(){
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
    super(type, price, brand, image);
    this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
}

// Создаём массив машин и массив байков

const carsArr = data
.filter(({type}) => type === 'car')
.map(({type, price, brand, image, doors}) => new Car(type, price, brand, image, doors));
console.log(carsArr);

const bikesArr = data
.filter(({type}) => type === 'bike')
.map(({type, price, brand, image, maxSpeed}) => new Bike (type, price, brand, image, maxSpeed));
console.log(bikesArr);

// Работа с DOM

const carsWrap = document.getElementById('cars');
const bikesWrap = document.getElementById('bikes');

function createCarDiv (car) {

    // Создаём враппер для контента внутри секции Cars 
    let div = document.createElement('li');
    div.classList.add('car');
    carsWrap.appendChild(div);

    // Создвем заголовок - название машины
    const carHeader = document.createElement('h3');
    carHeader.classList.add('car__header');
    carHeader.innerText = car.getInfo().brand;
    div.appendChild(carHeader);

    // Создвём враппер для картинки и вставляем в него картинку
    const imageWrap = document.createElement('div');
    imageWrap.classList.add('car__imgWrap');
    div.appendChild(imageWrap);
    const image = document.createElement('img');
    image.setAttribute('src', car.getImgSrc());
    imageWrap.appendChild(image);

    // Подписываем количество дверей
    const doorsCount = document.createElement('p');
    doorsCount.classList.add('car__doorsCount');
    doorsCount.innerText = `Количество дверей: ${car.getDoorsCount()}.`;
    div.appendChild(doorsCount);

    // Подписываем цену
    const price = document.createElement('p');
    price.classList.add('car__price');
    price.innerText = `Цена: ${car.getPrice()} руб.`;
    div.appendChild(price);
}

function createBikeDiv (bike) {

    // Создаём враппер для контента внутри секции Bikes 
    let div = document.createElement('li');
    div.classList.add('bike');
    bikesWrap.appendChild(div);

    // Создаем заголовок - название байка
    const bikeHeader = document.createElement('h3');
    bikeHeader.classList.add('bike__header');
    bikeHeader.innerText = bike.getInfo().brand;
    div.appendChild(bikeHeader);

    // Создвём враппер для картинки и вставляем в него картинку
    const imageWrap = document.createElement('div');
    imageWrap.classList.add('bike__imgWrap');
    div.appendChild(imageWrap);
    const image = document.createElement('img');
    image.setAttribute('src', bike.getImgSrc());
    imageWrap.appendChild(image);

    // Подписываем макс скорость
    const speed = document.createElement('p');
    speed.classList.add('bike__speed');
    speed.innerText = `Максимальная скорость: ${bike.getMaxSpeed()} км/час.`;
    div.appendChild(speed);

    // Подписываем цену
    const price = document.createElement('p');
    price.classList.add('bike__price');
    price.innerText = `Цена: ${bike.getPrice()} руб.`;
    div.appendChild(price);
}

// Проходимся по машинам и байкам и выводим их на страницу

carsArr.forEach((car) => createCarDiv(car));

bikesArr.forEach((bike) => createBikeDiv(bike));

// Done))
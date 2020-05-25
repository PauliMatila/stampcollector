class Stamp {
  
  GetPriceString() {
    return Number.parseFloat(this.price).toFixed(2);
  }

  constructor(name, price, country, yearPublished, isStamped, imageUrl){
    this.name = name;
    this.price = price;
    this.country = country;
    this.yearPublished = yearPublished;
    this.isStamped = isStamped;
    this.imageUrl = imageUrl;
  }
}

export default Stamp
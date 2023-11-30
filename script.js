// Question No:1

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getmovie() {
    return `title: ${this.title}, studio: ${this.studio}, rating : ${this.rating}`;
  }
}
var Movie1 = new movie("Casino Royale", "Eon Productions", "PG-13");
console.log(Movie1.getmovie());

//----------------------------------------------------------------------------------

// Question No:2

class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  // Get & Set
  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  // (radius:double)
  radius() {
    return `Circle - Radius: ${this._radius}`;
  }

  // toString
  toString() {
    return `Circle - Radius: ${this._radius}, Color: ${this._color}`;
  }
}

const myCircle = new Circle();
console.log(myCircle.radius());
console.log(myCircle.toString());

//--------------------------------------------------------------------

// Question No:3
// Write a “person” class to hold all the details

class Person {
  constructor(Name, Age, Gender, address, Status, ContactNum, Mail, Birthday) {
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.address = address;
    this.Status = Status;
    this.ContactNum = ContactNum;
    this.Mail = Mail;
    this.Birthday = Birthday;
  }

  getDetails() {
    return `Name: ${this.Name}, Age: ${this.Age}, Gender: ${this.Gender}\nAddress: ${this.address} Status: ${this.Status}, \nContact: ${this.ContactNum}, Mail: ${this.Mail},}\n Birthday: ${this.Birthday}`;
  }
}
var person1 = new Person(
  "Hasar",
  "27",
  "Male",
  "Chennai",
  "Single",
  "9876543210",
  "hasarudeen70@gmail.com",
  "Dec"
);
console.log(person1.getDetails());

//---------------------------------------------------------------------

// Question No:4
// write a class to calculate the uber price

class Uber {
  static BaseFare = 10;
  static CostPerMile = 2;
  static CostPerMinute = 1;
  static BookingFee = 6;
  constructor(time = 1, mile = 1) {
    this.time = time;
    this.mile = mile;
  }
  totalPrice(time = this.time, mile = this.mile) {
    console.log(
      `the total price is ${
        Uber.BaseFare +
        Uber.BookingFee +
        Uber.CostPerMinute * time +
        Uber.CostPerMile * mile
      } only`
    );
  }
}
let bike = new Uber();
bike.totalPrice(15, 10);
bike.totalPrice(10, 10);

//----------------------------------------------------------------------

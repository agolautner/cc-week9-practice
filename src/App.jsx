const carName = 'Opel';
const carNumber = 123;
const isCar = true;
const cars = ['Opel', 'BMW', 12, 'Volvo', false];
const man = {
  firstName: 'Joe',
  lastName: 'Smith'
}

const nullVariable = null;
const udVariable = undefined;
const myFunction = () => {
  return 'hello'
};

const carList = [
  {carName: 'Opel', doorNumber: 4},
  {carName: 'BMW', doorNumber: 4},
  {carName: 'Mercedes', doorNumber: 4},
  {carName: 'Skoda', doorNumber: 4},
];

const newArray = carList.map((c) => 
  (
    <div key={c.carName} className="car2">
      <p>Brand: </p>
      <p><i>{c.carName}</i></p>
      <p>Number of doors: {c.doorNumber}</p>
    </div>
  )
);
console.log(newArray);

const App = () => {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p className="class">this is a paragraph</p>
      <p>{cars}</p>
      <div id="divID">THIS IS A CAR: {carName} {carNumber} {isCar}</div>
      {/* <p>this won't render cuz it's an entire object: {man}</p> */}
      <p>this will render cuz it's one value in an object: {man.firstName}</p>
      <p>{nullVariable}</p>
      <p>{udVariable}</p>
      <p>{myFunction}</p>
      <p>{myFunction()}</p>
      <input type="password" placeholder="enter your password"/>

      <div className="car">
        <p>Brand: </p>
        <p><i>Opel</i></p>
        <p>Number of doors: 3</p>
      </div>
      <div className="car">
        <p>Brand: </p>
        <p><i>BMW</i></p>
        <p>Number of doors: 4</p>
      </div>
      <div className="car">
        <p>Brand: </p>
        <p><i>Mazda</i></p>
        <p>Number of doors: 4</p>
      </div>
      <div className="car">
        <p>Brand: </p>
        <p><i>VW</i></p>
        <p>Number of doors: 5</p>
      </div>

      {newArray}

    </div>
  );
}

export default App;

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}
function Menu(props) {
  const menuLength = props.pizzaData.length;
  if (menuLength === 0) return null;
  return (
    <>
      {/* react fragment  allow you to render multiple JSX line without creating DOM node*/}
      <p>
        The list below contains of 6 italian cuisine Pizza. Please note that the
        amount of pizza can be sold out at any time
      </p>
      <main className="menu">
        <h2>OUR MENU</h2>

        <ul className="pizzas">
          {/* tenary operator  */}
          {menuLength > 0 ? (
            props.pizzaData.map((pizza) => (
              <Pizza key={pizza.name} data={pizza} />
            ))
          ) : (
            <p>We are still working on menu!!</p>
          )}
        </ul>
      </main>
    </>
  );
}
function Pizza({ data }) {
  return (
    <li className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={data.photoName} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "Sold out" : data.price}</span>
      </div>
    </li>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza co.</h1>
    </header>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 17;
  const closeHour = 24;
  //console.log(date);
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        "We are close .Please comeback later"
      )}
    </footer>
  );
}
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour} pm to {closeHour} pm
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
export default App;

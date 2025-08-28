import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=491276",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [currentItem, setCurrentItem] = useState(null);

  const getCurrentFriend = () => friends.find((fr) => fr.id === currentItem);
  const formDataHandler = (e) => {
    const billData = Object.fromEntries(
      Array.from(new FormData(e.target.closest("form")))
    );
    e.target
      .closest("form")
      .querySelector("input[name='yourExpense']")
      .setAttribute("max", +billData.billValue);
    if (+billData.yourExpense > +billData.billValue) return;
    const friendExpense = +billData.billValue - +billData.yourExpense;
    e.target.closest("form").querySelector("input[disabled]").value =
      friendExpense;
    return {
      ...billData,
      [getCurrentFriend().name + "Expense"]: friendExpense,
    };
  };

  const splitBillHandler = (e) => {
    e.preventDefault();
    const splitBillInput = formDataHandler(e);
    if (splitBillInput.payer === "you") {
      setFriends((fr) =>
        fr.map((item) =>
          item.id === currentItem
            ? {
                ...item,
                balance:
                  item.balance +
                  splitBillInput[getCurrentFriend().name + "Expense"],
              }
            : item
        )
      );
    } else if (splitBillInput.payer === getCurrentFriend().name) {
      setFriends((fr) =>
        fr.map((item) =>
          item.id === currentItem
            ? { ...item, balance: item.balance - splitBillInput.yourExpense }
            : item
        )
      );
    }
  };

  return (
    <div className="container">
      <ListFriend
        friends={friends}
        setFriends={setFriends}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      <div className="'form-container">
        <Form
          currentItem={currentItem}
          handleSubmit={splitBillHandler}
          handleOnchange={formDataHandler}
        >
          <h3>
            SPLIT A BILL WITH{" "}
            {currentItem && getCurrentFriend().name.toUpperCase()}
          </h3>
          <Input label="billValue" type="number">
            💰 Bill value
          </Input>
          <Input label="yourExpense" type="number">
            🧍🏻‍♂️ Your expense
          </Input>
          <Input
            label={currentItem && getCurrentFriend().name + "Expense"}
            type="number"
            disabled={true}
          >
            🕺🏻🕺🏻 {currentItem && getCurrentFriend().name} expense
          </Input>
          <Input
            label="payer"
            type="bill option"
            payer={getCurrentFriend() ? getCurrentFriend().name : ""}
          >
            🤑 Who pay the bill
          </Input>
          <Button>SPLIT BILL</Button>
        </Form>
      </div>
    </div>
  );
}
function ListFriend({ friends, currentItem, setCurrentItem, setFriends }) {
  const [showForm, setShowForm] = useState(false);
  const addFormDataHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      Array.from(new FormData(e.target.closest("form")))
    );
    if (!formData.friendName || !formData.imageUrl) return;
    const id = crypto.randomUUID().slice();
    setFriends((fr) =>
      fr.concat({
        id,
        name: formData.friendName,
        image: formData.imageUrl,
        balance: 0,
      })
    );
    setShowForm((sh) => !sh);
    e.target.reset();
  };
  const showAddFormHandler = () => {
    setShowForm((show) => !show);
  };

  return (
    <div className="list-container">
      <ul className="list-friend">
        {friends.map((fr) => (
          <Item
            key={fr.id}
            item={fr}
            setCurrentItem={setCurrentItem}
            currentItem={currentItem}
          />
        ))}
      </ul>
      <div className="form-container">
        <Form showForm={showForm} handleSubmit={addFormDataHandler}>
          <Input label="friendName" type="text">
            👩🏻‍🦰 Friend name
          </Input>
          <Input label="imageUrl" type="url">
            🌋 Image URL
          </Input>
          <Button>ADD</Button>
        </Form>
      </div>

      <Button clickHandler={showAddFormHandler}>
        {showForm ? "close" : "Add new friend"}
      </Button>
    </div>
  );
}
function Item({ item, currentItem, setCurrentItem }) {
  const id = item.id;
  const clickHandler = () => {
    setCurrentItem(currentItem === id ? null : id);
  };

  return (
    <li className={`list-item ${currentItem === id ? "selected" : ""}`}>
      <figure>
        <img src={item.image} alt={item.name} />
        <div>
          <figcaption>
            <h3>{item.name}</h3>
          </figcaption>
          <p style={{ color: `${item.balance >= 0 ? "green" : " red"}` }}>
            {item.balance < 0 ? "You" : `${item.name}`} owed{" "}
            {item.balance < 0 ? `${item.name}` : "you"} {Math.abs(item.balance)}
            $
          </p>
        </div>

        {(currentItem === null || currentItem === id) && (
          <Button clickHandler={clickHandler}>
            {currentItem === id ? "close" : "select"}
          </Button>
        )}
      </figure>
    </li>
  );
}
function Form({
  children,
  handleSubmit,
  handleOnchange,
  showForm,
  currentItem,
}) {
  return (
    <form
      className={showForm || currentItem ? "form" : "form hide"}
      onSubmit={(e) => (handleSubmit ? handleSubmit(e) : null)}
      onChange={(e) => (handleOnchange ? handleOnchange(e) : null)}
    >
      {children}
    </form>
  );
}
function Button({ children, clickHandler }) {
  return (
    <button
      className="btn"
      onClick={(e) => (e.target.closest("form") ? null : clickHandler())}
    >
      {children}
    </button>
  );
}
function Input({ label, type, disabled, payer, children }) {
  return (
    <div className="input">
      <label htmlFor={label}>{children}</label>
      {type === "number" || type === "text" || type === "url" ? (
        <input name={label} type={type} disabled={disabled ? true : false} />
      ) : null}
      {type === "bill option" ? (
        <select name={label}>
          <option value="you">You</option>
          <option value={payer}>{payer}</option>
        </select>
      ) : null}
    </div>
  );
}

export default App;

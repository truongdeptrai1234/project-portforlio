import { useState } from "react";

function App() {
  const [listPackages, setListPackages] = useState([]);
  const addPackageHandler = (pack) => {
    setListPackages((prevl) => [...prevl, pack]);
  };
  const updatePackageStatusHandler = (pack) => {
    setListPackages((prevl) =>
      prevl.map((item) =>
        item.packageValue === pack.packageValue
          ? { ...item, isChecked: !item.isChecked }
          : item
      )
    );
  };
  const getListPackageReady = () => {
    return listPackages.filter((item) => item.isChecked);
  };
  const deleteItemHandler = (packName) => {
    setListPackages((prevl) =>
      prevl.filter((item) => item.packageValue !== packName)
    );
  };
  const clearListHandler = () => {
    if (listPackages.length === 0) return;
    window.confirm("Are you sure you want to clear the list?") &&
      setListPackages([]);
  };
  const sortIncreaseHandler = () => {
    setListPackages((prevl) => [
      ...prevl.sort((a, b) => a.packageCount - b.packageCount),
    ]);
  };
  const sortAlphabetHandler = () => {
    setListPackages((prevl) => [
      ...prevl.sort((a, b) => a.packageValue.localeCompare(b.packageValue)),
    ]);
  };
  return (
    <div className="app">
      <Logo />
      <Form addPackageHandler={addPackageHandler} />
      <PackingList
        listPackages={listPackages}
        updatePackageStatusHandler={updatePackageStatusHandler}
        deletePackage={deleteItemHandler}
        clearList={clearListHandler}
        sortIncreaseHandler={sortIncreaseHandler}
        sortAlphabetHandler={sortAlphabetHandler}
      />
      <Status
        packageAmount={listPackages.length}
        amountReady={getListPackageReady().length}
      />
    </div>
  );
}
function Logo() {
  return (
    <div className="container">
      <h1 className="logo">
        <span> 🚛🚛 </span>FAR AWAY<span> 🚩🚩 </span>
      </h1>
    </div>
  );
}
function Form({ addPackageHandler }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formObj = new FormData(e.target.closest("form"));
    const formData = Object.fromEntries(formObj.entries());
    formData.isChecked = false;
    //check valid input
    if (formData.packageCount === "0" || formData.packageValue.trim() === "") {
      alert("Please select a valid package count or package value");
      return;
    }

    addPackageHandler(formData);
  };
  return (
    <div className="container input-form">
      <p className="input-form__title">What do you need 🎅 for your trip ? </p>
      <form>
        <select name="packageCount">
          <option value="0" defaultValue={0}>
            0
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <input type="text" placeholder="Your package" name="packageValue" />
        <button className="input-form__btn" onClick={handleSubmit}>
          ADD
        </button>
      </form>
    </div>
  );
}
function Item({ pack, updatePackageStatusHandler, deletePackage }) {
  const handleCheckboxChange = (pack) => {
    updatePackageStatusHandler(pack);
  };
  const handleDeleteItem = () => {
    alert("Are yo sure you want to delete this item?");
    deletePackage(pack.packageValue);
  };
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={pack.isChecked}
        onChange={() => handleCheckboxChange(pack)}
      />
      <span className={pack.isChecked ? "item--done" : ""}>
        {pack.packageCount}
        &nbsp;&nbsp;&nbsp;{pack.packageValue}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
function PackingList({
  listPackages,
  updatePackageStatusHandler,
  deletePackage,
  clearList,
  sortIncreaseHandler,
  sortAlphabetHandler,
}) {
  return (
    <>
      <ul className="package-list">
        {listPackages.map((pack) => (
          <Item
            key={Math.random()}
            pack={pack}
            updatePackageStatusHandler={updatePackageStatusHandler}
            deletePackage={deletePackage}
          />
        ))}
      </ul>

      <div className="package-list-modify">
        <select
          onChange={(e) => {
            e.target.value === "incre" && sortIncreaseHandler();
            e.target.value === "package" && sortAlphabetHandler();
          }}
        >
          <option>SORT BY ORDER</option>
          <option value="incre">Amount increase</option>
          <option value="package">Package alphabet name</option>
          <option value="unchecked">Uncheck `21 ` ` `ed package</option>
        </select>
        <button onClick={() => clearList()}>CLEAR LIST</button>
      </div>
    </>
  );
}
function Status({ packageAmount, amountReady }) {
  return (
    <div className="status">
      <p>
        You have <span>{packageAmount}</span> item in your list , package ready{" "}
        <span>{amountReady}</span> ({" "}
        {packageAmount ? ((amountReady / packageAmount) * 100).toFixed(0) : "0"}
        % )
      </p>
    </div>
  );
}
export default App;

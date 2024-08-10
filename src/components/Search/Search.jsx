import "./Search.css";
import { useState, useEffect, useRef } from "react";
import { PrimaryButton } from "../index";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [searchList, setCartList] = useState(false);

//Casual data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setSearch(data));
  }, [filterUsers]);


// Filter data
  const change = (e) => {
    const filter = search.filter((user) =>
      user.name.toLowerCase().includes(e.target.value)
    );
    setFilterUsers(filter);
  };

  //useEffect()
  useEffect(() => {
    if (filterUsers.length <= 0 || filterUsers.length === search.length) {
      setCartList(false);
    } else {
      setCartList(true);
    }
  }, [filterUsers, search]);


  //Focus and text for the search box whith 'useRef()'
  const lastPara = useRef();
  const focus = () => {
    lastPara.current.focus();
    lastPara.current.value = "E ancora in fase di sviluppo";
  };


  return (
    <>
      <form className="d-flex" role="search">
        <input
          ref={lastPara}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onInput={change}
        />
      </form>
      <PrimaryButton action={focus}>Search</PrimaryButton>
      {searchList ? (
        <>
          <div className="name-list">
            <ul> 
              {filterUsers.map((user) => (
                <h3 key={user.id}>{user.name}</h3>
              ))}
            </ul>
          </div>
        </>
      ) : (
        " "
      )}
    </>
  );
};

export default Search;

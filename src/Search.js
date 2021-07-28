import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <input type="text" placeholder="Search for a city" class="search-box" />
      <input type="submit" class="search-button" />
    </form>
  );
}

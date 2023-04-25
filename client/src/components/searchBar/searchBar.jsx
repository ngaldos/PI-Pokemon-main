import { useState } from "react";

export default function SearchBar ({handleChange, handleSubmit, SearchString}){
    return (
        <div>
            <form onChange={handleChange}>
                <input placeholder="Search" type="search" value={SearchString} id="input"/>
                <button type="submit" onClick={handleSubmit}>Search</button>

            </form>
        </div>
    );
}
import { useState } from "react";

export default function SearchBar ({handleChange, handleSubmit}){
    return (
        <div>
            <form onChange={handleChange}>
                <input placeholder="Search" type="search"/>
                <button type="submit" onClick={handleSubmit}>Buscar</button>

            </form>
        </div>
    );
}
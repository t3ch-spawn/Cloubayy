import "./SearchInput.css"

const SearchInput = ({ handleChange }) => {

    

    return (
        <section className="input">
            <label>Search your images here:</label>
            <br />
            <input type="text" placeholder="Cars" onChange={handleChange} />
        </section>
    )
}

export default SearchInput
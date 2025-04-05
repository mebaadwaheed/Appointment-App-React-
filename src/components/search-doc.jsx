import '../component-styles/search-doc.css';

export default function SearchDoc() {
  return (
    <>
      <div className="container">
        <div className="first">
          <h1>Find a Doctor</h1>
          <div className="input">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Specialty'/>
          </div>
        </div>
        <div className="second">
          <h3>Available</h3>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
        </div>
        <div className="third">
          <button><a href="#">Search</a></button>
        </div>
      </div>
    </>
  );
}
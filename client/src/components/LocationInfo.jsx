const LocationInfo = ({ page, setPage, formData, setFormData }) => {
  const validate = (formData, page, setPage) => {
    if (!formData.address) {
      alert("Address is required!")
      return
    }
    if (!formData.city) {
      alert("City is required!")
      return
    }
    setPage(page + 1);
  };
  return (
      <div className="card">
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
  
  <div className="firstButton">
        <button
        onClick={() => {
          {validate(formData,page,setPage)}
        }}>
        Next
      </button>
      </div>
      <div className="secondButton">
      <button
        onClick={() => {
          setPage(page - 1);
        }}>
        Previous
      </button>
      </div>
      </div>
    );
  };
    
  export default LocationInfo;
import "./Selector.css"
export const Selector = ({ select, setSelect, width }) => {
  return (
    <div className="container-selector">
      <h2>Previous Rulings</h2>
      {width > 600 ? <select className="selector" value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value={"list"}>List</option>
        <option value={"grid"}>Grid</option>
      </select> : null}
    </div>
  )
}

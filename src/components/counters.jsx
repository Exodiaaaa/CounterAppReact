import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters- Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              /*value={counter.value}
              id={counter.id} instead of this*/
              counter={counter}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;

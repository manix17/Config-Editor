import React, { Component } from "react";
import { map } from "bluebird-lst";

class KeyValue extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          {this.props.data.map(listKeyValue => (
            <div>
              <label>
                {listKeyValue.key} :
                <input
                  type="text"
                  name={`name_${listKeyValue.key}`}
                  value={listKeyValue.value}
                />
              </label>
            </div>
          ))}
          <button
            onClick={() => {
              this.props.HandleReloadClick();
            }}
          >
            Reload
          </button>
          <button onClick={this.props.HandleSubmitClick}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default KeyValue;

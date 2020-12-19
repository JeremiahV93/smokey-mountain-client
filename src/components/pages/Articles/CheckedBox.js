import React from 'react';

class CheckedBox extends React.Component {
  render() {
    const { tag, checkChange } = this.props;
    return (
        <div>
            <input type="checkbox" id={tag.id} name={tag.label} value={tag.id} checked={true} onChange={checkChange} />
            <label for={tag.label}> {tag.label} </label>
        </div>
    );
  }
}

export default CheckedBox;

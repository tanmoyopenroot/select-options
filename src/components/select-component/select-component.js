import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectBoxContainer = styled.div`
  position: relative;
  display: block;
  width: 30%;
  margin: 0 auto;
  font-size: 18px;
  color: #60666d;
`;

const SelectBoxCurrent = styled.div`
  position: relative;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
`;

const SelectBoxValue = styled.div`
  display: flex;
`;

const SelectBoxValueInput = styled.input`
  display: none;
`;

const SelectBoxValueText = styled.p.attrs({
  display: props => props.show ? 'block' : 'none', 
})`
  display: ${props => props.display};
  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: #fff;
`;

const SelectBoxList = styled.ul`
  position: absolute;
  width: 100%;
  padding: 0;
  list-style: none;
  box-shadow: 0 15px 30px -10px rgba(0,0,0,0.5);
  z-index: 1;
`;

const SelectBoxListOption = styled.label.attrs({
  color: props => props.selected ? 'green' : 'inherit',
  weight: props => props.selected ? 'bold' : 'normal',
})`
  display: block;
  padding: 15px;
  cursor: pointer;
  background-color: #fff;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`;

export class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      selectedId: 0,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleToggleList = this.handleToggleList.bind(this);
  }

  handleSelect(id) {
    const { type, setID, saveSelectData } = this.props;
    this.setState({
      selectedId: id,
      showList: true,
    })
    saveSelectData(type, setID, id);
  }

  handleToggleList() {
    const { showList } = this.state;
    this.setState({
      showList: !showList,
    })
  }

  _getList() {
    const { IDList, data, type, setID } = this.props;
    const { selectedId } = this.state;

    return (
      <SelectBoxList>
      {
        IDList.map(key => {
          const { id, name } = data[key];
          return (
            <li
              key={id}
            >
              <SelectBoxListOption
                htmlFor={`set-${setID}-${type}-${id}`}
                onClick={() => this.handleSelect(id)}
                selected={id === selectedId}
              >
                {name}
              </SelectBoxListOption>
            </li>
          )
        })
      }
      </SelectBoxList>
    );
  }

  render () {
    const { IDList, data, type, setID } = this.props;
    const { selectedId } = this.state;

    return (
      <SelectBoxContainer>
        <SelectBoxCurrent
          onClick={this.handleToggleList}
        >
          {
            !selectedId ?
              <SelectBoxValue>
                <SelectBoxValueText
                  show={true}
                >
                  Select Your Option
                </SelectBoxValueText>
              </SelectBoxValue>
            :
              IDList.map(key => {
                const { id, name } = data[key];
                return (
                  <SelectBoxValue
                    key={key}
                  >
                    <SelectBoxValueInput
                      type='radio'
                      id={`set-${setID}-${type}-${id}`}
                      value={id}
                      name={`set-${setID}-${type}`}
                    />
                    <SelectBoxValueText
                      show={id === selectedId}
                    >
                      {name}
                    </SelectBoxValueText>
                  </SelectBoxValue>
                )
              })
          }
        </SelectBoxCurrent>
        {
          this.state.showList ? this._getList() : null
        }
      </SelectBoxContainer>
    );

  }
}

SelectComponent.propTypes = {
  IDList: PropTypes.array,
  data: PropTypes.object,
  type: PropTypes.string,
  setID: PropTypes.number,
  saveSelectData: PropTypes.func,
}

export default SelectComponent;

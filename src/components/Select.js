import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ attribute, options, onChange }) => (
  <div className="colums has-addons has-addons-centered">
    <div className="column">
      <button className="button is-medium">
        Выберите {attribute} вышей команды:
      </button>
    </div>
    <div className="column">
      <div className="select is-grey">
        <select
          value=""
          onChange={({ target }) => onChange(target.value)}
        >
          <option>...</option>
          {options.map(value => (<option key={value} value={value}>{value}</option>))}
        </select>
      </div>
    </div>
  </div>
);

Select.propTypes = {
  attribute: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;

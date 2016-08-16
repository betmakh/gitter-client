import React, {PropTypes} from 'react';

const Field = (value, onChange) => {
	return <input value={value} onChange={e => onChange(e)}/>
};

Field.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string
};

export default field;
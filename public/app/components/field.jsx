import React, {PropTypes} from 'react';

const Field = props => {
	const {value, onChange} = props;
	return <input value={value} onChange={e => onChange(e)}/>
};

Field.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string
};

export default field;
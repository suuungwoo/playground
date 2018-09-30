import React from 'react';

import enhance from './enhancer';

function Link(props) {
  const {children, onClick, active} = props;
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
}

export default enhance(props => <Link {...props} />);

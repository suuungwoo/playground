import React from 'react';

import enhance from './enhancer';

function Link(props) {
  const {children, onClick, active} = props;
  return (
    <>
      {active ? (
        <span>{children}</span>
      ) : (
        <a href="#" onClick={onClick}>
          {children}
        </a>
      )}
    </>
  );
}

export default enhance(props => <Link {...props} />);

import { useState } from 'react';

const useForceUpdate = () => {
  const [, setValue] = useState(0);
  return () => setValue(value => value + 1); // update state to force render
}

export default useForceUpdate
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import React, { useContext } from 'react';

const TestComponent = () => {
  const { state: { allTests }, dispatch } = useContext(MainContainerContext);

  let tests = []

  allTests.forEach((test, i) => {
    tests.push(
      <div>
        Test # {i} : {test.passed ? "PASSED" : "FAILED"}
      </div>
    )
  })

  return (
    <div>
      {tests}
    </div>
  )
}

export default TestComponent
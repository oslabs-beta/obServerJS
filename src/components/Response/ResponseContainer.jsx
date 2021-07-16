import React, { useContext } from 'react'
import { Container } from '@material-ui/core'
import { MainContainerContext } from '../../Global/context/MainContainerContext'
import MiddlewareContainer from './Middleware/MiddlewareContainer'
// import ValuesContainer from './Values/ValuesContainer'

const styles = {
  mainContainer: {
    background: '#292c30',
    gridArea: 'windows',
    display: 'flex',
    flexDirection: 'row',
    justfyContent: 'center',
    alignItems: 'center',
    padding: '0 2rem 0 .5rem',
    margin: 0,
  },
}

const ResponseContainer = () => {
  const { state: { allTabs, currentTabIdx } } = useContext(MainContainerContext)
  let populated;

  if (allTabs[currentTabIdx]) {
    populated = allTabs[currentTabIdx].middleware?.length ? true : false
  } else {
    populated = false
  }

  return (
    <Container style={styles.mainContainer} maxWidth={false}>
      <MiddlewareContainer populated={populated} />
      {/* <ValuesContainer populated={populated} /> */}
    </Container>
  )
}

export default ResponseContainer

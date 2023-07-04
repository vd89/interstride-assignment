import { useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { StudentSection, TabElement } from './Components'

function App() {
  const [getTabIndex, setTabIndex] = useState('one')

  const getTabValue = (_id) => {
    setTabIndex(_id)
    console.log('tabIndex', _id)
  }
  return (
    <Container>
      <TabElement getTabValue={getTabValue} />
      <StudentSection />
    </Container>
  )
}

export default App

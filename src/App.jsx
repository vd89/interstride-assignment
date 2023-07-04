import { useCallback, useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { StudentSection, TabElement, TabValueSection } from './Components'
import axios from 'axios'

function App() {
  const [tabIndex, setTabIndex] = useState('one')
  const [studentData, setStudentData] = useState([])
  const token = 'GjlxunlpmjneBGrodv96Eg'

  const getStudentData = useCallback(async (_token) => {
    return await axios.get('https://web.testing.interstride.com/api/v1/admission_portal/students?&user_type=Student', {
      headers: {
        'accept-language': 'en-US,en;q=0.9',
        accept: 'application/json, text/plain, */*',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        token: `${_token}`,
      },
    })
  }, [])

  const getTabValue = (_id) => {
    setTabIndex(_id)
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await getStudentData(token)
      if (data.message === 'Success') {
        setStudentData(data.data.users)
      } else {
        setStudentData([])
      }
    }
    getData()
    return () => {
      getData()
    }
  }, [])

  return (
    <Container>
      <TabElement getTabValue={getTabValue} />
      <StudentSection />
      <TabValueSection tabIndex={tabIndex} studentData={studentData} />
    </Container>
  )
}

export default App

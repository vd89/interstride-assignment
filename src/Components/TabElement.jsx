import * as React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import StudentsIcon from '../assets/Students.svg'
import StaffIcon from '../assets/Staff.svg'
import CommunityIcon from '../assets/Community.svg'
import MessageIcon from '../assets/Messages.svg'
import ResourcesIcon from '../assets/Resources.svg'

export default function TabElement({ getTabValue }) {
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    getTabValue(newValue)
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value='one' icon={<img src={StudentsIcon} height={40} />} label='Students' />
        <Tab value='two' icon={<img src={StaffIcon} height={40} />} label='Staff' />
        <Tab value='three' icon={<img src={CommunityIcon} height={40} />} label='Community' />
        <Tab value='four' icon={<img src={MessageIcon} height={40} />} label='Messages' />
        <Tab value='five' icon={<img src={ResourcesIcon} height={40} />} label='Resources' />
      </Tabs>
    </Box>
  )
}

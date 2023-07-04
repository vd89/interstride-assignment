import { Box, Button, Stack, Typography } from '@mui/material'
import { top100Films } from '../Helper'
import Autocomplete from '@mui/joy/Autocomplete'

function StudentSection() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction={'row'} spacing={2} mt={5} justifyContent={'center'}>
        <Typography variant='h5' component={'p'}>
          SignUp to Start Chatting
        </Typography>
        <Button variant='outlined'>Create Free Account</Button>
      </Stack>
      <Typography textAlign={'center'} variant='h4' component={'h3'}>
        Connect With Students studying at ASU
      </Typography>
      <Stack direction={'row'} spacing={2} mt={5} justifyContent={'center'}>
        <Autocomplete placeholder='Combo box' options={top100Films} sx={{ width: 150 }} />
        <Autocomplete placeholder='Combo box' options={top100Films} sx={{ width: 150 }} />
        <Autocomplete placeholder='Combo box' options={top100Films} sx={{ width: 150 }} />
      </Stack>
    </Box>
  )
}

export default StudentSection

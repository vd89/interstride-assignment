import { Box, Stack } from '@mui/material'
import StudentCard from './StudentCard'

function TabValueSection({ tabIndex, studentData }) {
  return (
    <Box mt={2}>
      <Stack direction={'row'} spacing={{ xs: 1, sm: 2 }} justifyContent={'center'} useFlexGap flexWrap='wrap'>
        {tabIndex == 'one' && studentData.length > 0
          ? studentData.map((student) => <StudentCard student={student} key={student.id} />)
          : null}
      </Stack>
    </Box>
  )
}

export default TabValueSection

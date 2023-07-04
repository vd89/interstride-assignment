import { Avatar, Box, Card, CardContent } from '@mui/joy'
import { Typography } from '@mui/material'

function StudentCard({ student }) {
  return (
    <Card variant='outlined' sx={{ width: 320, overflow: 'auto', resize: 'horizontal' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Avatar size='md' src={student.user_profile} />
          <div>
            <Typography variant='h5' component={'p'}>
              {student.full_name}
            </Typography>
            <Typography>
              {student.major}, {student.graduation_year}
            </Typography>
            <span>
              <img width={25} src={student.country_image} /> from {student.country_of_origin}
            </span>
          </div>
        </Box>
      </CardContent>
      {student.intro !== null ? <Typography>{student.intro}</Typography> : null}
    </Card>
  )
}

export default StudentCard

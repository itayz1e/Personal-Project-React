import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';



const ProjectTotal = (props: any) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Total Customers
            </Typography>
            <Typography variant="h4">
              235
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'blue',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <PermMediaIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectTotal

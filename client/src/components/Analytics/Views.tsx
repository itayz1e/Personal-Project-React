import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Views = (props: any) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Total Profit
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'green',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <RemoveRedEyeIcon  />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Views;
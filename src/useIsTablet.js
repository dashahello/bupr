import { useMediaQuery, useTheme } from '@material-ui/core';

export default function useIsTablet() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
}

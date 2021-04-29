import { Divider, FormControlLabel, Switch, useTheme } from '@material-ui/core';
import { useEffect } from 'react';

export default function ThemeSwitch({ themeToUse, setThemeToUse }) {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.bodyBackground;
  }, [theme]);

  return (
    <>
      <Divider />
      <FormControlLabel
        control={
          <Switch
            checked={themeToUse === 'dark'}
            onChange={(evt) => {
              const themeToSet = evt.target.checked ? 'dark' : 'light';
              setThemeToUse(themeToSet);
              localStorage.setItem('themeToUse', themeToSet);
            }}
            name="checkedA"
          />
        }
        label="Dark theme"
      />
    </>
  );
}

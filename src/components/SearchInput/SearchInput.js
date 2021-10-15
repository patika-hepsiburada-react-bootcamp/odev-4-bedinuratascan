import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Cities } from '../../utils/Cities'
import { useCity } from '../../contexts/CityContext'
import { makeStyles } from '@mui/styles';

const CustomPaper = (props) => {
    return <Paper elevation={8} {...props} />;
};

const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }));
  

const SearchInput = () => {
    const { city, setCity } = useCity();
    console.log(city);
    const classes = useStyles();

    return (
        <Stack spacing={2} sx={{ width: 300, bgcolor:'white',borderRadius:1 }} >
            <Autocomplete
                freeSolo
                id="search"
                disableClearable
                hiddenlabel="true"
                value={city}
                forcePopupIcon={true}
                PaperComponent={CustomPaper}
                options={Cities.map((option) => option.name)}
                classes={{notchedOutline:classes.input}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search for a city..."
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            outline:'none'
                        }}
                    />
                )}
                onChange={(event, newValue) => setCity(newValue)}
            />
        </Stack>
    )
}

export default SearchInput
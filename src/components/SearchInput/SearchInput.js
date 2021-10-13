import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { cities } from '../../cities/cities'
import { useCity } from '../../contexts/CityContext'

const CustomPaper = (props) => {
    return <Paper elevation={8} {...props} />;
};

const SearchInput = () => {
    const { city, setCity } = useCity();
    console.log(city);

    return (
        <Stack spacing={2} sx={{ width: 300 }} >
            <Autocomplete
                freeSolo
                id="search"
                disableClearable
                hiddenlabel="true"
                forcePopupIcon={true}
                PaperComponent={CustomPaper}
                options={cities.map((option) => option.name)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant='outlined'
                        placeholder="Search for a city..."
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                onChange={(event, newValue) => setCity(newValue)}
            />
        </Stack>
    )
}

export default SearchInput
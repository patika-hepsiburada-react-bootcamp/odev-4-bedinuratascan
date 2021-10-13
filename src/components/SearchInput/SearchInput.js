import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {cities} from '../../cities/cities'

const SearchInput = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                freeSolo
                id="search"
                disableClearable
                options={cities.map((option) => option.name)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                onChange={(event, newValue) => setValue(newValue)}
            />
        </Stack>
    )
}

export default SearchInput
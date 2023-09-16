import { Stack } from '@mui/material';
import { Link } from '@mui/material';

import { logo } from '../utils/constants';

import { 
  SearchBar
} from '../components';

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between'
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar>

      </SearchBar>
    </Stack>
  )
}

export default Navbar
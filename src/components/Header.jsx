import { DropdownButton, Dropdown } from 'react-bootstrap';

function Header() {
  return (
    <div className='d-flex justify-content-between'>
      <div className='d-flex'>
        <h2 className='mb-4'>TV Shows</h2>
        <div className='btn-group' role='group'>
          <Dropdown className='ms-4 mt-1'>
            <Dropdown.Toggle
              variant='dark'
              size='sm'
              className='rounded-0'
              id='dropdown-genres'
              style={{
                backgroundColor: '#221f1f',
                border: '1px solid white',
                padding: '0.25rem 0.5rem',
              }}
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#'>Comedy</Dropdown.Item>
              <Dropdown.Item href='#'>Drama</Dropdown.Item>
              <Dropdown.Item href='#'>Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div></div>
      <div>
        <i className='bi bi-grid icons'></i>
        <i className='bi bi-grid-3x3 icons'></i>
      </div>
    </div>
  );
}

export default Header;

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavMenu = styled.nav`
  background-color: #390ff5e4;
  .lista{
    list-style: none;
    display: flex;
    padding: 10px;
  }
  .item-link{
    margin: 0 10px;
    font-weight: 700;
    text-transform: uppercase;
    a{
      color: #f6f0e684;
      text-decoration: none;
    }
    a:hover{
      color: white;
    }
  }
`;

export function Nav(){
    return(
        <NavMenu>
          <ul className="lista">
            <li className="item-link"><Link to="/">Home</Link></li>
            <li className="item-link"><Link to="/admin">Admin</Link></li>
          </ul>
      </NavMenu>
    )
}


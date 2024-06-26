import styled from 'styled-components';
import logo from '../../asset/logo.png';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCategory } from '../../hooks/useCategory';

const category = [
  { id: null, name: '전체' },
  { id: 1, name: '동화' },
  { id: 2, name: '소설' },
  { id: 3, name: '사회' },
];

export default function Header() {
  // const { category } = useCategory();

  return (
    <HeaderStyle>
      <h1 className="logo">
        <Link to={'/'}>
          <img src={logo} alt="book store" />
        </Link>
      </h1>
      <nav className="category">
        <ul>
          {category.map(item => (
            <li key={item.id}>
              <Link to={item.id === null ? '/books' : `/books?category_id=${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt />
              로그인
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/siginup">
              <FaRegUser />
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  .logo img {
    width: 200px;
    height: 200px;
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 400;
          text-decoration: none;

          color: ${({ theme }) => theme.color.text};
          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        line-height: 1;

        svg {
          margin-right: 4px;
        }
      }
    }
  }
`;

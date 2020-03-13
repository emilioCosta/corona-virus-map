import styled from 'styled-components';

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: logo-spin infinite 20s linear;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Logo;
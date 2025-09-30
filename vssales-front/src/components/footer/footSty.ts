import styled from "styled-components";

export const FootSty = styled.footer`
  width: 100%;
  /* mt-auto */
  margin-top: auto;

  /* py-3 */
  padding-top: 1rem;
  padding-bottom: 1rem;

  /* bg-dark */
  background-color: ${({ theme }) => theme.colors.gray900};

  /* text-light */
  color: ${({ theme }) => theme.colors.gray200};

  a {
    color: ${({ theme }) => theme.colors.gray200};
  }

  p {
    margin: 0.25rem 0;
  }
`;

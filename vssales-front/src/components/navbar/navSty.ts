import styled from "styled-components";


export const NavSty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* p-3 */
  padding: 1rem;

  /* mb-3 */
  margin-bottom: 1rem;

  /* bg-light */
  background-color: var(--color-background1);

  /* border-bottom */
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};

  /* shadow-sm */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  /* nav interno (substitui utilitários my-2 / my-md-0 / mr-md-3) */
  nav {
    /* my-2 */
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  /* flex-md-row e px-md-4 + ajustes responsivos do nav */
  @media (min-width: 768px) {
    flex-direction: row; /* flex-md-row */

    /* px-md-4 */
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    nav {
      /* my-md-0 */
      margin-top: 0;
      margin-bottom: 0;
      /* mr-md-3 */
      margin-right: 1rem;
    }
  }
`;

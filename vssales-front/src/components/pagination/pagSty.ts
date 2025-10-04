import styled from "styled-components";

export const PaginationSty = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  nav {
    display: block;
  }

  .pagination {
    display: flex;
    padding-left: 0;
    margin: 1rem 0;
    border-radius: 0.25rem;
    list-style: none;
    gap: 0.25rem;
  }

  .page-item {
    /* spacing handled by .pagination gap */
  }


  .page-link {
    position: relative;
    display: block;
    padding: 0.375rem 0.75rem;
    color: var(--color-secundary);
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: 0.25rem;
    line-height: 1.25;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    text-align: center;
    user-select: none;
  }

  
  .page-link:hover {
    color: var(--color-text1);
    background-color: rgba(0, 0, 0, 0.05);
    text-decoration: none;
  }

  .page-link:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 150, 180, 0.25);
  }

  .page-item.disabled .page-link,
  .page-link:disabled {
    color: ${({ theme }) => theme.colors.gray300};
    pointer-events: none;
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.gray200};
    cursor: not-allowed;
    opacity: 0.65;
  }

  
  .page-item.active .page-link {
    z-index: 1;
    color: var(--color-text1);
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .page-item:first-child .page-link {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

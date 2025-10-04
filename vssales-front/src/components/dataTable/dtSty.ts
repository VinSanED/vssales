import styled from "styled-components";

export const TableSty = styled.section`
    /* table-responsive */
    display: block;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;

    table {
       
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
        color: var(--color-text2);
        background-color: transparent;

        thead th {
            vertical-align: bottom;
            border-bottom: 2px solid ${({ theme }) => theme.colors.gray200};
            font-weight: 600;
            text-align: left;
        }

        tbody td,
        thead th {
            border-top: 1px solid ${({ theme }) => theme.colors.gray200};
        }

        /* table-sm */
        th,
        td {
            padding: 0.25rem 0.5rem;
            white-space: nowrap; 
        }

        /* table-striped */
        tbody tr:nth-of-type(odd) {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }
`;

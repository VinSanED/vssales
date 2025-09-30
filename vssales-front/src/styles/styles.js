import styled from "styled-components";

export const AppSty = styled.div`

    
    margin:0 auto;
    width:98vw;

    .anal-charts{
        padding:2rem 1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        @media(max-width:900px){
            flex-direction:column;
            .chart-container{
                width:90%
            }
        }
    }

    .chart-container{
        width:45%
    }
`
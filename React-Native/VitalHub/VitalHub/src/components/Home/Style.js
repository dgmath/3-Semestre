import styled from "styled-components";

export const ContentIcon = styled.View.attrs({
    focus: true
    })`
    padding: 9px 12px;
    border-radius: 18px;
    background-color: ${props => `${props.tabBarActiveBackgroundColor}`} ;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    `
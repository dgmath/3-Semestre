import styled from "styled-components";

export const BtIncrement = styled.TouchableOpacity`
      width: 150;
      height: 40;
      border-radius: 10px;
      color: blue;
      align-items: center;
      justify-content: center;
      background-color: blue;

`

export const BtDecrement = styled(BtIncrement)`
    background-color: red;
`
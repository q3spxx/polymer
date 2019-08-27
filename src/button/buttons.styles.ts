import { css } from 'lit-element';

export const styles = css`
    button {
        padding-left: 18px;
        padding-right: 18px;
        height: 24px;
        border-radius: 3px;
        background-color: cornflowerblue;
        border: none;
        font-size: 12px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    button:hover {
        background-color: #4e78c3;
    }
    button:active {
        background-color: #4567a2;
    }
    .wrapper {
        display: inline-block;
    }
    .dropdown-anchor {
        position: relative;
        width: 100%;
    }
    ul {
        position: absolute;
        min-width: 180px;
        margin: 0;
        padding: 6px 0;
        top: 6px;
        list-style-type: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    li {
        padding: 10px 24px;
        font-family: Arial;
        font-size: 14px;
        cursor: pointer;
    }
    li:hover {
        background-color: aliceblue;
    }
`;

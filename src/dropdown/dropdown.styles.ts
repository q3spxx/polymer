import { css } from 'lit-element';

export const styles = css`
    ul {
        position: absolute;
        min-width: 180px;
        margin: 0;
        padding: 6px 0;
        top: 6px;
        list-style-type: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        max-height: calc(100vh - 100px);
        overflow-y: auto
    }
    li {
        padding: 10px 24px;
        font-family: Arial;
        font-size: 14px;
        cursor: pointer;
        background-color: var(--list-element-color, #fff);
    }
    li:hover {
        background-color: var(--list-element-color-with-opacity, #000));
    }
`;

function Box({ enabled }) {
    return (
        <div>This is a{enabled ? 'n enabled' : ''} box</div>
    );
}

export default Box;
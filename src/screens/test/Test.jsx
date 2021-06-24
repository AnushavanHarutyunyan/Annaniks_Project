import { Button } from 'react-bootstrap';

const Test = ({ props }) => {
    return (
        <div>
            <h1>Test menu item</h1>
            <Button
                onClick={() => {
                    props.push('/menu');
                }}
            >
                Back
            </Button>
        </div>
    );
};

export default Test;

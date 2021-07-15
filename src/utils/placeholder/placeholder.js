import {
    TextBlock,
    RoundShape,
    RectShape,
    TextRow,
} from 'react-placeholder/lib/placeholders';
import '../placeholder/placeholder.css';

const awesomePlaceholder = (
    <div className="my_awesome_placeholder">
        <TextRow
            color="#E0E0E0"
            style={{
                width: 300,
                marginBottom: 10,
                marginTop: 10,
                marginLeft: 360,
            }}
        />
        <TextRow
            color="#E0E0E0"
            style={{
                width: 220,
                marginTop: 10,
                marginLeft: 360,
            }}
        />
        <TextRow
            color="#E0E0E0"
            style={{
                width: 100,
                marginTop: 20,
                marginBottom: 30,
                marginLeft: 360,
            }}
        />
        <RoundShape
            color="#E0E0E0"
            style={{ width: 90, height: 90, marginBottom: 30 }}
            rows={5}
            className="round_shape_placeholder"
        />
        <TextBlock
            rows={2}
            color="#E0E0E0"
            style={{ width: 300, height: 140, marginTop: 10, marginLeft: 360 }}
        />
    </div>
);

const menuPlaceholder = (
    <div className="my_awesome_placeholder">
        <div className="asd">
            <TextBlock
                rows={1}
                color="#E0E0E0"
                style={{ width: 200, height: 40, marginTop: 10 }}
            />
            <RectShape color="#E0E0E0" style={{ width: 250, height: 200 }} />
        </div>
        <div className="asd">
            <TextBlock
                rows={1}
                color="#E0E0E0"
                style={{ width: 200, height: 40, marginTop: 10 }}
            />
            <RectShape color="#E0E0E0" style={{ width: 250, height: 200 }} />
        </div>
        <div className="asd">
            <TextBlock
                rows={1}
                color="#E0E0E0"
                style={{ width: 200, height: 40, marginTop: 10 }}
            />
            <RectShape color="#E0E0E0" style={{ width: 250, height: 200 }} />
        </div>
        <div className="asd">
            <TextBlock
                rows={1}
                color="#E0E0E0"
                style={{ width: 200, height: 40, marginTop: 10 }}
            />
            <RectShape color="#E0E0E0" style={{ width: 250, height: 200 }} />
        </div>
        <div className="asd">
            <TextBlock
                rows={1}
                color="#E0E0E0"
                style={{ width: 200, height: 40, marginTop: 10 }}
            />
            <RectShape color="#E0E0E0" style={{ width: 250, height: 200 }} />
        </div>
        <div className="asd">
            <TextBlock
                rows={1}
                color="#E0E0E0"
                style={{ width: 200, height: 40, marginTop: 10 }}
            />
            <RectShape color="#E0E0E0" style={{ width: 250, height: 200 }} />
        </div>
    </div>
);

export { menuPlaceholder };
export { awesomePlaceholder };

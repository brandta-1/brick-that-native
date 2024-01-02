import { useRef, useEffect } from 'react';
import { DrawLego } from '../components';

export default function Canvas({ picture, drawLego, change, ...rest }) {

    const myRef = useRef();

    useEffect(() => {

        if (drawLego) {

            DrawLego({ picture: picture, c: myRef.current });

            change(myRef.current);
        } else {

            const canvas = myRef.current;

            const ctx = canvas.getContext('2d');

            var iData = new ImageData(new Uint8ClampedArray(picture.data), picture.width, picture.height);

            ctx.putImageData(iData, 0, 0);
        }
    }, [])

    return <canvas ref={myRef} {...rest} />;
}
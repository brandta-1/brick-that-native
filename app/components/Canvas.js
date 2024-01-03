import { useRef, useEffect } from 'react';
import { DrawLego } from '../components';

export default function Canvas({ picture, drawLego, change, fidelity, ...rest }) {

    const myRef = useRef();

    useEffect(() => {

        if (drawLego) {

            //if this function was called from the create page, create a new lego mosaic
            DrawLego({ picture: picture, c: myRef.current, fidelity: fidelity });

            change(myRef.current);

        } else {

            //else, we are in the library, paint the users picture onto the canvas
            const canvas = myRef.current;

            const ctx = canvas.getContext('2d');

            var iData = new ImageData(new Uint8ClampedArray(picture.data), picture.width, picture.height);

            ctx.putImageData(iData, 0, 0);
        }
    }, [])

    return <canvas ref={myRef} {...rest} />;
}
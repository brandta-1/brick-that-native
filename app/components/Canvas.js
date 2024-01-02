import { useRef, useEffect } from 'react';

export default function Canvas({ picture, ...rest }) {


    const myRef = useRef();

    useEffect(() => {


        const canvas = myRef.current;
        const ctx = canvas.getContext('2d');
        console.log("ctx here:", ctx);

        console.log("new picture?", picture);
        var iData = new ImageData(new Uint8ClampedArray(picture.data),picture.width,picture.height);
         ctx.putImageData(iData,0,0);

    }, [])


    var testThing = myRef.current;
    console.log("testthing?", testThing);
    return <canvas ref={myRef} {...rest} />;
}
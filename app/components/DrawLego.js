import { Asset } from 'expo-asset';

export default function DrawLego({ picture, c }) {

    const viewWidth = picture.width - (picture.width % 32);
    const viewHeight = picture.height - (picture.height % 32);

    console.log("imgTest", picture);
    console.log("cTest", c);
    let imgTest = new Image(viewWidth, viewHeight);
    imgTest.src = picture.uri;

    console.log("imgTest", picture);

    w = viewWidth;
    h = viewHeight;

    c.width = viewWidth;
    c.height = viewHeight;

    console.log(c.width);

    ctx = c.getContext("2d", { willReadFrequently: true });

    console.log(ctx);
    ctx.drawImage(imgTest, 0, 0, viewWidth, viewHeight);

    let pixelArr = ctx.getImageData(0, 0, viewWidth, viewHeight).data;
    let redArr;
    let greenArr;
    let blueArr;
    console.log("pixelArr", pixelArr);

    async function draw() {

        const [{ localUri }] = await Asset.loadAsync(require('../assets/brick.png'));
        const brick = new Image();
        brick.src = localUri;
        await brick.decode();

        let br = 32;

        for (let i = 0; i < w; i += br) {
            for (let j = 0; j < h; j += br) {

                ctx.drawImage(brick, 0, 0, br, br, i, j, br, br);

                let p = (i + (j * w)) * 4;
                const currRGBA = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + ", .75)"
                ctx.fillStyle = currRGBA;
                ctx.fillRect(i, j, br, br);
            }
        }
    }
        draw();
}
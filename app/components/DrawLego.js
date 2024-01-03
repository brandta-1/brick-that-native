import { Asset } from 'expo-asset';

export default function DrawLego({ picture, c, fidelity }) {

    //round the dimensions to the nearest lego brick (LTE)
    const viewWidth = picture.width - (picture.width % fidelity);
    const viewHeight = picture.height - (picture.height % fidelity);

    //place the users image into the canvas
    let backgroundImage = new Image(viewWidth, viewHeight);
    backgroundImage.src = picture.uri;

    w = viewWidth;
    h = viewHeight;

    c.width = viewWidth;
    c.height = viewHeight;

    ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(backgroundImage, 0, 0, viewWidth, viewHeight);

    async function draw() {

        //choose the correct brick picture
        let path;
        if (fidelity == 32) {
            const [{ localUri }] = await Asset.loadAsync(require(`../assets/brick-32.png`));
            path = localUri;
        } else {
            const [{ localUri }] = await Asset.loadAsync(require(`../assets/brick-16.png`));
            path = localUri;
        }

        const brick = new Image();
        brick.src = path;
        await brick.decode();

        //nested for loops means "for each brick shaped block in the canvas"
        for (let i = 0; i < w; i += fidelity) {
            for (let j = 0; j < h; j += fidelity) {

                //get the pixel data of the block
                let pixelArr = ctx.getImageData(i, j, fidelity, fidelity).data;

                //current sampling method is draw color out from top left corner, with 75% alpha
                const currRGBA = "rgba(" + pixelArr[0] + "," + pixelArr[1] + "," + pixelArr[2] + ", .75)";

                //lay the brick texture down on the block's position
                ctx.drawImage(brick, 0, 0, fidelity, fidelity, i, j, fidelity, fidelity);

                //place the semi-transparent color sample over the block
                ctx.fillStyle = currRGBA;
                ctx.fillRect(i, j, fidelity, fidelity);
            }
        }
    }
    draw();
}
import { openDB } from 'idb';

const initdb = async () =>
    openDB('brickThatLibrary', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('brickThatLibrary')) {
                console.log('brickThatLibrary database already exists');
                return;
            }
            db.createObjectStore('brickThatLibrary', { keyPath: 'id', autoIncrement: true });
            console.log('brickThatLibrary database created');
        },
    });

export const postDb = async (canvas) => {

    ctx = canvas.getContext("2d");
    console.log("this is ctx", ctx);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log("imgData", imgData);
    var buffer = imgData.data.buffer;

    const legos = await openDB('brickThatLibrary', 1);

    const tx = legos.transaction('brickThatLibrary', 'readwrite');

    const store = tx.objectStore('brickThatLibrary');

    const req = store.add({ data: buffer, width: canvas.width, height: canvas.height });

    const res = await req;
    console.log('saved to db', res);
}

export const getDb = async () => {

    const legos = await openDB('brickThatLibrary', 1);

    const tx = legos.transaction('brickThatLibrary', 'readonly');

    const store = tx.objectStore('brickThatLibrary');

    const req = store.getAll();

    const res = await req;

    return res;
}

export const deleteDb = async (id) => {

    const legos = await openDB('brickThatLibrary', 1);

    const tx = legos.transaction('brickThatLibrary', 'readwrite');

    const store = tx.objectStore('brickThatLibrary');

    const req = store.delete(id);

    const res = await req;

    return res;
}

initdb();
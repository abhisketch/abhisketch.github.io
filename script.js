document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const imageCanvas = document.getElementById('imageCanvas');
    const sketchCanvas = document.getElementById('sketchCanvas');
    const downloadButton = document.getElementById('downloadButton');

    let imageCtx = imageCanvas.getContext('2d');
    let sketchCtx = sketchCanvas.getContext('2d');

    let imageLoaded = false;

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;

            img.onload = () => {
                imageCanvas.width = img.width;
                imageCanvas.height = img.height;

                sketchCanvas.width = img.width;
                sketchCanvas.height = img.height;

                imageCtx.drawImage(img, 0, 0);
                imageLoaded = true;
            }
        }

        reader.readAsDataURL(file);
    });

    sketchCanvas.addEventListener('mousemove', draw);
    sketchCanvas.addEventListener('mousedown', (e) => {
        sketchCtx.beginPath();
        sketchCtx.moveTo(e.clientX - sketchCanvas.offsetLeft, e.clientY - sketchCanvas.offsetTop);
        sketchCanvas.addEventListener('mousemove', draw);
    });
    sketchCanvas.addEventListener('mouseup', () => {
        sketchCanvas.removeEventListener('mousemove', draw);
    });

    function draw(e) {
        if (!imageLoaded) return;

        const x = e.clientX - sketchCanvas.offsetLeft;
        const y = e.clientY - sketchCanvas.offsetTop;

        sketchCtx.lineTo(x, y);
        sketchCtx.stroke();
    }

    downloadButton.addEventListener('click', () => {
        const combinedCanvas = document.createElement('canvas');
        const combinedCtx = combinedCanvas.getContext('2d');

        combinedCanvas.width = imageCanvas.width;
        combinedCanvas.height = imageCanvas.height;

        combinedCtx.drawImage(imageCanvas, 0, 0);
        combinedCtx.drawImage(sketchCanvas, 0, 0);

        const downloadLink = document.createElement('a');
        downloadLink.href = combinedCanvas.toDataURL();
        downloadLink.download = 'sketched_image.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});

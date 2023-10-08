<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sketches Portfolio</title>
    <style>
        .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        
        .gallery img {
            max-width: 100%;
            transition: transform 0.3s;
        }
        
        .gallery img:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <h1>Sketches Portfolio</h1>
    
    <div class="gallery">
        <img src="sketch1.jpg" alt="Sketch 1">
        <img src="sketch2.jpg" alt="Sketch 2">
        <img src="sketch3.jpg" alt="Sketch 3">
        <!-- Add more images as needed -->
    </div>

    <script>
        // You can add more JavaScript code for additional interactivity here
    </script>
</body>
</html>


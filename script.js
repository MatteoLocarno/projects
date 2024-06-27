body {
    font-family: Arial, sans-serif;
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
}

input[type="text"] {
    padding: 10px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

ul#suggestions {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 80%;
    margin: 0 auto;
}

ul#suggestions li {
    background: #444;
    padding: 10px;
    margin-top: -1px; /* Prevent double borders */
    border: 1px solid #ccc;
    cursor: pointer;
}

ul#suggestions li:hover {
    background: #555;
}

#pilotData {
    margin-top: 20px;
}

#pilotData img {
    max-width: 100px;
    border-radius: 50%;
}

#pilotData h2 {
    margin: 10px 0;
}

#pilotData p {
    margin: 0;
}



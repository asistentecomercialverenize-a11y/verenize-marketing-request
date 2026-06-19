*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family: Arial, sans-serif;
    background:#f5f5f5;
    padding:20px;
}

.container{
    max-width:800px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:12px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

h1{
    text-align:center;
    margin-bottom:15px;
    color:#5a287d;
}

.intro{
    text-align:center;
    margin-bottom:25px;
    color:#666;
}

label{
    display:block;
    margin-top:15px;
    margin-bottom:5px;
    font-weight:bold;
}

input,
select,
textarea{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:8px;
}

textarea{
    resize:vertical;
}

button{
    width:100%;
    margin-top:25px;
    padding:14px;
    background:#5a287d;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-size:16px;
    font-weight:bold;
}

button:hover{
    opacity:.9;
}

@media(max-width:768px){

    .container{
        padding:20px;
    }

}

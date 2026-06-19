* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, #f8f4ff 0%, #ffffff 55%, #f1e5ff 100%);
    color: #241233;
    min-height: 100vh;
}

.page {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
}

.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
}

.hero h1 {
    font-size: 42px;
    line-height: 1.1;
    color: #241233;
    margin-bottom: 12px;
}

.hero p {
    font-size: 16px;
    color: #5f4b6b;
    max-width: 560px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #6a2bbf;
    font-size: 30px;
    font-weight: 800;
    white-space: nowrap;
}

.brand-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #6a2bbf, #9b4dff);
    color: white;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
}

.card {
    background: rgba(255, 255, 255, 0.92);
    border-radius: 22px;
    padding: 34px;
    box-shadow: 0 18px 45px rgba(65, 25, 100, 0.13);
    border: 1px solid #eadcff;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    font-weight: 700;
    margin-top: 14px;
    color: #241233;
}

input,
select,
textarea {
    width: 100%;
    padding: 15px 16px;
    border: 1px solid #d8cce5;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    background: #ffffff;
    color: #241233;
    outline: none;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #7b35c8;
    box-shadow: 0 0 0 3px rgba(123, 53, 200, 0.12);
}

textarea {
    resize: vertical;
}

.note {
    margin-top: 20px;
    background: #f4edff;
    border: 1px solid #dcc7ff;
    color: #4a2c67;
    padding: 16px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.5;
}

button {
    margin-top: 22px;
    border: none;
    border-radius: 14px;
    padding: 17px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: white;
    background: linear-gradient(90deg, #6a2bbf, #9b4dff);
    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 22px rgba(106, 43, 191, 0.25);
}

@media (max-width: 768px) {
    .page {
        padding: 28px 16px;
    }

    .hero {
        flex-direction: column;
        align-items: flex-start;
    }

    .hero h1 {
        font-size: 32px;
    }

    .brand {
        font-size: 26px;
    }

    .card {
        padding: 24px;
    }
}

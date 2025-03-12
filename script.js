document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const erroMsg = document.getElementById("erro");
    const logoutBtn = document.getElementById("logout");

    // Login e validação do usuário
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let usuario = document.getElementById("usuario").value;
            let senha = document.getElementById("senha").value;

            if (usuario === "admin" && senha === "1234") {
                localStorage.setItem("logado", "true");
                window.location.href = "home.html";
            } else {
                erroMsg.textContent = "Usuário ou senha incorretos!";
            }
        });
    }

    // Verificando o status de login
    if (logoutBtn) {
        if (localStorage.getItem("logado") !== "true") {
            window.location.href = "login.html";
        }

        logoutBtn.addEventListener("click", function() {
            localStorage.removeItem("logado");
            window.location.href = "login.html";
        });
    }
});

// Mock de Progresso e pontos
document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    const pontos = localStorage.getItem("pontos") || 0;
    const medalhas = localStorage.getItem("medalhas") || 0;

    // Exibindo o nome de usuário
    if (username) {
        document.getElementById("username").textContent = username;
    }

    // Atualizando pontos e medalhas
    document.getElementById("pontos").textContent = pontos;
    document.getElementById("medalhas").textContent = medalhas;

    // Progresso do usuário
    const progresso = document.getElementById("progresso");
    if (progresso) {
        progresso.value = (pontos / 100) * 100; // Simulação de progresso com base nos pontos
    }

    // Logout
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("username");
        localStorage.removeItem("logado");
        localStorage.removeItem("pontos");
        localStorage.removeItem("medalhas");
        window.location.href = "login.html"; // Redirecionar para a tela de login
    });
});

// Função para atualizar pontos e medalhas após quiz
function atualizarProgresso(pontosGanho, medalhasGanhas) {
    const pontos = parseInt(localStorage.getItem("pontos") || 0) + pontosGanho;
    const medalhas = parseInt(localStorage.getItem("medalhas") || 0) + medalhasGanhas;

    localStorage.setItem("pontos", pontos);
    localStorage.setItem("medalhas", medalhas);

    // Atualizando os elementos de pontos e medalhas no painel
    document.getElementById("pontos").textContent = pontos;
    document.getElementById("medalhas").textContent = medalhas;

    // Atualizando o progresso
    const progresso = document.getElementById("progresso");
    if (progresso) {
        progresso.value = (pontos / 100) * 100; // Ajuste de progresso
    }
}

// Função para acessar o quiz
document.getElementById("quiz-btn").addEventListener("click", function() {
    // Lógica para redirecionar para o quiz
    window.location.href = "quiz.html"; // Substitua "quiz.html" pelo caminho real do seu quiz
});

// Mock de Login
function login(username) {
    localStorage.setItem("username", username);
    window.location.href = "home.html"; // Redirecionar para a página principal
}

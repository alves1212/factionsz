<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // E-mail do destinatário (admin)
    $admin_email = "vbrandao797@gmail.com";  // Substitua com o seu e-mail real
    
    // Enviar e-mail para o admin
    $assunto_admin = "Nova mensagem de contato - Factions Z";
    $corpo_admin = "Você recebeu uma nova mensagem de um usuário no Factions Z.\n\n";
    $corpo_admin .= "Nome: $nome\n";
    $corpo_admin .= "E-mail: $email\n";
    $corpo_admin .= "Mensagem:\n$mensagem\n";

    // Cabeçalhos do e-mail
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Enviar o e-mail para o admin
    mail($admin_email, $assunto_admin, $corpo_admin, $headers);

    // Resposta para o usuário
    $assunto_usuario = "Sua mensagem foi recebida - Factions Z";
    $corpo_usuario = "Olá $nome,\n\n";
    $corpo_usuario .= "Obrigado por entrar em contato conosco. Recebemos sua mensagem e em breve responderemos.\n";
    $corpo_usuario .= "Aqui está o que você nos enviou:\n\n";
    $corpo_usuario .= "Mensagem: $mensagem\n\n";
    $corpo_usuario .= "Atenciosamente,\nA equipe do Factions Z";

    // Enviar o e-mail para o usuário
    mail($email, $assunto_usuario, $corpo_usuario, $headers);

    // Redirecionar para uma página de agradecimento ou de sucesso
    header("Location: obrigado.html");  // Criar uma página de agradecimento simples
    exit;
}
?>

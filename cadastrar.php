<?php
    $nome = $_GET["nome"];
    $tutor = $_GET["tutor"];
    //Todas as variaveis em php usam $
    //_GET é um array que foi automaticamente criado
    //method for POST -> _POST

    echo "Nome: " . $nome . " Tutor: " . $tutor . "<br/><br/>";
    echo "Nome: $nome e Tutor: $tutor <br/>";
    //echo é o print mais comum do PHP
    //concatenacao eh ponto (.)

    $con = mysqli_connect("localhost", "root", "vertrigo", "veterinaria");

    $sql = "INSERT INTO animal (nome, tutor)
        VALUES ('$nome', '$tutor')";
    
    $resultado = mysqli_query($con, $sql);
?>
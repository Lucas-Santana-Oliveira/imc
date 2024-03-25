function calcularIMC() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
        recommendation = "Recomenda-se procurar um nutricionista para uma dieta balanceada e um profissional de educação física para um plano de exercícios adequado.";
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
        recommendation = "Continue mantendo um estilo de vida saudável com uma dieta equilibrada e exercícios regulares para manter o peso.";
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso";
        recommendation = "É recomendável consultar um nutricionista para ajustar sua dieta e aumentar a atividade física para perder peso gradualmente.";
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
        recommendation = "É essencial procurar orientação médica para iniciar um programa de perda de peso com uma dieta balanceada e exercícios regulares.";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
        recommendation = "Consulte um médico para avaliação e orientação sobre opções de tratamento, que podem incluir mudanças na dieta, aumento da atividade física e possivelmente intervenções médicas.";
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
        recommendation = "É crucial procurar ajuda médica imediatamente para desenvolver um plano de tratamento abrangente, que pode incluir dieta, exercícios, medicação e possivelmente cirurgia.";
    }
    
    document.getElementById('description').textContent = description;
    document.getElementById('recommendation').textContent = recommendation;

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
}
/*
** signe: '*', '+', '-', '/'
** gauche: un nombre non negatif
** droite: un nombre plus petit que 430
**
** La fonction renvoie le resultat du calcul
**
** La fonction renvoie null en cas d'erreur
*/

var signe = '+';
    var gauche = 80;
    var droite = 2;

function calculatrice(signe, gauche, droite) {
    
    if(signe == '+'){
        result = gauche + droite;
    }
    
    else if(signe == '*'){
        result = gauche * droite;
    }
    
    else if(signe == '-'){
        result = gauche - droite;
    }
        
    else if(signe == '/'){
        result = gauche / droite;
    }
    
    else{
        
        var result = null;
    }

        return result;
}
 
module.exports = calculatrice;

/**
 * Created by osmar on 15/12/2016.
 */

Vue.filter('doneLabel', function (value) {
    if(value == 0){
        return "Não Paga";
    }else{
        return "Paga";
    }
});

Vue.filter('statusGeneral', function (value) {
    if(value === false){
        return "Nenhuma conta cadastrada!";
    }
    if(!value){
        return "nenhuma conta a pagar";
    }else{
        if(value>1){
            return "Existem "+ value +" contas a serem pagas!";
        }else{
            return "Existe "+ value +" conta a ser paga!";
        }
    }
});

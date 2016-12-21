/**
 * Created by osmar on 15/12/2016.
 */
window.billPayComponent = Vue.extend({
    components: {
        //componentes ficam só acessivel para o appCpmponent e todos são irmãos e filhos de appComponent
        'menu-component' : billPayMenuComponent
    },
    template: `            
                <style type="text/css">
                    .red {
                        color: red;
                    }
                    .blue {
                        color: blue;
                    }
                    .gray {
                        color: gray;
                    }
                    .minha-classe{
                        background-color: antiquewhite;
                    }
                </style>
                <h1>{{ title }}</h1>
                <h3 :class="{'gray': status === false, 'blue': status === 0, 'red': status > 0}">
                    {{ status | statusGeneral }}
                </h3>
                <menu-component></menu-component>  
                <router-view></router-view>
                `,
    data: function(){
        return {
            title: "Contas a pagar"
        };
    },
    computed: {
        status:function () {
            var bills = this.$root.$children[0].billsPay;
            if(!bills.length){
                //!this.bills.length mesma coisa que se não tiver tamanho (vazio)
                return false;
            }

            var count = 0;

            for(var i in bills){
                if(!bills[i].done){
                    count++;
                }
            }
            return count;
        }
    }
});
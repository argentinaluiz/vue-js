/**
 * Created by osmar on 15/12/2016.
 */
window.billCreateComponent = Vue.extend({
    template: `
                  <form name="form" @submit.prevent="submit">
                
                        <labe> Vencimentos:</labe>
                        <input type="text" v-model="bill.date_due"/>
                        <br/><br/>
                
                        <labe> Nome:</labe>
                        <select v-model="bill.name">
                            <option v-for ="o in names" :value="o">{{ o }}</option>
                        </select>
                        <br/><br/>
                
                        <label>Valor:</label>
                        <input type="text" v-model="bill.value"/>
                        <br/><br/>
                
                        <label>Pago:</label>
                        <input type="checkbox" v-model="bill.done"/>
                        <br/><br/>
                
                        <input type="submit" value="Enviar"/>
                
                        {{ test }}
                   </form>
    `,
    data: function () {
        return {
            formType: 'insert',
            names: [
                'Conta de luz',
                'Conta de água',
                'Conta de telefone',
                'Supermercado',
                'Cartão de crédito',
                'Empréstimo',
                'Gasolina'
            ],
            bill: {
                date_due: '',
                name: '',
                value: 0,
                done: false,
            },
        };
    },
    methods: {
        submit: function () {
            if(this.formType == 'insert'){
                // $parent.$children[1] - comunicação entre dois componentes irmaos
                //this.$parent.$refs.billListComponent.bills.push(this.bill);
                this.$dispatch('new-bill', this.bill);
            }
            //bill da listagem do bill do fromulário (reset no formulario)
            //isso está resetando no update

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: false,
            },

                this.$dispatch('change-activedview', 0);
            //this.$parent.activedView = 0;
        },
    },
    events: {
        'change-formtype': function(formType){
            this.formType = formType;
        },
        'change-bill': function (bill) {
            this.bill = bill;
        },
    },
});
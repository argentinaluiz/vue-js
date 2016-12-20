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
    created: function () {
        if(this.$route.name == 'bill.update'){
            this.formType = 'update';
            this.getBill(this.$route.params.index);
        }
    },
    methods: {
        submit: function () {
            if(this.formType == 'insert'){
                bills: this.$root.$children[0].bills.push(this.bill);
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: false,
            };
            this.$router.go({name: 'bill.list'});
        },
        getBill: function (index) {
            var bills = this.$root.$children[0].bills;
            this.bills = bills[index];
        }
    }
});
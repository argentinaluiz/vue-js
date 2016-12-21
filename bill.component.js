/**
 * Created by osmar on 15/12/2016.
 */
window.billComponent = Vue.extend({
    template: `
    <nav>
        <ul>
            <li v-for="o in menus">
                <a v-link="{path: o.url}">{{ o.name }}</a>
            </li>
        </ul>
    </nav>
    <router-view></router-view>
    `,
    data: function () {
        return {
            menus: [
                {name: "Contas a pagar", url: 'bill-pay.list'},
                {name: "Contas a receber", url: 'bill-receive'},
            ],
        };
    }
});
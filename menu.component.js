/**
 * Created by osmar on 15/12/2016.
 */
window.menuComponent = Vue.extend({
    template: `
    <nav>
        <ul>
            <li v-for="o in menus">
                <a v-link="{path: o.url}">{{ o.name }}</a>
            </li>
        </ul>
    </nav>
`,
    data: function () {
        return {
            menus: [
                {id: 0, name: "Listar contas", url: '/bills'},
                {id: 1, name: "Criar conta", url: '/bill/create'},
            ],
        };
    }
});
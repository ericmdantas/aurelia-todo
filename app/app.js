export class App {
    configureRouter(config, router) {
        config.map([
            {route: ['', 'todo'], moduleId: './todo/components/todo'},
            {route: ['about'], moduleId: './about/components/about'}
        ]);

        this.router = router;
    }
}
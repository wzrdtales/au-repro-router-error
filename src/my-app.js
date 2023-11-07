export class MyApp {
static routes = [
    {
      path: '/console/:id',
      component: () => import('./my-console'),
      title: 'Console',
      id: 'console'
    }
  ]
}

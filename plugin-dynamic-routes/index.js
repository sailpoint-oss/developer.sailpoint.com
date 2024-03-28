module.exports = function (context, options) {
  return {
    name: 'plugin-dynamic-routes',

    async contentLoaded({content, actions}) {
      const {routes} = options;
      const {addRoute} = actions;

      routes.forEach((route) => {
        addRoute({
          path: route.path,
          exact: route.exact || false,
          component: route.component,
          customProps: route.customProps || {},
        });
      });
    },
  };
};

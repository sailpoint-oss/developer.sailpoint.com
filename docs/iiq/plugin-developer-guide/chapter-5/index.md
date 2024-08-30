---
id: plugin-ui-elements
title: UI Elements
pagination_label: UI Elements
sidebar_label: UI Elements
sidebar_position: 5
sidebar_class_name: plugin_developer_guide_ui_elements
keywords: ['plugin']
description: IdentityIQ Plugin UI Elements
slug: /iiq/plugin-developer-guide/ui-elements
tags: ['plugin', 'guide', 'identityiq']
---

# UI Elements

Most plugins will have some additional UI component that will display in IdentityIQ. You can use images, CSS files, HTML templates, and JavaScript to provide the interactions and views required by the plugin. Plugins using a `fullPage` element will look for a file called `page.xhtml` in the plugin ZIP.

:::Note

Any CSS installed with the plugin will apply to all elements in IdentityIQ. For this reason it is recommended that developers keep their CSS classes specific to their plugin. For example, prefix them with the plugin's name, such as `.myPlugin-BoldText` instead of `.boldText`.

:::

The `page.xhtml` in the _Todo_ example is configured to allow for the input of a new Todo and display all current Todos in the system. The Angular controller used in 'page.xhtml' and all the functions available to the controller are defined in `TodoModule.js` (located in the `/ui/js` folder).

```javascript
/**
 * Create the module.
 */
var todoModule = angular.module('TodoList', ['ui.bootstrap']);
/**
 * Controller for the todo list.
 */
todoModule.controller('TodoController', function(todoService, pageConfigService, $q, $uibModal) {
    var me = this,
        promises;
    /**
     * @property Array The todos for a user.
     */
    me.todos = [];
/***
* Lines omitted for clarity
***/
/**
 * Shows the flagged users modal dialog.
 */
me.viewFlaggedUsers = function() {
    $uibModal.open({
        animation: false,
        controller: 'FlaggedUsersCtrl as ctrl',
        templateUrl: PluginHelper.getPluginFileUrl('TodoPlugin', 'ui/html/flagged-template.html')
    });
};
```

The 'TodoController' controller (and available methods) can then be referenced in `page.xhtml`.

```html
<ui:composition>
  <div
    class="container"
    ng-app="TodoList"
    ng-controller="TodoController as ctrl">
    <div class="row m-t" ng-if="ctrl.pageConfig.showFlagged">
      <button
        class="btn btn-danger pull-right"
        ng-click="ctrl.viewFlaggedUsers()">
        Flagged Users
      </button>
    </div>
    <div class="row m-t"></div></div
></ui:composition>
```

- **Line 2** - shows the angular controller `ng-controller` defined as 'TodoController' from **line 8** of 'TodoModule.js'.
- **Line 4** - example of accessing controller method `viewFlaggedUsers` from **line 21** of 'TodoModule.js'.

This example demonstrates how to use the Angular concept of the modal within a plugin. In the 'Todo' plugin, if the user clicks the 'Flagged Users' button as defined on the `fullPage`, it will switch context to the page defined by the ui/`html/flagged-template.html`, and swap the AngularJS controller to `FlaggedUserCtrl`. The behavior of this modal dialogue is essentially the same as the `fullPage` 'page.xhtml' - it accesses information by the controller, which may rely on backend Java classes to produce data. Notice that to reference the .html template for the flagged users, the example uses the `PluginHelper` classes' method `getPluginFileUrl` - this allows for fetching the plugin resource by a relative path as it would display in the installed .zip archive.

One last aspect to remember for the `page.xhtml` is the necessity to include references to the JavaScript packages the plugin will use. Use this path to reference the packages: `#{plugins.requestContextPath}/plugin/<Plugin Name>/path/to/js/files.js`.

```html
<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/angular.min.js"></script>
<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/ui-bootstrap.min.js"></script>
<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/TodoModule.js"></script>
```

The path to the page would be the following: `{serverpath}/plugins/pluginPage.jsf?pn={PluginName}`, where `PluginName` is the name of your plugin, as specified in the manifest, and `serverpath` is the path to your server.

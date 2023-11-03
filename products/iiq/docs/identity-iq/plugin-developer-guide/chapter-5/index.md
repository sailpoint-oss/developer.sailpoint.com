---
id: plugin-ui-elements
title: UI Elements
pagination_label: UI Elements
sidebar_label: UI Elements
sidebar_position: 5
sidebar_class_name: plugin_developer_guide_ui_elements
keywords: ['plugin']
description: Plugin Developer Guide UI Elements in IdentityIQ
slug: /docs/plugin-developer-guide/ui-elements
tags: ['plugin','guide','identityiq']
---
# UI Elements

Most plugins will have some additional UI component that will appear in IdentityIQ. Images, CSS files, HTML templates, and JavaScript can all be used to provide the interactions and views required by the plugin. Plugins that utilize a 'fullPage' element will look for a file called 'page.xhtml' in the build. Please note: any css installed with the plugin will apply to all elements in IdentityIQ. For this reason it is recommended that developers keep their css classes specific to their plugin.

The page.xhtml in the 'Todo' example, is configured to allow for the input of a new todo, and display all current Todos in the system. The Angular controller utilized in 'page.xhtml', and all the functions available to it are defined in TodoModule.js (located in the '/ui/js' folder).

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
The TodoController controller (and available methods) can then be referenced in `page.xhtml`

```html
<ui:composition>
    <div class="container" ng-app="TodoList" ng-controller="TodoController as ctrl">
        <div class="row m-t" ng-if="ctrl.pageConfig.showFlagged">
           <button class="btn btn-danger pull-right" ng-click="ctrl.viewFlaggedUsers()">Flagged Users</button>
        </div>
        <div class="row m-t">
```
- **Line 2** - shows the angular controller 'ng-controller' defined as TodoController from  line 8 of TodoModule.js
- **Line 4** - example of accessing controller method 'viewFlaggedUsers' from line 21 of TodoModule.js

The above example demonstrates how to use the Angular concept of the modal within a plugin. In the Todo plugin, if the user clicks the 'Flagged Users' button as defined on the fullPage, it will switch context to the page defined by the 'ui/html/flagged-template.html', and swap the AngularJS controller to 'FlaggedUserCtrl'. The behavior of this modal dialogue is essentially the same as the fullPage 'page.xhtml' - it accesses information via the controller, which may rely on backend Java classes to produce data. Notice that in order to reference the .html template for the flagged users, we use the 'PluginHelper' classes method 'getPluginFileUrl' - this allows for fetching the plugin resource via a relative path as it would appear in the .zip archive that was installed.

One last aspect of the `page.xhtml`, is the necessity to include reference to the JavaScript packages that will be utilized by the plugin. These should be referenced by the path `#{plugins.requestContextPath}/plugin/<Plugin Name>/path/to/js/files.js`.

```html
    <script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/angular.min.js"></script>
    <script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/ui-bootstrap.min.js"></script>
    <script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/TodoModule.js"></script>
```

The path to the page would be as follows: `{serverpath}/plugins/pluginPage.jsf?pn={PluginName}`, where `PluginName` is the name of your Plugin as specified in the manifest, and `serverpath` is that path to your server.
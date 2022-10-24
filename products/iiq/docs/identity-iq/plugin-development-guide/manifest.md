---
id: manifest-file
title: Manifest File
pagination_label: Manifest File
sidebar_label: Manifest File
sidebar_position: 2
sidebar_class_name: ManifestFile
keywords:
  [
    "IdentityIQ",
    "development",
    "developer",
    "portal",
    "plugin",
    "manifest",
    "docs",
    "documentation",
  ]
description:
  This is the manifest section of the plugin development guide for IdentityIQ.
slug: /docs/plugin-development-guide/manifest
tags: ["Plugins"]
---

A plugin is defined in IdentityIQ by the Plugin XML object that defines the
parameters of the plugin. Features such as Rest resources, Snippets, Settings,
etc. are defined. The 'Plugin' object is defined in the 'manifest.xml' file.

:::caution

This is a required artifact.

:::

The Todo plugin manifest will be examined:

```xml {3,6,7,12-20,21-27,28-37,38-51} showLineNumbers
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Plugin PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Plugin certificationLevel="None" displayName="Todo Plugin" minSystemVersion="7.1" name="TodoPlugin" version="2.0">
  <Attributes>
    <Map>
      <entry key="minUpgradableVersion" value="1.0" />
      <entry key="fullPage">
        <value>
          <FullPage title="Todo List" />
        </value>
      </entry>
      <entry key="restResources">
        <value>
          <List>
            <String>com.acme.todo.rest.TodoResource</String>
            <String>com.acme.todo.rest.FlaggedUserResource</String>
            <String>com.acme.todo.rest.PageConfigResource</String>
          </List>
        </value>
      </entry>
      <entry key="serviceExecutors">
        <value>
          <List>
            <String>com.acme.todo.server.TodoFlaggingService</String>
          </List>
        </value>
      </entry>
      <entry key="settings">
        <value>
          <List>
            <Setting dataType="boolean" helpText="Indicates whether or not todos can be deleted" label="Delete Allowed" name="canDelete" defaultValue="true"/>
            <Setting dataType="string" helpText="The default name for a todo" label="Default Name" name="defaultName" defaultValue="My Todo"/>
            <Setting dataType="int" helpText="The default time in minutes for a todo" label="Default Time" name="defaultTime" defaultValue="30"/>
            <Setting dataType="int" helpText="The maximum numer of active todos a user is allowed to have before being flagged" label="Max Active Todos" name="maxUntilFlagged" defaultValue="10"/>
          </List>
        </value>
      </entry>
      <entry key="snippets">
        <value>
          <List>
            <Snippet regexPattern=".*" rightRequired="ViewTodoPluginIcon">
              <Scripts>
                <String>ui/js/snippets/header.js</String>
              </Scripts>
              <StyleSheets>
                <String>ui/css/todo.css</String>
              </StyleSheets>
            </Snippet>
          </List>
        </value>
      </entry>
    </Map>
  </Attributes>
</Plugin>
```

| Line       | Description                                                                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Line 3     | contains the meta data for the Plugin. This is where you will define the object name of your plugin (name value), the name displayed in the UI for your plugin (displayName), and the minimum system version (minSystemVersion) |
| Line 6     | minUpgradeableVersion specifies which version of this plugin has to be installed in order to upgrade to the version specified in the metadata of the manifest file                                                              |
| Line 7     | fullPage denotes whether this plugin will have a full page element available in the IdentityIQ UI - see 'page.xhtml' section of this document under 'UI elements'                                                               |
| Line 12-20 | specifies the compiled java classes, by package, that include the REST web service endpoints that you have written - see REST section of this document under 'Java Classes'                                                     |
| Line 21-27 | specifies the compiled java classes, by package, that contain the service executors for your plugin - see Service Executors section of this document under 'Java Classes'                                                       |
| Line 28-37 | specifies the settings that are end-user configurable for this plugin.                                                                                                                                                          |
| Line 38-51 | lists the various snippets that can be injected into IdentityIQ pages, the match criteria, and the content and style of the snippet                                                                                             |

# More On Settings

Plugin settings are attributes that are available for the end-user/system
administrator to modify as part of their installation. The example from the Todo
plugin has four settings available that control default values for certain
elements, as well as whether or not 'Todo' entries can be deleted in the UI.
Settings appear to the end user when they click on the 'Configure' button for
the specific plugin on the Plugins dashboard.

![Configure Button](./img/configure_button.png)

Settings from the manifest file will be listed, in order, on the plugin settings
page. Also present on the plugin settings page is a visual representation of the
meta data in the manifest file (name, version, certification level).

![Manifest Settings](./img/manifest_settings.png)

Not shown in the Todo plugin example is the concept of 'allowed values' - this
allows the developer to provide a pre-defined list of values that a field can
adopt. The dataType 'boolean' does this automatically. In the above screenshot,
there is a dropdown element available on the 'Delete Allowed' Setting - the
dropdown has two elements 'True' and 'False'.

Plugin setting object can be used to represent a single setting the
settings/configuration page for a Plugin. Each object is used to represent a
single configurable setting on the settings page.

| Attribute Name | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| name           | Name of the current setting                                   |
| dataType       | The type of the setting ( Ex. "string" or "int" or "boolean") |
| value          | Value for the setting                                         |
| label          | Label to be displayed for the setting                         |
| helpText       | Associated help text for the setting                          |
| allowedValues  | List of allowed values for population of a dropdown           |
| defaultValue   | The default value for the setting                             |

# More On Snippets

Snippets are small, configurable ..well.. snippets of code that can be injected
into the rendering of normal IdentityIQ UI pages. A snippet contains four
equally important components:

| Attribute Name | Description                                                                                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| regexPattern   | this is a regular expression pattern that is ran against the current URL in the browser - if the URL matches the pattern, the Snippet will attempt to be displayed                                                                |
| rightRequired  | this determines the scope of users allowed to view the Snippet element - should reference an IdentityIQ SPRight object                                                                                                            |
| scripts        | this is a list of the scripts to run when a particular URL matches the regexPattern. Normally this will consist of injecting an element into the DOM of the page. The Todo example 'hearder.js' file uses JQuery for this purpose |
| styleSheets    | list of any css files that are required by Snippet Scripts                                                                                                                                                                        |

The Todo plugin Snippet creates a new top level icon on every page of the
IdentityIQ UI that is visible to someone with the ViewTodoPluginIcon SPRight.

```xml showLineNumbers
<entry key="snippets">
  <value>
    <List>
      <Snippet regexPattern=".*" rightRequired="ViewTodoPluginIcon">
        <Scripts>
          <String>ui/js/snippets/header.js</String>
        </Scripts>
        <StyleSheets>
          <String>ui/css/todo.css</String>
        </StyleSheets>
      </Snippet>
    </List>
  </value>
</entry>
```

The script, 'header.js' looks for ul.navbar-right li:first, and using the JQuery
operation '.before()' it injects an icon link pointing to the fullPage
(/plugins/pluginPage.jsf?pn=TodoPlugin) of the Todo plugin.

```javascript showLineNumbers
var url = SailPoint.CONTEXT_PATH + "/plugins/pluginPage.jsf?pn=TodoPlugin";

jQuery(document).ready(function () {
  jQuery("ul.navbar-right li:first").before(
    '<li class="dropdown">' +
      ' <a href="' +
      url +
      '" tabindex="0" role="menuitem" title="View your Todo list">' +
      ' <i role="presenation" class="fa fa-sticky-note-o fa-lg example"></i>' +
      " </a>" +
      "</li>"
  );
});
```

For reference, if you were to inspect any page of the IdentityIQ UI using a
utility like Google Chrome's developer tools, you could figure out where to
potentially have JQuery inject your Snippet scripts

![Chrome Inspection](./img/jquery.png)

The end result of this Snippet is shown here, the icon properly inserted before
the other items in the navbar-right list:

![Icon](./img/icon.png)

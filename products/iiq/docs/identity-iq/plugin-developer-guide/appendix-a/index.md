---
id: plugin-appendix-7.1-migration
title: Appendix A 7.1 Migration
pagination_label: Appendix A 7.1 Migration
sidebar_label: Appendix A 7.1 Migration
sidebar_position: 10
sidebar_class_name: plugin_developer_guide_appendix_migration
keywords: ['plugin']
description: Plugin Developer Guide Appendix Migration in IdentityIQ
slug: /docs/plugin-developer-guide/appendix-migration
tags: ['plugin','guide','identityiq']
---

# Appendix A - Plugin Migration from 7.0 to 7.1

Originally, the plugin framework was developed as an add-on to an IdentityIQ 7.0 installation. Due to the overwhelming popularity amongst clients and partners, SailPoint made the decision to migrate the frameworks into the core IdentityIQ product starting with version 7.1.

The 7.1 Plugin Framework provides a dynamic, plugin-specific class loader. It also introduces a simple, supportable, and upgradeable user experience. The dynamic class loader provides protection for the base classes from modification, and allows for additional security and upgradeability.

The object model for plugins has also changed somewhat, the following table maps the old (7.0) plugin object model to the new (7.1+) plugin object model

|**7.0 Object Model**|**7.1 Object Model**|
| --- | --- |
|uniqueName|name|
|displayName|displayName|
|enabled|disabled|
|installationDate|installDate|
|version|version|
|order|position|
|vendorName|n/a|
|vendorID|n/a|
|visible|n/a|
|allowDisable|n/a|
|allowUninstall|n/a|
|minUpgradeableVersion|minUpgradeableVersion|
|minFrameworkVersion|minSystemVersion|
|maxFrameworkVersion|maxSystemVersion|
|installationMode|n/a|
|configurationSettings|attributes|
|certificationLevel|certificationLevel|
|pluginAccessRight|rightRequired|

Gone in 7.1 is the idea of a plugin configuration model, and a snippet model. Instead, these elements have been rolled into the PluginAttributes map that appears in the 'manifest.xml' file required by each plugin. The fullPage object is now a single entry in the attributes mapping, which only holds the title of the fullPage.  Snippets move into a List entry key in the attributes map.  For each Snippet entry in the List, implementers can define a regular expression 'regexPattern' to match against, the rightRequired to see the Snippet, and then a list of <Scripts/> and <StyleSheets/> that determine the look and action of the Snippet.

The most readily apparent change in Plugin definition going from 7.0 to 7.1 is the location of the Settings for each plugin.  Previously, developers could define a URL to a settings page ('settingsPageTemplateURL'), which they could completely customize.  In 7.1, in order to support future portability and support, the settings page removed, and individual plugin settings have been internalized to the manifest.xml file.  A List 'settings' in the Plugin attributes map is where these settings are now defined. Each element of the list is a 'Setting', which can have the following defined:

|Attribute Name|Description|
|---|---|
|name|Name of the current setting|
|dataType|The type of the setting ( Ex. string or int or boolean)|
|value|Value for the setting|
|label|Label to be displayed for the setting|
|helpText|Associated help text for the setting|
|allowedValues|List of allowed values for population of a dropdown|
|defaultValue|The default value for the setting| 

## Convert Manifest

The first step in migrating a plugin from 7.0 to 7.1 is to review the changes that are required to move the 'manifest.xml' file to the 7.1 format. Refer to the previous chart when mapping old attributes to new. Move any plugin related settings from the unique page previously specified in the 'settingsPageTemplateURL' to the attributes map of the manifest object itself. This may require refactoring how these settings are selected, if the previous unique page was complex.


## Update UI

Move the code from your 'fullPage' file previously located on that path specified by 'desktopIncludePath' and 'mobileIncludePath' to a new file in the /ui folder named 'page.xhtml'


## Refactor Rest Service Classes

Refactor old JAX-RS based REST service classes that extended 'sailpoint.plugin.rest.AbstractPluginRestResource' to now extend 'sailpoint.rest.plugin.BasePluginResource'.  Details on this new class are elsewhere in this document. Because of this change, the new Java classes should not be part of the 'sailpoint.plugin.rest' package, but should belong to the plugin specific package developed by the implementer.


## Refactor Background Services

Any 7.0 plugins that utilized extending the 'AbstractPluginBackgroundService' for a background service will now need to extend 'sailpoint.server.BasePluginService'. Details on this new class are elsewhere in this document. In addition to refactoring the Service class itself, care should be taken to also modify the ServiceDefinition XML object. The 'implementationClass' attribute entry is now gone. Instead, the 'executor' attribute will now change from 'sailpoint.plugin.server.PluginServiceExecutor' to the actual service that used to be listed in the 'implementationClass' entry.


### Example: A prior ServiceDefinition in 7.0

```xml
<?xml version='1.0' encoding='UTF-8'?> 
<!DOCTYPE sailpoint PUBLIC "sailpoint.dtd" "sailpoint.dtd"> 
<sailpoint> 
<ServiceDefinition interval="10" hosts="global" executor="sailpoint.plugin.server.PluginServiceExecutor" name="HelloService"> 
    <Description> 
        A Service to demo something that runs in the background 
    </Description> 
    <Attributes> 
        <Map> 
            <entry key='pluginUniqueName' value='HelloWorld'/> 
            <entry key='implementationClass' value='sailpoint.plugin.helloworld.server.HelloService'/> 
        </Map> 
    </Attributes> 
</ServiceDefinition> 
</sailpoint>
```

### Example: The same ServiceDefinition in 7.1

```xml
<?xml version='1.0' encoding='UTF-8'?> 
<!DOCTYPE sailpoint PUBLIC "sailpoint.dtd" "sailpoint.dtd"> 
<sailpoint> 
<ServiceDefinition interval="10" hosts="global" executor="sailpoint.plugin.helloworld.server.HelloService" name="HelloService"> 
    <Description> 
        A Service to demo something that runs in the background 
    </Description> 
    <Attributes> 
        <Map> 
            <entry key='pluginName' value='HelloWorld'/> 
        </Map> 
    </Attributes> 
</ServiceDefinition> 
</sailpoint>
```

## List Custom classes in Manifest

Due to the changes of how plugins are loaded, and the inheritance of the object classes, it is now necessary to list the custom classes in the manifest.xml file. There are a few new valid entry keys for this purpose, 'restResources', 'serviceExecutors', 'policyExecutors', 'taskExecutors'. These entries expect a list of Strings that provide the various classes.  Explicitly list out all your new class files that are required for the plugin in these entries - remember to use package notation. From the Todo plugin manifest.xml:

```xml

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
```
---
id: plugin-java-rest-resources
title: Java Classes - Rest Resources
pagination_label: Java Classes - Rest Resources
sidebar_label: Java Classes - Rest Resources
sidebar_position: 7
sidebar_class_name: plugin_developer_guide_java_rest_resources
keywords: ['plugin']
description: Plugin Developer Guide Java Classes Rest Resources in IdentityIQ
slug: /docs/plugin-developer-guide/java-classes-rest-resources
tags: ['plugin','guide','identityiq']
---

# Java Classes - REST Resources

The plugin framework relies heavily on REST web services integration for the majority of CRUD (create, read, update, and delete) operations. To create a custom REST Resource, there are a couple requirements:

## 1. Extend BasePluginResource

The BasePluginResource class should be used as the base class for all resources. It provides access to utility methods for accessing plugin settings, getting database connections and more.

- **getConnection** - gets connection to the datasource specified in the iiq.properties file for the plugins
- **getPluginName** - this method should be overridden to return the correct name of the plugin
- **getSettingBool** - gets value of boolean plugin setting for plugin name returned by getPluginName()
- **getSettingInt** - gets value of int plugin setting for plugin name returned by getPluginName()
- **getSettingString** - gets value of String plugin setting for plugin name returned by getPluginName()
- **prepareStatement** - convenience security method for getting Java PreparedStatement object for any database queries that are required - signature is prepareStatement(Connection, String, Object...) where the String would be the SQL statement you wish to execute, the Object... would be a list of the parameters values, if any, to be used
- **authorize** - should be overridden by implementers, but by default only ensures that SystemAdministrator can see everything
  Additional methods should be introduced to handle the various endpoints required by the plugin.

## 2. Secure the endpoints

To prevent unauthorized access to your new endpoints, each should be guarded with an authorization mechanism. The simplest way to do this in the plugin framework is through 'Annotations'. In Java, an annotation is a syntactic metadata that is added, often before a method signature, that describes the parameters used in that method. Example from the Todo plugin:

```java
@GET
@Path("customplugin/{param}")
@Deferred

public CustomPluginObject getCustomPluginObject(@PathParam("param") String objectName) throws GeneralException{
    CustomPluginObject cpo = getCustomPluginService().getCustomPluginObject(objectName);
    authorize(new CustomPluginAuthorizer(cpo));
    return cpo;
}
```

An annotation should have at least three parts

- **Line 1** - The HTTP method (GET, POST, PUT, DELETE, etc)
- **Line 2** - The path or endpoint - this can be parameterized which is useful for pulling back a single record. The above example uses parameterization by adding the variable within {} tags to the end of the URL, and also declaring the @PathParam "appName" in the input arguments of the method signature
- **Line 3** - The authorization of the method - line 3 - the allowed values are
    - **@AllowAll** - this allows anyone to interrogate the endpoint
    - **@RequiredRight("<SPRight/>")** - allows users who possess the named SPRight to access the endpoint
    - **@SystemAdmin** - system administrator access only
    - **@Deferred** - Authorization is deferred to the method. When this option is selected, the implementer must also create an Authorizer class that implements the sailpoint.authorization.Authorizer interface. The Authorizer class should override the 'authorize(UserContext)' method of the base Authorizer interface. Inside of the REST resource method, the author would then call 'authorize()'. A very simple example:

```java
import sailpoint.authorization.Authorizer;
import sailpoint.authorization.UnauthorizedAccessException;
import sailpoint.tools.GeneralException;
import sailpoint.web.UserContext;

/**
* Created by adam.creaney on 2/6/17.
*/

class CustomPluginAuthorizer implements Authorizer{
    /**
     * The CustomPluginObject to check.
     */

    private CustomPluginObject cpo;
    /**
     * Constructor.
     *
     * @param CustomPluginObject the custom plugin object
     */
    public CustomPluginAuthorizer(CustomPluginObject cpo) {
        this.cpo = cpo
    }
    
    /**
     * {@inheritDoc}
     */
    @Override
    public void authorize(UserContext userContext) throws GeneralException {
        if (!(userContext.getLoggedInUser().getCapabilityManager().hasCapability("SystemAdministrator") || userContext.getLoggedInUser().getCapabilityManager().hasCapability("CustomAdmin"))) {
            throw new UnauthorizedAccessException("User does not have access to Custom Plugin");
        }
    }

}
```
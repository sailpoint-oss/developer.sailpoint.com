---
id: plugin-java-rest-resources
title: Java Classes - Rest Resources
pagination_label: Java Classes - Rest Resources
sidebar_label: Java Classes - Rest Resources
sidebar_position: 7
sidebar_class_name: plugin_developer_guide_java_rest_resources
keywords: ['plugin']
description: IdentityIQ Plugin Java Classes REST Resources 
slug: /plugin-developer-guide/java-classes-rest-resources
tags: ['plugin','guide','identityiq']
---

# Java Classes - REST Resources

The plugin framework relies heavily on REST web services integration for the majority of CRUD (create, read, update, and delete) operations. To create a custom REST resource, there are a couple requirements. This guide will cover those requirements. 

## Extend BasePluginResource

The first step to creating a custom REST resource is to use the `BasePluginResource` class as the base class for all resources. It provides access to utility methods for accessing plugin settings, getting database connections and more.

- **getConnection** - Gets connection to the datasource specified in the iiq.properties file for the plugins
- **getPluginName** - This method should be overriden to return the plugin's correct name. 
- **getSettingBool** - Gets value of boolean plugin setting for plugin name returned by `getPluginName()`.
- **getSettingInt** - Gets value of int plugin setting for plugin name returned by `getPluginName()`.
- **getSettingString** - Gets value of String plugin setting for plugin name returned by `getPluginName()`.
- **prepareStatement** - Convenience security method for getting Java `PreparedStatement` object for any required database queries - signature is `prepareStatement`(Connection, String, Object...) where the string would be the SQL statement you wish to execute and the object would be a list of the parameters values, if any, to be used.
- **authorize** - This should be overridden by implementers, but by default it only ensures that SystemAdministrator can see everything.
  Additional methods should be introduced to handle the various endpoints required by the plugin.

## Secure endpoints

The next step to creating a custom REST resource is to prevent unauthorized access to your new endpoints. To do so, you should guard each with an authorization mechanism. The simplest way to do so in the plugin framework is through 'Annotations'. In Java, an annotation is a syntactic metadata that is added, often before a method signature, to describe the parameters used in that method. Here is an example from the 'Todo' plugin:

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

- **Line 1** - The HTTP method (GET, POST, PUT, DELETE, etc).
- **Line 2** - The path or endpoint - this can be parameterized, which is useful for pulling back a single record. The earlier example uses parameterization by adding the variable within {} tags to the end of the URL and also declaring the @PathParam "appName" in the input arguments of the method signature.
- **Line 3** - The authorization of the method. The following values are allowed: 
    - **@AllowAll** - Allows anyone to interrogate the endpoint.
    - **@RequiredRight("<SPRight/>")** - Allows users with the named SPRight to access the endpoint.
    - **@SystemAdmin** - System administrator access only.
    - **@Deferred** - Authorization is deferred to the method. When this option is selected, the implementer must also create an `Authorizer` class that implements the `sailpoint.authorization.Authorize`r interface. The `Authorizer` class should override the `authorize(UserContext)` method of the base `Authorizer` interface. Inside the REST resource method, the author would then call `authorize()`. Here is a simple example:

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
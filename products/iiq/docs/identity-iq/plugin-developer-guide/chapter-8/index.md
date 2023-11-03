---
id: plugin-java-executors
title: Java Classes - Executors
pagination_label: Java Classes - Executors
sidebar_label: Java Classes - Executors
sidebar_position: 8
sidebar_class_name: plugin_developer_guide_java_executors
keywords: ['plugin']
description: Plugin Developer Guide Java Classes Executors in IdentityIQ
slug: /docs/plugin-developer-guide/java-classes-executors
tags: ['plugin','guide','identityiq']
---

# Java Classes - Plugin Executors

The plugin framework allows developers to include custom task implementations or services with their plugin. These items rely on executor classes that contain the business logic for these services.  The following executors are currently available for use by developers

1. Service Executors
2. Task Executors
3. Policy Executors

## Plugin Object Properties

When defining your plugin object you must provide a list of service executors that will be included. The list will live inside an attributes map under the key serviceExecutors.

1. Plugin Helper methods
2. All inherited Service methods
3. BasePluginTaskExecutor
4. Plugin Helper methods
5. All inherited TaskExecutor methods
6. BasePluginPolicyExecutor
7. Plugin Helper methods
8. All inherited PolicyExecutor methods.


## Plugin Helper Methods

The list of methods that are included with the BasePlugin classes are as follows:

* **getPluginName()** - returns a string value of the name of the plugin
* **getConnection()** - returns a Connection object used to query the database
* **getSettingString(String settingName)** - returns a String setting value from the Plugin Settings
* **getSettingBool( String settingName)** - returns a boolean value from the Plugin Settings
* **getSettingInt(String settingName)** - returns a integer value from the Plugin Settings

You can think of the BasePlugin classes as foundation for creating your specific objects. The biggest advantage you receive by using them is access to the Plugin Helper Methods. You are not required to use the BasePlugin classes for your implementation, you are welcome to extend directly from the parent class object you wish to implement.

## Implementing a Plugin Service Definition

When implementing a Plugin Service you'll have two parts. The first is your Service class. This will contain your business logic that you want the service to actually do. The second is the service definition xml that will be loaded into IdentityIQ. Example of both are listed below.

### BasePluginService Class

This is an abstract class that extends the Service class, as well as implements the PluginContext interface. You can use this class as the foundation for your custom Plugin Service

```java
public class MyPluginService extends BasePluginService {
    /**
     * Override the getPluginName method to return our Plugin Name
     */
    @Override

    public String getPluginName() {
        return "MyPlugin";
    }

    /**
     * Override the configure method to handle setup of our Service. Here
       we'll use one of the getSetting helper methods to pull values from
       our plugin settings
     */
    @Override

    public void configure(SailPointContext context) throws GeneralException {
        mySetting = getSettingString("mySetting");
    }
    /**
     * Write our execute method to do some cool stuff
     */
    @Override

    public void execute(SailPointContext context) throws GeneralException {
        doSomethingCool();
    }

    /**
     * Our super cool method.
     *
     * @param context The context.
     * @throws GeneralException
     */
     public void doSomethingCool(SailPointContext context)
      {
        ......insert cool code here .....
      }
}
```

### Service Definition

The Service Definition must specify a pluginName attribute. This tells IdentityIQ to use the plugin class loader for this executor.  If this attribute is not specified the executor class will not be able to be found

```xml
<ServiceDefinition name="MyService" executor="com.acme.MyPluginService" interval="60" hostes="global">
<Attributes>
<Map>
<entry key="pluginName value="MyPlugin"/>
</Map>
</Attributes>
</ServiceDefinition>
```

## Implementing a Plugin Task Executor

Following a similar pattern to the Service plugin implementation there are two parts to a Task Executor implementation. The first part is the Task Executor task which again handles your business logic for your task. The second is your TaskDefinition xml object which gets loaded into IdentityIQ.

### BasePluginTaskExecutor Class

This is an abstract class that extends the AbstractTaskExecutor class, as well as implements the PluginContext interface. You can use this class as the foundation for your custom Plugin Executor task.

```java
import sailpoint.task.BasePluginTaskExecutor;
/**
* Task executor implementation that does really cool tasks
*
*
*/

public class MyTaskExecutor extends BasePluginTaskExecutor {
    /**
     * Returns our plugin Name
     */

    @Override
    public String getPluginName() {
        return "MyPlugin";
    }
    /**
     * Runs our super cool task stuff
     */

    @Override
    public void execute(SailPointContext context, TaskSchedule schedule, TaskResult result, Attributes<String, Object> args) throws Exception {
        /******* Task implementation goes here *****/
    }
    /**
     * {@inheritDoc}
     */

    @Override
    public boolean terminate() {
        return true;
    }

}
```

### TaskDefinition

In your TaskDefintion you must include the pluginName attribute, as this attribute tells IdentityIQ to to use the plugin class loader instead of default class loader. Again if the attribute is not specified the executor class will not be able to be found.


```xml
<TaskDefinition name="My Task" executor="com.acme.MyTaskExecutor" resultAction="Delete" subType="task_item_type_generic" type="Generic">
<Attributes>
<Map>
<entry key="pluginName" value="MyPlugin" />
</Map>
</Attributes>
</TaskDefinition>
```

## Implementing a Policy Executor

Again same pattern as the other two, you'll have an executor class, and a Policy Xml object. The Policy object must contain the pluginName attribute

### BasePluginPolicyExecutor

```java
/**

* Policy executor implementation that checks to see if it's
* Tuesday.
*
*
*/

public class MyPolicyExecutor extends BasePluginPolicyExecutor {
    /**
     * {@inheritDoc}
     */

    @Override
    public String getPluginName() {
        return "My Plugin";
    }

 

 

    /**
     * {@inheritDoc}
    public List<PolicyViolation> evaluate(SailPointContext context, Policy policy, Identity id) throws GeneralException {

        List<PolicyViolation> violations = new ArrayList<>();
        if(today.equals("Tuesday"))
          {
            violations.add(createViolation(context, policy, id, numActive));
          }
        return violations;
    }

 

 

    /**
     * Creates a policy violation for the identity.
     *
     * @param context The context.
     * @param policy The policy.
     * @param identity The identity.
     * @param numActive The numer of active todos for the identity.
     * @return The violation.
     */

    private PolicyViolation createViolation(SailPointContext context, Policy policy, Identity identity, int numActive) {

        PolicyViolation violation = new PolicyViolation();
        violation.setStatus(PolicyViolation.Status.Open);
        violation.setIdentity(identity);
        violation.setPolicy(policy);
        violation.setAlertable(true);
        violation.setOwner(policy.getViolationOwnerForIdentity(context, identity));
        violation.setConstraintName("No one likes Tuesday's");
        return formatViolation(context, identity, policy, null, violation);

    }
}
```

### Policy XML

```xml
<Policy name="My Policy" type="Mine" certificationActions="Mitigated,Delegated"
configPage="genericpolicy.xhtml" executor="com.acme.MyPolicyExecutor" state="Active" violationOwnerType="Manager">
    <Attributes>
        <Map>
            <entry key="pluginName" value="MyPlugin" />
        </Map>
   </Attributes>
</Policy>
```
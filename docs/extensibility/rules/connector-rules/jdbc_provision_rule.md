---
id: jdbc-provisioning-rule
title: JDBC Provision Rule
pagination_label: JDBC Provision Rule
sidebar_label: JDBC Provision Rule
sidebar_class_name: jdbcProvisionRule
keywords: ['cloud', 'rules', 'jdbc']
description: This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.
slug: /extensibility/rules/connector-rules/jdbc-provisioning-rule
tags: ['Rules']
---

## Overview

This rule performs provisioning actions from a provisioning plan provided by a supplied JDBC connection. These actions typically issue SQL commands, such as insert, update, select, and delete.

## Execution

- **Connector Execution** - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| connection | java.sql.Connection | Reference to the current SQL connection. |
| plan | sailpoint.object.ProvisioningPlan | Provisioning plan containing the provisioning request(s). |
| application | sailpoint.object.Application | Reference to the source JDBC Application |
| schema | sailpoint.object.Schema | Reference to the schema object for the JDBC source being read. |

## Output

| Argument | Type | Purpose |
| --- | --- | --- |
| result | sailpoint.object.ProvisioningResult | ProvisioningResult object containing the provisioning request's status (success, failure, retry, etc.). |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="JDBCProvision">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="JDBCProvision">
  <Description>This example JDBC rule can process account creation requests, deletion requests, and modification requests that pertain to the “role” attribute. It logs debug messages if other account request types are submitted.</Description>
  <Source><![CDATA[
  import java.sql.Connection;
  import java.sql.DriverManager;
  import java.sql.PreparedStatement;
  import java.sql.SQLException;
  import java.sql.Types;
  import java.util.List;
  import sailpoint.api.SailPointContext;
  import sailpoint.connector.JDBCConnector;
  import sailpoint.object.Application;
  import sailpoint.object.ProvisioningPlan;
  import sailpoint.object.ProvisioningPlan.AccountRequest;
  import sailpoint.object.ProvisioningPlan.AttributeRequest;
  import sailpoint.object.ProvisioningPlan.PermissionRequest;
  import sailpoint.object.ProvisioningResult;
  import sailpoint.object.Schema;

  public String getAttributeRequestValue(AccountRequest acctReq, String attribute) {

    if ( acctReq != null ) {
      AttributeRequest attrReq = acctReq.getAttributeRequest(attribute);
      if ( attrReq != null ) {
        return attrReq.getValue();
      }
    }
    return null;
  }

  ProvisioningResult result = new ProvisioningResult();
  PreparedStatement statement;

  if ( plan != null ) {

    List accounts = plan.getAccountRequests();
    if ( ( accounts != null ) && ( accounts.size() > 0 ) ) {
      for ( AccountRequest account : accounts ) {
        try {
          if ( AccountRequest.Operation.Create.equals( account.getOperation() ) ) {
            // Ideally we should first check to see if the account already exists.
            // As written, this just assumes it does not.

            statement = connection.prepareStatement( "insert into users (login,first,last,role,status) values (?,?,?,?,?)" );
            statement.setString ( 1, (String) account.getNativeIdentity() );
            statement.setString ( 2, getAttributeRequestValue(account,"first") );
            statement.setString ( 3, getAttributeRequestValue(account,"last") );
            statement.setString ( 4, getAttributeRequestValue(account,"role") );
            statement.setString ( 5, getAttributeRequestValue(account,"status") );
            statement.executeUpdate();

            result.setStatus( ProvisioningResult.STATUS_COMMITTED );

          } else if ( AccountRequest.Operation.Modify.equals( account.getOperation() ) ) {

            // Modify account request -- change role

            PreparedStatement statement = connection.prepareStatement( "update users set role = ? where login = ?" );
            statement.setString ( 2, (String) account.getNativeIdentity() );
            if ( account != null ) {
              AttributeRequest attrReq = account.getAttributeRequest("role");
              if ( attrReq != null && ProvisioningPlan.Operation.Remove.equals(attrReq.getOperation()) ) {
                statement.setNull ( 1, Types.NULL );
                statement.executeUpdate();
              } else {
                statement.setString(1,attrReq.getValue());
                statement.executeUpdate();
              }
            }
            result.setStatus( ProvisioningResult.STATUS_COMMITTED );

          } else if ( AccountRequest.Operation.Delete.equals( account.getOperation() ) ) {

            PreparedStatement statement = connection.prepareStatement( (String) application.getAttributeValue( "account.deleteSQL" ) );

            statement.setString ( 1, (String) account.getNativeIdentity() );
            statement.executeUpdate();

            result.setStatus( ProvisioningResult.STATUS_COMMITTED );

          } else if ( AccountRequest.Operation.Disable.equals( account.getOperation() ) ) {

            // Disable, not supported.

          } else if ( AccountRequest.Operation.Enable.equals( account.getOperation() ) ) {

            // Enable, not supported.

          } else if ( AccountRequest.Operation.Lock.equals( account.getOperation() ) ) {

            // Lock, not supported.

          } else if ( AccountRequest.Operation.Unlock.equals( account.getOperation() ) ) {

            // Unlock, not supported.

          } else {
            // Unknown operation!
          }
        }
        catch( SQLException e ) {
          result.setStatus( ProvisioningResult.STATUS_FAILED );
          result.addError( e );
        }
        finally {
          if(statement != null) {
            statement.close();
          }
        }
      }
    }
  }

  return result;

  ]]></Source>
</Rule>
```

## Attach to source

Refer to [Attaching Connector-Related Rules to Sources](./index.md#jdbcprovision-rule) for details on how to attach your rule to your source.

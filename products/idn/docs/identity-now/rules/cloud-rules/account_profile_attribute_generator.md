---
id: account-profile-attribute-generator
title: Account Profile Attribute Generator
pagination_label: Account Profile Attribute Generator
sidebar_label: Account Profile Attribute Generator
sidebar_class_name: accountProfileAttributeGenerator
keywords: ['cloud', 'rules', 'account profile', 'attribute generator']
description: This rule generates complex account attribute values during provisioning, e.g. when creating an account.
slug: /docs/rules/cloud-rules/account-profile-attribute-generator
tags: ['Rules']
---

## Overview

This rule generates complex account attribute values during provisioning, e.g. when creating an account. You would typically use this rule when you are creating an account to generate attributes like usernames.

## Execution

- **Cloud Execution** - This rule executes in the IdentityNow cloud, and it has read-only access to IdentityNow data models, but it does not have access to on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint personnel.

![Rule Execution](../img/cloud_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| log | org.apache.log4j.Logger | Logger to log statements. _Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint._ |
| idn | sailpoint.server.IdnRuleUtil | Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the IdentityNow data model including identities or account information via helper methods as described in [IdnRuleUtil](../idn_rule_utility.md). |
| identity | sailpoint.object.Identity | Reference to identity object representing the identity being calculated. |
| application | sailpoint.object.Application | Read-only reference to application object that represents the source to which provisioning is being done. |
| field | sailpoint.object.Field | Field object used to get information about the attribute being generated. |

## Output

| Argument | Type             | Purpose                                   |
| -------- | ---------------- | ----------------------------------------- |
| value    | java.lang.Object | Value returned for the account attribute. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="AttributeGenerator">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example - Generate Username

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule language="beanshell" name="Generate Username" type="AttributeGenerator">
  <Description>This will generate a username.</Description>
  <Source><![CDATA[
import sailpoint.tools.GeneralException;
import java.util.Iterator;
import sailpoint.object.*;
import java.util.ArrayList;
import sailpoint.api.*;
import sailpoint.object.*;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.lang.StringUtils;

int maxIteration = 1000;

public String generateUsername ( String firstName,  String lastName, int iteration ) {

  // Data protection.
  firstName = StringUtils.trimToNull( firstName );
  lastName = StringUtils.trimToNull( lastName );

  if ( ( firstName == null ) || ( lastName == null ) )
  return null;

  // This will hold the final username;
  String username = null;

  switch ( iteration ) {
    case 0:
      username = firstName + "." + lastName;
      break;
    default:
      username = firstName + "." + lastName + ( iteration - 1 );
      break;
  }
  if ( isUnique ( username ) )
    return username;
  else if ( iteration < maxIteration )
    return generateUsername ( firstName,  lastName, ( iteration + 1 ) );
  else
    return null;
}

public boolean isUnique ( String username ) throws GeneralException {
  return !idn.accountExistsByDisplayName(application.getName(), username);
}

return generateUsername( identity.getFirstname(), identity.getLastname(), 0 );

  ]]></Source>
</Rule>
```

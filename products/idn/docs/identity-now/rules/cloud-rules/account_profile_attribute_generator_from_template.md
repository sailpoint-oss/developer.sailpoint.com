---
id: account-profile-attribute-generator-template
title: Account Profile Attribute Generator (from Template)
pagination_label: Account Profile Attribute Generator (from Template)
sidebar_label: Account Profile Attribute Generator (from Template)
sidebar_class_name: accountProfileAttributeGeneratorTemplate
keywords: ["cloud", "rules", "account profile", "attribute generator"]
description:
  Generates complex account attribute values during provisioning, e.g. when
  creating an account. Configuration comes from a template of values.
slug: /docs/rules/cloud-rules/account-profile-attribute-generator-template
tags: ["Rules"]
---

# Account Profile Attribute Generator (from Template)

## Overview

Used to generate complex value for account attributes during provisioning.
Typically used when creating an account to generate things like usernames.

## Execution

- **Cloud Execution** - This rule executes in the IdentityNow cloud, and has
  read-only access to IdentityNow data models, however it doesn't have access to
  on-premise sources or connectors.
- **Logging** - Logging statements are currently only visible to SailPoint
  personnel.

![Rule Execution](../img/cloud_execution.png)

## Input

| Argument | Type                         | Purpose                                                                                                                                                                                                                                                                |
| -------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log      | org.apache.log4j.Logger      | A logger to log statements. _Note: This executes in the cloud and logging is currently not exposed to anyone other than SailPoint._                                                                                                                                    |
| idn      | sailpoint.server.IdnRuleUtil | Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the IdentityNow data model including identities or account information via helper methods as described in [IdnRuleUtil](../idn_rule_utility.md). |
| identity | sailpoint.object.Identity    | Reference to identity object that represents the identity being calculated.                                                                                                                                                                                            |
| field    | sailpoint.object.Field       | A field object which is used to get information about the attribute being generated.                                                                                                                                                                                   |

## Output

| Argument | Type             | Purpose                                  |
| -------- | ---------------- | ---------------------------------------- |
| value    | java.lang.Object | Value returned of the account attribute. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="AttributeGeneratorFromTemplate">
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
<Rule language="beanshell" name="Generate Username" type="AttributeGeneratorFromTemplate">
  <Description>This will generate a username.</Description>
  <Source><![CDATA[
import java.util.Iterator;
import sailpoint.object.*;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;

public String generateUniqueUsername ( String loginId, int iteration)
{
  switch ( iteration )
  {
    case 0:
      username = StringUtils.left(loginId, prefixLength) + suffix;
      break;
    // Default: add numbers until we get a unique username
    default:
      username = StringUtils.left(loginId, prefixLength - String.valueOf(iteration).length()).toString();
      username = username + iteration + suffix;
      break;
  }

  if ( isUnique ( username) )
    return username;
  else
    return generateUniqueUsername ( loginId, ( iteration + 1 ));
}

public boolean isUnique ( String username )
{
  return !idn.accountExistsByDisplayName(application.getName(), username);
}

int MAX_LENGTH = 20;
String suffix =  field.getStringAttribute("template");
String loginId = identity.getAttribute("loginId");
int prefixLength = MAX_LENGTH - suffix.length();

if (StringUtils.isBlank(loginId))
  return null;
else
  return generateUniqueUsername( loginId, 0);

  ]]></Source>
</Rule>
```

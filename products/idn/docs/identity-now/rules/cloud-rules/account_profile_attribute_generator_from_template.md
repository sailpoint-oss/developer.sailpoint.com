---
id: account-profile-attribute-generator-template
title: Account Profile Attribute Generator (from Template)
pagination_label: Account Profile Attribute Generator (from Template)
sidebar_label: Account Profile Attribute Generator (from Template)
sidebar_class_name: accountProfileAttributeGeneratorTemplate
keywords: ['cloud', 'rules', 'account profile', 'attribute generator']
description: This rule generates complex account attribute values during provisioning, e.g. when creating an account. The rule's configuration comes from a template of values.
slug: /docs/rules/cloud-rules/account-profile-attribute-generator-template
tags: ['Rules']
---

# Account Profile Attribute Generator (from Template)

## Overview

This rule generates complex account attribute values during provisioning, e.g. when creating an account. The rule's configuration comes from a template of values. You would typically use this rule when you are creating an account to generate attributes like usernames.

In the example below, the template is `${firstname}.${lastname}${uniqueCounter}` which is pulled in by the `Create Unique LDAP Attribute` and used to replace the `firstname`, `lastname` and `uniqueCounter` placeholders.

```json
    {
      "name": "userName",
      "transform": {
        "type": "rule",
        "attributes": {
          "name": "Create Unique LDAP Attribute"
        }
      },
      "attributes": {
        "template": "${firstname}.${lastname}${uniqueCounter}",
        "cloudMaxUniqueChecks": "50",
        "cloudMaxSize": "20",
        "cloudRequired": "true"
      },
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    }
```

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
| field | sailpoint.object.Field | Field object used to get information about the attribute being generated. |

## Output

| Argument | Type             | Purpose                                   |
| -------- | ---------------- | ----------------------------------------- |
| value    | java.lang.Object | Value returned for the account attribute. |

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

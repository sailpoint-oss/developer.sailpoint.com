---
id: connector-executed-rules
title: Connector Executed Rules
pagination_label: Connector Executed Rules
sidebar_label: Connector Executed Rules
sidebar_position: 1
sidebar_class_name: cloudExecutedRules
keywords: ["connector", "rules"]
description: Overview of connector executed rules.
slug: /docs/rules/connector-rules
tags: ["Rules"]
---

**Connector-Executed Rules** or **Connector Rules** are rules that are executed
in the IdentityNow virtual appliance, and are usually an extension point of the
connector itself. The rules are commonly used for performing complex
connector-related functions, and likewise are very specific to only certain
connectors. Because these rules execute in the virtual appliance, they do not
have access to query the IdentityNow data model, or fetch information from
IdentityNow; instead they rely on contextual information sent from IdentityNow.
Connector-executed rules may also have managed connections supplied in their
contexts in order to support querying end systems or sources. While these
managed connections may be used, making additional connections or call-outs is
not allowed.

Unlike Cloud Rules, Connector Rules do not have a rule review process and are
directly editable via
[Connector Rule REST APIs](https://developer.sailpoint.com/apis/beta/#tag/Connector-Rule-Management).
For more details, see [Configuration Process](#configuration-process).

## Supported Connector Rules

| Rule Name                                           | Rule Type                                            | Source Type(s)                           | Purpose                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Before Creation Rule](before_after_operation_rule) | [ConnectorBeforeCreate](before_after_operation_rule) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component before a source account is created.                                                                                                                                                                                                                                    |
| [Before Modify Rule](before_after_operation_rule)   | [ConnectorBeforeModify](before_after_operation_rule) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component before a source account is modified.                                                                                                                                                                                                                                   |
| [Before Delete Rule](before_after_operation_rule)   | [ConnectorBeforeDelete](before_after_operation_rule) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component before a source account is deleted.                                                                                                                                                                                                                                    |
| [After Creation Rule](before_after_operation_rule)  | [ConnectorAfterCreate](before_after_operation_rule)  | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component after a source account is created.                                                                                                                                                                                                                                     |
| [After Modify Rule](before_after_operation_rule)    | [ConnectorAfterModify](before_after_operation_rule)  | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component after a source account is modified.                                                                                                                                                                                                                                    |
| [After Delete Rule](before_after_operation_rule)    | [ConnectorAfterDelete](before_after_operation_rule)  | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component after a source account is deleted.                                                                                                                                                                                                                                     |
| Build Map Rule                                      | BuildMap                                             | Delimited File                           | Calculates and transforms data from a parsed file during the aggregation process. _Note: This is only available for the Delimited File source type, and not Generic source types._                                                                                                                                             |
| JDBC Build Map Rule                                 | JDBCBuildMap                                         | JDBC                                     | Calculates and transforms data from a database query result during the aggregation process. Additionally, can perform additional calls back to the database. _Note: This rule is available for the JDBC generic source as well as for other sources which derive from the JDBC connector (e.g., Oracle EBS, PeopleSoft, etc.)_ |
| JDBC Provision Rule                                 | JDBCProvision                                        | JDBC                                     | Executes database queries to perform provisioning of account and accesses, for all account operations.                                                                                                                                                                                                                         |
| SAP Build Map Rule                                  | SAPBuildMap                                          | SAP HR, SAP                              | Calculates and transforms data from SAP during the aggregation process. Additionally, can perform additional calls back to the SAP system using SAP BAPI calls.                                                                                                                                                                |
| SAP HR Provisioning Modify Rule                     | SapHrOperationProvisioning                           | SAP HR                                   | This rule is used to perform SAP HR modification operations during provisioning. This is often used for attribute sync to custom SAP HR attributes.                                                                                                                                                                            |
| Web Services Before Operation Rule                  | WebServiceBeforeOperationRule                        | Web Services                             | Executes before the next web-services HTTP(S) operation. Often used to calculate values.                                                                                                                                                                                                                                       |
| Web Services After Operation Rule                   | WebServiceAfterOperationRule                         | Web Services                             | Executes after a web-services HTTP(S) operation. Often used to parse complex data.                                                                                                                                                                                                                                             |

## Configuration Process

Connector Rules are directly editable via
[Connector Rule REST APIs](https://developer.sailpoint.com/apis/beta/#tag/Connector-Rule-Management),
which provide ability to interact with rules directly.

| Name                                                                                                  | Path                                  |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [List Connector Rules](https://developer.sailpoint.com/apis/beta/#operation/getConnectorRuleList)     | `GET /beta/connector-rules/`          |
| [Get Connector Rule](https://developer.sailpoint.com/apis/beta/#operation/getConnectorRule)           | `GET /beta/connector-rules/{id}`      |
| [Create Connector Rule](https://developer.sailpoint.com/apis/beta/#operation/createConnectorRule)     | `POST /beta/connector-rules/`         |
| [Update Connector Rule](https://developer.sailpoint.com/apis/beta/#operation/updateConnectorRule)     | `PUT /beta/connector-rules/{id}`      |
| [Delete Connector Rule](https://developer.sailpoint.com/apis/beta/#operation/deleteConnectorRule)     | `DELETE /beta/connector-rules/{id}`   |
| [Validate Connector Rule](https://developer.sailpoint.com/apis/beta/#operation/validateConnectorRule) | `POST /beta/connector-rules/validate` |

SailPoint architectural optimizations have added resiliency and protections
against malformed or long-running rules. In addition, these APIs also offer
built-in protection and checking against potentially harmful code - see
[Rule Code Restrictions](../rule_guide.md#rule-code-restrictions).

## Connector Rule Object Model

```json
{
    "id": "2c91808674a2816a0174af21a6450009",
    "name": "Example WebServices Rule",
    "description": "This is just an example",
    "created": "2020-09-21T05:27:32.170Z",
    "modified": null,
    "type": "WebServiceBeforeOperationRule",
    "signature": {
        "input": [],
        "output": null
    },
    "attributes": {
        "sourceVersion": "2020-09-21 05:27:31"
    },
    "sourceCode": {
        "version": "2020-09-21 05:27:31",
        "script": "\n      import java.util.HashMap;\n      import org.json.JSONArray;\n      import org.json.JSONException;\n      import org.json.JSONObject;\n\n      import org.apache.http.HttpEntity;\n      import org.apache.http.HttpResponse;\n      import org.apache.http.client.HttpClient;\n      import org.apache.http.client.methods.HttpPost;\n      import ...
requestEndPoint.getBody().put(\"jsonBody\",requestXML); \n              }\n        }\n    }\n    log.info(\"Done Ultipro Onboarding before operation rule...\");\n    return requestEndPoint;\n"
    }
}
```

- `id` - the unique UUID that the REST APIs refers to this rule by. This is
  generated on creation.
- `name` - the name that the user interface and references might refer to this
  rule by.
- `description` - a simple description to the rule’s purpose or usage
- `created` - a timestamp when the rule was created
- `modified` - a timestamp when the rule was last modified. Default `null`
- `type` - the type of connector rule this is. For a list of supported rule
  types, see [Supported Connector Rules](#supported-connector-rules).
- `attributes` - a list of attributes
  - `sourceVersion` - A string which indicates the version of the rule.
    Typically the same as `version`
- `sourceCode` - this object houses the actual source code which makes the rule
  work
  - `version` - A string which indicates the version of the rule. Typically the
    same as `sourceVersion`.
  - `script` - The rule’s code that is run by the connector.

## Attaching Connector-Related Rules to Sources

Once a connector-related rule has been imported to your tenant, you will need to
configure any sources which need to reference that rule during the desired
operation. This configuration is accomplished through the execution of an API
call on the source. The below examples all use a `PATCH` operation for a partial
source update, however `PUT` operations will work, too, as long as the entire
source object model is provided.

For the `PATCH` operations, an `op` key has to be provided. For new
configurations this is typically set to `add` as our example shows, however they
can be any of the following:

- `add` - Add a new value to the configuration. Use this operation if this is
  the first time you are setting the value, i.e. it has never been configured
  before.
- `replace` - Use this operation to change the existing value. Use this
  operation if you are updating the value, i.e. you want to change the
  configuration.
- `remove` - Removes a value from the configuration. Use this operation if you
  want to unset a value. **Beware: Removals can be destructive if the path is
  not configured properly. This could negatively alter your source config.**

## Example API calls by Rule Type

### BeforeProvisioning Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

```json
[
  {
    "op": "add",
    "path": "/beforeProvisioningRule",
    "value": {
      "type": "RULE",
      "id": "2c918085708c274401708c2a8a760001",
      "name": "Example Rule"
    }
  }
]
```

### Correlation Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

```json
[
  {
    "op": "add",
    "path": "/accountCorrelationRule",
    "value": {
      "type": "RULE",
      "id": "2c9180896fc824e5016fc827ea880005",
      "name": "Example Rule"
    }
  }
]
```

### ManagerCorrelation Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

```json
[
  {
    "op": "replace",
    "path": "/managerCorrelationRule",
    "value": {
      "type": "RULE",
      "id": "2c9180836fb03f35016fb05dae3b0001",
      "name": "Example Rule"
    }
  }
]
```

### BuildMap Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

```json
[
  {
    "op": "add",
    "path": "/connectorAttributes/buildMapRule",
    "value": "Example Rule"
  }
]
```

### JDBCBuildMap Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

```json
[
  {
    "op": "add",
    "path": "/connectorAttributes/buildMapRule",
    "value": "Example Rule"
  }
]
```

### JDBCProvision Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

```json
[
  {
    "op": "add",
    "path": "/connectorAttributes/jdbcProvisionRule",
    "value": "Example Rule"
  }
]
```

### WebServiceBeforeOperation Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

_Note: Replace
`_`with the index location of operation as it is configured on the source. For example 0, 1, 2, etc. You can do a`GET`call on the source first to verify the index location prior to executing the`PATCH`
call to attach the rule.\*

```json
[
  {
    "op": "replace",
    "path": "/connectorAttributes/connectionParameters/[*]/beforeRule",
    "value": "Example Rule"
  }
]
```

### WebServiceAfterOperation Rule

`PATCH` /v3/sources/{id} Content-Type: `application/json-patch+json`

_Note: Replace \[\*\] with the index location of operation as it is configured
on the source. For example 0, 1, 2, etc. You can do a `GET` call on the source
first to verify the index location prior to executing the `PATCH` call to attach
the rule._

```json
[
  {
    "op": "replace",
    "path": "/connectorAttributes/connectionParameters/[*]/afterRule",
    "value": "Example Rule"
  }
]
```

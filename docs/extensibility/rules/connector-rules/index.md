---
id: connector-executed-rules
title: Connector Executed Rules
pagination_label: Connector Executed Rules
sidebar_label: Connector Executed Rules
sidebar_position: 3
sidebar_class_name: cloudExecutedRules
keywords: ['connector', 'rules']
description: Overview of connector-executed rules.
slug: /extensibility/rules/connector-rules
tags: ['Rules']
---

**Connector-Executed Rules** or **Connector Rules** are rules that are executed in the IdentityNow virtual appliance, and they are usually extensions of the connector itself. The rules are commonly used to perform complex connector-related functions, so they are specific to only certain connectors. Because these rules execute in the virtual appliance, they do not have access to query the IdentityNow data model or fetch information from IdentityNow. They rely instead on contextual information sent from IdentityNow. Connector-executed rules may also have managed connections provided in their contexts to support querying end systems or sources. Though these managed connections may be used, making additional connections or call-outs is not allowed.

Unlike cloud rules, connector rules do not have a rule review process and are directly editable with the [Connector Rule REST APIs](https://developer.sailpoint.com/docs/api/beta/connector-rule-management). For more details, see [Configuration Process](#configuration-process).

## Supported Connector Rules

| Rule Name | Rule Type | Source Type(s) | Purpose |
| --- | --- | --- | --- |
| [Before Creation Rule](./before_after_operation_rule.md) | [ConnectorBeforeCreate](./before_after_operation_rule.md) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component before a source account is created. |
| [Before Modify Rule](./before_after_operation_rule.md) | [ConnectorBeforeModify](./before_after_operation_rule.md) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component before a source account is modified. |
| [Before Delete Rule](./before_after_operation_rule.md) | [ConnectorBeforeDelete](./before_after_operation_rule.md) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component before a source account is deleted. |
| [After Creation Rule](./before_after_operation_rule.md) | [ConnectorAfterCreate](./before_after_operation_rule.md) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component after a source account is created. |
| [After Modify Rule](./before_after_operation_rule.md) | [ConnectorAfterModify](./before_after_operation_rule.md) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component after a source account is modified. |
| [After Delete Rule](./before_after_operation_rule.md) | [ConnectorAfterDelete](./before_after_operation_rule.md) | Active Directory, Azure Active Directory | Executes PowerShell commands on the IQService component after a source account is deleted. |
| Build Map Rule | BuildMap | Delimited File | Calculates and transforms data from a parsed file during the aggregation process. _Note: This is only available for the Delimited File source type, not Generic source types._ |
| [JDBC Build Map Rule](./jdbc_build_map_rule.md) | [JDBCBuildMap](./jdbc_build_map_rule.md) | JDBC | Calculates and transforms data from a database query result during the aggregation process. It can also perform additional calls back to the database. _Note: This rule is available for the JDBC Generic source, as well as other sources that derive from the JDBC connector (e.g., Oracle EBS, PeopleSoft, etc.)_ |
| [JDBC Provision Rule](./jdbc_provision_rule.md) | [JDBCProvision](./jdbc_provision_rule.md) | JDBC | Executes database queries to perform provisioning of account and access for all account operations. |
| [SAP Build Map Rule](./sap_buildmap_rule.md) | [SAPBuildMap](./sap_buildmap_rule.md) | SAP HR, SAP | Calculates and transforms data from SAP during the aggregation process. It can also perform additional calls back to the SAP system using SAP BAPI calls. |
| [SAP HR Provisioning Modify Rule](./sap_hr_provisioning_modify_rule.md) | [SapHrOperationProvisioning](./sap_hr_provisioning_modify_rule.md) | SAP HR | Performs SAP HR modification operations during provisioning. Often used for attribute sync to custom SAP HR attributes. |
| [Web Services Before Operation Rule](./web_services_before_operation_rule.md) | [WebServiceBeforeOperationRule](./web_services_before_operation_rule.md) | Web Services | Executes before the next web-services HTTP(S) operation. Often used to calculate values. |
| [Web Services After Operation Rule](./web_services_after_operation_rule.md) | [WebServiceAfterOperationRule](./web_services_after_operation_rule.md) | Web Services | Executes after a web-services HTTP(S) operation. Often used to parse complex data. |

## Configuration Process

Connector Rules are directly editable with the [Connector Rule REST APIs](https://developer.sailpoint.com/docs/api/beta/connector-rule-management), which provide ability to interact with rules directly.

| Name | Path |
| --- | --- |
| [List Connector Rules](/docs/api/beta/get-connector-rule-list) | `GET /beta/connector-rules/` |
| [Get Connector Rule](/docs/api/beta/get-connector-rule) | `GET /beta/connector-rules/{id}` |
| [Create Connector Rule](/docs/api/beta/create-connector-rule) | `POST /beta/connector-rules/` |
| [Update Connector Rule](/docs/api/beta/update-connector-rule) | `PUT /beta/connector-rules/{id}` |
| [Delete Connector Rule](/docs/api/beta/delete-connector-rule) | `DELETE /beta/connector-rules/{id}` |
| [Validate Connector Rule](/docs/api/beta/validate-connector-rule) | `POST /beta/connector-rules/validate` |

SailPoint architectural optimizations have added resiliency and protections against malformed or long-running rules. These APIs also offer built-in protection and checking against potentially harmful code. For more information, see [Rule Code Restrictions](../../rules/index.md#rule-code-restrictions).

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

- `id` - Unique UUID that the REST APIs refers to this rule by. This is generated on creation.
- `name` - Name the user interface and references may use to refer to this rule.
- `description` - Description of the rule’s purpose or usage.
- `created` - Timestamp when the rule was created.
- `modified` - Timestamp when the rule was last modified. The default is `null`.
- `type` - Type of connector rule. For a list of supported rule types, see [Supported Connector Rules](#supported-connector-rules).
- `attributes` - List of attributes.
  - `sourceVersion` - String indicating the rule's version. Typically, this is the same as `version`.
- `sourceCode` - Object housing the actual source code that makes the rule work.
  - `version` - String indicating the rule's version. Typically, this is the same as `sourceVersion`.
  - `script` - Rule’s code the connector runs. This must be an escaped string. For help with formatting, use an escaping tool like [Free Formatter.](https://www.freeformatter.com/java-dotnet-escape.html#before-output)

## Attaching Connector-Related Rules to Sources

Once a connector-related rule has been imported to your tenant, you must configure any sources that need to reference that rule during the desired operation. You can accomplish this configuration through the execution of an API call on the source. The following examples all use a `PATCH` operation for a partial source update, but `PUT` operations work too, as long as the entire source object model is provided.

For the `PATCH` operations, you must provide an `op` key. For new configurations, this key is typically set to `add` as the example shows, but they can be any of the following:

- `add` - Add a new value to the configuration. Use this operation if this is the first time you are setting the value, i.e. it has never been configured before.
- `replace` - Use this operation to change the existing value. Use this operation if you are updating the value, i.e. you want to change the configuration.
- `remove` - Removes a value from the configuration. Use this operation if you want to unset a value. **Caution: Removals can be destructive if the path is improperly configured. This can negatively alter your source config.**

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

### AfterCreate, AfterModify, AfterDelete, BeforeCreate, BeforeModify, BeforeDelete Rules

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

:::info

The value key is a list. All available AfterCreate, AfterModify, BeforeCreate, and BeforeModify rules will need to be set in the same list.

:::

```json
[
  {
       "op": "add",
       "path": "/connectorAttributes/nativeRules",
       "value": [
           "Example Rule 1",
           "Example Rule 2"
      ]
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

### SAP HR Provisioning Modify Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

```json
[
  {
    "op": "add",
    "path": "/connectorAttributes/saphrModifyProvisioningRule",
    "value": "Example Rule"
  }
]
```

### WebServiceBeforeOperation Rule

`PATCH` /v3/sources/{id}

Content-Type: `application/json-patch+json`

_Note: Replace `_`with the index location of operation the way it is configured on the source. For example, 0, 1, 2, etc. You can use a`GET`call on the source first to verify the index location prior to executing the`PATCH` call to attach the rule.\*

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

_Note: Replace \[\*\] with the index location of the operation the way it is configured on the source. For example, 0, 1, 2, etc. You can use a `GET` call on the source first to verify the index location prior to executing the `PATCH` call to attach the rule._

```json
[
  {
    "op": "replace",
    "path": "/connectorAttributes/connectionParameters/[*]/afterRule",
    "value": "Example Rule"
  }
]
```

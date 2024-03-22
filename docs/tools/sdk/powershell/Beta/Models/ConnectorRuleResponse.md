---
id: connector-rule-response
title: ConnectorRuleResponse
pagination_label: ConnectorRuleResponse
sidebar_label: ConnectorRuleResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConnectorRuleResponse'] 
slug: /tools/sdk/powershell/beta/models/connector-rule-response
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleResponse']
---


# ConnectorRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | the name of the rule | 
**Description** |  Pointer to **String** | a description of the rule&#39;s purpose | [optional] 
**Type** |   **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule" ] | the type of rule | 
**Signature** |  Pointer to [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** |  [**SourceCode**](source-code) |  | 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | a map of string to objects | [optional] 
**Id** |  **String** | the ID of the rule | 
**Created** |  **String** | an ISO 8601 UTC timestamp when this rule was created | 
**Modified** |  Pointer to **String** | an ISO 8601 UTC timestamp when this rule was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleResponse = Initialize-PSSailpointBetaConnectorRuleResponse  -Name WebServiceBeforeOperationRule `
 -Description This rule does that `
 -Type BuildMap `
 -Signature null `
 -SourceCode null `
 -Attributes {} `
 -Id 8113d48c0b914f17b4c6072d4dcb9dfe `
 -Created 021-07-22T15:59:23Z `
 -Modified 021-07-22T15:59:23Z
```

- Convert the resource to JSON
```powershell
$ConnectorRuleResponse | ConvertTo-JSON
```


[[Back to top]](#) 


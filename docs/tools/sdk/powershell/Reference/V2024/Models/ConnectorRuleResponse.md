---
id: v2024-connector-rule-response
title: ConnectorRuleResponse
pagination_label: ConnectorRuleResponse
sidebar_label: ConnectorRuleResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleResponse', 'V2024ConnectorRuleResponse'] 
slug: /tools/sdk/powershell/v2024/models/connector-rule-response
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleResponse', 'V2024ConnectorRuleResponse']
---


# ConnectorRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of the rule | [required]
**Description** | **String** | a description of the rule's purpose | [optional] 
**Type** |  **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "ResourceObjectCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule",    "ResourceObjectCustomization" ] | the type of rule | [required]
**Signature** | [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** | [**SourceCode**](source-code) |  | [required]
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | a map of string to objects | [optional] 
**Id** | **String** | the ID of the rule | [required]
**Created** | **String** | an ISO 8601 UTC timestamp when this rule was created | [required]
**Modified** | **String** | an ISO 8601 UTC timestamp when this rule was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleResponse = Initialize-V2024ConnectorRuleResponse  -Name WebServiceBeforeOperationRule `
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


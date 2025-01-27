---
id: connector-rule-update-request
title: ConnectorRuleUpdateRequest
pagination_label: ConnectorRuleUpdateRequest
sidebar_label: ConnectorRuleUpdateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleUpdateRequest'] 
slug: /tools/sdk/powershell/v2024/models/connector-rule-update-request
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleUpdateRequest']
---


# ConnectorRuleUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | the name of the rule | [required]
**Description** |  Pointer to **String** | a description of the rule's purpose | [optional] 
**Type** |   **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule" ] | the type of rule | [required]
**Signature** |  Pointer to [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** |  [**SourceCode**](source-code) |  | [required]
**Attributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | a map of string to objects | [optional] 
**Id** |  **String** | the ID of the rule to update | [required]

## Examples

- Prepare the resource
```powershell
$ConnectorRuleUpdateRequest = Initialize-PSSailpoint.V2024ConnectorRuleUpdateRequest  -Name WebServiceBeforeOperationRule `
 -Description This rule does that `
 -Type BuildMap `
 -Signature null `
 -SourceCode null `
 -Attributes {} `
 -Id 8113d48c0b914f17b4c6072d4dcb9dfe
```

- Convert the resource to JSON
```powershell
$ConnectorRuleUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 


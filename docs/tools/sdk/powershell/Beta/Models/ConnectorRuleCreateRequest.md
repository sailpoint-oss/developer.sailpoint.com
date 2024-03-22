---
id: connector-rule-create-request
title: ConnectorRuleCreateRequest
pagination_label: ConnectorRuleCreateRequest
sidebar_label: ConnectorRuleCreateRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConnectorRuleCreateRequest'] 
slug: /tools/sdk/powershell/beta/models/connector-rule-create-request
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequest']
---


# ConnectorRuleCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | the name of the rule | 
**Description** |  Pointer to **String** | a description of the rule&#39;s purpose | [optional] 
**Type** |   **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule" ] | the type of rule | 
**Signature** |  Pointer to [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** |  [**SourceCode**](source-code) |  | 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | a map of string to objects | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleCreateRequest = Initialize-PSSailpointBetaConnectorRuleCreateRequest  -Name WebServiceBeforeOperationRule `
 -Description This rule does that `
 -Type BuildMap `
 -Signature null `
 -SourceCode null `
 -Attributes {}
```

- Convert the resource to JSON
```powershell
$ConnectorRuleCreateRequest | ConvertTo-JSON
```


[[Back to top]](#) 


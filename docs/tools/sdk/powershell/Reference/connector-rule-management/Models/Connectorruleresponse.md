---
id: connectorruleresponse
title: Connectorruleresponse
pagination_label: Connectorruleresponse
sidebar_label: Connectorruleresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorruleresponse', 'Connectorruleresponse'] 
slug: /tools/sdk/powershell/connectorrulemanagement/models/connectorruleresponse
tags: ['SDK', 'Software Development Kit', 'Connectorruleresponse', 'Connectorruleresponse']
---


# Connectorruleresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of the rule | [required]
**Description** | **String** | a description of the rule's purpose | [optional] 
**Type** |  **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "ResourceObjectCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule",    "ResourceObjectCustomization" ] | the type of rule | [required]
**Signature** | [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**SourceCode** | [**Sourcecode**](sourcecode) |  | [required]
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | a map of string to objects | [optional] 
**Id** | **String** | the ID of the rule | [required]
**Created** | **String** | an ISO 8601 UTC timestamp when this rule was created | [required]
**Modified** | **String** | an ISO 8601 UTC timestamp when this rule was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$Connectorruleresponse = Initialize-Connectorruleresponse  -Name WebServiceBeforeOperationRule `
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
$Connectorruleresponse | ConvertTo-JSON
```


[[Back to top]](#) 


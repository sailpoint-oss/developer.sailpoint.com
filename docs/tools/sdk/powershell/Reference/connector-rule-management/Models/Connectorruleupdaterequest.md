---
id: connectorruleupdaterequest
title: Connectorruleupdaterequest
pagination_label: Connectorruleupdaterequest
sidebar_label: Connectorruleupdaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorruleupdaterequest', 'Connectorruleupdaterequest'] 
slug: /tools/sdk/powershell/connectorrulemanagement/models/connectorruleupdaterequest
tags: ['SDK', 'Software Development Kit', 'Connectorruleupdaterequest', 'Connectorruleupdaterequest']
---


# Connectorruleupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of the rule | [required]
**Description** | **String** | a description of the rule's purpose | [optional] 
**Type** |  **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "ResourceObjectCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule",    "ResourceObjectCustomization" ] | the type of rule | [required]
**Signature** | [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**SourceCode** | [**Sourcecode**](sourcecode) |  | [required]
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | a map of string to objects | [optional] 
**Id** | **String** | the ID of the rule to update | [required]

## Examples

- Prepare the resource
```powershell
$Connectorruleupdaterequest = Initialize-Connectorruleupdaterequest  -Name WebServiceBeforeOperationRule `
 -Description This rule does that `
 -Type BuildMap `
 -Signature null `
 -SourceCode null `
 -Attributes {} `
 -Id 8113d48c0b914f17b4c6072d4dcb9dfe
```

- Convert the resource to JSON
```powershell
$Connectorruleupdaterequest | ConvertTo-JSON
```


[[Back to top]](#) 


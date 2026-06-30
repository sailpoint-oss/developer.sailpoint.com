---
id: connectorrulecreaterequest
title: Connectorrulecreaterequest
pagination_label: Connectorrulecreaterequest
sidebar_label: Connectorrulecreaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorrulecreaterequest', 'Connectorrulecreaterequest'] 
slug: /tools/sdk/powershell/connectorrulemanagement/models/connectorrulecreaterequest
tags: ['SDK', 'Software Development Kit', 'Connectorrulecreaterequest', 'Connectorrulecreaterequest']
---


# Connectorrulecreaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of the rule | [required]
**Description** | **String** | a description of the rule's purpose | [optional] 
**Type** |  **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "ResourceObjectCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule",    "ResourceObjectCustomization" ] | the type of rule | [required]
**Signature** | [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**SourceCode** | [**Sourcecode**](sourcecode) |  | [required]
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | a map of string to objects | [optional] 

## Examples

- Prepare the resource
```powershell
$Connectorrulecreaterequest = Initialize-Connectorrulecreaterequest  -Name WebServiceBeforeOperationRule `
 -Description This rule does that `
 -Type BuildMap `
 -Signature null `
 -SourceCode null `
 -Attributes {}
```

- Convert the resource to JSON
```powershell
$Connectorrulecreaterequest | ConvertTo-JSON
```


[[Back to top]](#) 


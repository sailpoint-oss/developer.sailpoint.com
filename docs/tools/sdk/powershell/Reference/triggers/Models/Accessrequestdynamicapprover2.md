---
id: accessrequestdynamicapprover2
title: Accessrequestdynamicapprover2
pagination_label: Accessrequestdynamicapprover2
sidebar_label: Accessrequestdynamicapprover2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestdynamicapprover2', 'Accessrequestdynamicapprover2'] 
slug: /tools/sdk/powershell/triggers/models/accessrequestdynamicapprover2
tags: ['SDK', 'Software Development Kit', 'Accessrequestdynamicapprover2', 'Accessrequestdynamicapprover2']
---


# Accessrequestdynamicapprover2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity to add to the approver list for the access request. | [required]
**Name** | **String** | The name of the identity to add to the approver list for the access request. | [required]
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The type of object being referenced. | [required]

## Examples

- Prepare the resource
```powershell
$Accessrequestdynamicapprover2 = Initialize-Accessrequestdynamicapprover2  -Id 2c91808b6ef1d43e016efba0ce470906 `
 -Name Adam Adams `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$Accessrequestdynamicapprover2 | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: assignresourceownerrequest
title: Assignresourceownerrequest
pagination_label: Assignresourceownerrequest
sidebar_label: Assignresourceownerrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Assignresourceownerrequest', 'Assignresourceownerrequest'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/assignresourceownerrequest
tags: ['SDK', 'Software Development Kit', 'Assignresourceownerrequest', 'Assignresourceownerrequest']
---


# Assignresourceownerrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **Int64** | The unique identifier of the application containing the resource. | [optional] 
**FullPath** | **String** | The full path to the resource within the application (e.g., file path or object path). | [optional] 
**IdentityId** | **String** | The unique identifier (UUID) of the identity to be assigned as the resource owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$Assignresourceownerrequest = Initialize-Assignresourceownerrequest  -AppId 12345 `
 -FullPath /shared/hr/documents/employee-records.pdf `
 -IdentityId d290f1ee-6c54-4b01-90e6-d701748f0851
```

- Convert the resource to JSON
```powershell
$Assignresourceownerrequest | ConvertTo-JSON
```


[[Back to top]](#) 


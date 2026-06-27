---
id: identitypreviewrequest
title: Identitypreviewrequest
pagination_label: Identitypreviewrequest
sidebar_label: Identitypreviewrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitypreviewrequest', 'Identitypreviewrequest'] 
slug: /tools/sdk/powershell/identityprofiles/models/identitypreviewrequest
tags: ['SDK', 'Software Development Kit', 'Identitypreviewrequest', 'Identitypreviewrequest']
---


# Identitypreviewrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The Identity id | [optional] 
**IdentityAttributeConfig** | [**Identityattributeconfig**](identityattributeconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitypreviewrequest = Initialize-Identitypreviewrequest  -IdentityId null `
 -IdentityAttributeConfig null
```

- Convert the resource to JSON
```powershell
$Identitypreviewrequest | ConvertTo-JSON
```


[[Back to top]](#) 


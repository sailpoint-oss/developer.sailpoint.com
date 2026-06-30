---
id: cancelaccessrequest
title: Cancelaccessrequest
pagination_label: Cancelaccessrequest
sidebar_label: Cancelaccessrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Cancelaccessrequest', 'Cancelaccessrequest'] 
slug: /tools/sdk/powershell/accessrequests/models/cancelaccessrequest
tags: ['SDK', 'Software Development Kit', 'Cancelaccessrequest', 'Cancelaccessrequest']
---


# Cancelaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** | **String** | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | [required]
**Comment** | **String** | Reason for cancelling the pending access request. | [required]

## Examples

- Prepare the resource
```powershell
$Cancelaccessrequest = Initialize-Cancelaccessrequest  -AccountActivityId 2c9180835d2e5168015d32f890ca1581 `
 -Comment I requested this role by mistake.
```

- Convert the resource to JSON
```powershell
$Cancelaccessrequest | ConvertTo-JSON
```


[[Back to top]](#) 


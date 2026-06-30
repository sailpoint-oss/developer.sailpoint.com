---
id: requestedfordtoref
title: Requestedfordtoref
pagination_label: Requestedfordtoref
sidebar_label: Requestedfordtoref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestedfordtoref', 'Requestedfordtoref'] 
slug: /tools/sdk/powershell/accessrequests/models/requestedfordtoref
tags: ['SDK', 'Software Development Kit', 'Requestedfordtoref', 'Requestedfordtoref']
---


# Requestedfordtoref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity id for which the access is requested | [required]
**RequestedItems** | [**[]Requesteditemdtoref**](requesteditemdtoref) | the details for the access items that are requested for the identity | [required]

## Examples

- Prepare the resource
```powershell
$Requestedfordtoref = Initialize-Requestedfordtoref  -IdentityId cb89bc2f1ee6445fbea12224c526ba3a `
 -RequestedItems null
```

- Convert the resource to JSON
```powershell
$Requestedfordtoref | ConvertTo-JSON
```


[[Back to top]](#) 


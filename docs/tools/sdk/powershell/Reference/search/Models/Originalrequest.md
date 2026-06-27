---
id: originalrequest
title: Originalrequest
pagination_label: Originalrequest
sidebar_label: Originalrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Originalrequest', 'Originalrequest'] 
slug: /tools/sdk/powershell/search/models/originalrequest
tags: ['SDK', 'Software Development Kit', 'Originalrequest', 'Originalrequest']
---


# Originalrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | Account ID. | [optional] 
**Result** | [**Result**](result) |  | [optional] 
**AttributeRequests** | [**[]Attributerequest**](attributerequest) | Attribute changes requested for account. | [optional] 
**Op** | **String** | Operation used. | [optional] 
**Source** | [**Accountsource**](accountsource) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Originalrequest = Initialize-Originalrequest  -AccountId CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com `
 -Result null `
 -AttributeRequests null `
 -Op add `
 -Source null
```

- Convert the resource to JSON
```powershell
$Originalrequest | ConvertTo-JSON
```


[[Back to top]](#) 


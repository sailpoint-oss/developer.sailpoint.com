---
id: approvalattributesrequest
title: Approvalattributesrequest
pagination_label: Approvalattributesrequest
sidebar_label: Approvalattributesrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalattributesrequest', 'Approvalattributesrequest'] 
slug: /tools/sdk/powershell/approvals/models/approvalattributesrequest
tags: ['SDK', 'Software Development Kit', 'Approvalattributesrequest', 'Approvalattributesrequest']
---


# Approvalattributesrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | **map[string]String** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | **String** | Comment associated with the request. | [optional] 
**RemoveAttributeKeys** | **[]String** | List of attribute keys to be removed. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalattributesrequest = Initialize-Approvalattributesrequest  -AdditionalAttributes {"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"} `
 -Comment comment `
 -RemoveAttributeKeys ["string"]
```

- Convert the resource to JSON
```powershell
$Approvalattributesrequest | ConvertTo-JSON
```


[[Back to top]](#) 


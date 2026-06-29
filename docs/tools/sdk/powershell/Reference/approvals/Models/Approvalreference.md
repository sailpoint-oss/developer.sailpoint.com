---
id: approvalreference
title: Approvalreference
pagination_label: Approvalreference
sidebar_label: Approvalreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalreference', 'Approvalreference'] 
slug: /tools/sdk/powershell/approvals/models/approvalreference
tags: ['SDK', 'Software Development Kit', 'Approvalreference', 'Approvalreference']
---


# Approvalreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the reference object | [optional] 
**Type** | **String** | What reference object does this ID correspond to | [optional] 
**Name** | **String** | Name of the reference object | [optional] 
**Email** | **String** | Email associated with the reference object | [optional] 
**SerialOrder** | **Int64** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalreference = Initialize-Approvalreference  -Id 64012350-8fd9-4f6c-a170-1fe123683899 `
 -Type AccessRequestId `
 -Name Access Request `
 -Email user@example.com `
 -SerialOrder 0
```

- Convert the resource to JSON
```powershell
$Approvalreference | ConvertTo-JSON
```


[[Back to top]](#) 


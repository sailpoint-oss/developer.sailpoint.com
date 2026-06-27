---
id: approvalapproverequest
title: Approvalapproverequest
pagination_label: Approvalapproverequest
sidebar_label: Approvalapproverequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalapproverequest', 'Approvalapproverequest'] 
slug: /tools/sdk/powershell/approvals/models/approvalapproverequest
tags: ['SDK', 'Software Development Kit', 'Approvalapproverequest', 'Approvalapproverequest']
---


# Approvalapproverequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | **map[string]String** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | **String** | Comment associated with the request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalapproverequest = Initialize-Approvalapproverequest  -AdditionalAttributes {"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"} `
 -Comment comment
```

- Convert the resource to JSON
```powershell
$Approvalapproverequest | ConvertTo-JSON
```


[[Back to top]](#) 


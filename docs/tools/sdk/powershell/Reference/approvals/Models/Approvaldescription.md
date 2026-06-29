---
id: approvaldescription
title: Approvaldescription
pagination_label: Approvaldescription
sidebar_label: Approvaldescription
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvaldescription', 'Approvaldescription'] 
slug: /tools/sdk/powershell/approvals/models/approvaldescription
tags: ['SDK', 'Software Development Kit', 'Approvaldescription', 'Approvaldescription']
---


# Approvaldescription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The description of what the approval is asking for | [optional] 
**Locale** | **String** | What locale the description of the approval is using | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvaldescription = Initialize-Approvaldescription  -Value This access allows viewing and editing of workflow resource `
 -Locale en_US
```

- Convert the resource to JSON
```powershell
$Approvaldescription | ConvertTo-JSON
```


[[Back to top]](#) 


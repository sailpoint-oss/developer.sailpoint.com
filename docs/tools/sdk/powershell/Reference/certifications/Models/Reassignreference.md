---
id: reassignreference
title: Reassignreference
pagination_label: Reassignreference
sidebar_label: Reassignreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reassignreference', 'Reassignreference'] 
slug: /tools/sdk/powershell/certifications/models/reassignreference
tags: ['SDK', 'Software Development Kit', 'Reassignreference', 'Reassignreference']
---


# Reassignreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of item or identity being reassigned. | [required]
**Type** |  **Enum** [  "TARGET_SUMMARY",    "ITEM",    "IDENTITY_SUMMARY" ] | The type of item or identity being reassigned. | [required]

## Examples

- Prepare the resource
```powershell
$Reassignreference = Initialize-Reassignreference  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type ITEM
```

- Convert the resource to JSON
```powershell
$Reassignreference | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: reviewreassign
title: Reviewreassign
pagination_label: Reviewreassign
sidebar_label: Reviewreassign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewreassign', 'Reviewreassign'] 
slug: /tools/sdk/powershell/certifications/models/reviewreassign
tags: ['SDK', 'Software Development Kit', 'Reviewreassign', 'Reviewreassign']
---


# Reviewreassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** | [**[]Reassignreference**](reassignreference) |  | [required]
**ReassignTo** | **String** | The ID of the identity to which the certification is reassigned | [required]
**Reason** | **String** | The reason comment for why the reassign was made | [required]

## Examples

- Prepare the resource
```powershell
$Reviewreassign = Initialize-Reviewreassign  -Reassign null `
 -ReassignTo ef38f94347e94562b5bb8424a56397d8 `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$Reviewreassign | ConvertTo-JSON
```


[[Back to top]](#) 


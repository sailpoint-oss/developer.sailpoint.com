---
id: adminreviewreassign-reassign-to
title: AdminreviewreassignReassignTo
pagination_label: AdminreviewreassignReassignTo
sidebar_label: AdminreviewreassignReassignTo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AdminreviewreassignReassignTo', 'AdminreviewreassignReassignTo'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/adminreviewreassign-reassign-to
tags: ['SDK', 'Software Development Kit', 'AdminreviewreassignReassignTo', 'AdminreviewreassignReassignTo']
---


# AdminreviewreassignReassignTo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID to which the review is being assigned. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of the ID provided. | [optional] 

## Examples

- Prepare the resource
```powershell
$AdminreviewreassignReassignTo = Initialize-AdminreviewreassignReassignTo  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$AdminreviewreassignReassignTo | ConvertTo-JSON
```


[[Back to top]](#) 


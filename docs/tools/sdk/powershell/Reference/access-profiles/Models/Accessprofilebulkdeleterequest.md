---
id: accessprofilebulkdeleterequest
title: Accessprofilebulkdeleterequest
pagination_label: Accessprofilebulkdeleterequest
sidebar_label: Accessprofilebulkdeleterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofilebulkdeleterequest', 'Accessprofilebulkdeleterequest'] 
slug: /tools/sdk/powershell/accessprofiles/models/accessprofilebulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleterequest', 'Accessprofilebulkdeleterequest']
---


# Accessprofilebulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileIds** | **[]String** | List of IDs of Access Profiles to be deleted. | [optional] 
**BestEffortOnly** | **Boolean** | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofilebulkdeleterequest = Initialize-Accessprofilebulkdeleterequest  -AccessProfileIds ["2c9180847812e0b1017817051919ecca","2c9180887812e0b201781e129f151816"] `
 -BestEffortOnly true
```

- Convert the resource to JSON
```powershell
$Accessprofilebulkdeleterequest | ConvertTo-JSON
```


[[Back to top]](#) 


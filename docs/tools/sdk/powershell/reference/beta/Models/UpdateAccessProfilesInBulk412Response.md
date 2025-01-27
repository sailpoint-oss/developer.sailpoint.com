---
id: update-access-profiles-in-bulk412-response
title: UpdateAccessProfilesInBulk412Response
pagination_label: UpdateAccessProfilesInBulk412Response
sidebar_label: UpdateAccessProfilesInBulk412Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UpdateAccessProfilesInBulk412Response'] 
slug: /tools/sdk/powershell/beta/models/update-access-profiles-in-bulk412-response
tags: ['SDK', 'Software Development Kit', 'UpdateAccessProfilesInBulk412Response']
---


# UpdateAccessProfilesInBulk412Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateAccessProfilesInBulk412Response = Initialize-PSSailpoint.BetaUpdateAccessProfilesInBulk412Response  -Message  API/Feature not enabled for your organization.
```

- Convert the resource to JSON
```powershell
$UpdateAccessProfilesInBulk412Response | ConvertTo-JSON
```


[[Back to top]](#) 


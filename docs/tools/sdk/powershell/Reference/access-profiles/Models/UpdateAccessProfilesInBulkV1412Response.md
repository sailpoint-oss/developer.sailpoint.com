---
id: update-access-profiles-in-bulk-v1412-response
title: UpdateAccessProfilesInBulkV1412Response
pagination_label: UpdateAccessProfilesInBulkV1412Response
sidebar_label: UpdateAccessProfilesInBulkV1412Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UpdateAccessProfilesInBulkV1412Response', 'UpdateAccessProfilesInBulkV1412Response'] 
slug: /tools/sdk/powershell/accessprofiles/models/update-access-profiles-in-bulk-v1412-response
tags: ['SDK', 'Software Development Kit', 'UpdateAccessProfilesInBulkV1412Response', 'UpdateAccessProfilesInBulkV1412Response']
---


# UpdateAccessProfilesInBulkV1412Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateAccessProfilesInBulkV1412Response = Initialize-UpdateAccessProfilesInBulkV1412Response  -Message  API/Feature not enabled for your organization.
```

- Convert the resource to JSON
```powershell
$UpdateAccessProfilesInBulkV1412Response | ConvertTo-JSON
```


[[Back to top]](#) 


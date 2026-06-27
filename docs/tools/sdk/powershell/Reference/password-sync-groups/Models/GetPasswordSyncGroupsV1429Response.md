---
id: get-password-sync-groups-v1429-response
title: GetPasswordSyncGroupsV1429Response
pagination_label: GetPasswordSyncGroupsV1429Response
sidebar_label: GetPasswordSyncGroupsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPasswordSyncGroupsV1429Response', 'GetPasswordSyncGroupsV1429Response'] 
slug: /tools/sdk/powershell/passwordsyncgroups/models/get-password-sync-groups-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordSyncGroupsV1429Response', 'GetPasswordSyncGroupsV1429Response']
---


# GetPasswordSyncGroupsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordSyncGroupsV1429Response = Initialize-GetPasswordSyncGroupsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPasswordSyncGroupsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 


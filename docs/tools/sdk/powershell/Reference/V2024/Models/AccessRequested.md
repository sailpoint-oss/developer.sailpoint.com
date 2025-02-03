---
id: v2024-access-requested
title: AccessRequested
pagination_label: AccessRequested
sidebar_label: AccessRequested
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequested', 'V2024AccessRequested'] 
slug: /tools/sdk/powershell/v2024/models/access-requested
tags: ['SDK', 'Software Development Kit', 'AccessRequested', 'V2024AccessRequested']
---


# AccessRequested

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequest** | [**AccessRequestResponse1**](access-request-response1) |  | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**EventType** | **String** | the event type | [optional] 
**Dt** | **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequested = Initialize-PSSailpoint.V2024AccessRequested  -AccessRequest null `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -EventType AccessRequested `
 -Dt 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$AccessRequested | ConvertTo-JSON
```


[[Back to top]](#) 


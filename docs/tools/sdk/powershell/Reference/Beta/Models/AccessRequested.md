---
id: beta-access-requested
title: AccessRequested
pagination_label: AccessRequested
sidebar_label: AccessRequested
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequested', 'BetaAccessRequested'] 
slug: /tools/sdk/powershell/beta/models/access-requested
tags: ['SDK', 'Software Development Kit', 'AccessRequested', 'BetaAccessRequested']
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
$AccessRequested = Initialize-PSSailpoint.BetaAccessRequested  -AccessRequest null `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -EventType AccessRequested `
 -Dt 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$AccessRequested | ConvertTo-JSON
```


[[Back to top]](#) 


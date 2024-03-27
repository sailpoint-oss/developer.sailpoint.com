---
id: access-requested
title: AccessRequested
pagination_label: AccessRequested
sidebar_label: AccessRequested
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequested'] 
slug: /tools/sdk/powershell/beta/models/access-requested
tags: ['SDK', 'Software Development Kit', 'AccessRequested']
---


# AccessRequested

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequest** |  Pointer to [**AccessRequestResponse**](access-request-response) |  | [optional] 
**IdentityId** |  Pointer to **String** | the identity id | [optional] 
**EventType** |  Pointer to **String** | the event type | [optional] 
**Dt** |  Pointer to **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequested = Initialize-PSSailpointBetaAccessRequested  -AccessRequest null `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -EventType AccessRequested `
 -Dt 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$AccessRequested | ConvertTo-JSON
```


[[Back to top]](#) 


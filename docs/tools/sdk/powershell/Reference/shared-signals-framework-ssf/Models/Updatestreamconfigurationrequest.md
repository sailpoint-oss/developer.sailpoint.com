---
id: updatestreamconfigurationrequest
title: Updatestreamconfigurationrequest
pagination_label: Updatestreamconfigurationrequest
sidebar_label: Updatestreamconfigurationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Updatestreamconfigurationrequest', 'Updatestreamconfigurationrequest'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/updatestreamconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Updatestreamconfigurationrequest', 'Updatestreamconfigurationrequest']
---


# Updatestreamconfigurationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | ID of the stream to update. | [required]
**Delivery** | [**Deliveryrequest**](deliveryrequest) |  | [optional] 
**EventsRequested** | **[]String** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**Description** | **String** | Optional human-readable description of the stream. | [optional] 

## Examples

- Prepare the resource
```powershell
$Updatestreamconfigurationrequest = Initialize-Updatestreamconfigurationrequest  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -Delivery null `
 -EventsRequested ["https://schemas.openid.net/secevent/caep/event-type/session-revoked"] `
 -Description Updated production event stream configuration
```

- Convert the resource to JSON
```powershell
$Updatestreamconfigurationrequest | ConvertTo-JSON
```


[[Back to top]](#) 


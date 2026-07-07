---
id: replacestreamconfigurationrequest
title: Replacestreamconfigurationrequest
pagination_label: Replacestreamconfigurationrequest
sidebar_label: Replacestreamconfigurationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Replacestreamconfigurationrequest', 'Replacestreamconfigurationrequest'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/replacestreamconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Replacestreamconfigurationrequest', 'Replacestreamconfigurationrequest']
---


# Replacestreamconfigurationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | ID of the stream to replace. | [required]
**Delivery** | [**ReplacestreamconfigurationrequestDelivery**](replacestreamconfigurationrequest-delivery) |  | [required]
**EventsRequested** | **[]String** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**Description** | **String** | Optional human-readable description of the stream. | [optional] 

## Examples

- Prepare the resource
```powershell
$Replacestreamconfigurationrequest = Initialize-Replacestreamconfigurationrequest  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -Delivery null `
 -EventsRequested ["https://schemas.openid.net/secevent/caep/event-type/session-revoked"] `
 -Description Production event stream
```

- Convert the resource to JSON
```powershell
$Replacestreamconfigurationrequest | ConvertTo-JSON
```


[[Back to top]](#) 


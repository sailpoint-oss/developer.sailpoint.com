---
id: createstreamrequest
title: Createstreamrequest
pagination_label: Createstreamrequest
sidebar_label: Createstreamrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Createstreamrequest', 'Createstreamrequest'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/createstreamrequest
tags: ['SDK', 'Software Development Kit', 'Createstreamrequest', 'Createstreamrequest']
---


# Createstreamrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delivery** | [**Createstreamdeliveryrequest**](createstreamdeliveryrequest) |  | [required]
**EventsRequested** | **[]String** | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**Description** | **String** | Optional human-readable description of the stream. | [optional] 

## Examples

- Prepare the resource
```powershell
$Createstreamrequest = Initialize-Createstreamrequest  -Delivery null `
 -EventsRequested ["https://schemas.openid.net/secevent/caep/event-type/session-revoked"] `
 -Description Production event stream
```

- Convert the resource to JSON
```powershell
$Createstreamrequest | ConvertTo-JSON
```


[[Back to top]](#) 


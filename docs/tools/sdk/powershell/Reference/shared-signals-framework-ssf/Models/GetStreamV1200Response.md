---
id: get-stream-v1200-response
title: GetStreamV1200Response
pagination_label: GetStreamV1200Response
sidebar_label: GetStreamV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetStreamV1200Response', 'GetStreamV1200Response'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/get-stream-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetStreamV1200Response', 'GetStreamV1200Response']
---


# GetStreamV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | Unique stream identifier. | [optional] 
**Iss** | **String** | Issuer (transmitter) URL. | [optional] 
**Aud** | **String** | Audience for the stream. | [optional] 
**Delivery** | [**Deliveryresponse**](deliveryresponse) |  | [optional] 
**EventsSupported** | **[]String** | Event types supported by the transmitter. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).  | [optional] 
**EventsRequested** | **[]String** | Event types requested by the receiver. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**EventsDelivered** | **[]String** | Event types currently being delivered (intersection of supported and requested). | [optional] 
**Description** | **String** | Optional stream description. | [optional] 
**InactivityTimeout** | **Int32** | Inactivity timeout in seconds (optional). | [optional] 
**MinVerificationInterval** | **Int32** | Minimum verification interval in seconds (optional). | [optional] 

## Examples

- Prepare the resource
```powershell
$GetStreamV1200Response = Initialize-GetStreamV1200Response  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -Iss https://tenant.sailpoint.com `
 -Aud https://receiver.example.com `
 -Delivery null `
 -EventsSupported [https://schemas.openid.net/secevent/caep/event-type/{event-type}] `
 -EventsRequested [https://schemas.openid.net/secevent/caep/event-type/{event-type}] `
 -EventsDelivered [https://schemas.openid.net/secevent/caep/event-type/{event-type}] `
 -Description Production event stream `
 -InactivityTimeout 3600 `
 -MinVerificationInterval 300
```

- Convert the resource to JSON
```powershell
$GetStreamV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 


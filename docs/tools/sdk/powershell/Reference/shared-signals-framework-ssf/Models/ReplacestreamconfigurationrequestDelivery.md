---
id: replacestreamconfigurationrequest-delivery
title: ReplacestreamconfigurationrequestDelivery
pagination_label: ReplacestreamconfigurationrequestDelivery
sidebar_label: ReplacestreamconfigurationrequestDelivery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReplacestreamconfigurationrequestDelivery', 'ReplacestreamconfigurationrequestDelivery'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/replacestreamconfigurationrequest-delivery
tags: ['SDK', 'Software Development Kit', 'ReplacestreamconfigurationrequestDelivery', 'ReplacestreamconfigurationrequestDelivery']
---


# ReplacestreamconfigurationrequestDelivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **String** | Delivery method (only push is supported). | [required]
**EndpointUrl** | **String** | Receiver endpoint URL for push delivery. | [required]
**AuthorizationHeader** | **String** | Authorization header value for delivery requests. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReplacestreamconfigurationrequestDelivery = Initialize-ReplacestreamconfigurationrequestDelivery  -Method urn:ietf:rfc:8935 `
 -EndpointUrl https://receiver.example.com/ssf/events `
 -AuthorizationHeader Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

- Convert the resource to JSON
```powershell
$ReplacestreamconfigurationrequestDelivery | ConvertTo-JSON
```


[[Back to top]](#) 


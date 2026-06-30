---
id: createstreamdeliveryrequest
title: Createstreamdeliveryrequest
pagination_label: Createstreamdeliveryrequest
sidebar_label: Createstreamdeliveryrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Createstreamdeliveryrequest', 'Createstreamdeliveryrequest'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/createstreamdeliveryrequest
tags: ['SDK', 'Software Development Kit', 'Createstreamdeliveryrequest', 'Createstreamdeliveryrequest']
---


# Createstreamdeliveryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **String** | Delivery method (only push is supported). | [required]
**EndpointUrl** | **String** | Receiver endpoint URL for push delivery. | [required]
**AuthorizationHeader** | **String** | Authorization header value for delivery requests. | [optional] 

## Examples

- Prepare the resource
```powershell
$Createstreamdeliveryrequest = Initialize-Createstreamdeliveryrequest  -Method urn:ietf:rfc:8935 `
 -EndpointUrl https://receiver.example.com/ssf/events `
 -AuthorizationHeader Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

- Convert the resource to JSON
```powershell
$Createstreamdeliveryrequest | ConvertTo-JSON
```


[[Back to top]](#) 


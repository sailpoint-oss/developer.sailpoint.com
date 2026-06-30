---
id: deliveryrequest
title: Deliveryrequest
pagination_label: Deliveryrequest
sidebar_label: Deliveryrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Deliveryrequest', 'Deliveryrequest'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/deliveryrequest
tags: ['SDK', 'Software Development Kit', 'Deliveryrequest', 'Deliveryrequest']
---


# Deliveryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **String** | Delivery method (optional for PATCH). | [optional] 
**EndpointUrl** | **String** | Receiver endpoint URL (optional for PATCH). | [optional] 
**AuthorizationHeader** | **String** | Optional authorization header value. | [optional] 

## Examples

- Prepare the resource
```powershell
$Deliveryrequest = Initialize-Deliveryrequest  -Method urn:ietf:rfc:8935 `
 -EndpointUrl https://receiver.example.com/ssf/events `
 -AuthorizationHeader Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

- Convert the resource to JSON
```powershell
$Deliveryrequest | ConvertTo-JSON
```


[[Back to top]](#) 


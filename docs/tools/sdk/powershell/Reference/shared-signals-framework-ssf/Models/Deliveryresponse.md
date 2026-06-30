---
id: deliveryresponse
title: Deliveryresponse
pagination_label: Deliveryresponse
sidebar_label: Deliveryresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Deliveryresponse', 'Deliveryresponse'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/deliveryresponse
tags: ['SDK', 'Software Development Kit', 'Deliveryresponse', 'Deliveryresponse']
---


# Deliveryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **String** | Delivery method. | [optional] 
**EndpointUrl** | **String** | Receiver endpoint URL. | [optional] 

## Examples

- Prepare the resource
```powershell
$Deliveryresponse = Initialize-Deliveryresponse  -Method urn:ietf:rfc:8935 `
 -EndpointUrl https://receiver.example.com/ssf/events
```

- Convert the resource to JSON
```powershell
$Deliveryresponse | ConvertTo-JSON
```


[[Back to top]](#) 


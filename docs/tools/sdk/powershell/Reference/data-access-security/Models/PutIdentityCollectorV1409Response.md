---
id: put-identity-collector-v1409-response
title: PutIdentityCollectorV1409Response
pagination_label: PutIdentityCollectorV1409Response
sidebar_label: PutIdentityCollectorV1409Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutIdentityCollectorV1409Response', 'PutIdentityCollectorV1409Response'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/put-identity-collector-v1409-response
tags: ['SDK', 'Software Development Kit', 'PutIdentityCollectorV1409Response', 'PutIdentityCollectorV1409Response']
---


# PutIdentityCollectorV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]PutIdentityCollectorV1409ResponseMessagesInner**](put-identity-collector-v1409-response-messages-inner) | Generic localized reason for error. | [optional] 

## Examples

- Prepare the resource
```powershell
$PutIdentityCollectorV1409Response = Initialize-PutIdentityCollectorV1409Response  -DetailCode 409.1 Conflict `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null
```

- Convert the resource to JSON
```powershell
$PutIdentityCollectorV1409Response | ConvertTo-JSON
```


[[Back to top]](#) 


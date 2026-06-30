---
id: eventbridgeconfig
title: Eventbridgeconfig
pagination_label: Eventbridgeconfig
sidebar_label: Eventbridgeconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Eventbridgeconfig', 'Eventbridgeconfig'] 
slug: /tools/sdk/powershell/triggers/models/eventbridgeconfig
tags: ['SDK', 'Software Development Kit', 'Eventbridgeconfig', 'Eventbridgeconfig']
---


# Eventbridgeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwsAccount** | **String** | AWS Account Number (12-digit number) that has the EventBridge Partner Event Source Resource. | [required]
**AwsRegion** | **String** | AWS Region that has the EventBridge Partner Event Source Resource. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a full list of available values. | [required]

## Examples

- Prepare the resource
```powershell
$Eventbridgeconfig = Initialize-Eventbridgeconfig  -AwsAccount 123456789012 `
 -AwsRegion us-west-1
```

- Convert the resource to JSON
```powershell
$Eventbridgeconfig | ConvertTo-JSON
```


[[Back to top]](#) 


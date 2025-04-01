---
id: v2025-event-bridge-config
title: EventBridgeConfig
pagination_label: EventBridgeConfig
sidebar_label: EventBridgeConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventBridgeConfig', 'V2025EventBridgeConfig'] 
slug: /tools/sdk/powershell/v2025/models/event-bridge-config
tags: ['SDK', 'Software Development Kit', 'EventBridgeConfig', 'V2025EventBridgeConfig']
---


# EventBridgeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwsAccount** | **String** | AWS Account Number (12-digit number) that has the EventBridge Partner Event Source Resource. | [required]
**AwsRegion** | **String** | AWS Region that has the EventBridge Partner Event Source Resource. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a full list of available values. | [required]

## Examples

- Prepare the resource
```powershell
$EventBridgeConfig = Initialize-PSSailpoint.V2025EventBridgeConfig  -AwsAccount 123456789012 `
 -AwsRegion us-west-1
```

- Convert the resource to JSON
```powershell
$EventBridgeConfig | ConvertTo-JSON
```


[[Back to top]](#) 


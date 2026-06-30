---
id: taskstatusmessage
title: Taskstatusmessage
pagination_label: Taskstatusmessage
sidebar_label: Taskstatusmessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Taskstatusmessage', 'Taskstatusmessage'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/taskstatusmessage
tags: ['SDK', 'Software Development Kit', 'Taskstatusmessage', 'Taskstatusmessage']
---


# Taskstatusmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "INFO",    "WARN",    "ERROR" ] | Type of the message | [required]
**LocalizedText** | [**Localizedmessage**](localizedmessage) |  | [required]
**Key** | **String** | Key of the message | [required]
**Parameters** | [**[]TaskstatusmessageParametersInner**](taskstatusmessage-parameters-inner) | Message parameters for internationalization | [required]

## Examples

- Prepare the resource
```powershell
$Taskstatusmessage = Initialize-Taskstatusmessage  -Type INFO `
 -LocalizedText null `
 -Key akey `
 -Parameters [{"name":"value"}]
```

- Convert the resource to JSON
```powershell
$Taskstatusmessage | ConvertTo-JSON
```


[[Back to top]](#) 


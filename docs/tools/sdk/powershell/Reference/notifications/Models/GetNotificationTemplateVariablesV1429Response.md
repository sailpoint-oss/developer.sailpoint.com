---
id: get-notification-template-variables-v1429-response
title: GetNotificationTemplateVariablesV1429Response
pagination_label: GetNotificationTemplateVariablesV1429Response
sidebar_label: GetNotificationTemplateVariablesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetNotificationTemplateVariablesV1429Response', 'GetNotificationTemplateVariablesV1429Response'] 
slug: /tools/sdk/powershell/notifications/models/get-notification-template-variables-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetNotificationTemplateVariablesV1429Response', 'GetNotificationTemplateVariablesV1429Response']
---


# GetNotificationTemplateVariablesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetNotificationTemplateVariablesV1429Response = Initialize-GetNotificationTemplateVariablesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetNotificationTemplateVariablesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 


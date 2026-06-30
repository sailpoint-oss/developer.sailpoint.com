---
id: get-notification-template-variables-v1401-response
title: GetNotificationTemplateVariablesV1401Response
pagination_label: GetNotificationTemplateVariablesV1401Response
sidebar_label: GetNotificationTemplateVariablesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetNotificationTemplateVariablesV1401Response', 'GetNotificationTemplateVariablesV1401Response'] 
slug: /tools/sdk/powershell/notifications/models/get-notification-template-variables-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetNotificationTemplateVariablesV1401Response', 'GetNotificationTemplateVariablesV1401Response']
---


# GetNotificationTemplateVariablesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetNotificationTemplateVariablesV1401Response = Initialize-GetNotificationTemplateVariablesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetNotificationTemplateVariablesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 


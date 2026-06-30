---
id: notificationtemplatecontext
title: Notificationtemplatecontext
pagination_label: Notificationtemplatecontext
sidebar_label: Notificationtemplatecontext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Notificationtemplatecontext', 'Notificationtemplatecontext'] 
slug: /tools/sdk/powershell/notifications/models/notificationtemplatecontext
tags: ['SDK', 'Software Development Kit', 'Notificationtemplatecontext', 'Notificationtemplatecontext']
---


# Notificationtemplatecontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A JSON object that stores the context. | [optional] 
**Created** | **System.DateTime** | When the global context was created | [optional] 
**Modified** | **System.DateTime** | When the global context was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$Notificationtemplatecontext = Initialize-Notificationtemplatecontext  -Attributes {"productUrl":"https://test-org.identitysoon.com","brandingConfigs":{"default":{"narrowLogoURL":null,"productName":"SailPoint","standardLogoURL":null,"navigationColor":"011E64","actionButtonColor":"20B2DE","emailFromAddress":null,"activeLinkColor":"20B2DE","loginInformationalMessage":null}}} `
 -Created 2020-04-15T16:16:47.525Z `
 -Modified 2020-04-15T16:16:47.525Z
```

- Convert the resource to JSON
```powershell
$Notificationtemplatecontext | ConvertTo-JSON
```


[[Back to top]](#) 


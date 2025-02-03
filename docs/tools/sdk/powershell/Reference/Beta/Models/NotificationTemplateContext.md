---
id: beta-notification-template-context
title: NotificationTemplateContext
pagination_label: NotificationTemplateContext
sidebar_label: NotificationTemplateContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NotificationTemplateContext', 'BetaNotificationTemplateContext'] 
slug: /tools/sdk/powershell/beta/models/notification-template-context
tags: ['SDK', 'Software Development Kit', 'NotificationTemplateContext', 'BetaNotificationTemplateContext']
---


# NotificationTemplateContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A JSON object that stores the context. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the global context was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the global context was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$NotificationTemplateContext = Initialize-PSSailpoint.BetaNotificationTemplateContext  -Attributes {productUrl&#x3D;https://test-org.identitysoon.com, brandingConfigs&#x3D;{default&#x3D;{narrowLogoURL&#x3D;null, productName&#x3D;SailPoint, standardLogoURL&#x3D;null, navigationColor&#x3D;011E64, actionButtonColor&#x3D;20B2DE, emailFromAddress&#x3D;null, activeLinkColor&#x3D;20B2DE, loginInformationalMessage&#x3D;null}}} `
 -Created 2020-04-15T16:16:47.525Z `
 -Modified 2020-04-15T16:16:47.525Z
```

- Convert the resource to JSON
```powershell
$NotificationTemplateContext | ConvertTo-JSON
```


[[Back to top]](#) 


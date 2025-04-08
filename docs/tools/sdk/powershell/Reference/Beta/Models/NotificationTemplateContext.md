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
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A JSON object that stores the context. | [optional] 
**Created** | **System.DateTime** | When the global context was created | [optional] 
**Modified** | **System.DateTime** | When the global context was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$NotificationTemplateContext = Initialize-PSSailpoint.BetaNotificationTemplateContext  -Attributes {productUrl=https://test-org.identitysoon.com, brandingConfigs={default={narrowLogoURL=null, productName=SailPoint, standardLogoURL=null, navigationColor=011E64, actionButtonColor=20B2DE, emailFromAddress=null, activeLinkColor=20B2DE, loginInformationalMessage=null}}} `
 -Created 2020-04-15T16:16:47.525Z `
 -Modified 2020-04-15T16:16:47.525Z
```

- Convert the resource to JSON
```powershell
$NotificationTemplateContext | ConvertTo-JSON
```


[[Back to top]](#) 


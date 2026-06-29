---
id: mailfromattributesdto
title: Mailfromattributesdto
pagination_label: Mailfromattributesdto
sidebar_label: Mailfromattributesdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Mailfromattributesdto', 'Mailfromattributesdto'] 
slug: /tools/sdk/powershell/notifications/models/mailfromattributesdto
tags: ['SDK', 'Software Development Kit', 'Mailfromattributesdto', 'Mailfromattributesdto']
---


# Mailfromattributesdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | **String** | The identity or domain address | [optional] 
**MailFromDomain** | **String** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$Mailfromattributesdto = Initialize-Mailfromattributesdto  -Identity BobSmith@sailpoint.com `
 -MailFromDomain example.sailpoint.com
```

- Convert the resource to JSON
```powershell
$Mailfromattributesdto | ConvertTo-JSON
```


[[Back to top]](#) 


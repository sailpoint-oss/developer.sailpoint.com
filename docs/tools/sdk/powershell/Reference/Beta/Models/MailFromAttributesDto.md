---
id: beta-mail-from-attributes-dto
title: MailFromAttributesDto
pagination_label: MailFromAttributesDto
sidebar_label: MailFromAttributesDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MailFromAttributesDto', 'BetaMailFromAttributesDto'] 
slug: /tools/sdk/powershell/beta/models/mail-from-attributes-dto
tags: ['SDK', 'Software Development Kit', 'MailFromAttributesDto', 'BetaMailFromAttributesDto']
---


# MailFromAttributesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | **String** | The identity or domain address | [optional] 
**MailFromDomain** | **String** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$MailFromAttributesDto = Initialize-BetaMailFromAttributesDto  -Identity BobSmith@sailpoint.com `
 -MailFromDomain example.sailpoint.com
```

- Convert the resource to JSON
```powershell
$MailFromAttributesDto | ConvertTo-JSON
```


[[Back to top]](#) 


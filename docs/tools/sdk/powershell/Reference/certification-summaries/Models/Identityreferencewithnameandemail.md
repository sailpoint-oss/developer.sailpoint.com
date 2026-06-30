---
id: identityreferencewithnameandemail
title: Identityreferencewithnameandemail
pagination_label: Identityreferencewithnameandemail
sidebar_label: Identityreferencewithnameandemail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityreferencewithnameandemail', 'Identityreferencewithnameandemail'] 
slug: /tools/sdk/powershell/certificationsummaries/models/identityreferencewithnameandemail
tags: ['SDK', 'Software Development Kit', 'Identityreferencewithnameandemail', 'Identityreferencewithnameandemail']
---


# Identityreferencewithnameandemail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The type can only be IDENTITY. This is read-only. | [optional] 
**Id** | **String** | Identity ID. | [optional] 
**Name** | **String** | Identity's human-readable display name. This is read-only. | [optional] 
**Email** | **String** | Identity's email address. This is read-only. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityreferencewithnameandemail = Initialize-Identityreferencewithnameandemail  -Type IDENTITY `
 -Id 5168015d32f890ca15812c9180835d2e `
 -Name Alison Ferguso `
 -Email alison.ferguso@identitysoon.com
```

- Convert the resource to JSON
```powershell
$Identityreferencewithnameandemail | ConvertTo-JSON
```


[[Back to top]](#) 


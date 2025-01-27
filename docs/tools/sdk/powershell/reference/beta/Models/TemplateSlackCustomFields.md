---
id: template-slack-custom-fields
title: TemplateSlackCustomFields
pagination_label: TemplateSlackCustomFields
sidebar_label: TemplateSlackCustomFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlackCustomFields'] 
slug: /tools/sdk/powershell/beta/models/template-slack-custom-fields
tags: ['SDK', 'Software Development Kit', 'TemplateSlackCustomFields']
---


# TemplateSlackCustomFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestType** |  Pointer to **String** |  | [optional] 
**ContainsDeny** |  Pointer to **String** |  | [optional] 
**CampaignId** |  Pointer to **String** |  | [optional] 
**CampaignStatus** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlackCustomFields = Initialize-PSSailpoint.BetaTemplateSlackCustomFields  -RequestType null `
 -ContainsDeny null `
 -CampaignId null `
 -CampaignStatus null
```

- Convert the resource to JSON
```powershell
$TemplateSlackCustomFields | ConvertTo-JSON
```


[[Back to top]](#) 


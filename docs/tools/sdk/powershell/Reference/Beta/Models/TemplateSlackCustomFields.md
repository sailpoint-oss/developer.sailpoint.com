---
id: beta-template-slack-custom-fields
title: TemplateSlackCustomFields
pagination_label: TemplateSlackCustomFields
sidebar_label: TemplateSlackCustomFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlackCustomFields', 'BetaTemplateSlackCustomFields'] 
slug: /tools/sdk/powershell/beta/models/template-slack-custom-fields
tags: ['SDK', 'Software Development Kit', 'TemplateSlackCustomFields', 'BetaTemplateSlackCustomFields']
---


# TemplateSlackCustomFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestType** | **String** |  | [optional] 
**ContainsDeny** | **String** |  | [optional] 
**CampaignId** | **String** |  | [optional] 
**CampaignStatus** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlackCustomFields = Initialize-BetaTemplateSlackCustomFields  -RequestType null `
 -ContainsDeny null `
 -CampaignId null `
 -CampaignStatus null
```

- Convert the resource to JSON
```powershell
$TemplateSlackCustomFields | ConvertTo-JSON
```


[[Back to top]](#) 


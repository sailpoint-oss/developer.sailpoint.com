---
id: v2024-template-slack-custom-fields
title: TemplateSlackCustomFields
pagination_label: TemplateSlackCustomFields
sidebar_label: TemplateSlackCustomFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlackCustomFields', 'V2024TemplateSlackCustomFields'] 
slug: /tools/sdk/powershell/v2024/models/template-slack-custom-fields
tags: ['SDK', 'Software Development Kit', 'TemplateSlackCustomFields', 'V2024TemplateSlackCustomFields']
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
$TemplateSlackCustomFields = Initialize-PSSailpoint.V2024TemplateSlackCustomFields  -RequestType null `
 -ContainsDeny null `
 -CampaignId null `
 -CampaignStatus null
```

- Convert the resource to JSON
```powershell
$TemplateSlackCustomFields | ConvertTo-JSON
```


[[Back to top]](#) 


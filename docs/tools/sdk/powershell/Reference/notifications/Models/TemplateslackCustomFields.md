---
id: templateslack-custom-fields
title: TemplateslackCustomFields
pagination_label: TemplateslackCustomFields
sidebar_label: TemplateslackCustomFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateslackCustomFields', 'TemplateslackCustomFields'] 
slug: /tools/sdk/powershell/notifications/models/templateslack-custom-fields
tags: ['SDK', 'Software Development Kit', 'TemplateslackCustomFields', 'TemplateslackCustomFields']
---


# TemplateslackCustomFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestType** | **String** | The type of request | [optional] 
**ContainsDeny** | **String** | Whether the request contains a deny action | [optional] 
**CampaignId** | **String** | The campaign ID | [optional] 
**CampaignStatus** | **String** | The campaign status | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateslackCustomFields = Initialize-TemplateslackCustomFields  -RequestType null `
 -ContainsDeny null `
 -CampaignId null `
 -CampaignStatus null
```

- Convert the resource to JSON
```powershell
$TemplateslackCustomFields | ConvertTo-JSON
```


[[Back to top]](#) 


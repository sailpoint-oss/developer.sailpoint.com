---
id: beta-resource-bundle-message
title: ResourceBundleMessage
pagination_label: ResourceBundleMessage
sidebar_label: ResourceBundleMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ResourceBundleMessage'] 
slug: /tools/sdk/powershell/beta/models/resource-bundle-message
tags: ['SDK', 'Software Development Kit', 'ResourceBundleMessage']
---


# ResourceBundleMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | The key of the message | [optional] 
**Format** |  Pointer to **String** | The format of the message | [optional] 

## Examples

- Prepare the resource
```powershell
$ResourceBundleMessage = Initialize-PSSailpoint.BetaResourceBundleMessage  -Key recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_LOW `
 -Format {0,,\&quot;i18n hint: percentage\&quot;}% of identities with the same {1,,\&quot;i18n hint: name of category feature\&quot;} have this access. This information had a low impact on the overall score.
```

- Convert the resource to JSON
```powershell
$ResourceBundleMessage | ConvertTo-JSON
```


[[Back to top]](#) 


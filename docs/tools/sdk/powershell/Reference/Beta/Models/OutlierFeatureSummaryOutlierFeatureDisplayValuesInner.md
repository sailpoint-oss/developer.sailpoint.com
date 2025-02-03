---
id: beta-outlier-feature-summary-outlier-feature-display-values-inner
title: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
pagination_label: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
sidebar_label: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierFeatureSummaryOutlierFeatureDisplayValuesInner', 'BetaOutlierFeatureSummaryOutlierFeatureDisplayValuesInner'] 
slug: /tools/sdk/powershell/beta/models/outlier-feature-summary-outlier-feature-display-values-inner
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureSummaryOutlierFeatureDisplayValuesInner', 'BetaOutlierFeatureSummaryOutlierFeatureDisplayValuesInner']
---


# OutlierFeatureSummaryOutlierFeatureDisplayValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | **String** | display name | [optional] 
**Value** | **String** | value | [optional] 
**ValueType** |  **Enum** [  "INTEGER",    "FLOAT" ] | The data type of the value field | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierFeatureSummaryOutlierFeatureDisplayValuesInner = Initialize-PSSailpoint.BetaOutlierFeatureSummaryOutlierFeatureDisplayValuesInner  -DisplayName Aliza Chris `
 -Value 55 `
 -ValueType INTEGER
```

- Convert the resource to JSON
```powershell
$OutlierFeatureSummaryOutlierFeatureDisplayValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 


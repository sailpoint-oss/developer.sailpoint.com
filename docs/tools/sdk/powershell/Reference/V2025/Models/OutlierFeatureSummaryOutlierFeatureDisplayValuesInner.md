---
id: v2025-outlier-feature-summary-outlier-feature-display-values-inner
title: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
pagination_label: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
sidebar_label: OutlierFeatureSummaryOutlierFeatureDisplayValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierFeatureSummaryOutlierFeatureDisplayValuesInner', 'V2025OutlierFeatureSummaryOutlierFeatureDisplayValuesInner'] 
slug: /tools/sdk/powershell/v2025/models/outlier-feature-summary-outlier-feature-display-values-inner
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureSummaryOutlierFeatureDisplayValuesInner', 'V2025OutlierFeatureSummaryOutlierFeatureDisplayValuesInner']
---


# OutlierFeatureSummaryOutlierFeatureDisplayValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | **String** | display name | [optional] 
**Value** | **String** | value | [optional] 
**ValueType** | [**OutlierValueType**](outlier-value-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierFeatureSummaryOutlierFeatureDisplayValuesInner = Initialize-PSSailpoint.V2025OutlierFeatureSummaryOutlierFeatureDisplayValuesInner  -DisplayName Aliza Chris `
 -Value 55 `
 -ValueType null
```

- Convert the resource to JSON
```powershell
$OutlierFeatureSummaryOutlierFeatureDisplayValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 


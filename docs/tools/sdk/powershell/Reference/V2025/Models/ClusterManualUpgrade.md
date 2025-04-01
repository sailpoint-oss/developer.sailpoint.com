---
id: v2025-cluster-manual-upgrade
title: ClusterManualUpgrade
pagination_label: ClusterManualUpgrade
sidebar_label: ClusterManualUpgrade
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgrade', 'V2025ClusterManualUpgrade'] 
slug: /tools/sdk/powershell/v2025/models/cluster-manual-upgrade
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgrade', 'V2025ClusterManualUpgrade']
---


# ClusterManualUpgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Jobs** | [**[]ClusterManualUpgradeJobsInner**](cluster-manual-upgrade-jobs-inner) | List of job objects for the upgrade request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgrade = Initialize-PSSailpoint.V2025ClusterManualUpgrade  -Jobs null
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgrade | ConvertTo-JSON
```


[[Back to top]](#) 


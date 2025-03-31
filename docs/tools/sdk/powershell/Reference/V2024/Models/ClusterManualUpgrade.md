---
id: v2024-cluster-manual-upgrade
title: ClusterManualUpgrade
pagination_label: ClusterManualUpgrade
sidebar_label: ClusterManualUpgrade
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgrade', 'V2024ClusterManualUpgrade'] 
slug: /tools/sdk/powershell/v2024/models/cluster-manual-upgrade
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgrade', 'V2024ClusterManualUpgrade']
---


# ClusterManualUpgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Jobs** | [**[]ClusterManualUpgradeJobsInner**](cluster-manual-upgrade-jobs-inner) | List of job objects for the upgrade request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgrade = Initialize-PSSailpoint.V2024ClusterManualUpgrade  -Jobs null
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgrade | ConvertTo-JSON
```


[[Back to top]](#) 


---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration-ccg
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg'] 
slug: /tools/sdk/powershell/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-ccg
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg']
---


# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'ccg' process. | [required]
**Path** | **String** | Path to the 'ccg' process. | [required]
**Description** | **String** | A brief description of the 'ccg' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]
**Dependencies** | **map[string]String** | A map of dependencies for the 'ccg' process. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg = Initialize-V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg  -Version 1798_1054_241.0.0 `
 -Path sailpoint/ccg `
 -Description CCG Deployment through ops-cli `
 -RestartNeeded true `
 -Dependencies {IQService=743/IQService-743.zip, connector-bundle-jdbc=432/connector-bundle-jdbc-432.zip, connector-bundle-misc=437/connector-bundle-misc-437.zip, connector-bundle-unix=242/connector-bundle-unix-242.zip, connector-common-config=208/connector-common-config-208.zip, connector-bundle-filebased=222/connector-bundle-filebased-222.zip, connector-bundle-imprivata=3/connector-bundle-imprivata-3.zip, connector-bundle-mainframe=211/connector-bundle-mainframe-211.zip, connector-bundle-directories=681/connector-bundle-directories-681.zip, connector-bundle-sap-on-prem=196/connector-bundle-sap-on-prem-196.zip, connector-bundle-webservices=1535/connector-bundle-webservices-1535.zip, connector-bundle-sap-cloud-app=175/connector-bundle-sap-cloud-app-175.zip, connector-bundle-healthcare-epic=302/connector-bundle-healthcare-epic-302.zip, connector-bundle-hrms-oraclefusionhcm=166/connector-bundle-hrms-oraclefusionhcm-166.zip, connector-bundle-collaboration-connectors=246/connector-bundle-collaboration-connectors-246.zip}
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg | ConvertTo-JSON
```


[[Back to top]](#) 


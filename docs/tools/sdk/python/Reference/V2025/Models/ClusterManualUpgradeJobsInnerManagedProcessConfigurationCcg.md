---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration-ccg
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg'] 
slug: /tools/sdk/python/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-ccg
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg

Configuration details for the 'ccg' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'ccg' process. | [required]
**path** | **str** | Path to the 'ccg' process. | [required]
**description** | **str** | A brief description of the 'ccg' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
**dependencies** | **map[string]str** | A map of dependencies for the 'ccg' process. | [required]
}

## Example

```python
from sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_ccg import ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg

cluster_manual_upgrade_jobs_inner_managed_process_configuration_ccg = ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg(
version='1798_1054_241.0.0',
path='sailpoint/ccg',
description='CCG Deployment through ops-cli',
restart_needed=True,
dependencies={IQService=743/IQService-743.zip, connector-bundle-jdbc=432/connector-bundle-jdbc-432.zip, connector-bundle-misc=437/connector-bundle-misc-437.zip, connector-bundle-unix=242/connector-bundle-unix-242.zip, connector-common-config=208/connector-common-config-208.zip, connector-bundle-filebased=222/connector-bundle-filebased-222.zip, connector-bundle-imprivata=3/connector-bundle-imprivata-3.zip, connector-bundle-mainframe=211/connector-bundle-mainframe-211.zip, connector-bundle-directories=681/connector-bundle-directories-681.zip, connector-bundle-sap-on-prem=196/connector-bundle-sap-on-prem-196.zip, connector-bundle-webservices=1535/connector-bundle-webservices-1535.zip, connector-bundle-sap-cloud-app=175/connector-bundle-sap-cloud-app-175.zip, connector-bundle-healthcare-epic=302/connector-bundle-healthcare-epic-302.zip, connector-bundle-hrms-oraclefusionhcm=166/connector-bundle-hrms-oraclefusionhcm-166.zip, connector-bundle-collaboration-connectors=246/connector-bundle-collaboration-connectors-246.zip}
)

```
[[Back to top]](#) 


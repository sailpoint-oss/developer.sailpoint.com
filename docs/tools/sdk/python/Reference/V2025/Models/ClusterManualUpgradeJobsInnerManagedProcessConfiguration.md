---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration
title: ClusterManualUpgradeJobsInnerManagedProcessConfiguration
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfiguration
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfiguration', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfiguration'] 
slug: /tools/sdk/python/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfiguration', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfiguration']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfiguration

Configuration of the managed processes involved in the upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charon** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon) |  | [optional] 
**ccg** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-ccg) |  | [optional] 
**otel_agent** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent) |  | [optional] 
**relay** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay) |  | [optional] 
**toolbox** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-toolbox) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration import ClusterManualUpgradeJobsInnerManagedProcessConfiguration

cluster_manual_upgrade_jobs_inner_managed_process_configuration = ClusterManualUpgradeJobsInnerManagedProcessConfiguration(
charon=sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_charon.ClusterManualUpgrade_jobs_inner_managedProcessConfiguration_charon(
                    version = '3047', 
                    path = 'sailpoint/charon', 
                    description = 'version of charon used by the va', 
                    restart_needed = True, ),
ccg=sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_ccg.ClusterManualUpgrade_jobs_inner_managedProcessConfiguration_ccg(
                    version = '1798_1054_241.0.0', 
                    path = 'sailpoint/ccg', 
                    description = 'CCG Deployment through ops-cli', 
                    restart_needed = True, 
                    dependencies = {IQService=743/IQService-743.zip, connector-bundle-jdbc=432/connector-bundle-jdbc-432.zip, connector-bundle-misc=437/connector-bundle-misc-437.zip, connector-bundle-unix=242/connector-bundle-unix-242.zip, connector-common-config=208/connector-common-config-208.zip, connector-bundle-filebased=222/connector-bundle-filebased-222.zip, connector-bundle-imprivata=3/connector-bundle-imprivata-3.zip, connector-bundle-mainframe=211/connector-bundle-mainframe-211.zip, connector-bundle-directories=681/connector-bundle-directories-681.zip, connector-bundle-sap-on-prem=196/connector-bundle-sap-on-prem-196.zip, connector-bundle-webservices=1535/connector-bundle-webservices-1535.zip, connector-bundle-sap-cloud-app=175/connector-bundle-sap-cloud-app-175.zip, connector-bundle-healthcare-epic=302/connector-bundle-healthcare-epic-302.zip, connector-bundle-hrms-oraclefusionhcm=166/connector-bundle-hrms-oraclefusionhcm-166.zip, connector-bundle-collaboration-connectors=246/connector-bundle-collaboration-connectors-246.zip}, ),
otel_agent=sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_otel_agent.ClusterManualUpgrade_jobs_inner_managedProcessConfiguration_otel_agent(
                    version = '3003', 
                    path = 'sailpoint/otel_agent', 
                    description = 'version of otel_agent used by the va', 
                    restart_needed = True, ),
relay=sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_relay.ClusterManualUpgrade_jobs_inner_managedProcessConfiguration_relay(
                    version = '3000', 
                    path = 'sailpoint/relay', 
                    description = 'version of relay used by the va', 
                    restart_needed = True, ),
toolbox=sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_toolbox.ClusterManualUpgrade_jobs_inner_managedProcessConfiguration_toolbox(
                    version = '3004', 
                    path = 'sailpoint/toolbox', 
                    description = 'version of toolbox used by the va', 
                    restart_needed = True, )
)

```
[[Back to top]](#) 


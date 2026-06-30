---
id: clustermanualupgrade-jobs-inner-managed-process-configuration
title: ClustermanualupgradeJobsInnerManagedProcessConfiguration
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfiguration
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration'] 
slug: /tools/sdk/python/managed-clusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration']
---

# ClustermanualupgradeJobsInnerManagedProcessConfiguration

Configuration of the managed processes involved in the upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charon** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon**](clustermanualupgrade-jobs-inner-managed-process-configuration-charon) |  | [optional] 
**ccg** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg**](clustermanualupgrade-jobs-inner-managed-process-configuration-ccg) |  | [optional] 
**otel_agent** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent**](clustermanualupgrade-jobs-inner-managed-process-configuration-otel-agent) |  | [optional] 
**relay** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay**](clustermanualupgrade-jobs-inner-managed-process-configuration-relay) |  | [optional] 
**toolbox** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox**](clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox) |  | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration import ClustermanualupgradeJobsInnerManagedProcessConfiguration

clustermanualupgrade_jobs_inner_managed_process_configuration = ClustermanualupgradeJobsInnerManagedProcessConfiguration(
charon=sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_charon.clustermanualupgrade_jobs_inner_managedProcessConfiguration_charon(
                    version = '3047', 
                    path = 'sailpoint/charon', 
                    description = 'version of charon used by the va', 
                    restart_needed = True, ),
ccg=sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_ccg.clustermanualupgrade_jobs_inner_managedProcessConfiguration_ccg(
                    version = '1798_1054_241.0.0', 
                    path = 'sailpoint/ccg', 
                    description = 'CCG Deployment through ops-cli', 
                    restart_needed = True, 
                    dependencies = {"IQService":"743/IQService-743.zip","connector-bundle-jdbc":"432/connector-bundle-jdbc-432.zip","connector-bundle-misc":"437/connector-bundle-misc-437.zip","connector-bundle-unix":"242/connector-bundle-unix-242.zip","connector-common-config":"208/connector-common-config-208.zip","connector-bundle-filebased":"222/connector-bundle-filebased-222.zip","connector-bundle-imprivata":"3/connector-bundle-imprivata-3.zip","connector-bundle-mainframe":"211/connector-bundle-mainframe-211.zip","connector-bundle-directories":"681/connector-bundle-directories-681.zip","connector-bundle-sap-on-prem":"196/connector-bundle-sap-on-prem-196.zip","connector-bundle-webservices":"1535/connector-bundle-webservices-1535.zip","connector-bundle-sap-cloud-app":"175/connector-bundle-sap-cloud-app-175.zip","connector-bundle-healthcare-epic":"302/connector-bundle-healthcare-epic-302.zip","connector-bundle-hrms-oraclefusionhcm":"166/connector-bundle-hrms-oraclefusionhcm-166.zip","connector-bundle-collaboration-connectors":"246/connector-bundle-collaboration-connectors-246.zip"}, ),
otel_agent=sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_otel_agent.clustermanualupgrade_jobs_inner_managedProcessConfiguration_otel_agent(
                    version = '3003', 
                    path = 'sailpoint/otel_agent', 
                    description = 'version of otel_agent used by the va', 
                    restart_needed = True, ),
relay=sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_relay.clustermanualupgrade_jobs_inner_managedProcessConfiguration_relay(
                    version = '3000', 
                    path = 'sailpoint/relay', 
                    description = 'version of relay used by the va', 
                    restart_needed = True, ),
toolbox=sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_toolbox.clustermanualupgrade_jobs_inner_managedProcessConfiguration_toolbox(
                    version = '3004', 
                    path = 'sailpoint/toolbox', 
                    description = 'version of toolbox used by the va', 
                    restart_needed = True, )
)

```
[[Back to top]](#) 


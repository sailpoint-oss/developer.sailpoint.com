---
id: beta-multi-host-integrations
title: MultiHostIntegrations
pagination_label: MultiHostIntegrations
sidebar_label: MultiHostIntegrations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrations', 'BetaMultiHostIntegrations'] 
slug: /tools/sdk/python/beta/models/multi-host-integrations
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrations', 'BetaMultiHostIntegrations']
---

# MultiHostIntegrations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Multi-Host Integration ID. | [required][readonly] 
**name** | **str** | Multi-Host Integration's human-readable name. | [required]
**description** | **str** | Multi-Host Integration's human-readable description. | [required]
**owner** | [**MultiHostIntegrationsOwner**](multi-host-integrations-owner) |  | [required]
**cluster** | [**MultiHostIntegrationsCluster**](multi-host-integrations-cluster) |  | [optional] 
**type** | **str** | Specifies the type of system being managed e.g. Workday, Multi-Host - Microsoft SQL Server, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**connector** | **str** | Connector script name. | [required]
**last_source_upload_success_count** | **int** | Last successfully uploaded source count of given Multi-Host Integration. | [optional] 
**max_sources_per_agg_group** | **int** | Maximum sources that can contain in a aggregation group of Multi-Host Integration. | [optional] 
**connector_class** | **str** | Fully qualified name of the Java class that implements the connector interface. | [optional] 
**connector_attributes** | [**MultiHostIntegrationsConnectorAttributes**](multi-host-integrations-connector-attributes) |  | [optional] 
**delete_threshold** | **int** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**authoritative** | **bool** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to False]
**management_workgroup** | [**MultiHostIntegrationsManagementWorkgroup**](multi-host-integrations-management-workgroup) |  | [optional] 
**healthy** | **bool** | When this is true, it indicates that the source is healthy. | [optional] [default to False]
**status** |  **Enum** [  'SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT',    'SOURCE_STATE_ERROR_CLUSTER',    'SOURCE_STATE_ERROR_SOURCE',    'SOURCE_STATE_ERROR_VA',    'SOURCE_STATE_FAILURE_CLUSTER',    'SOURCE_STATE_FAILURE_SOURCE',    'SOURCE_STATE_HEALTHY',    'SOURCE_STATE_UNCHECKED_CLUSTER',    'SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES',    'SOURCE_STATE_UNCHECKED_SOURCE',    'SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS' ] | Status identifier that gives specific information about why a source is or isn't healthy.  | [optional] 
**since** | **datetime** | Timestamp that shows when a source health check was last performed. | [optional] 
**connector_id** | **str** | Connector ID | [optional] 
**connector_name** | **str** | Name of the connector that was chosen during source creation. | [optional] 
**connection_type** |  **Enum** [  'direct',    'file' ] | Type of connection (direct or file). | [optional] 
**connector_implementation_id** | **str** | Connector implementation ID. | [optional] 
**created** | **datetime** | Date-time when the source was created | [optional] 
**modified** | **datetime** | Date-time when the source was last modified. | [optional] 
**credential_provider_enabled** | **bool** | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [optional] [default to False]
**category** | **str** | Source category (e.g. null, CredentialProvider). | [optional] 
}

## Example

```python
from sailpoint.beta.models.multi_host_integrations import MultiHostIntegrations

multi_host_integrations = MultiHostIntegrations(
id='2c91808568c529c60168cca6f90c1324',
name='My Multi-Host Integration',
description='This is a Multi-Host Integration.',
owner=sailpoint.beta.models.multi_host_integrations_owner.MultiHostIntegrations_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'MyName', ),
cluster=sailpoint.beta.models.multi_host_integrations_cluster.MultiHostIntegrations_cluster(
                    type = 'CLUSTER', 
                    id = '2c9180866166b5b0016167c32ef31a66', 
                    name = 'Corporate Cluster', ),
type='Multi-Host - Microsoft SQL Server',
connector='multihost-microsoft-sql-server',
last_source_upload_success_count=50,
max_sources_per_agg_group=10,
connector_class='sailpoint.connector.OpenConnectorAdapter',
connector_attributes={multiHostAttributes={password=Password, user=Username, connector_files=mssql-jdbc-8.4.1.jre8.jar, authType=SQLAuthentication}, connectorFileUploadHistory={connectorFileNameUploadedDate=2024-08-29T10:20:38.896479Z}, maxAllowedSources=30, lastSourceUploadCount=50, showEntitlementSchema=true, showAccountSchema=true, multihost_status=ready},
delete_threshold=10,
authoritative=False,
management_workgroup=sailpoint.beta.models.multi_host_integrations_management_workgroup.MultiHostIntegrations_managementWorkgroup(
                    type = 'GOVERNANCE_GROUP', 
                    id = '2c91808568c529c60168cca6f90c2222', 
                    name = 'My Management Workgroup', ),
healthy=True,
status='SOURCE_STATE_HEALTHY',
since=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
connector_id='multihost-microsoft-sql-server',
connector_name='Multi-Host Microsoft SQL Server',
connection_type='direct',
connector_implementation_id='multihost-microsoft-sql-server',
created='2022-02-08T14:50:03.827Z',
modified='2024-01-23T18:08:50.897Z',
credential_provider_enabled=False,
category='CredentialProvider'
)

```
[[Back to top]](#) 


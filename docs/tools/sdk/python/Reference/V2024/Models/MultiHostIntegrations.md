---
id: v2024-multi-host-integrations
title: MultiHostIntegrations
pagination_label: MultiHostIntegrations
sidebar_label: MultiHostIntegrations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrations', 'V2024MultiHostIntegrations'] 
slug: /tools/sdk/python/v2024/models/multi-host-integrations
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrations', 'V2024MultiHostIntegrations']
---

# MultiHostIntegrations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Multi-Host Integration ID. | [required][readonly] 
**name** | **str** | Multi-Host Integration's human-readable name. | [required]
**description** | **str** | Multi-Host Integration's human-readable description. | [required]
**owner** | [**SourceOwner**](source-owner) |  | [required]
**cluster** | [**SourceCluster**](source-cluster) |  | [optional] 
**account_correlation_config** | [**SourceAccountCorrelationConfig**](source-account-correlation-config) |  | [optional] 
**account_correlation_rule** | [**SourceAccountCorrelationRule**](source-account-correlation-rule) |  | [optional] 
**manager_correlation_mapping** | [**SourceManagerCorrelationMapping**](source-manager-correlation-mapping) |  | [optional] 
**manager_correlation_rule** | [**SourceManagerCorrelationRule**](source-manager-correlation-rule) |  | [optional] 
**before_provisioning_rule** | [**MultiHostIntegrationsBeforeProvisioningRule**](multi-host-integrations-before-provisioning-rule) |  | [optional] 
**schemas** | [**[]SourceSchemasInner**](source-schemas-inner) | List of references to schema objects. | [optional] 
**password_policies** | [**[]SourcePasswordPoliciesInner**](source-password-policies-inner) | List of references to the associated PasswordPolicy objects. | [optional] 
**features** | **[]str** | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. * AUTHENTICATE: The source supports pass-through authentication. * COMPOSITE: The source supports composite source creation. * DIRECT_PERMISSIONS: The source supports returning DirectPermissions. * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. * ENABLE The source supports reading if an account is enabled or disabled. * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. * SEARCH * TEMPLATE * UNLOCK: The source supports reading if an account is locked or unlocked. * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. * SYNC_PROVISIONING: The source can provision accounts synchronously. * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. * CURRENT_PASSWORD: Some source types support verification of the current password * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. * NO_AGGREGATION: A source that does not support aggregation. * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [optional] 
**type** | **str** | Specifies the type of system being managed e.g. Workday, Multi-Host - Microsoft SQL Server, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**connector** | **str** | Connector script name. | [required]
**connector_class** | **str** | Fully qualified name of the Java class that implements the connector interface. | [optional] 
**connector_attributes** | [**MultiHostIntegrationsConnectorAttributes**](multi-host-integrations-connector-attributes) |  | [optional] 
**delete_threshold** | **int** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**authoritative** | **bool** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to False]
**management_workgroup** | [**SourceManagementWorkgroup**](source-management-workgroup) |  | [optional] 
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
**accounts_file** | [**MultiHostIntegrationsAccountsFile**](multi-host-integrations-accounts-file) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.multi_host_integrations import MultiHostIntegrations

multi_host_integrations = MultiHostIntegrations(
id='2c91808568c529c60168cca6f90c1324',
name='My Multi-Host Integration',
description='This is a Multi-Host Integration.',
owner=sailpoint.v2024.models.source_owner.Source_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'MyName', ),
cluster=sailpoint.v2024.models.source_cluster.Source_cluster(
                    type = 'CLUSTER', 
                    id = '2c9180866166b5b0016167c32ef31a66', 
                    name = 'Corporate Cluster', ),
account_correlation_config=sailpoint.v2024.models.source_account_correlation_config.Source_accountCorrelationConfig(
                    type = 'ACCOUNT_CORRELATION_CONFIG', 
                    id = '2c9180855d191c59015d28583727245a', 
                    name = 'Directory [source-62867] Account Correlation', ),
account_correlation_rule=sailpoint.v2024.models.source_account_correlation_rule.Source_accountCorrelationRule(
                    type = 'RULE', 
                    id = '2c918085708c274401708c2a8a760001', 
                    name = 'Example Rule', ),
manager_correlation_mapping=,
manager_correlation_rule=sailpoint.v2024.models.source_manager_correlation_rule.Source_managerCorrelationRule(
                    type = 'RULE', 
                    id = '2c918085708c274401708c2a8a760001', 
                    name = 'Example Rule', ),
before_provisioning_rule=sailpoint.v2024.models.multi_host_integrations_before_provisioning_rule.MultiHostIntegrations_beforeProvisioningRule(
                    type = 'RULE', 
                    id = '2c918085708c274401708c2a8a760001', 
                    name = 'Example Rule', ),
schemas=[{type=CONNECTOR_SCHEMA, id=2c9180835d191a86015d28455b4b232a, name=account}, {type=CONNECTOR_SCHEMA, id=2c9180835d191a86015d28455b4b232b, name=group}],
password_policies=[{type=PASSWORD_POLICY, id=2c9180855d191c59015d291ceb053980, name=Corporate Password Policy}, {type=PASSWORD_POLICY, id=2c9180855d191c59015d291ceb057777, name=Vendor Password Policy}],
features=[PROVISIONING, NO_PERMISSIONS_PROVISIONING, GROUPS_HAVE_MEMBERS],
type='Multi-Host - Microsoft SQL Server',
connector='multihost-microsoft-sql-server',
connector_class='sailpoint.connector.OpenConnectorAdapter',
connector_attributes={multiHostAttributes={password=Password, user=Username, connector_files=mssql-jdbc-8.4.1.jre8.jar, authType=SQLAuthentication}, connectorFileUploadHistory={connectorFileNameUploadedDate=2024-08-29T10:20:38.896479Z}, maxAllowedSources=30, lastSourceUploadCount=50, showEntitlementSchema=true, showAccountSchema=true, multihost_status=ready},
delete_threshold=10,
authoritative=False,
management_workgroup=sailpoint.v2024.models.source_management_workgroup.Source_managementWorkgroup(
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
category='CredentialProvider',
accounts_file=sailpoint.v2024.models.multi_host_integrations_accounts_file.MultiHostIntegrations_accountsFile(
                    name = 'My Accounts File', 
                    key = '2c91808568c529c60168cca6f90c2222', 
                    upload_time = '2022-02-08T14:50:03.827Z', 
                    expiry = '2022-02-08T14:50:03.827Z', 
                    expired = False, )
)

```
[[Back to top]](#) 


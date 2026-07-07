---
id: v1-source-v1
title: SourceV1
pagination_label: SourceV1
sidebar_label: SourceV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SourceV1', 'v1SourceV1']
slug: /tools/sdk/typescript/sources/models/source-v1
tags: ['SDK', 'Software Development Kit', 'SourceV1', 'v1SourceV1']
---

# SourceV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Source ID. | [readonly] [default to undefined]
**name** | `string` | Source\'s human-readable name. | [default to undefined]
**description** | **(optional)** `string` | Source\'s human-readable description. | [default to undefined]
**owner** | `SourceOwnerV1` |  | [default to undefined]
**cluster** | **(optional)** `SourceClusterV1` |  | [default to undefined]
**accountCorrelationConfig** | **(optional)** `SourceAccountCorrelationConfigV1` |  | [default to undefined]
**accountCorrelationRule** | **(optional)** `SourceAccountCorrelationRuleV1` |  | [default to undefined]
**managerCorrelationMapping** | **(optional)** `SourceManagerCorrelationMappingV1` |  | [default to undefined]
**managerCorrelationRule** | **(optional)** `SourceManagerCorrelationRuleV1` |  | [default to undefined]
**beforeProvisioningRule** | **(optional)** `SourceBeforeProvisioningRuleV1` |  | [default to undefined]
**schemas** | **(optional)** `Array<SourceSchemasInnerV1>` | List of references to schema objects. | [default to undefined]
**passwordPolicies** | **(optional)** `Array<SourcePasswordPoliciesInnerV1>` | List of references to the associated PasswordPolicy objects. | [default to undefined]
**features** | **(optional)** `Array<string>` | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. * AUTHENTICATE: The source supports pass-through authentication. * COMPOSITE: The source supports composite source creation. * DIRECT_PERMISSIONS: The source supports returning DirectPermissions. * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. * ENABLE The source supports reading if an account is enabled or disabled. * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. * SEARCH * TEMPLATE * UNLOCK: The source supports reading if an account is locked or unlocked. * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. * SYNC_PROVISIONING: The source can provision accounts synchronously. * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. * CURRENT_PASSWORD: Some source types support verification of the current password * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. * NO_AGGREGATION: A source that does not support aggregation. * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [default to undefined]
**type** | **(optional)** `string` | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`.  | [default to undefined]
**connector** | `string` | Connector script name. | [default to undefined]
**connectorClass** | **(optional)** `string` | Fully qualified name of the Java class that implements the connector interface. | [default to undefined]
**connectorAttributes** | **(optional)** `object` | Connector specific configuration. This configuration will differ from type to type. | [default to undefined]
**deleteThreshold** | **(optional)** `number` | Number from 0 to 100 that specifies when to skip the delete phase. | [default to undefined]
**authoritative** | **(optional)** `boolean` | When this is true, it indicates that the source is referenced by an identity profile. | [default to false]
**managementWorkgroup** | **(optional)** `SourceManagementWorkgroupV1` |  | [default to undefined]
**healthy** | **(optional)** `boolean` | When this is true, it indicates that the source is healthy. | [default to false]
**status** | **(optional)** `string` | Status identifier that gives specific information about why a source is or isn\'t healthy.  | [default to undefined]
**since** | **(optional)** `string` | Timestamp that shows when a source health check was last performed. | [default to undefined]
**connectorId** | **(optional)** `string` | Connector ID | [default to undefined]
**connectorName** | **(optional)** `string` | Name of the connector that was chosen during source creation. | [default to undefined]
**connectionType** | **(optional)** `string` | Type of connection (direct or file). | [default to undefined]
**connectorImplementationId** | **(optional)** `string` | Connector implementation ID. | [default to undefined]
**created** | **(optional)** `string` | Date-time when the source was created | [default to undefined]
**modified** | **(optional)** `string` | Date-time when the source was last modified. | [default to undefined]
**credentialProviderEnabled** | **(optional)** `boolean` | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [default to false]
**category** | **(optional)** `string` | Source category (e.g. null, CredentialProvider). | [default to undefined]


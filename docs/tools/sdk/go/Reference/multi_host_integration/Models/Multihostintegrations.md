---
id: v1-multihostintegrations
title: Multihostintegrations
pagination_label: Multihostintegrations
sidebar_label: Multihostintegrations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Multihostintegrations', 'V1Multihostintegrations'] 
slug: /tools/sdk/go/multihostintegration/models/multihostintegrations
tags: ['SDK', 'Software Development Kit', 'Multihostintegrations', 'V1Multihostintegrations']
---

# Multihostintegrations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Multi-Host Integration ID. | [readonly] 
**Name** | **string** | Multi-Host Integration's human-readable name. | 
**Description** | **string** | Multi-Host Integration's human-readable description. | 
**Owner** | [**MultihostintegrationsOwner**](multihostintegrations-owner) |  | 
**Cluster** | Pointer to [**NullableMultihostintegrationsCluster**](multihostintegrations-cluster) |  | [optional] 
**AccountCorrelationConfig** | Pointer to [**NullableMultihostintegrationsAccountCorrelationConfig**](multihostintegrations-account-correlation-config) |  | [optional] 
**AccountCorrelationRule** | Pointer to [**NullableMultihostintegrationsAccountCorrelationRule**](multihostintegrations-account-correlation-rule) |  | [optional] 
**ManagerCorrelationMapping** | Pointer to [**MultihostintegrationsManagerCorrelationMapping**](multihostintegrations-manager-correlation-mapping) |  | [optional] 
**ManagerCorrelationRule** | Pointer to [**NullableMultihostintegrationsManagerCorrelationRule**](multihostintegrations-manager-correlation-rule) |  | [optional] 
**BeforeProvisioningRule** | Pointer to [**NullableMultihostintegrationsBeforeProvisioningRule**](multihostintegrations-before-provisioning-rule) |  | [optional] 
**Schemas** | Pointer to [**[]MultihostintegrationsSchemasInner**](multihostintegrations-schemas-inner) | List of references to schema objects. | [optional] 
**PasswordPolicies** | Pointer to [**[]MultihostintegrationsPasswordPoliciesInner**](multihostintegrations-password-policies-inner) | List of references to the associated PasswordPolicy objects. | [optional] 
**Features** | Pointer to **[]string** | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. * AUTHENTICATE: The source supports pass-through authentication. * COMPOSITE: The source supports composite source creation. * DIRECT_PERMISSIONS: The source supports returning DirectPermissions. * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. * ENABLE The source supports reading if an account is enabled or disabled. * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. * SEARCH * TEMPLATE * UNLOCK: The source supports reading if an account is locked or unlocked. * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. * SYNC_PROVISIONING: The source can provision accounts synchronously. * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. * CURRENT_PASSWORD: Some source types support verification of the current password * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. * NO_AGGREGATION: A source that does not support aggregation. * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [optional] 
**Type** | Pointer to **string** | Specifies the type of system being managed e.g. Workday, Multi-Host - Microsoft SQL Server, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`. | [optional] 
**Connector** | **string** | Connector script name. | 
**ConnectorClass** | Pointer to **string** | Fully qualified name of the Java class that implements the connector interface. | [optional] 
**ConnectorAttributes** | Pointer to [**MultihostintegrationsConnectorAttributes**](multihostintegrations-connector-attributes) |  | [optional] 
**DeleteThreshold** | Pointer to **int32** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**Authoritative** | Pointer to **bool** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to false]
**ManagementWorkgroup** | Pointer to [**NullableMultihostintegrationsManagementWorkgroup**](multihostintegrations-management-workgroup) |  | [optional] 
**Healthy** | Pointer to **bool** | When this is true, it indicates that the source is healthy. | [optional] [default to false]
**Status** | Pointer to **string** | Status identifier that gives specific information about why a source is or isn't healthy. | [optional] 
**Since** | Pointer to **SailPointTime** | Timestamp that shows when a source health check was last performed. | [optional] 
**ConnectorId** | Pointer to **string** | Connector ID | [optional] 
**ConnectorName** | Pointer to **string** | Name of the connector that was chosen during source creation. | [optional] 
**ConnectionType** | Pointer to **string** | Type of connection (direct or file). | [optional] 
**ConnectorImplementationId** | Pointer to **string** | Connector implementation ID. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the source was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Date-time when the source was last modified. | [optional] 
**CredentialProviderEnabled** | Pointer to **bool** | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [optional] [default to false]
**Category** | Pointer to **NullableString** | Source category (e.g. null, CredentialProvider). | [optional] 
**AccountsFile** | Pointer to [**NullableMultihostintegrationsAccountsFile**](multihostintegrations-accounts-file) |  | [optional] 

## Methods

### NewMultihostintegrations

`func NewMultihostintegrations(id string, name string, description string, owner MultihostintegrationsOwner, connector string, ) *Multihostintegrations`

NewMultihostintegrations instantiates a new Multihostintegrations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostintegrationsWithDefaults

`func NewMultihostintegrationsWithDefaults() *Multihostintegrations`

NewMultihostintegrationsWithDefaults instantiates a new Multihostintegrations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Multihostintegrations) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Multihostintegrations) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Multihostintegrations) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Multihostintegrations) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Multihostintegrations) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Multihostintegrations) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Multihostintegrations) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Multihostintegrations) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Multihostintegrations) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *Multihostintegrations) GetOwner() MultihostintegrationsOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Multihostintegrations) GetOwnerOk() (*MultihostintegrationsOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Multihostintegrations) SetOwner(v MultihostintegrationsOwner)`

SetOwner sets Owner field to given value.


### GetCluster

`func (o *Multihostintegrations) GetCluster() MultihostintegrationsCluster`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *Multihostintegrations) GetClusterOk() (*MultihostintegrationsCluster, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *Multihostintegrations) SetCluster(v MultihostintegrationsCluster)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *Multihostintegrations) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### SetClusterNil

`func (o *Multihostintegrations) SetClusterNil(b bool)`

 SetClusterNil sets the value for Cluster to be an explicit nil

### UnsetCluster
`func (o *Multihostintegrations) UnsetCluster()`

UnsetCluster ensures that no value is present for Cluster, not even an explicit nil
### GetAccountCorrelationConfig

`func (o *Multihostintegrations) GetAccountCorrelationConfig() MultihostintegrationsAccountCorrelationConfig`

GetAccountCorrelationConfig returns the AccountCorrelationConfig field if non-nil, zero value otherwise.

### GetAccountCorrelationConfigOk

`func (o *Multihostintegrations) GetAccountCorrelationConfigOk() (*MultihostintegrationsAccountCorrelationConfig, bool)`

GetAccountCorrelationConfigOk returns a tuple with the AccountCorrelationConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCorrelationConfig

`func (o *Multihostintegrations) SetAccountCorrelationConfig(v MultihostintegrationsAccountCorrelationConfig)`

SetAccountCorrelationConfig sets AccountCorrelationConfig field to given value.

### HasAccountCorrelationConfig

`func (o *Multihostintegrations) HasAccountCorrelationConfig() bool`

HasAccountCorrelationConfig returns a boolean if a field has been set.

### SetAccountCorrelationConfigNil

`func (o *Multihostintegrations) SetAccountCorrelationConfigNil(b bool)`

 SetAccountCorrelationConfigNil sets the value for AccountCorrelationConfig to be an explicit nil

### UnsetAccountCorrelationConfig
`func (o *Multihostintegrations) UnsetAccountCorrelationConfig()`

UnsetAccountCorrelationConfig ensures that no value is present for AccountCorrelationConfig, not even an explicit nil
### GetAccountCorrelationRule

`func (o *Multihostintegrations) GetAccountCorrelationRule() MultihostintegrationsAccountCorrelationRule`

GetAccountCorrelationRule returns the AccountCorrelationRule field if non-nil, zero value otherwise.

### GetAccountCorrelationRuleOk

`func (o *Multihostintegrations) GetAccountCorrelationRuleOk() (*MultihostintegrationsAccountCorrelationRule, bool)`

GetAccountCorrelationRuleOk returns a tuple with the AccountCorrelationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCorrelationRule

`func (o *Multihostintegrations) SetAccountCorrelationRule(v MultihostintegrationsAccountCorrelationRule)`

SetAccountCorrelationRule sets AccountCorrelationRule field to given value.

### HasAccountCorrelationRule

`func (o *Multihostintegrations) HasAccountCorrelationRule() bool`

HasAccountCorrelationRule returns a boolean if a field has been set.

### SetAccountCorrelationRuleNil

`func (o *Multihostintegrations) SetAccountCorrelationRuleNil(b bool)`

 SetAccountCorrelationRuleNil sets the value for AccountCorrelationRule to be an explicit nil

### UnsetAccountCorrelationRule
`func (o *Multihostintegrations) UnsetAccountCorrelationRule()`

UnsetAccountCorrelationRule ensures that no value is present for AccountCorrelationRule, not even an explicit nil
### GetManagerCorrelationMapping

`func (o *Multihostintegrations) GetManagerCorrelationMapping() MultihostintegrationsManagerCorrelationMapping`

GetManagerCorrelationMapping returns the ManagerCorrelationMapping field if non-nil, zero value otherwise.

### GetManagerCorrelationMappingOk

`func (o *Multihostintegrations) GetManagerCorrelationMappingOk() (*MultihostintegrationsManagerCorrelationMapping, bool)`

GetManagerCorrelationMappingOk returns a tuple with the ManagerCorrelationMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagerCorrelationMapping

`func (o *Multihostintegrations) SetManagerCorrelationMapping(v MultihostintegrationsManagerCorrelationMapping)`

SetManagerCorrelationMapping sets ManagerCorrelationMapping field to given value.

### HasManagerCorrelationMapping

`func (o *Multihostintegrations) HasManagerCorrelationMapping() bool`

HasManagerCorrelationMapping returns a boolean if a field has been set.

### GetManagerCorrelationRule

`func (o *Multihostintegrations) GetManagerCorrelationRule() MultihostintegrationsManagerCorrelationRule`

GetManagerCorrelationRule returns the ManagerCorrelationRule field if non-nil, zero value otherwise.

### GetManagerCorrelationRuleOk

`func (o *Multihostintegrations) GetManagerCorrelationRuleOk() (*MultihostintegrationsManagerCorrelationRule, bool)`

GetManagerCorrelationRuleOk returns a tuple with the ManagerCorrelationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagerCorrelationRule

`func (o *Multihostintegrations) SetManagerCorrelationRule(v MultihostintegrationsManagerCorrelationRule)`

SetManagerCorrelationRule sets ManagerCorrelationRule field to given value.

### HasManagerCorrelationRule

`func (o *Multihostintegrations) HasManagerCorrelationRule() bool`

HasManagerCorrelationRule returns a boolean if a field has been set.

### SetManagerCorrelationRuleNil

`func (o *Multihostintegrations) SetManagerCorrelationRuleNil(b bool)`

 SetManagerCorrelationRuleNil sets the value for ManagerCorrelationRule to be an explicit nil

### UnsetManagerCorrelationRule
`func (o *Multihostintegrations) UnsetManagerCorrelationRule()`

UnsetManagerCorrelationRule ensures that no value is present for ManagerCorrelationRule, not even an explicit nil
### GetBeforeProvisioningRule

`func (o *Multihostintegrations) GetBeforeProvisioningRule() MultihostintegrationsBeforeProvisioningRule`

GetBeforeProvisioningRule returns the BeforeProvisioningRule field if non-nil, zero value otherwise.

### GetBeforeProvisioningRuleOk

`func (o *Multihostintegrations) GetBeforeProvisioningRuleOk() (*MultihostintegrationsBeforeProvisioningRule, bool)`

GetBeforeProvisioningRuleOk returns a tuple with the BeforeProvisioningRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeProvisioningRule

`func (o *Multihostintegrations) SetBeforeProvisioningRule(v MultihostintegrationsBeforeProvisioningRule)`

SetBeforeProvisioningRule sets BeforeProvisioningRule field to given value.

### HasBeforeProvisioningRule

`func (o *Multihostintegrations) HasBeforeProvisioningRule() bool`

HasBeforeProvisioningRule returns a boolean if a field has been set.

### SetBeforeProvisioningRuleNil

`func (o *Multihostintegrations) SetBeforeProvisioningRuleNil(b bool)`

 SetBeforeProvisioningRuleNil sets the value for BeforeProvisioningRule to be an explicit nil

### UnsetBeforeProvisioningRule
`func (o *Multihostintegrations) UnsetBeforeProvisioningRule()`

UnsetBeforeProvisioningRule ensures that no value is present for BeforeProvisioningRule, not even an explicit nil
### GetSchemas

`func (o *Multihostintegrations) GetSchemas() []MultihostintegrationsSchemasInner`

GetSchemas returns the Schemas field if non-nil, zero value otherwise.

### GetSchemasOk

`func (o *Multihostintegrations) GetSchemasOk() (*[]MultihostintegrationsSchemasInner, bool)`

GetSchemasOk returns a tuple with the Schemas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemas

`func (o *Multihostintegrations) SetSchemas(v []MultihostintegrationsSchemasInner)`

SetSchemas sets Schemas field to given value.

### HasSchemas

`func (o *Multihostintegrations) HasSchemas() bool`

HasSchemas returns a boolean if a field has been set.

### GetPasswordPolicies

`func (o *Multihostintegrations) GetPasswordPolicies() []MultihostintegrationsPasswordPoliciesInner`

GetPasswordPolicies returns the PasswordPolicies field if non-nil, zero value otherwise.

### GetPasswordPoliciesOk

`func (o *Multihostintegrations) GetPasswordPoliciesOk() (*[]MultihostintegrationsPasswordPoliciesInner, bool)`

GetPasswordPoliciesOk returns a tuple with the PasswordPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicies

`func (o *Multihostintegrations) SetPasswordPolicies(v []MultihostintegrationsPasswordPoliciesInner)`

SetPasswordPolicies sets PasswordPolicies field to given value.

### HasPasswordPolicies

`func (o *Multihostintegrations) HasPasswordPolicies() bool`

HasPasswordPolicies returns a boolean if a field has been set.

### SetPasswordPoliciesNil

`func (o *Multihostintegrations) SetPasswordPoliciesNil(b bool)`

 SetPasswordPoliciesNil sets the value for PasswordPolicies to be an explicit nil

### UnsetPasswordPolicies
`func (o *Multihostintegrations) UnsetPasswordPolicies()`

UnsetPasswordPolicies ensures that no value is present for PasswordPolicies, not even an explicit nil
### GetFeatures

`func (o *Multihostintegrations) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *Multihostintegrations) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *Multihostintegrations) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *Multihostintegrations) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetType

`func (o *Multihostintegrations) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Multihostintegrations) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Multihostintegrations) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Multihostintegrations) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConnector

`func (o *Multihostintegrations) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *Multihostintegrations) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *Multihostintegrations) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetConnectorClass

`func (o *Multihostintegrations) GetConnectorClass() string`

GetConnectorClass returns the ConnectorClass field if non-nil, zero value otherwise.

### GetConnectorClassOk

`func (o *Multihostintegrations) GetConnectorClassOk() (*string, bool)`

GetConnectorClassOk returns a tuple with the ConnectorClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorClass

`func (o *Multihostintegrations) SetConnectorClass(v string)`

SetConnectorClass sets ConnectorClass field to given value.

### HasConnectorClass

`func (o *Multihostintegrations) HasConnectorClass() bool`

HasConnectorClass returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Multihostintegrations) GetConnectorAttributes() MultihostintegrationsConnectorAttributes`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Multihostintegrations) GetConnectorAttributesOk() (*MultihostintegrationsConnectorAttributes, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Multihostintegrations) SetConnectorAttributes(v MultihostintegrationsConnectorAttributes)`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Multihostintegrations) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetDeleteThreshold

`func (o *Multihostintegrations) GetDeleteThreshold() int32`

GetDeleteThreshold returns the DeleteThreshold field if non-nil, zero value otherwise.

### GetDeleteThresholdOk

`func (o *Multihostintegrations) GetDeleteThresholdOk() (*int32, bool)`

GetDeleteThresholdOk returns a tuple with the DeleteThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteThreshold

`func (o *Multihostintegrations) SetDeleteThreshold(v int32)`

SetDeleteThreshold sets DeleteThreshold field to given value.

### HasDeleteThreshold

`func (o *Multihostintegrations) HasDeleteThreshold() bool`

HasDeleteThreshold returns a boolean if a field has been set.

### GetAuthoritative

`func (o *Multihostintegrations) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *Multihostintegrations) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *Multihostintegrations) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *Multihostintegrations) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetManagementWorkgroup

`func (o *Multihostintegrations) GetManagementWorkgroup() MultihostintegrationsManagementWorkgroup`

GetManagementWorkgroup returns the ManagementWorkgroup field if non-nil, zero value otherwise.

### GetManagementWorkgroupOk

`func (o *Multihostintegrations) GetManagementWorkgroupOk() (*MultihostintegrationsManagementWorkgroup, bool)`

GetManagementWorkgroupOk returns a tuple with the ManagementWorkgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagementWorkgroup

`func (o *Multihostintegrations) SetManagementWorkgroup(v MultihostintegrationsManagementWorkgroup)`

SetManagementWorkgroup sets ManagementWorkgroup field to given value.

### HasManagementWorkgroup

`func (o *Multihostintegrations) HasManagementWorkgroup() bool`

HasManagementWorkgroup returns a boolean if a field has been set.

### SetManagementWorkgroupNil

`func (o *Multihostintegrations) SetManagementWorkgroupNil(b bool)`

 SetManagementWorkgroupNil sets the value for ManagementWorkgroup to be an explicit nil

### UnsetManagementWorkgroup
`func (o *Multihostintegrations) UnsetManagementWorkgroup()`

UnsetManagementWorkgroup ensures that no value is present for ManagementWorkgroup, not even an explicit nil
### GetHealthy

`func (o *Multihostintegrations) GetHealthy() bool`

GetHealthy returns the Healthy field if non-nil, zero value otherwise.

### GetHealthyOk

`func (o *Multihostintegrations) GetHealthyOk() (*bool, bool)`

GetHealthyOk returns a tuple with the Healthy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthy

`func (o *Multihostintegrations) SetHealthy(v bool)`

SetHealthy sets Healthy field to given value.

### HasHealthy

`func (o *Multihostintegrations) HasHealthy() bool`

HasHealthy returns a boolean if a field has been set.

### GetStatus

`func (o *Multihostintegrations) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Multihostintegrations) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Multihostintegrations) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Multihostintegrations) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetSince

`func (o *Multihostintegrations) GetSince() SailPointTime`

GetSince returns the Since field if non-nil, zero value otherwise.

### GetSinceOk

`func (o *Multihostintegrations) GetSinceOk() (*SailPointTime, bool)`

GetSinceOk returns a tuple with the Since field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSince

`func (o *Multihostintegrations) SetSince(v SailPointTime)`

SetSince sets Since field to given value.

### HasSince

`func (o *Multihostintegrations) HasSince() bool`

HasSince returns a boolean if a field has been set.

### GetConnectorId

`func (o *Multihostintegrations) GetConnectorId() string`

GetConnectorId returns the ConnectorId field if non-nil, zero value otherwise.

### GetConnectorIdOk

`func (o *Multihostintegrations) GetConnectorIdOk() (*string, bool)`

GetConnectorIdOk returns a tuple with the ConnectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorId

`func (o *Multihostintegrations) SetConnectorId(v string)`

SetConnectorId sets ConnectorId field to given value.

### HasConnectorId

`func (o *Multihostintegrations) HasConnectorId() bool`

HasConnectorId returns a boolean if a field has been set.

### GetConnectorName

`func (o *Multihostintegrations) GetConnectorName() string`

GetConnectorName returns the ConnectorName field if non-nil, zero value otherwise.

### GetConnectorNameOk

`func (o *Multihostintegrations) GetConnectorNameOk() (*string, bool)`

GetConnectorNameOk returns a tuple with the ConnectorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorName

`func (o *Multihostintegrations) SetConnectorName(v string)`

SetConnectorName sets ConnectorName field to given value.

### HasConnectorName

`func (o *Multihostintegrations) HasConnectorName() bool`

HasConnectorName returns a boolean if a field has been set.

### GetConnectionType

`func (o *Multihostintegrations) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *Multihostintegrations) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *Multihostintegrations) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *Multihostintegrations) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### GetConnectorImplementationId

`func (o *Multihostintegrations) GetConnectorImplementationId() string`

GetConnectorImplementationId returns the ConnectorImplementationId field if non-nil, zero value otherwise.

### GetConnectorImplementationIdOk

`func (o *Multihostintegrations) GetConnectorImplementationIdOk() (*string, bool)`

GetConnectorImplementationIdOk returns a tuple with the ConnectorImplementationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorImplementationId

`func (o *Multihostintegrations) SetConnectorImplementationId(v string)`

SetConnectorImplementationId sets ConnectorImplementationId field to given value.

### HasConnectorImplementationId

`func (o *Multihostintegrations) HasConnectorImplementationId() bool`

HasConnectorImplementationId returns a boolean if a field has been set.

### GetCreated

`func (o *Multihostintegrations) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Multihostintegrations) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Multihostintegrations) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Multihostintegrations) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Multihostintegrations) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Multihostintegrations) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Multihostintegrations) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Multihostintegrations) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCredentialProviderEnabled

`func (o *Multihostintegrations) GetCredentialProviderEnabled() bool`

GetCredentialProviderEnabled returns the CredentialProviderEnabled field if non-nil, zero value otherwise.

### GetCredentialProviderEnabledOk

`func (o *Multihostintegrations) GetCredentialProviderEnabledOk() (*bool, bool)`

GetCredentialProviderEnabledOk returns a tuple with the CredentialProviderEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialProviderEnabled

`func (o *Multihostintegrations) SetCredentialProviderEnabled(v bool)`

SetCredentialProviderEnabled sets CredentialProviderEnabled field to given value.

### HasCredentialProviderEnabled

`func (o *Multihostintegrations) HasCredentialProviderEnabled() bool`

HasCredentialProviderEnabled returns a boolean if a field has been set.

### GetCategory

`func (o *Multihostintegrations) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Multihostintegrations) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Multihostintegrations) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Multihostintegrations) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### SetCategoryNil

`func (o *Multihostintegrations) SetCategoryNil(b bool)`

 SetCategoryNil sets the value for Category to be an explicit nil

### UnsetCategory
`func (o *Multihostintegrations) UnsetCategory()`

UnsetCategory ensures that no value is present for Category, not even an explicit nil
### GetAccountsFile

`func (o *Multihostintegrations) GetAccountsFile() MultihostintegrationsAccountsFile`

GetAccountsFile returns the AccountsFile field if non-nil, zero value otherwise.

### GetAccountsFileOk

`func (o *Multihostintegrations) GetAccountsFileOk() (*MultihostintegrationsAccountsFile, bool)`

GetAccountsFileOk returns a tuple with the AccountsFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsFile

`func (o *Multihostintegrations) SetAccountsFile(v MultihostintegrationsAccountsFile)`

SetAccountsFile sets AccountsFile field to given value.

### HasAccountsFile

`func (o *Multihostintegrations) HasAccountsFile() bool`

HasAccountsFile returns a boolean if a field has been set.

### SetAccountsFileNil

`func (o *Multihostintegrations) SetAccountsFileNil(b bool)`

 SetAccountsFileNil sets the value for AccountsFile to be an explicit nil

### UnsetAccountsFile
`func (o *Multihostintegrations) UnsetAccountsFile()`

UnsetAccountsFile ensures that no value is present for AccountsFile, not even an explicit nil


---
id: v1-multihostsources
title: Multihostsources
pagination_label: Multihostsources
sidebar_label: Multihostsources
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Multihostsources', 'V1Multihostsources'] 
slug: /tools/sdk/go/multihostintegration/models/multihostsources
tags: ['SDK', 'Software Development Kit', 'Multihostsources', 'V1Multihostsources']
---

# Multihostsources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Source ID. | [readonly] 
**Name** | **string** | Source's human-readable name. | 
**Description** | Pointer to **string** | Source's human-readable description. | [optional] 
**Owner** | [**MultihostintegrationsOwner**](multihostintegrations-owner) |  | 
**Cluster** | Pointer to [**NullableMultihostintegrationsCluster**](multihostintegrations-cluster) |  | [optional] 
**AccountCorrelationConfig** | Pointer to [**NullableMultihostintegrationsAccountCorrelationConfig**](multihostintegrations-account-correlation-config) |  | [optional] 
**AccountCorrelationRule** | Pointer to [**NullableMultihostintegrationsAccountCorrelationRule**](multihostintegrations-account-correlation-rule) |  | [optional] 
**ManagerCorrelationMapping** | Pointer to [**Managercorrelationmapping**](managercorrelationmapping) |  | [optional] 
**ManagerCorrelationRule** | Pointer to [**NullableMultihostintegrationsManagerCorrelationRule**](multihostintegrations-manager-correlation-rule) |  | [optional] 
**BeforeProvisioningRule** | Pointer to [**NullableMultihostsourcesBeforeProvisioningRule**](multihostsources-before-provisioning-rule) |  | [optional] 
**Schemas** | Pointer to [**[]MultihostintegrationsSchemasInner**](multihostintegrations-schemas-inner) | List of references to schema objects. | [optional] 
**PasswordPolicies** | Pointer to [**[]MultihostintegrationsPasswordPoliciesInner**](multihostintegrations-password-policies-inner) | List of references to the associated PasswordPolicy objects. | [optional] 
**Features** | Pointer to **[]string** | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. * AUTHENTICATE: The source supports pass-through authentication. * COMPOSITE: The source supports composite source creation. * DIRECT_PERMISSIONS: The source supports returning DirectPermissions. * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. * ENABLE The source supports reading if an account is enabled or disabled. * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. * SEARCH * TEMPLATE * UNLOCK: The source supports reading if an account is locked or unlocked. * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. * SYNC_PROVISIONING: The source can provision accounts synchronously. * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. * CURRENT_PASSWORD: Some source types support verification of the current password * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. * NO_AGGREGATION: A source that does not support aggregation. * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [optional] 
**Type** | Pointer to **string** | Specifies the type of system being managed e.g. Multi-Host - Microsoft SQL Server, Workday, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Connector** | **string** | Connector script name. | 
**ConnectorClass** | Pointer to **string** | Fully qualified name of the Java class that implements the connector interface. | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface{}** | Connector specific configuration. This configuration will differ from type to type. | [optional] 
**DeleteThreshold** | Pointer to **int32** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**Authoritative** | Pointer to **bool** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to false]
**ManagementWorkgroup** | Pointer to [**NullableMultihostintegrationsManagementWorkgroup**](multihostintegrations-management-workgroup) |  | [optional] 
**Healthy** | Pointer to **bool** | When this is true, it indicates that the source is healthy. | [optional] [default to false]
**Status** | Pointer to **string** | Status identifier that gives specific information about why a source is or isn't healthy.  | [optional] 
**Since** | Pointer to **SailPointTime** | Timestamp that shows when a source health check was last performed. | [optional] 
**ConnectorId** | Pointer to **string** | Connector ID | [optional] 
**ConnectorName** | **string** | Name of the connector that was chosen during source creation. | 
**ConnectionType** | Pointer to **string** | Type of connection (direct or file). | [optional] 
**ConnectorImplementationId** | Pointer to **string** | Connector implementation ID. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the source was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Date-time when the source was last modified. | [optional] 
**CredentialProviderEnabled** | Pointer to **bool** | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [optional] [default to false]
**Category** | Pointer to **NullableString** | Source category (e.g. null, CredentialProvider). | [optional] 

## Methods

### NewMultihostsources

`func NewMultihostsources(id string, name string, owner MultihostintegrationsOwner, connector string, connectorName string, ) *Multihostsources`

NewMultihostsources instantiates a new Multihostsources object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostsourcesWithDefaults

`func NewMultihostsourcesWithDefaults() *Multihostsources`

NewMultihostsourcesWithDefaults instantiates a new Multihostsources object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Multihostsources) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Multihostsources) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Multihostsources) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Multihostsources) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Multihostsources) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Multihostsources) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Multihostsources) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Multihostsources) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Multihostsources) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Multihostsources) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *Multihostsources) GetOwner() MultihostintegrationsOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Multihostsources) GetOwnerOk() (*MultihostintegrationsOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Multihostsources) SetOwner(v MultihostintegrationsOwner)`

SetOwner sets Owner field to given value.


### GetCluster

`func (o *Multihostsources) GetCluster() MultihostintegrationsCluster`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *Multihostsources) GetClusterOk() (*MultihostintegrationsCluster, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *Multihostsources) SetCluster(v MultihostintegrationsCluster)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *Multihostsources) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### SetClusterNil

`func (o *Multihostsources) SetClusterNil(b bool)`

 SetClusterNil sets the value for Cluster to be an explicit nil

### UnsetCluster
`func (o *Multihostsources) UnsetCluster()`

UnsetCluster ensures that no value is present for Cluster, not even an explicit nil
### GetAccountCorrelationConfig

`func (o *Multihostsources) GetAccountCorrelationConfig() MultihostintegrationsAccountCorrelationConfig`

GetAccountCorrelationConfig returns the AccountCorrelationConfig field if non-nil, zero value otherwise.

### GetAccountCorrelationConfigOk

`func (o *Multihostsources) GetAccountCorrelationConfigOk() (*MultihostintegrationsAccountCorrelationConfig, bool)`

GetAccountCorrelationConfigOk returns a tuple with the AccountCorrelationConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCorrelationConfig

`func (o *Multihostsources) SetAccountCorrelationConfig(v MultihostintegrationsAccountCorrelationConfig)`

SetAccountCorrelationConfig sets AccountCorrelationConfig field to given value.

### HasAccountCorrelationConfig

`func (o *Multihostsources) HasAccountCorrelationConfig() bool`

HasAccountCorrelationConfig returns a boolean if a field has been set.

### SetAccountCorrelationConfigNil

`func (o *Multihostsources) SetAccountCorrelationConfigNil(b bool)`

 SetAccountCorrelationConfigNil sets the value for AccountCorrelationConfig to be an explicit nil

### UnsetAccountCorrelationConfig
`func (o *Multihostsources) UnsetAccountCorrelationConfig()`

UnsetAccountCorrelationConfig ensures that no value is present for AccountCorrelationConfig, not even an explicit nil
### GetAccountCorrelationRule

`func (o *Multihostsources) GetAccountCorrelationRule() MultihostintegrationsAccountCorrelationRule`

GetAccountCorrelationRule returns the AccountCorrelationRule field if non-nil, zero value otherwise.

### GetAccountCorrelationRuleOk

`func (o *Multihostsources) GetAccountCorrelationRuleOk() (*MultihostintegrationsAccountCorrelationRule, bool)`

GetAccountCorrelationRuleOk returns a tuple with the AccountCorrelationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCorrelationRule

`func (o *Multihostsources) SetAccountCorrelationRule(v MultihostintegrationsAccountCorrelationRule)`

SetAccountCorrelationRule sets AccountCorrelationRule field to given value.

### HasAccountCorrelationRule

`func (o *Multihostsources) HasAccountCorrelationRule() bool`

HasAccountCorrelationRule returns a boolean if a field has been set.

### SetAccountCorrelationRuleNil

`func (o *Multihostsources) SetAccountCorrelationRuleNil(b bool)`

 SetAccountCorrelationRuleNil sets the value for AccountCorrelationRule to be an explicit nil

### UnsetAccountCorrelationRule
`func (o *Multihostsources) UnsetAccountCorrelationRule()`

UnsetAccountCorrelationRule ensures that no value is present for AccountCorrelationRule, not even an explicit nil
### GetManagerCorrelationMapping

`func (o *Multihostsources) GetManagerCorrelationMapping() Managercorrelationmapping`

GetManagerCorrelationMapping returns the ManagerCorrelationMapping field if non-nil, zero value otherwise.

### GetManagerCorrelationMappingOk

`func (o *Multihostsources) GetManagerCorrelationMappingOk() (*Managercorrelationmapping, bool)`

GetManagerCorrelationMappingOk returns a tuple with the ManagerCorrelationMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagerCorrelationMapping

`func (o *Multihostsources) SetManagerCorrelationMapping(v Managercorrelationmapping)`

SetManagerCorrelationMapping sets ManagerCorrelationMapping field to given value.

### HasManagerCorrelationMapping

`func (o *Multihostsources) HasManagerCorrelationMapping() bool`

HasManagerCorrelationMapping returns a boolean if a field has been set.

### GetManagerCorrelationRule

`func (o *Multihostsources) GetManagerCorrelationRule() MultihostintegrationsManagerCorrelationRule`

GetManagerCorrelationRule returns the ManagerCorrelationRule field if non-nil, zero value otherwise.

### GetManagerCorrelationRuleOk

`func (o *Multihostsources) GetManagerCorrelationRuleOk() (*MultihostintegrationsManagerCorrelationRule, bool)`

GetManagerCorrelationRuleOk returns a tuple with the ManagerCorrelationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagerCorrelationRule

`func (o *Multihostsources) SetManagerCorrelationRule(v MultihostintegrationsManagerCorrelationRule)`

SetManagerCorrelationRule sets ManagerCorrelationRule field to given value.

### HasManagerCorrelationRule

`func (o *Multihostsources) HasManagerCorrelationRule() bool`

HasManagerCorrelationRule returns a boolean if a field has been set.

### SetManagerCorrelationRuleNil

`func (o *Multihostsources) SetManagerCorrelationRuleNil(b bool)`

 SetManagerCorrelationRuleNil sets the value for ManagerCorrelationRule to be an explicit nil

### UnsetManagerCorrelationRule
`func (o *Multihostsources) UnsetManagerCorrelationRule()`

UnsetManagerCorrelationRule ensures that no value is present for ManagerCorrelationRule, not even an explicit nil
### GetBeforeProvisioningRule

`func (o *Multihostsources) GetBeforeProvisioningRule() MultihostsourcesBeforeProvisioningRule`

GetBeforeProvisioningRule returns the BeforeProvisioningRule field if non-nil, zero value otherwise.

### GetBeforeProvisioningRuleOk

`func (o *Multihostsources) GetBeforeProvisioningRuleOk() (*MultihostsourcesBeforeProvisioningRule, bool)`

GetBeforeProvisioningRuleOk returns a tuple with the BeforeProvisioningRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeProvisioningRule

`func (o *Multihostsources) SetBeforeProvisioningRule(v MultihostsourcesBeforeProvisioningRule)`

SetBeforeProvisioningRule sets BeforeProvisioningRule field to given value.

### HasBeforeProvisioningRule

`func (o *Multihostsources) HasBeforeProvisioningRule() bool`

HasBeforeProvisioningRule returns a boolean if a field has been set.

### SetBeforeProvisioningRuleNil

`func (o *Multihostsources) SetBeforeProvisioningRuleNil(b bool)`

 SetBeforeProvisioningRuleNil sets the value for BeforeProvisioningRule to be an explicit nil

### UnsetBeforeProvisioningRule
`func (o *Multihostsources) UnsetBeforeProvisioningRule()`

UnsetBeforeProvisioningRule ensures that no value is present for BeforeProvisioningRule, not even an explicit nil
### GetSchemas

`func (o *Multihostsources) GetSchemas() []MultihostintegrationsSchemasInner`

GetSchemas returns the Schemas field if non-nil, zero value otherwise.

### GetSchemasOk

`func (o *Multihostsources) GetSchemasOk() (*[]MultihostintegrationsSchemasInner, bool)`

GetSchemasOk returns a tuple with the Schemas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemas

`func (o *Multihostsources) SetSchemas(v []MultihostintegrationsSchemasInner)`

SetSchemas sets Schemas field to given value.

### HasSchemas

`func (o *Multihostsources) HasSchemas() bool`

HasSchemas returns a boolean if a field has been set.

### GetPasswordPolicies

`func (o *Multihostsources) GetPasswordPolicies() []MultihostintegrationsPasswordPoliciesInner`

GetPasswordPolicies returns the PasswordPolicies field if non-nil, zero value otherwise.

### GetPasswordPoliciesOk

`func (o *Multihostsources) GetPasswordPoliciesOk() (*[]MultihostintegrationsPasswordPoliciesInner, bool)`

GetPasswordPoliciesOk returns a tuple with the PasswordPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicies

`func (o *Multihostsources) SetPasswordPolicies(v []MultihostintegrationsPasswordPoliciesInner)`

SetPasswordPolicies sets PasswordPolicies field to given value.

### HasPasswordPolicies

`func (o *Multihostsources) HasPasswordPolicies() bool`

HasPasswordPolicies returns a boolean if a field has been set.

### SetPasswordPoliciesNil

`func (o *Multihostsources) SetPasswordPoliciesNil(b bool)`

 SetPasswordPoliciesNil sets the value for PasswordPolicies to be an explicit nil

### UnsetPasswordPolicies
`func (o *Multihostsources) UnsetPasswordPolicies()`

UnsetPasswordPolicies ensures that no value is present for PasswordPolicies, not even an explicit nil
### GetFeatures

`func (o *Multihostsources) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *Multihostsources) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *Multihostsources) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *Multihostsources) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetType

`func (o *Multihostsources) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Multihostsources) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Multihostsources) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Multihostsources) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConnector

`func (o *Multihostsources) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *Multihostsources) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *Multihostsources) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetConnectorClass

`func (o *Multihostsources) GetConnectorClass() string`

GetConnectorClass returns the ConnectorClass field if non-nil, zero value otherwise.

### GetConnectorClassOk

`func (o *Multihostsources) GetConnectorClassOk() (*string, bool)`

GetConnectorClassOk returns a tuple with the ConnectorClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorClass

`func (o *Multihostsources) SetConnectorClass(v string)`

SetConnectorClass sets ConnectorClass field to given value.

### HasConnectorClass

`func (o *Multihostsources) HasConnectorClass() bool`

HasConnectorClass returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Multihostsources) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Multihostsources) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Multihostsources) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Multihostsources) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetDeleteThreshold

`func (o *Multihostsources) GetDeleteThreshold() int32`

GetDeleteThreshold returns the DeleteThreshold field if non-nil, zero value otherwise.

### GetDeleteThresholdOk

`func (o *Multihostsources) GetDeleteThresholdOk() (*int32, bool)`

GetDeleteThresholdOk returns a tuple with the DeleteThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteThreshold

`func (o *Multihostsources) SetDeleteThreshold(v int32)`

SetDeleteThreshold sets DeleteThreshold field to given value.

### HasDeleteThreshold

`func (o *Multihostsources) HasDeleteThreshold() bool`

HasDeleteThreshold returns a boolean if a field has been set.

### GetAuthoritative

`func (o *Multihostsources) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *Multihostsources) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *Multihostsources) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *Multihostsources) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetManagementWorkgroup

`func (o *Multihostsources) GetManagementWorkgroup() MultihostintegrationsManagementWorkgroup`

GetManagementWorkgroup returns the ManagementWorkgroup field if non-nil, zero value otherwise.

### GetManagementWorkgroupOk

`func (o *Multihostsources) GetManagementWorkgroupOk() (*MultihostintegrationsManagementWorkgroup, bool)`

GetManagementWorkgroupOk returns a tuple with the ManagementWorkgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagementWorkgroup

`func (o *Multihostsources) SetManagementWorkgroup(v MultihostintegrationsManagementWorkgroup)`

SetManagementWorkgroup sets ManagementWorkgroup field to given value.

### HasManagementWorkgroup

`func (o *Multihostsources) HasManagementWorkgroup() bool`

HasManagementWorkgroup returns a boolean if a field has been set.

### SetManagementWorkgroupNil

`func (o *Multihostsources) SetManagementWorkgroupNil(b bool)`

 SetManagementWorkgroupNil sets the value for ManagementWorkgroup to be an explicit nil

### UnsetManagementWorkgroup
`func (o *Multihostsources) UnsetManagementWorkgroup()`

UnsetManagementWorkgroup ensures that no value is present for ManagementWorkgroup, not even an explicit nil
### GetHealthy

`func (o *Multihostsources) GetHealthy() bool`

GetHealthy returns the Healthy field if non-nil, zero value otherwise.

### GetHealthyOk

`func (o *Multihostsources) GetHealthyOk() (*bool, bool)`

GetHealthyOk returns a tuple with the Healthy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthy

`func (o *Multihostsources) SetHealthy(v bool)`

SetHealthy sets Healthy field to given value.

### HasHealthy

`func (o *Multihostsources) HasHealthy() bool`

HasHealthy returns a boolean if a field has been set.

### GetStatus

`func (o *Multihostsources) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Multihostsources) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Multihostsources) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Multihostsources) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetSince

`func (o *Multihostsources) GetSince() SailPointTime`

GetSince returns the Since field if non-nil, zero value otherwise.

### GetSinceOk

`func (o *Multihostsources) GetSinceOk() (*SailPointTime, bool)`

GetSinceOk returns a tuple with the Since field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSince

`func (o *Multihostsources) SetSince(v SailPointTime)`

SetSince sets Since field to given value.

### HasSince

`func (o *Multihostsources) HasSince() bool`

HasSince returns a boolean if a field has been set.

### GetConnectorId

`func (o *Multihostsources) GetConnectorId() string`

GetConnectorId returns the ConnectorId field if non-nil, zero value otherwise.

### GetConnectorIdOk

`func (o *Multihostsources) GetConnectorIdOk() (*string, bool)`

GetConnectorIdOk returns a tuple with the ConnectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorId

`func (o *Multihostsources) SetConnectorId(v string)`

SetConnectorId sets ConnectorId field to given value.

### HasConnectorId

`func (o *Multihostsources) HasConnectorId() bool`

HasConnectorId returns a boolean if a field has been set.

### GetConnectorName

`func (o *Multihostsources) GetConnectorName() string`

GetConnectorName returns the ConnectorName field if non-nil, zero value otherwise.

### GetConnectorNameOk

`func (o *Multihostsources) GetConnectorNameOk() (*string, bool)`

GetConnectorNameOk returns a tuple with the ConnectorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorName

`func (o *Multihostsources) SetConnectorName(v string)`

SetConnectorName sets ConnectorName field to given value.


### GetConnectionType

`func (o *Multihostsources) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *Multihostsources) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *Multihostsources) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *Multihostsources) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### GetConnectorImplementationId

`func (o *Multihostsources) GetConnectorImplementationId() string`

GetConnectorImplementationId returns the ConnectorImplementationId field if non-nil, zero value otherwise.

### GetConnectorImplementationIdOk

`func (o *Multihostsources) GetConnectorImplementationIdOk() (*string, bool)`

GetConnectorImplementationIdOk returns a tuple with the ConnectorImplementationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorImplementationId

`func (o *Multihostsources) SetConnectorImplementationId(v string)`

SetConnectorImplementationId sets ConnectorImplementationId field to given value.

### HasConnectorImplementationId

`func (o *Multihostsources) HasConnectorImplementationId() bool`

HasConnectorImplementationId returns a boolean if a field has been set.

### GetCreated

`func (o *Multihostsources) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Multihostsources) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Multihostsources) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Multihostsources) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Multihostsources) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Multihostsources) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Multihostsources) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Multihostsources) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCredentialProviderEnabled

`func (o *Multihostsources) GetCredentialProviderEnabled() bool`

GetCredentialProviderEnabled returns the CredentialProviderEnabled field if non-nil, zero value otherwise.

### GetCredentialProviderEnabledOk

`func (o *Multihostsources) GetCredentialProviderEnabledOk() (*bool, bool)`

GetCredentialProviderEnabledOk returns a tuple with the CredentialProviderEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialProviderEnabled

`func (o *Multihostsources) SetCredentialProviderEnabled(v bool)`

SetCredentialProviderEnabled sets CredentialProviderEnabled field to given value.

### HasCredentialProviderEnabled

`func (o *Multihostsources) HasCredentialProviderEnabled() bool`

HasCredentialProviderEnabled returns a boolean if a field has been set.

### GetCategory

`func (o *Multihostsources) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Multihostsources) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Multihostsources) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Multihostsources) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### SetCategoryNil

`func (o *Multihostsources) SetCategoryNil(b bool)`

 SetCategoryNil sets the value for Category to be an explicit nil

### UnsetCategory
`func (o *Multihostsources) UnsetCategory()`

UnsetCategory ensures that no value is present for Category, not even an explicit nil


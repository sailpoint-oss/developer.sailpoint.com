---
id: beta-multi-host-integrations
title: MultiHostIntegrations
pagination_label: MultiHostIntegrations
sidebar_label: MultiHostIntegrations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrations', 'BetaMultiHostIntegrations'] 
slug: /tools/sdk/go/beta/models/multi-host-integrations
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrations', 'BetaMultiHostIntegrations']
---

# MultiHostIntegrations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Multi-Host Integration ID. | [readonly] 
**Name** | **string** | Multi-Host Integration's human-readable name. | 
**Description** | **string** | Multi-Host Integration's human-readable description. | 
**Owner** | [**MultiHostIntegrationsOwner**](multi-host-integrations-owner) |  | 
**Cluster** | Pointer to [**NullableMultiHostIntegrationsCluster**](multi-host-integrations-cluster) |  | [optional] 
**Type** | Pointer to **string** | Specifies the type of system being managed e.g. Workday, Multi-Host - Microsoft SQL Server, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Connector** | **string** | Connector script name. | 
**LastSourceUploadSuccessCount** | Pointer to **int32** | Last successfully uploaded source count of given Multi-Host Integration. | [optional] 
**MaxSourcesPerAggGroup** | Pointer to **int32** | Maximum sources that can contain in a aggregation group of Multi-Host Integration. | [optional] 
**ConnectorClass** | Pointer to **string** | Fully qualified name of the Java class that implements the connector interface. | [optional] 
**ConnectorAttributes** | Pointer to [**MultiHostIntegrationsConnectorAttributes**](multi-host-integrations-connector-attributes) |  | [optional] 
**DeleteThreshold** | Pointer to **int32** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**Authoritative** | Pointer to **bool** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to false]
**ManagementWorkgroup** | Pointer to [**NullableMultiHostIntegrationsManagementWorkgroup**](multi-host-integrations-management-workgroup) |  | [optional] 
**Healthy** | Pointer to **bool** | When this is true, it indicates that the source is healthy. | [optional] [default to false]
**Status** | Pointer to **string** | Status identifier that gives specific information about why a source is or isn't healthy.  | [optional] 
**Since** | Pointer to **time.Time** | Timestamp that shows when a source health check was last performed. | [optional] 
**ConnectorId** | Pointer to **string** | Connector ID | [optional] 
**ConnectorName** | Pointer to **string** | Name of the connector that was chosen during source creation. | [optional] 
**ConnectionType** | Pointer to **string** | Type of connection (direct or file). | [optional] 
**ConnectorImplementationId** | Pointer to **string** | Connector implementation ID. | [optional] 
**Created** | Pointer to **time.Time** | Date-time when the source was created | [optional] 
**Modified** | Pointer to **time.Time** | Date-time when the source was last modified. | [optional] 
**CredentialProviderEnabled** | Pointer to **bool** | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [optional] [default to false]
**Category** | Pointer to **NullableString** | Source category (e.g. null, CredentialProvider). | [optional] 

## Methods

### NewMultiHostIntegrations

`func NewMultiHostIntegrations(id string, name string, description string, owner MultiHostIntegrationsOwner, connector string, ) *MultiHostIntegrations`

NewMultiHostIntegrations instantiates a new MultiHostIntegrations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsWithDefaults

`func NewMultiHostIntegrationsWithDefaults() *MultiHostIntegrations`

NewMultiHostIntegrationsWithDefaults instantiates a new MultiHostIntegrations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MultiHostIntegrations) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MultiHostIntegrations) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MultiHostIntegrations) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MultiHostIntegrations) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostIntegrations) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostIntegrations) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *MultiHostIntegrations) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MultiHostIntegrations) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MultiHostIntegrations) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *MultiHostIntegrations) GetOwner() MultiHostIntegrationsOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *MultiHostIntegrations) GetOwnerOk() (*MultiHostIntegrationsOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *MultiHostIntegrations) SetOwner(v MultiHostIntegrationsOwner)`

SetOwner sets Owner field to given value.


### GetCluster

`func (o *MultiHostIntegrations) GetCluster() MultiHostIntegrationsCluster`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *MultiHostIntegrations) GetClusterOk() (*MultiHostIntegrationsCluster, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *MultiHostIntegrations) SetCluster(v MultiHostIntegrationsCluster)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *MultiHostIntegrations) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### SetClusterNil

`func (o *MultiHostIntegrations) SetClusterNil(b bool)`

 SetClusterNil sets the value for Cluster to be an explicit nil

### UnsetCluster
`func (o *MultiHostIntegrations) UnsetCluster()`

UnsetCluster ensures that no value is present for Cluster, not even an explicit nil
### GetType

`func (o *MultiHostIntegrations) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MultiHostIntegrations) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MultiHostIntegrations) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MultiHostIntegrations) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConnector

`func (o *MultiHostIntegrations) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *MultiHostIntegrations) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *MultiHostIntegrations) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetLastSourceUploadSuccessCount

`func (o *MultiHostIntegrations) GetLastSourceUploadSuccessCount() int32`

GetLastSourceUploadSuccessCount returns the LastSourceUploadSuccessCount field if non-nil, zero value otherwise.

### GetLastSourceUploadSuccessCountOk

`func (o *MultiHostIntegrations) GetLastSourceUploadSuccessCountOk() (*int32, bool)`

GetLastSourceUploadSuccessCountOk returns a tuple with the LastSourceUploadSuccessCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSourceUploadSuccessCount

`func (o *MultiHostIntegrations) SetLastSourceUploadSuccessCount(v int32)`

SetLastSourceUploadSuccessCount sets LastSourceUploadSuccessCount field to given value.

### HasLastSourceUploadSuccessCount

`func (o *MultiHostIntegrations) HasLastSourceUploadSuccessCount() bool`

HasLastSourceUploadSuccessCount returns a boolean if a field has been set.

### GetMaxSourcesPerAggGroup

`func (o *MultiHostIntegrations) GetMaxSourcesPerAggGroup() int32`

GetMaxSourcesPerAggGroup returns the MaxSourcesPerAggGroup field if non-nil, zero value otherwise.

### GetMaxSourcesPerAggGroupOk

`func (o *MultiHostIntegrations) GetMaxSourcesPerAggGroupOk() (*int32, bool)`

GetMaxSourcesPerAggGroupOk returns a tuple with the MaxSourcesPerAggGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxSourcesPerAggGroup

`func (o *MultiHostIntegrations) SetMaxSourcesPerAggGroup(v int32)`

SetMaxSourcesPerAggGroup sets MaxSourcesPerAggGroup field to given value.

### HasMaxSourcesPerAggGroup

`func (o *MultiHostIntegrations) HasMaxSourcesPerAggGroup() bool`

HasMaxSourcesPerAggGroup returns a boolean if a field has been set.

### GetConnectorClass

`func (o *MultiHostIntegrations) GetConnectorClass() string`

GetConnectorClass returns the ConnectorClass field if non-nil, zero value otherwise.

### GetConnectorClassOk

`func (o *MultiHostIntegrations) GetConnectorClassOk() (*string, bool)`

GetConnectorClassOk returns a tuple with the ConnectorClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorClass

`func (o *MultiHostIntegrations) SetConnectorClass(v string)`

SetConnectorClass sets ConnectorClass field to given value.

### HasConnectorClass

`func (o *MultiHostIntegrations) HasConnectorClass() bool`

HasConnectorClass returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *MultiHostIntegrations) GetConnectorAttributes() MultiHostIntegrationsConnectorAttributes`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *MultiHostIntegrations) GetConnectorAttributesOk() (*MultiHostIntegrationsConnectorAttributes, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *MultiHostIntegrations) SetConnectorAttributes(v MultiHostIntegrationsConnectorAttributes)`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *MultiHostIntegrations) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetDeleteThreshold

`func (o *MultiHostIntegrations) GetDeleteThreshold() int32`

GetDeleteThreshold returns the DeleteThreshold field if non-nil, zero value otherwise.

### GetDeleteThresholdOk

`func (o *MultiHostIntegrations) GetDeleteThresholdOk() (*int32, bool)`

GetDeleteThresholdOk returns a tuple with the DeleteThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteThreshold

`func (o *MultiHostIntegrations) SetDeleteThreshold(v int32)`

SetDeleteThreshold sets DeleteThreshold field to given value.

### HasDeleteThreshold

`func (o *MultiHostIntegrations) HasDeleteThreshold() bool`

HasDeleteThreshold returns a boolean if a field has been set.

### GetAuthoritative

`func (o *MultiHostIntegrations) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *MultiHostIntegrations) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *MultiHostIntegrations) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *MultiHostIntegrations) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetManagementWorkgroup

`func (o *MultiHostIntegrations) GetManagementWorkgroup() MultiHostIntegrationsManagementWorkgroup`

GetManagementWorkgroup returns the ManagementWorkgroup field if non-nil, zero value otherwise.

### GetManagementWorkgroupOk

`func (o *MultiHostIntegrations) GetManagementWorkgroupOk() (*MultiHostIntegrationsManagementWorkgroup, bool)`

GetManagementWorkgroupOk returns a tuple with the ManagementWorkgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagementWorkgroup

`func (o *MultiHostIntegrations) SetManagementWorkgroup(v MultiHostIntegrationsManagementWorkgroup)`

SetManagementWorkgroup sets ManagementWorkgroup field to given value.

### HasManagementWorkgroup

`func (o *MultiHostIntegrations) HasManagementWorkgroup() bool`

HasManagementWorkgroup returns a boolean if a field has been set.

### SetManagementWorkgroupNil

`func (o *MultiHostIntegrations) SetManagementWorkgroupNil(b bool)`

 SetManagementWorkgroupNil sets the value for ManagementWorkgroup to be an explicit nil

### UnsetManagementWorkgroup
`func (o *MultiHostIntegrations) UnsetManagementWorkgroup()`

UnsetManagementWorkgroup ensures that no value is present for ManagementWorkgroup, not even an explicit nil
### GetHealthy

`func (o *MultiHostIntegrations) GetHealthy() bool`

GetHealthy returns the Healthy field if non-nil, zero value otherwise.

### GetHealthyOk

`func (o *MultiHostIntegrations) GetHealthyOk() (*bool, bool)`

GetHealthyOk returns a tuple with the Healthy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthy

`func (o *MultiHostIntegrations) SetHealthy(v bool)`

SetHealthy sets Healthy field to given value.

### HasHealthy

`func (o *MultiHostIntegrations) HasHealthy() bool`

HasHealthy returns a boolean if a field has been set.

### GetStatus

`func (o *MultiHostIntegrations) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *MultiHostIntegrations) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *MultiHostIntegrations) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *MultiHostIntegrations) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetSince

`func (o *MultiHostIntegrations) GetSince() time.Time`

GetSince returns the Since field if non-nil, zero value otherwise.

### GetSinceOk

`func (o *MultiHostIntegrations) GetSinceOk() (*time.Time, bool)`

GetSinceOk returns a tuple with the Since field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSince

`func (o *MultiHostIntegrations) SetSince(v time.Time)`

SetSince sets Since field to given value.

### HasSince

`func (o *MultiHostIntegrations) HasSince() bool`

HasSince returns a boolean if a field has been set.

### GetConnectorId

`func (o *MultiHostIntegrations) GetConnectorId() string`

GetConnectorId returns the ConnectorId field if non-nil, zero value otherwise.

### GetConnectorIdOk

`func (o *MultiHostIntegrations) GetConnectorIdOk() (*string, bool)`

GetConnectorIdOk returns a tuple with the ConnectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorId

`func (o *MultiHostIntegrations) SetConnectorId(v string)`

SetConnectorId sets ConnectorId field to given value.

### HasConnectorId

`func (o *MultiHostIntegrations) HasConnectorId() bool`

HasConnectorId returns a boolean if a field has been set.

### GetConnectorName

`func (o *MultiHostIntegrations) GetConnectorName() string`

GetConnectorName returns the ConnectorName field if non-nil, zero value otherwise.

### GetConnectorNameOk

`func (o *MultiHostIntegrations) GetConnectorNameOk() (*string, bool)`

GetConnectorNameOk returns a tuple with the ConnectorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorName

`func (o *MultiHostIntegrations) SetConnectorName(v string)`

SetConnectorName sets ConnectorName field to given value.

### HasConnectorName

`func (o *MultiHostIntegrations) HasConnectorName() bool`

HasConnectorName returns a boolean if a field has been set.

### GetConnectionType

`func (o *MultiHostIntegrations) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *MultiHostIntegrations) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *MultiHostIntegrations) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *MultiHostIntegrations) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### GetConnectorImplementationId

`func (o *MultiHostIntegrations) GetConnectorImplementationId() string`

GetConnectorImplementationId returns the ConnectorImplementationId field if non-nil, zero value otherwise.

### GetConnectorImplementationIdOk

`func (o *MultiHostIntegrations) GetConnectorImplementationIdOk() (*string, bool)`

GetConnectorImplementationIdOk returns a tuple with the ConnectorImplementationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorImplementationId

`func (o *MultiHostIntegrations) SetConnectorImplementationId(v string)`

SetConnectorImplementationId sets ConnectorImplementationId field to given value.

### HasConnectorImplementationId

`func (o *MultiHostIntegrations) HasConnectorImplementationId() bool`

HasConnectorImplementationId returns a boolean if a field has been set.

### GetCreated

`func (o *MultiHostIntegrations) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MultiHostIntegrations) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MultiHostIntegrations) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MultiHostIntegrations) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MultiHostIntegrations) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MultiHostIntegrations) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MultiHostIntegrations) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MultiHostIntegrations) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCredentialProviderEnabled

`func (o *MultiHostIntegrations) GetCredentialProviderEnabled() bool`

GetCredentialProviderEnabled returns the CredentialProviderEnabled field if non-nil, zero value otherwise.

### GetCredentialProviderEnabledOk

`func (o *MultiHostIntegrations) GetCredentialProviderEnabledOk() (*bool, bool)`

GetCredentialProviderEnabledOk returns a tuple with the CredentialProviderEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialProviderEnabled

`func (o *MultiHostIntegrations) SetCredentialProviderEnabled(v bool)`

SetCredentialProviderEnabled sets CredentialProviderEnabled field to given value.

### HasCredentialProviderEnabled

`func (o *MultiHostIntegrations) HasCredentialProviderEnabled() bool`

HasCredentialProviderEnabled returns a boolean if a field has been set.

### GetCategory

`func (o *MultiHostIntegrations) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *MultiHostIntegrations) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *MultiHostIntegrations) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *MultiHostIntegrations) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### SetCategoryNil

`func (o *MultiHostIntegrations) SetCategoryNil(b bool)`

 SetCategoryNil sets the value for Category to be an explicit nil

### UnsetCategory
`func (o *MultiHostIntegrations) UnsetCategory()`

UnsetCategory ensures that no value is present for Category, not even an explicit nil


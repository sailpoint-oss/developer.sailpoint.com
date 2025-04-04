---
id: v2024-multi-host-integrations-create
title: MultiHostIntegrationsCreate
pagination_label: MultiHostIntegrationsCreate
sidebar_label: MultiHostIntegrationsCreate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationsCreate', 'V2024MultiHostIntegrationsCreate'] 
slug: /tools/sdk/go/v2024/models/multi-host-integrations-create
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCreate', 'V2024MultiHostIntegrationsCreate']
---

# MultiHostIntegrationsCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Multi-Host Integration's human-readable name. | 
**Description** | **string** | Multi-Host Integration's human-readable description. | 
**Owner** | [**SourceOwner**](source-owner) |  | 
**Cluster** | Pointer to [**NullableSourceCluster**](source-cluster) |  | [optional] 
**Connector** | **string** | Connector script name. | 
**ConnectorAttributes** | Pointer to **map[string]interface{}** | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] 
**ManagementWorkgroup** | Pointer to [**NullableSourceManagementWorkgroup**](source-management-workgroup) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the source was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Date-time when the source was last modified. | [optional] 

## Methods

### NewMultiHostIntegrationsCreate

`func NewMultiHostIntegrationsCreate(name string, description string, owner SourceOwner, connector string, ) *MultiHostIntegrationsCreate`

NewMultiHostIntegrationsCreate instantiates a new MultiHostIntegrationsCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsCreateWithDefaults

`func NewMultiHostIntegrationsCreateWithDefaults() *MultiHostIntegrationsCreate`

NewMultiHostIntegrationsCreateWithDefaults instantiates a new MultiHostIntegrationsCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MultiHostIntegrationsCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostIntegrationsCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostIntegrationsCreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *MultiHostIntegrationsCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MultiHostIntegrationsCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MultiHostIntegrationsCreate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *MultiHostIntegrationsCreate) GetOwner() SourceOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *MultiHostIntegrationsCreate) GetOwnerOk() (*SourceOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *MultiHostIntegrationsCreate) SetOwner(v SourceOwner)`

SetOwner sets Owner field to given value.


### GetCluster

`func (o *MultiHostIntegrationsCreate) GetCluster() SourceCluster`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *MultiHostIntegrationsCreate) GetClusterOk() (*SourceCluster, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *MultiHostIntegrationsCreate) SetCluster(v SourceCluster)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *MultiHostIntegrationsCreate) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### SetClusterNil

`func (o *MultiHostIntegrationsCreate) SetClusterNil(b bool)`

 SetClusterNil sets the value for Cluster to be an explicit nil

### UnsetCluster
`func (o *MultiHostIntegrationsCreate) UnsetCluster()`

UnsetCluster ensures that no value is present for Cluster, not even an explicit nil
### GetConnector

`func (o *MultiHostIntegrationsCreate) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *MultiHostIntegrationsCreate) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *MultiHostIntegrationsCreate) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetConnectorAttributes

`func (o *MultiHostIntegrationsCreate) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *MultiHostIntegrationsCreate) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *MultiHostIntegrationsCreate) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *MultiHostIntegrationsCreate) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetManagementWorkgroup

`func (o *MultiHostIntegrationsCreate) GetManagementWorkgroup() SourceManagementWorkgroup`

GetManagementWorkgroup returns the ManagementWorkgroup field if non-nil, zero value otherwise.

### GetManagementWorkgroupOk

`func (o *MultiHostIntegrationsCreate) GetManagementWorkgroupOk() (*SourceManagementWorkgroup, bool)`

GetManagementWorkgroupOk returns a tuple with the ManagementWorkgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagementWorkgroup

`func (o *MultiHostIntegrationsCreate) SetManagementWorkgroup(v SourceManagementWorkgroup)`

SetManagementWorkgroup sets ManagementWorkgroup field to given value.

### HasManagementWorkgroup

`func (o *MultiHostIntegrationsCreate) HasManagementWorkgroup() bool`

HasManagementWorkgroup returns a boolean if a field has been set.

### SetManagementWorkgroupNil

`func (o *MultiHostIntegrationsCreate) SetManagementWorkgroupNil(b bool)`

 SetManagementWorkgroupNil sets the value for ManagementWorkgroup to be an explicit nil

### UnsetManagementWorkgroup
`func (o *MultiHostIntegrationsCreate) UnsetManagementWorkgroup()`

UnsetManagementWorkgroup ensures that no value is present for ManagementWorkgroup, not even an explicit nil
### GetCreated

`func (o *MultiHostIntegrationsCreate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MultiHostIntegrationsCreate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MultiHostIntegrationsCreate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MultiHostIntegrationsCreate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MultiHostIntegrationsCreate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MultiHostIntegrationsCreate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MultiHostIntegrationsCreate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MultiHostIntegrationsCreate) HasModified() bool`

HasModified returns a boolean if a field has been set.



---
id: v1-multihostintegrationscreate
title: Multihostintegrationscreate
pagination_label: Multihostintegrationscreate
sidebar_label: Multihostintegrationscreate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Multihostintegrationscreate', 'V1Multihostintegrationscreate'] 
slug: /tools/sdk/go/multihostintegration/models/multihostintegrationscreate
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationscreate', 'V1Multihostintegrationscreate']
---

# Multihostintegrationscreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Multi-Host Integration's human-readable name. | 
**Description** | **string** | Multi-Host Integration's human-readable description. | 
**Owner** | [**MultihostintegrationsOwner**](multihostintegrations-owner) |  | 
**Cluster** | Pointer to [**NullableMultihostintegrationsCluster**](multihostintegrations-cluster) |  | [optional] 
**Connector** | **string** | Connector script name. | 
**ConnectorAttributes** | Pointer to **map[string]interface{}** | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] 
**ManagementWorkgroup** | Pointer to [**NullableMultihostintegrationsManagementWorkgroup**](multihostintegrations-management-workgroup) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the source was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Date-time when the source was last modified. | [optional] 

## Methods

### NewMultihostintegrationscreate

`func NewMultihostintegrationscreate(name string, description string, owner MultihostintegrationsOwner, connector string, ) *Multihostintegrationscreate`

NewMultihostintegrationscreate instantiates a new Multihostintegrationscreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostintegrationscreateWithDefaults

`func NewMultihostintegrationscreateWithDefaults() *Multihostintegrationscreate`

NewMultihostintegrationscreateWithDefaults instantiates a new Multihostintegrationscreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Multihostintegrationscreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Multihostintegrationscreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Multihostintegrationscreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Multihostintegrationscreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Multihostintegrationscreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Multihostintegrationscreate) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *Multihostintegrationscreate) GetOwner() MultihostintegrationsOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Multihostintegrationscreate) GetOwnerOk() (*MultihostintegrationsOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Multihostintegrationscreate) SetOwner(v MultihostintegrationsOwner)`

SetOwner sets Owner field to given value.


### GetCluster

`func (o *Multihostintegrationscreate) GetCluster() MultihostintegrationsCluster`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *Multihostintegrationscreate) GetClusterOk() (*MultihostintegrationsCluster, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *Multihostintegrationscreate) SetCluster(v MultihostintegrationsCluster)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *Multihostintegrationscreate) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### SetClusterNil

`func (o *Multihostintegrationscreate) SetClusterNil(b bool)`

 SetClusterNil sets the value for Cluster to be an explicit nil

### UnsetCluster
`func (o *Multihostintegrationscreate) UnsetCluster()`

UnsetCluster ensures that no value is present for Cluster, not even an explicit nil
### GetConnector

`func (o *Multihostintegrationscreate) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *Multihostintegrationscreate) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *Multihostintegrationscreate) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetConnectorAttributes

`func (o *Multihostintegrationscreate) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Multihostintegrationscreate) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Multihostintegrationscreate) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Multihostintegrationscreate) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetManagementWorkgroup

`func (o *Multihostintegrationscreate) GetManagementWorkgroup() MultihostintegrationsManagementWorkgroup`

GetManagementWorkgroup returns the ManagementWorkgroup field if non-nil, zero value otherwise.

### GetManagementWorkgroupOk

`func (o *Multihostintegrationscreate) GetManagementWorkgroupOk() (*MultihostintegrationsManagementWorkgroup, bool)`

GetManagementWorkgroupOk returns a tuple with the ManagementWorkgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagementWorkgroup

`func (o *Multihostintegrationscreate) SetManagementWorkgroup(v MultihostintegrationsManagementWorkgroup)`

SetManagementWorkgroup sets ManagementWorkgroup field to given value.

### HasManagementWorkgroup

`func (o *Multihostintegrationscreate) HasManagementWorkgroup() bool`

HasManagementWorkgroup returns a boolean if a field has been set.

### SetManagementWorkgroupNil

`func (o *Multihostintegrationscreate) SetManagementWorkgroupNil(b bool)`

 SetManagementWorkgroupNil sets the value for ManagementWorkgroup to be an explicit nil

### UnsetManagementWorkgroup
`func (o *Multihostintegrationscreate) UnsetManagementWorkgroup()`

UnsetManagementWorkgroup ensures that no value is present for ManagementWorkgroup, not even an explicit nil
### GetCreated

`func (o *Multihostintegrationscreate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Multihostintegrationscreate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Multihostintegrationscreate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Multihostintegrationscreate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Multihostintegrationscreate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Multihostintegrationscreate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Multihostintegrationscreate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Multihostintegrationscreate) HasModified() bool`

HasModified returns a boolean if a field has been set.



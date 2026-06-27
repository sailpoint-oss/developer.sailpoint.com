---
id: v1-servicedeskintegrationdto
title: Servicedeskintegrationdto
pagination_label: Servicedeskintegrationdto
sidebar_label: Servicedeskintegrationdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Servicedeskintegrationdto', 'V1Servicedeskintegrationdto'] 
slug: /tools/sdk/go/servicedeskintegration/models/servicedeskintegrationdto
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationdto', 'V1Servicedeskintegrationdto']
---

# Servicedeskintegrationdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the Service Desk integration | [optional] 
**Name** | **string** | Service Desk integration's name. The name must be unique. | 
**Created** | Pointer to **SailPointTime** | The date and time the Service Desk integration was created | [optional] 
**Modified** | Pointer to **SailPointTime** | The date and time the Service Desk integration was last modified | [optional] 
**Description** | **string** | Service Desk integration's description. | 
**Type** | **string** | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [default to "ServiceNowSDIM"]
**OwnerRef** | Pointer to [**Ownerdto**](ownerdto) |  | [optional] 
**ClusterRef** | Pointer to [**Sourceclusterdto**](sourceclusterdto) |  | [optional] 
**Cluster** | Pointer to **NullableString** | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [optional] 
**ManagedSources** | Pointer to **[]string** | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [optional] 
**ProvisioningConfig** | Pointer to [**Provisioningconfig**](provisioningconfig) |  | [optional] 
**Attributes** | **map[string]interface{}** | Service Desk integration's attributes. Validation constraints enforced by the implementation. | 
**BeforeProvisioningRule** | Pointer to [**Beforeprovisioningruledto**](beforeprovisioningruledto) |  | [optional] 

## Methods

### NewServicedeskintegrationdto

`func NewServicedeskintegrationdto(name string, description string, type_ string, attributes map[string]interface{}, ) *Servicedeskintegrationdto`

NewServicedeskintegrationdto instantiates a new Servicedeskintegrationdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServicedeskintegrationdtoWithDefaults

`func NewServicedeskintegrationdtoWithDefaults() *Servicedeskintegrationdto`

NewServicedeskintegrationdtoWithDefaults instantiates a new Servicedeskintegrationdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Servicedeskintegrationdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Servicedeskintegrationdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Servicedeskintegrationdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Servicedeskintegrationdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Servicedeskintegrationdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Servicedeskintegrationdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Servicedeskintegrationdto) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *Servicedeskintegrationdto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Servicedeskintegrationdto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Servicedeskintegrationdto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Servicedeskintegrationdto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Servicedeskintegrationdto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Servicedeskintegrationdto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Servicedeskintegrationdto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Servicedeskintegrationdto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Servicedeskintegrationdto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Servicedeskintegrationdto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Servicedeskintegrationdto) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *Servicedeskintegrationdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Servicedeskintegrationdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Servicedeskintegrationdto) SetType(v string)`

SetType sets Type field to given value.


### GetOwnerRef

`func (o *Servicedeskintegrationdto) GetOwnerRef() Ownerdto`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *Servicedeskintegrationdto) GetOwnerRefOk() (*Ownerdto, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *Servicedeskintegrationdto) SetOwnerRef(v Ownerdto)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *Servicedeskintegrationdto) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetClusterRef

`func (o *Servicedeskintegrationdto) GetClusterRef() Sourceclusterdto`

GetClusterRef returns the ClusterRef field if non-nil, zero value otherwise.

### GetClusterRefOk

`func (o *Servicedeskintegrationdto) GetClusterRefOk() (*Sourceclusterdto, bool)`

GetClusterRefOk returns a tuple with the ClusterRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterRef

`func (o *Servicedeskintegrationdto) SetClusterRef(v Sourceclusterdto)`

SetClusterRef sets ClusterRef field to given value.

### HasClusterRef

`func (o *Servicedeskintegrationdto) HasClusterRef() bool`

HasClusterRef returns a boolean if a field has been set.

### GetCluster

`func (o *Servicedeskintegrationdto) GetCluster() string`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *Servicedeskintegrationdto) GetClusterOk() (*string, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *Servicedeskintegrationdto) SetCluster(v string)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *Servicedeskintegrationdto) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### SetClusterNil

`func (o *Servicedeskintegrationdto) SetClusterNil(b bool)`

 SetClusterNil sets the value for Cluster to be an explicit nil

### UnsetCluster
`func (o *Servicedeskintegrationdto) UnsetCluster()`

UnsetCluster ensures that no value is present for Cluster, not even an explicit nil
### GetManagedSources

`func (o *Servicedeskintegrationdto) GetManagedSources() []string`

GetManagedSources returns the ManagedSources field if non-nil, zero value otherwise.

### GetManagedSourcesOk

`func (o *Servicedeskintegrationdto) GetManagedSourcesOk() (*[]string, bool)`

GetManagedSourcesOk returns a tuple with the ManagedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedSources

`func (o *Servicedeskintegrationdto) SetManagedSources(v []string)`

SetManagedSources sets ManagedSources field to given value.

### HasManagedSources

`func (o *Servicedeskintegrationdto) HasManagedSources() bool`

HasManagedSources returns a boolean if a field has been set.

### GetProvisioningConfig

`func (o *Servicedeskintegrationdto) GetProvisioningConfig() Provisioningconfig`

GetProvisioningConfig returns the ProvisioningConfig field if non-nil, zero value otherwise.

### GetProvisioningConfigOk

`func (o *Servicedeskintegrationdto) GetProvisioningConfigOk() (*Provisioningconfig, bool)`

GetProvisioningConfigOk returns a tuple with the ProvisioningConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningConfig

`func (o *Servicedeskintegrationdto) SetProvisioningConfig(v Provisioningconfig)`

SetProvisioningConfig sets ProvisioningConfig field to given value.

### HasProvisioningConfig

`func (o *Servicedeskintegrationdto) HasProvisioningConfig() bool`

HasProvisioningConfig returns a boolean if a field has been set.

### GetAttributes

`func (o *Servicedeskintegrationdto) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Servicedeskintegrationdto) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Servicedeskintegrationdto) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetBeforeProvisioningRule

`func (o *Servicedeskintegrationdto) GetBeforeProvisioningRule() Beforeprovisioningruledto`

GetBeforeProvisioningRule returns the BeforeProvisioningRule field if non-nil, zero value otherwise.

### GetBeforeProvisioningRuleOk

`func (o *Servicedeskintegrationdto) GetBeforeProvisioningRuleOk() (*Beforeprovisioningruledto, bool)`

GetBeforeProvisioningRuleOk returns a tuple with the BeforeProvisioningRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeProvisioningRule

`func (o *Servicedeskintegrationdto) SetBeforeProvisioningRule(v Beforeprovisioningruledto)`

SetBeforeProvisioningRule sets BeforeProvisioningRule field to given value.

### HasBeforeProvisioningRule

`func (o *Servicedeskintegrationdto) HasBeforeProvisioningRule() bool`

HasBeforeProvisioningRule returns a boolean if a field has been set.



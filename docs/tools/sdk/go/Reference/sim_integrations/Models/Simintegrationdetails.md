---
id: v1-simintegrationdetails
title: Simintegrationdetails
pagination_label: Simintegrationdetails
sidebar_label: Simintegrationdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Simintegrationdetails', 'V1Simintegrationdetails'] 
slug: /tools/sdk/go/simintegrations/models/simintegrationdetails
tags: ['SDK', 'Software Development Kit', 'Simintegrationdetails', 'V1Simintegrationdetails']
---

# Simintegrationdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **string** | The description of the integration | [optional] 
**Type** | Pointer to **string** | The integration type | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | The attributes map containing the credentials used to configure the integration. | [optional] 
**Sources** | Pointer to **[]string** | The list of sources (managed resources) | [optional] 
**Cluster** | Pointer to **string** | The cluster/proxy | [optional] 
**StatusMap** | Pointer to **map[string]interface{}** | Custom mapping between the integration result and the provisioning result | [optional] 
**Request** | Pointer to **map[string]interface{}** | Request data to customize desc and body of the created ticket | [optional] 
**BeforeProvisioningRule** | Pointer to [**SimintegrationdetailsAllOfBeforeProvisioningRule**](simintegrationdetails-all-of-before-provisioning-rule) |  | [optional] 

## Methods

### NewSimintegrationdetails

`func NewSimintegrationdetails(name NullableString, ) *Simintegrationdetails`

NewSimintegrationdetails instantiates a new Simintegrationdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSimintegrationdetailsWithDefaults

`func NewSimintegrationdetailsWithDefaults() *Simintegrationdetails`

NewSimintegrationdetailsWithDefaults instantiates a new Simintegrationdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Simintegrationdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Simintegrationdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Simintegrationdetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Simintegrationdetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Simintegrationdetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Simintegrationdetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Simintegrationdetails) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Simintegrationdetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Simintegrationdetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Simintegrationdetails) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Simintegrationdetails) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Simintegrationdetails) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Simintegrationdetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Simintegrationdetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Simintegrationdetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Simintegrationdetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Simintegrationdetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Simintegrationdetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Simintegrationdetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Simintegrationdetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Simintegrationdetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *Simintegrationdetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Simintegrationdetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Simintegrationdetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Simintegrationdetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *Simintegrationdetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Simintegrationdetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Simintegrationdetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Simintegrationdetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *Simintegrationdetails) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *Simintegrationdetails) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetSources

`func (o *Simintegrationdetails) GetSources() []string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *Simintegrationdetails) GetSourcesOk() (*[]string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *Simintegrationdetails) SetSources(v []string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *Simintegrationdetails) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetCluster

`func (o *Simintegrationdetails) GetCluster() string`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *Simintegrationdetails) GetClusterOk() (*string, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *Simintegrationdetails) SetCluster(v string)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *Simintegrationdetails) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### GetStatusMap

`func (o *Simintegrationdetails) GetStatusMap() map[string]interface{}`

GetStatusMap returns the StatusMap field if non-nil, zero value otherwise.

### GetStatusMapOk

`func (o *Simintegrationdetails) GetStatusMapOk() (*map[string]interface{}, bool)`

GetStatusMapOk returns a tuple with the StatusMap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusMap

`func (o *Simintegrationdetails) SetStatusMap(v map[string]interface{})`

SetStatusMap sets StatusMap field to given value.

### HasStatusMap

`func (o *Simintegrationdetails) HasStatusMap() bool`

HasStatusMap returns a boolean if a field has been set.

### GetRequest

`func (o *Simintegrationdetails) GetRequest() map[string]interface{}`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *Simintegrationdetails) GetRequestOk() (*map[string]interface{}, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *Simintegrationdetails) SetRequest(v map[string]interface{})`

SetRequest sets Request field to given value.

### HasRequest

`func (o *Simintegrationdetails) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetBeforeProvisioningRule

`func (o *Simintegrationdetails) GetBeforeProvisioningRule() SimintegrationdetailsAllOfBeforeProvisioningRule`

GetBeforeProvisioningRule returns the BeforeProvisioningRule field if non-nil, zero value otherwise.

### GetBeforeProvisioningRuleOk

`func (o *Simintegrationdetails) GetBeforeProvisioningRuleOk() (*SimintegrationdetailsAllOfBeforeProvisioningRule, bool)`

GetBeforeProvisioningRuleOk returns a tuple with the BeforeProvisioningRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeProvisioningRule

`func (o *Simintegrationdetails) SetBeforeProvisioningRule(v SimintegrationdetailsAllOfBeforeProvisioningRule)`

SetBeforeProvisioningRule sets BeforeProvisioningRule field to given value.

### HasBeforeProvisioningRule

`func (o *Simintegrationdetails) HasBeforeProvisioningRule() bool`

HasBeforeProvisioningRule returns a boolean if a field has been set.



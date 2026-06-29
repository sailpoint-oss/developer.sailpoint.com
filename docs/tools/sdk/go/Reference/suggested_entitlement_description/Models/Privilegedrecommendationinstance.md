---
id: v1-privilegedrecommendationinstance
title: Privilegedrecommendationinstance
pagination_label: Privilegedrecommendationinstance
sidebar_label: Privilegedrecommendationinstance
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Privilegedrecommendationinstance', 'V1Privilegedrecommendationinstance'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/privilegedrecommendationinstance
tags: ['SDK', 'Software Development Kit', 'Privilegedrecommendationinstance', 'V1Privilegedrecommendationinstance']
---

# Privilegedrecommendationinstance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier for this entitlement instance. | [optional] 
**Attribute** | Pointer to **string** | The entitlement attribute name. | [optional] 
**SourceId** | Pointer to **string** | The ID of the source that owns this entitlement. | [optional] 
**SourceName** | Pointer to **string** | The display name of the source. | [optional] 
**Type** | Pointer to **string** | The entitlement type. | [optional] 
**Value** | Pointer to **string** | The entitlement value or distinguished name. | [optional] 
**Status** | Pointer to **string** | The current review status of this instance. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The currently assigned privilege level, if any. | [optional] 
**Description** | Pointer to **NullableString** | The current description of the entitlement, if one exists. | [optional] 
**RecommendedAt** | Pointer to **SailPointTime** | The timestamp when this instance was recommended. | [optional] 

## Methods

### NewPrivilegedrecommendationinstance

`func NewPrivilegedrecommendationinstance() *Privilegedrecommendationinstance`

NewPrivilegedrecommendationinstance instantiates a new Privilegedrecommendationinstance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegedrecommendationinstanceWithDefaults

`func NewPrivilegedrecommendationinstanceWithDefaults() *Privilegedrecommendationinstance`

NewPrivilegedrecommendationinstanceWithDefaults instantiates a new Privilegedrecommendationinstance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Privilegedrecommendationinstance) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Privilegedrecommendationinstance) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Privilegedrecommendationinstance) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Privilegedrecommendationinstance) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAttribute

`func (o *Privilegedrecommendationinstance) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Privilegedrecommendationinstance) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Privilegedrecommendationinstance) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Privilegedrecommendationinstance) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetSourceId

`func (o *Privilegedrecommendationinstance) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Privilegedrecommendationinstance) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Privilegedrecommendationinstance) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Privilegedrecommendationinstance) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *Privilegedrecommendationinstance) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Privilegedrecommendationinstance) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Privilegedrecommendationinstance) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Privilegedrecommendationinstance) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetType

`func (o *Privilegedrecommendationinstance) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Privilegedrecommendationinstance) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Privilegedrecommendationinstance) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Privilegedrecommendationinstance) HasType() bool`

HasType returns a boolean if a field has been set.

### GetValue

`func (o *Privilegedrecommendationinstance) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Privilegedrecommendationinstance) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Privilegedrecommendationinstance) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Privilegedrecommendationinstance) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetStatus

`func (o *Privilegedrecommendationinstance) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Privilegedrecommendationinstance) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Privilegedrecommendationinstance) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Privilegedrecommendationinstance) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *Privilegedrecommendationinstance) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Privilegedrecommendationinstance) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Privilegedrecommendationinstance) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Privilegedrecommendationinstance) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *Privilegedrecommendationinstance) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *Privilegedrecommendationinstance) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil
### GetDescription

`func (o *Privilegedrecommendationinstance) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Privilegedrecommendationinstance) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Privilegedrecommendationinstance) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Privilegedrecommendationinstance) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Privilegedrecommendationinstance) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Privilegedrecommendationinstance) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetRecommendedAt

`func (o *Privilegedrecommendationinstance) GetRecommendedAt() SailPointTime`

GetRecommendedAt returns the RecommendedAt field if non-nil, zero value otherwise.

### GetRecommendedAtOk

`func (o *Privilegedrecommendationinstance) GetRecommendedAtOk() (*SailPointTime, bool)`

GetRecommendedAtOk returns a tuple with the RecommendedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendedAt

`func (o *Privilegedrecommendationinstance) SetRecommendedAt(v SailPointTime)`

SetRecommendedAt sets RecommendedAt field to given value.

### HasRecommendedAt

`func (o *Privilegedrecommendationinstance) HasRecommendedAt() bool`

HasRecommendedAt returns a boolean if a field has been set.



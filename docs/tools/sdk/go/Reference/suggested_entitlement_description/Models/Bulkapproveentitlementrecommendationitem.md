---
id: v1-bulkapproveentitlementrecommendationitem
title: Bulkapproveentitlementrecommendationitem
pagination_label: Bulkapproveentitlementrecommendationitem
sidebar_label: Bulkapproveentitlementrecommendationitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkapproveentitlementrecommendationitem', 'V1Bulkapproveentitlementrecommendationitem'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/bulkapproveentitlementrecommendationitem
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationitem', 'V1Bulkapproveentitlementrecommendationitem']
---

# Bulkapproveentitlementrecommendationitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the recommendation record to approve. | 
**RecordType** | Pointer to **NullableString** | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [optional] 
**Description** | Pointer to **NullableString** | The approved description text. Required for SED-type items; ignored for privilege items. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The approved privilege level. Required for privilege-type items; ignored for SED items. | [optional] 

## Methods

### NewBulkapproveentitlementrecommendationitem

`func NewBulkapproveentitlementrecommendationitem(id string, ) *Bulkapproveentitlementrecommendationitem`

NewBulkapproveentitlementrecommendationitem instantiates a new Bulkapproveentitlementrecommendationitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkapproveentitlementrecommendationitemWithDefaults

`func NewBulkapproveentitlementrecommendationitemWithDefaults() *Bulkapproveentitlementrecommendationitem`

NewBulkapproveentitlementrecommendationitemWithDefaults instantiates a new Bulkapproveentitlementrecommendationitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Bulkapproveentitlementrecommendationitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Bulkapproveentitlementrecommendationitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Bulkapproveentitlementrecommendationitem) SetId(v string)`

SetId sets Id field to given value.


### GetRecordType

`func (o *Bulkapproveentitlementrecommendationitem) GetRecordType() string`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *Bulkapproveentitlementrecommendationitem) GetRecordTypeOk() (*string, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *Bulkapproveentitlementrecommendationitem) SetRecordType(v string)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *Bulkapproveentitlementrecommendationitem) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### SetRecordTypeNil

`func (o *Bulkapproveentitlementrecommendationitem) SetRecordTypeNil(b bool)`

 SetRecordTypeNil sets the value for RecordType to be an explicit nil

### UnsetRecordType
`func (o *Bulkapproveentitlementrecommendationitem) UnsetRecordType()`

UnsetRecordType ensures that no value is present for RecordType, not even an explicit nil
### GetDescription

`func (o *Bulkapproveentitlementrecommendationitem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Bulkapproveentitlementrecommendationitem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Bulkapproveentitlementrecommendationitem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Bulkapproveentitlementrecommendationitem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Bulkapproveentitlementrecommendationitem) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Bulkapproveentitlementrecommendationitem) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPrivilegeLevel

`func (o *Bulkapproveentitlementrecommendationitem) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Bulkapproveentitlementrecommendationitem) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Bulkapproveentitlementrecommendationitem) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Bulkapproveentitlementrecommendationitem) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *Bulkapproveentitlementrecommendationitem) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *Bulkapproveentitlementrecommendationitem) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil


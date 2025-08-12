---
id: beta-base-common-dto1
title: BaseCommonDto1
pagination_label: BaseCommonDto1
sidebar_label: BaseCommonDto1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseCommonDto1', 'BetaBaseCommonDto1'] 
slug: /tools/sdk/go/beta/models/base-common-dto1
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto1', 'BetaBaseCommonDto1']
---

# BaseCommonDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 

## Methods

### NewBaseCommonDto1

`func NewBaseCommonDto1(name NullableString, ) *BaseCommonDto1`

NewBaseCommonDto1 instantiates a new BaseCommonDto1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseCommonDto1WithDefaults

`func NewBaseCommonDto1WithDefaults() *BaseCommonDto1`

NewBaseCommonDto1WithDefaults instantiates a new BaseCommonDto1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BaseCommonDto1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseCommonDto1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseCommonDto1) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseCommonDto1) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseCommonDto1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseCommonDto1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseCommonDto1) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *BaseCommonDto1) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *BaseCommonDto1) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *BaseCommonDto1) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *BaseCommonDto1) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *BaseCommonDto1) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *BaseCommonDto1) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *BaseCommonDto1) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *BaseCommonDto1) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *BaseCommonDto1) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *BaseCommonDto1) HasModified() bool`

HasModified returns a boolean if a field has been set.



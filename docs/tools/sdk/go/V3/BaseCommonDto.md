---
id: base-common-dto
title: BaseCommonDto
pagination_label: BaseCommonDto
sidebar_label: BaseCommonDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'BaseCommonDto'] 
slug: /tools/sdk/go/v3/models/base-common-dto
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto']
---

# BaseCommonDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **string** | Name of the Object | 
**Created** |  Pointer to **time.Time** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **time.Time** | Last modification date of the Object | [optional] [readonly] 

## Methods

### NewBaseCommonDto

`func NewBaseCommonDto(name string, ) *BaseCommonDto`

NewBaseCommonDto instantiates a new BaseCommonDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseCommonDtoWithDefaults

`func NewBaseCommonDtoWithDefaults() *BaseCommonDto`

NewBaseCommonDtoWithDefaults instantiates a new BaseCommonDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BaseCommonDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseCommonDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseCommonDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseCommonDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseCommonDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseCommonDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseCommonDto) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *BaseCommonDto) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *BaseCommonDto) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *BaseCommonDto) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *BaseCommonDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *BaseCommonDto) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *BaseCommonDto) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *BaseCommonDto) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *BaseCommonDto) HasModified() bool`

HasModified returns a boolean if a field has been set.


[[Back to top]](#) 



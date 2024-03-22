---
id: common-access-item-access
title: CommonAccessItemAccess
pagination_label: CommonAccessItemAccess
sidebar_label: CommonAccessItemAccess
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CommonAccessItemAccess'] 
slug: /tools/sdk/go/beta/models/common-access-item-access
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemAccess']
---

# CommonAccessItemAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Common access ID | [optional] 
**Type** |  Pointer to [**CommonAccessType**](common-access-type) |  | [optional] 
**Name** |  Pointer to **string** | Common access name | [optional] 
**Description** |  Pointer to **NullableString** | Common access description | [optional] 
**OwnerName** |  Pointer to **string** | Common access owner name | [optional] 
**OwnerId** |  Pointer to **string** | Common access owner ID | [optional] 

## Methods

### NewCommonAccessItemAccess

`func NewCommonAccessItemAccess() *CommonAccessItemAccess`

NewCommonAccessItemAccess instantiates a new CommonAccessItemAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonAccessItemAccessWithDefaults

`func NewCommonAccessItemAccessWithDefaults() *CommonAccessItemAccess`

NewCommonAccessItemAccessWithDefaults instantiates a new CommonAccessItemAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CommonAccessItemAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommonAccessItemAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommonAccessItemAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CommonAccessItemAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *CommonAccessItemAccess) GetType() CommonAccessType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommonAccessItemAccess) GetTypeOk() (*CommonAccessType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommonAccessItemAccess) SetType(v CommonAccessType)`

SetType sets Type field to given value.

### HasType

`func (o *CommonAccessItemAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *CommonAccessItemAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CommonAccessItemAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CommonAccessItemAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CommonAccessItemAccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *CommonAccessItemAccess) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CommonAccessItemAccess) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CommonAccessItemAccess) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CommonAccessItemAccess) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *CommonAccessItemAccess) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CommonAccessItemAccess) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwnerName

`func (o *CommonAccessItemAccess) GetOwnerName() string`

GetOwnerName returns the OwnerName field if non-nil, zero value otherwise.

### GetOwnerNameOk

`func (o *CommonAccessItemAccess) GetOwnerNameOk() (*string, bool)`

GetOwnerNameOk returns a tuple with the OwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerName

`func (o *CommonAccessItemAccess) SetOwnerName(v string)`

SetOwnerName sets OwnerName field to given value.

### HasOwnerName

`func (o *CommonAccessItemAccess) HasOwnerName() bool`

HasOwnerName returns a boolean if a field has been set.

### GetOwnerId

`func (o *CommonAccessItemAccess) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *CommonAccessItemAccess) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *CommonAccessItemAccess) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *CommonAccessItemAccess) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.


[[Back to top]](#) 



---
id: v1-commonaccessitemaccess
title: Commonaccessitemaccess
pagination_label: Commonaccessitemaccess
sidebar_label: Commonaccessitemaccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Commonaccessitemaccess', 'V1Commonaccessitemaccess'] 
slug: /tools/sdk/go/iaicommonaccess/models/commonaccessitemaccess
tags: ['SDK', 'Software Development Kit', 'Commonaccessitemaccess', 'V1Commonaccessitemaccess']
---

# Commonaccessitemaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Common access ID | [optional] 
**Type** | Pointer to [**Commonaccesstype**](commonaccesstype) |  | [optional] 
**Name** | Pointer to **string** | Common access name | [optional] 
**Description** | Pointer to **NullableString** | Common access description | [optional] 
**OwnerName** | Pointer to **string** | Common access owner name | [optional] 
**OwnerId** | Pointer to **string** | Common access owner ID | [optional] 

## Methods

### NewCommonaccessitemaccess

`func NewCommonaccessitemaccess() *Commonaccessitemaccess`

NewCommonaccessitemaccess instantiates a new Commonaccessitemaccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonaccessitemaccessWithDefaults

`func NewCommonaccessitemaccessWithDefaults() *Commonaccessitemaccess`

NewCommonaccessitemaccessWithDefaults instantiates a new Commonaccessitemaccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Commonaccessitemaccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Commonaccessitemaccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Commonaccessitemaccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Commonaccessitemaccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Commonaccessitemaccess) GetType() Commonaccesstype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Commonaccessitemaccess) GetTypeOk() (*Commonaccesstype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Commonaccessitemaccess) SetType(v Commonaccesstype)`

SetType sets Type field to given value.

### HasType

`func (o *Commonaccessitemaccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Commonaccessitemaccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Commonaccessitemaccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Commonaccessitemaccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Commonaccessitemaccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Commonaccessitemaccess) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Commonaccessitemaccess) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Commonaccessitemaccess) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Commonaccessitemaccess) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Commonaccessitemaccess) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Commonaccessitemaccess) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwnerName

`func (o *Commonaccessitemaccess) GetOwnerName() string`

GetOwnerName returns the OwnerName field if non-nil, zero value otherwise.

### GetOwnerNameOk

`func (o *Commonaccessitemaccess) GetOwnerNameOk() (*string, bool)`

GetOwnerNameOk returns a tuple with the OwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerName

`func (o *Commonaccessitemaccess) SetOwnerName(v string)`

SetOwnerName sets OwnerName field to given value.

### HasOwnerName

`func (o *Commonaccessitemaccess) HasOwnerName() bool`

HasOwnerName returns a boolean if a field has been set.

### GetOwnerId

`func (o *Commonaccessitemaccess) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Commonaccessitemaccess) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Commonaccessitemaccess) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Commonaccessitemaccess) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.



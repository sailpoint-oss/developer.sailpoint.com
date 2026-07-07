---
id: v1-accesssummary-access
title: AccesssummaryAccess
pagination_label: AccesssummaryAccess
sidebar_label: AccesssummaryAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccesssummaryAccess', 'V1AccesssummaryAccess'] 
slug: /tools/sdk/go/certificationsummaries/models/accesssummary-access
tags: ['SDK', 'Software Development Kit', 'AccesssummaryAccess', 'V1AccesssummaryAccess']
---

# AccesssummaryAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | The ID of the item being certified | [optional] 
**Name** | Pointer to **string** | The name of the item being certified | [optional] 

## Methods

### NewAccesssummaryAccess

`func NewAccesssummaryAccess() *AccesssummaryAccess`

NewAccesssummaryAccess instantiates a new AccesssummaryAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccesssummaryAccessWithDefaults

`func NewAccesssummaryAccessWithDefaults() *AccesssummaryAccess`

NewAccesssummaryAccessWithDefaults instantiates a new AccesssummaryAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccesssummaryAccess) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccesssummaryAccess) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccesssummaryAccess) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *AccesssummaryAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccesssummaryAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccesssummaryAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccesssummaryAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccesssummaryAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccesssummaryAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccesssummaryAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccesssummaryAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccesssummaryAccess) HasName() bool`

HasName returns a boolean if a field has been set.



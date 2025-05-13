---
id: v2025-access-summary-access
title: AccessSummaryAccess
pagination_label: AccessSummaryAccess
sidebar_label: AccessSummaryAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessSummaryAccess', 'V2025AccessSummaryAccess'] 
slug: /tools/sdk/go/v2025/models/access-summary-access
tags: ['SDK', 'Software Development Kit', 'AccessSummaryAccess', 'V2025AccessSummaryAccess']
---

# AccessSummaryAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | The ID of the item being certified | [optional] 
**Name** | Pointer to **string** | The name of the item being certified | [optional] 

## Methods

### NewAccessSummaryAccess

`func NewAccessSummaryAccess() *AccessSummaryAccess`

NewAccessSummaryAccess instantiates a new AccessSummaryAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessSummaryAccessWithDefaults

`func NewAccessSummaryAccessWithDefaults() *AccessSummaryAccess`

NewAccessSummaryAccessWithDefaults instantiates a new AccessSummaryAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessSummaryAccess) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessSummaryAccess) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessSummaryAccess) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *AccessSummaryAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessSummaryAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessSummaryAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessSummaryAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessSummaryAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessSummaryAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessSummaryAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessSummaryAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessSummaryAccess) HasName() bool`

HasName returns a boolean if a field has been set.



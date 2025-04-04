---
id: entitlement-ref
title: EntitlementRef
pagination_label: EntitlementRef
sidebar_label: EntitlementRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRef', 'EntitlementRef'] 
slug: /tools/sdk/go/v3/models/entitlement-ref
tags: ['SDK', 'Software Development Kit', 'EntitlementRef', 'EntitlementRef']
---

# EntitlementRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Entitlement's DTO type. | [optional] 
**Id** | Pointer to **string** | Entitlement's ID. | [optional] 
**Name** | Pointer to **NullableString** | Entitlement's display name. | [optional] 

## Methods

### NewEntitlementRef

`func NewEntitlementRef() *EntitlementRef`

NewEntitlementRef instantiates a new EntitlementRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRefWithDefaults

`func NewEntitlementRefWithDefaults() *EntitlementRef`

NewEntitlementRefWithDefaults instantiates a new EntitlementRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntitlementRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *EntitlementRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *EntitlementRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementRef) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *EntitlementRef) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *EntitlementRef) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil


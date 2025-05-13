---
id: beta-sod-exempt-criteria1
title: SodExemptCriteria1
pagination_label: SodExemptCriteria1
sidebar_label: SodExemptCriteria1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodExemptCriteria1', 'BetaSodExemptCriteria1'] 
slug: /tools/sdk/go/beta/models/sod-exempt-criteria1
tags: ['SDK', 'Software Development Kit', 'SodExemptCriteria1', 'BetaSodExemptCriteria1']
---

# SodExemptCriteria1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Existing** | Pointer to **bool** | If the entitlement already belonged to the user or not. | [optional] [default to false]
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | Entitlement ID | [optional] 
**Name** | Pointer to **string** | Entitlement name | [optional] 

## Methods

### NewSodExemptCriteria1

`func NewSodExemptCriteria1() *SodExemptCriteria1`

NewSodExemptCriteria1 instantiates a new SodExemptCriteria1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodExemptCriteria1WithDefaults

`func NewSodExemptCriteria1WithDefaults() *SodExemptCriteria1`

NewSodExemptCriteria1WithDefaults instantiates a new SodExemptCriteria1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExisting

`func (o *SodExemptCriteria1) GetExisting() bool`

GetExisting returns the Existing field if non-nil, zero value otherwise.

### GetExistingOk

`func (o *SodExemptCriteria1) GetExistingOk() (*bool, bool)`

GetExistingOk returns a tuple with the Existing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExisting

`func (o *SodExemptCriteria1) SetExisting(v bool)`

SetExisting sets Existing field to given value.

### HasExisting

`func (o *SodExemptCriteria1) HasExisting() bool`

HasExisting returns a boolean if a field has been set.

### GetType

`func (o *SodExemptCriteria1) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodExemptCriteria1) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodExemptCriteria1) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *SodExemptCriteria1) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SodExemptCriteria1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodExemptCriteria1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodExemptCriteria1) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodExemptCriteria1) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodExemptCriteria1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodExemptCriteria1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodExemptCriteria1) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodExemptCriteria1) HasName() bool`

HasName returns a boolean if a field has been set.



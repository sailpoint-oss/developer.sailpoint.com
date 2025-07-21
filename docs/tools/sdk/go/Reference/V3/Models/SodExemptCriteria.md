---
id: sod-exempt-criteria
title: SodExemptCriteria
pagination_label: SodExemptCriteria
sidebar_label: SodExemptCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodExemptCriteria', 'SodExemptCriteria'] 
slug: /tools/sdk/go/v3/models/sod-exempt-criteria
tags: ['SDK', 'Software Development Kit', 'SodExemptCriteria', 'SodExemptCriteria']
---

# SodExemptCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Existing** | Pointer to **bool** | If the entitlement already belonged to the user or not. | [optional] [default to false]
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | Entitlement ID | [optional] 
**Name** | Pointer to **string** | Entitlement name | [optional] 

## Methods

### NewSodExemptCriteria

`func NewSodExemptCriteria() *SodExemptCriteria`

NewSodExemptCriteria instantiates a new SodExemptCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodExemptCriteriaWithDefaults

`func NewSodExemptCriteriaWithDefaults() *SodExemptCriteria`

NewSodExemptCriteriaWithDefaults instantiates a new SodExemptCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExisting

`func (o *SodExemptCriteria) GetExisting() bool`

GetExisting returns the Existing field if non-nil, zero value otherwise.

### GetExistingOk

`func (o *SodExemptCriteria) GetExistingOk() (*bool, bool)`

GetExistingOk returns a tuple with the Existing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExisting

`func (o *SodExemptCriteria) SetExisting(v bool)`

SetExisting sets Existing field to given value.

### HasExisting

`func (o *SodExemptCriteria) HasExisting() bool`

HasExisting returns a boolean if a field has been set.

### GetType

`func (o *SodExemptCriteria) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodExemptCriteria) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodExemptCriteria) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *SodExemptCriteria) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SodExemptCriteria) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodExemptCriteria) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodExemptCriteria) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodExemptCriteria) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodExemptCriteria) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodExemptCriteria) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodExemptCriteria) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodExemptCriteria) HasName() bool`

HasName returns a boolean if a field has been set.



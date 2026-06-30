---
id: v1-sodexemptcriteria
title: Sodexemptcriteria
pagination_label: Sodexemptcriteria
sidebar_label: Sodexemptcriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodexemptcriteria', 'V1Sodexemptcriteria'] 
slug: /tools/sdk/go/accessrequestapprovals/models/sodexemptcriteria
tags: ['SDK', 'Software Development Kit', 'Sodexemptcriteria', 'V1Sodexemptcriteria']
---

# Sodexemptcriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Existing** | Pointer to **bool** | If the entitlement already belonged to the user or not. | [optional] [default to false]
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | Entitlement ID | [optional] 
**Name** | Pointer to **string** | Entitlement name | [optional] 

## Methods

### NewSodexemptcriteria

`func NewSodexemptcriteria() *Sodexemptcriteria`

NewSodexemptcriteria instantiates a new Sodexemptcriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodexemptcriteriaWithDefaults

`func NewSodexemptcriteriaWithDefaults() *Sodexemptcriteria`

NewSodexemptcriteriaWithDefaults instantiates a new Sodexemptcriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExisting

`func (o *Sodexemptcriteria) GetExisting() bool`

GetExisting returns the Existing field if non-nil, zero value otherwise.

### GetExistingOk

`func (o *Sodexemptcriteria) GetExistingOk() (*bool, bool)`

GetExistingOk returns a tuple with the Existing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExisting

`func (o *Sodexemptcriteria) SetExisting(v bool)`

SetExisting sets Existing field to given value.

### HasExisting

`func (o *Sodexemptcriteria) HasExisting() bool`

HasExisting returns a boolean if a field has been set.

### GetType

`func (o *Sodexemptcriteria) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sodexemptcriteria) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sodexemptcriteria) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Sodexemptcriteria) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Sodexemptcriteria) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sodexemptcriteria) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sodexemptcriteria) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sodexemptcriteria) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Sodexemptcriteria) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sodexemptcriteria) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sodexemptcriteria) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sodexemptcriteria) HasName() bool`

HasName returns a boolean if a field has been set.



---
id: beta-form-used-by
title: FormUsedBy
pagination_label: FormUsedBy
sidebar_label: FormUsedBy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormUsedBy', 'BetaFormUsedBy'] 
slug: /tools/sdk/go/beta/models/form-used-by
tags: ['SDK', 'Software Development Kit', 'FormUsedBy', 'BetaFormUsedBy']
---

# FormUsedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource MySailPoint FormUsedByType | [optional] 
**Id** | Pointer to **string** | Unique identifier of the system using the form. | [optional] 
**Name** | Pointer to **string** | Name of the system using the form. | [optional] 

## Methods

### NewFormUsedBy

`func NewFormUsedBy() *FormUsedBy`

NewFormUsedBy instantiates a new FormUsedBy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormUsedByWithDefaults

`func NewFormUsedByWithDefaults() *FormUsedBy`

NewFormUsedByWithDefaults instantiates a new FormUsedBy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FormUsedBy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FormUsedBy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FormUsedBy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FormUsedBy) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *FormUsedBy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormUsedBy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormUsedBy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormUsedBy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *FormUsedBy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormUsedBy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormUsedBy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FormUsedBy) HasName() bool`

HasName returns a boolean if a field has been set.



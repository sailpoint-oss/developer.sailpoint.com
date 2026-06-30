---
id: v1-exceptioncriteria-criteria-list-inner
title: ExceptioncriteriaCriteriaListInner
pagination_label: ExceptioncriteriaCriteriaListInner
sidebar_label: ExceptioncriteriaCriteriaListInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExceptioncriteriaCriteriaListInner', 'V1ExceptioncriteriaCriteriaListInner'] 
slug: /tools/sdk/go/sodviolations/models/exceptioncriteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'ExceptioncriteriaCriteriaListInner', 'V1ExceptioncriteriaCriteriaListInner']
---

# ExceptioncriteriaCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of object that is referenced | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | Pointer to **bool** | Whether the subject identity already had that access or not | [optional] [default to false]

## Methods

### NewExceptioncriteriaCriteriaListInner

`func NewExceptioncriteriaCriteriaListInner() *ExceptioncriteriaCriteriaListInner`

NewExceptioncriteriaCriteriaListInner instantiates a new ExceptioncriteriaCriteriaListInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptioncriteriaCriteriaListInnerWithDefaults

`func NewExceptioncriteriaCriteriaListInnerWithDefaults() *ExceptioncriteriaCriteriaListInner`

NewExceptioncriteriaCriteriaListInnerWithDefaults instantiates a new ExceptioncriteriaCriteriaListInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ExceptioncriteriaCriteriaListInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ExceptioncriteriaCriteriaListInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ExceptioncriteriaCriteriaListInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ExceptioncriteriaCriteriaListInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ExceptioncriteriaCriteriaListInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ExceptioncriteriaCriteriaListInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ExceptioncriteriaCriteriaListInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ExceptioncriteriaCriteriaListInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ExceptioncriteriaCriteriaListInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExceptioncriteriaCriteriaListInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExceptioncriteriaCriteriaListInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExceptioncriteriaCriteriaListInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetExisting

`func (o *ExceptioncriteriaCriteriaListInner) GetExisting() bool`

GetExisting returns the Existing field if non-nil, zero value otherwise.

### GetExistingOk

`func (o *ExceptioncriteriaCriteriaListInner) GetExistingOk() (*bool, bool)`

GetExistingOk returns a tuple with the Existing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExisting

`func (o *ExceptioncriteriaCriteriaListInner) SetExisting(v bool)`

SetExisting sets Existing field to given value.

### HasExisting

`func (o *ExceptioncriteriaCriteriaListInner) HasExisting() bool`

HasExisting returns a boolean if a field has been set.



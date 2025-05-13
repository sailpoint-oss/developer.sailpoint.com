---
id: beta-exception-criteria-criteria-list-inner
title: ExceptionCriteriaCriteriaListInner
pagination_label: ExceptionCriteriaCriteriaListInner
sidebar_label: ExceptionCriteriaCriteriaListInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExceptionCriteriaCriteriaListInner', 'BetaExceptionCriteriaCriteriaListInner'] 
slug: /tools/sdk/go/beta/models/exception-criteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaCriteriaListInner', 'BetaExceptionCriteriaCriteriaListInner']
---

# ExceptionCriteriaCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **map[string]interface{}** | The type of object that is referenced | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | Pointer to **bool** | Whether the subject identity already had that access or not | [optional] 

## Methods

### NewExceptionCriteriaCriteriaListInner

`func NewExceptionCriteriaCriteriaListInner() *ExceptionCriteriaCriteriaListInner`

NewExceptionCriteriaCriteriaListInner instantiates a new ExceptionCriteriaCriteriaListInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptionCriteriaCriteriaListInnerWithDefaults

`func NewExceptionCriteriaCriteriaListInnerWithDefaults() *ExceptionCriteriaCriteriaListInner`

NewExceptionCriteriaCriteriaListInnerWithDefaults instantiates a new ExceptionCriteriaCriteriaListInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ExceptionCriteriaCriteriaListInner) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ExceptionCriteriaCriteriaListInner) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ExceptionCriteriaCriteriaListInner) SetType(v map[string]interface{})`

SetType sets Type field to given value.

### HasType

`func (o *ExceptionCriteriaCriteriaListInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ExceptionCriteriaCriteriaListInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ExceptionCriteriaCriteriaListInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ExceptionCriteriaCriteriaListInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ExceptionCriteriaCriteriaListInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ExceptionCriteriaCriteriaListInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExceptionCriteriaCriteriaListInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExceptionCriteriaCriteriaListInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExceptionCriteriaCriteriaListInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetExisting

`func (o *ExceptionCriteriaCriteriaListInner) GetExisting() bool`

GetExisting returns the Existing field if non-nil, zero value otherwise.

### GetExistingOk

`func (o *ExceptionCriteriaCriteriaListInner) GetExistingOk() (*bool, bool)`

GetExistingOk returns a tuple with the Existing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExisting

`func (o *ExceptionCriteriaCriteriaListInner) SetExisting(v bool)`

SetExisting sets Existing field to given value.

### HasExisting

`func (o *ExceptionCriteriaCriteriaListInner) HasExisting() bool`

HasExisting returns a boolean if a field has been set.



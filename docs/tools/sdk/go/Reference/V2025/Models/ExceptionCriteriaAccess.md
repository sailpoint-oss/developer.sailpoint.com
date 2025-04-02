---
id: exception-criteria-access
title: ExceptionCriteriaAccess
pagination_label: ExceptionCriteriaAccess
sidebar_label: ExceptionCriteriaAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExceptionCriteriaAccess', 'ExceptionCriteriaAccess'] 
slug: /tools/sdk/go//models/exception-criteria-access
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaAccess', 'ExceptionCriteriaAccess']
---

# ExceptionCriteriaAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | Pointer to **bool** | Whether the subject identity already had that access or not | [optional] [default to false]

## Methods

### NewExceptionCriteriaAccess

`func NewExceptionCriteriaAccess() *ExceptionCriteriaAccess`

NewExceptionCriteriaAccess instantiates a new ExceptionCriteriaAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptionCriteriaAccessWithDefaults

`func NewExceptionCriteriaAccessWithDefaults() *ExceptionCriteriaAccess`

NewExceptionCriteriaAccessWithDefaults instantiates a new ExceptionCriteriaAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ExceptionCriteriaAccess) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ExceptionCriteriaAccess) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ExceptionCriteriaAccess) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *ExceptionCriteriaAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ExceptionCriteriaAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ExceptionCriteriaAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ExceptionCriteriaAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ExceptionCriteriaAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ExceptionCriteriaAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExceptionCriteriaAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExceptionCriteriaAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExceptionCriteriaAccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetExisting

`func (o *ExceptionCriteriaAccess) GetExisting() bool`

GetExisting returns the Existing field if non-nil, zero value otherwise.

### GetExistingOk

`func (o *ExceptionCriteriaAccess) GetExistingOk() (*bool, bool)`

GetExistingOk returns a tuple with the Existing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExisting

`func (o *ExceptionCriteriaAccess) SetExisting(v bool)`

SetExisting sets Existing field to given value.

### HasExisting

`func (o *ExceptionCriteriaAccess) HasExisting() bool`

HasExisting returns a boolean if a field has been set.



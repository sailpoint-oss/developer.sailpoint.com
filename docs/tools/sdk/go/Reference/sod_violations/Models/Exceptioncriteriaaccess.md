---
id: v1-exceptioncriteriaaccess
title: Exceptioncriteriaaccess
pagination_label: Exceptioncriteriaaccess
sidebar_label: Exceptioncriteriaaccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Exceptioncriteriaaccess', 'V1Exceptioncriteriaaccess'] 
slug: /tools/sdk/go/sodviolations/models/exceptioncriteriaaccess
tags: ['SDK', 'Software Development Kit', 'Exceptioncriteriaaccess', 'V1Exceptioncriteriaaccess']
---

# Exceptioncriteriaaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | Pointer to **bool** | Whether the subject identity already had that access or not | [optional] [default to false]

## Methods

### NewExceptioncriteriaaccess

`func NewExceptioncriteriaaccess() *Exceptioncriteriaaccess`

NewExceptioncriteriaaccess instantiates a new Exceptioncriteriaaccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptioncriteriaaccessWithDefaults

`func NewExceptioncriteriaaccessWithDefaults() *Exceptioncriteriaaccess`

NewExceptioncriteriaaccessWithDefaults instantiates a new Exceptioncriteriaaccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Exceptioncriteriaaccess) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Exceptioncriteriaaccess) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Exceptioncriteriaaccess) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Exceptioncriteriaaccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Exceptioncriteriaaccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Exceptioncriteriaaccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Exceptioncriteriaaccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Exceptioncriteriaaccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Exceptioncriteriaaccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Exceptioncriteriaaccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Exceptioncriteriaaccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Exceptioncriteriaaccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetExisting

`func (o *Exceptioncriteriaaccess) GetExisting() bool`

GetExisting returns the Existing field if non-nil, zero value otherwise.

### GetExistingOk

`func (o *Exceptioncriteriaaccess) GetExistingOk() (*bool, bool)`

GetExistingOk returns a tuple with the Existing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExisting

`func (o *Exceptioncriteriaaccess) SetExisting(v bool)`

SetExisting sets Existing field to given value.

### HasExisting

`func (o *Exceptioncriteriaaccess) HasExisting() bool`

HasExisting returns a boolean if a field has been set.



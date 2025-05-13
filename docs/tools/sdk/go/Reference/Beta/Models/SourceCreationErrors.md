---
id: beta-source-creation-errors
title: SourceCreationErrors
pagination_label: SourceCreationErrors
sidebar_label: SourceCreationErrors
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceCreationErrors', 'BetaSourceCreationErrors'] 
slug: /tools/sdk/go/beta/models/source-creation-errors
tags: ['SDK', 'Software Development Kit', 'SourceCreationErrors', 'BetaSourceCreationErrors']
---

# SourceCreationErrors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MultihostId** | Pointer to **string** | Multi-Host Integration ID. | [optional] [readonly] 
**SourceName** | Pointer to **string** | Source's human-readable name. | [optional] 
**SourceError** | Pointer to **string** | Source's human-readable description. | [optional] 
**Created** | Pointer to **time.Time** | Date-time when the source was created | [optional] 
**Modified** | Pointer to **time.Time** | Date-time when the source was last modified. | [optional] 
**Operation** | Pointer to **NullableString** | operation category (e.g. DELETE). | [optional] 

## Methods

### NewSourceCreationErrors

`func NewSourceCreationErrors() *SourceCreationErrors`

NewSourceCreationErrors instantiates a new SourceCreationErrors object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceCreationErrorsWithDefaults

`func NewSourceCreationErrorsWithDefaults() *SourceCreationErrors`

NewSourceCreationErrorsWithDefaults instantiates a new SourceCreationErrors object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMultihostId

`func (o *SourceCreationErrors) GetMultihostId() string`

GetMultihostId returns the MultihostId field if non-nil, zero value otherwise.

### GetMultihostIdOk

`func (o *SourceCreationErrors) GetMultihostIdOk() (*string, bool)`

GetMultihostIdOk returns a tuple with the MultihostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultihostId

`func (o *SourceCreationErrors) SetMultihostId(v string)`

SetMultihostId sets MultihostId field to given value.

### HasMultihostId

`func (o *SourceCreationErrors) HasMultihostId() bool`

HasMultihostId returns a boolean if a field has been set.

### GetSourceName

`func (o *SourceCreationErrors) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *SourceCreationErrors) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *SourceCreationErrors) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *SourceCreationErrors) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceError

`func (o *SourceCreationErrors) GetSourceError() string`

GetSourceError returns the SourceError field if non-nil, zero value otherwise.

### GetSourceErrorOk

`func (o *SourceCreationErrors) GetSourceErrorOk() (*string, bool)`

GetSourceErrorOk returns a tuple with the SourceError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceError

`func (o *SourceCreationErrors) SetSourceError(v string)`

SetSourceError sets SourceError field to given value.

### HasSourceError

`func (o *SourceCreationErrors) HasSourceError() bool`

HasSourceError returns a boolean if a field has been set.

### GetCreated

`func (o *SourceCreationErrors) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceCreationErrors) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceCreationErrors) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceCreationErrors) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SourceCreationErrors) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceCreationErrors) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceCreationErrors) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceCreationErrors) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetOperation

`func (o *SourceCreationErrors) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *SourceCreationErrors) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *SourceCreationErrors) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *SourceCreationErrors) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### SetOperationNil

`func (o *SourceCreationErrors) SetOperationNil(b bool)`

 SetOperationNil sets the value for Operation to be an explicit nil

### UnsetOperation
`func (o *SourceCreationErrors) UnsetOperation()`

UnsetOperation ensures that no value is present for Operation, not even an explicit nil


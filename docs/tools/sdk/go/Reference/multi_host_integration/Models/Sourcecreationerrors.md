---
id: v1-sourcecreationerrors
title: Sourcecreationerrors
pagination_label: Sourcecreationerrors
sidebar_label: Sourcecreationerrors
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcecreationerrors', 'V1Sourcecreationerrors'] 
slug: /tools/sdk/go/multihostintegration/models/sourcecreationerrors
tags: ['SDK', 'Software Development Kit', 'Sourcecreationerrors', 'V1Sourcecreationerrors']
---

# Sourcecreationerrors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MultihostId** | Pointer to **string** | Multi-Host Integration ID. | [optional] [readonly] 
**SourceName** | Pointer to **string** | Source's human-readable name. | [optional] 
**SourceError** | Pointer to **string** | Source's human-readable description. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the source was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Date-time when the source was last modified. | [optional] 
**Operation** | Pointer to **NullableString** | operation category (e.g. DELETE). | [optional] 

## Methods

### NewSourcecreationerrors

`func NewSourcecreationerrors() *Sourcecreationerrors`

NewSourcecreationerrors instantiates a new Sourcecreationerrors object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcecreationerrorsWithDefaults

`func NewSourcecreationerrorsWithDefaults() *Sourcecreationerrors`

NewSourcecreationerrorsWithDefaults instantiates a new Sourcecreationerrors object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMultihostId

`func (o *Sourcecreationerrors) GetMultihostId() string`

GetMultihostId returns the MultihostId field if non-nil, zero value otherwise.

### GetMultihostIdOk

`func (o *Sourcecreationerrors) GetMultihostIdOk() (*string, bool)`

GetMultihostIdOk returns a tuple with the MultihostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultihostId

`func (o *Sourcecreationerrors) SetMultihostId(v string)`

SetMultihostId sets MultihostId field to given value.

### HasMultihostId

`func (o *Sourcecreationerrors) HasMultihostId() bool`

HasMultihostId returns a boolean if a field has been set.

### GetSourceName

`func (o *Sourcecreationerrors) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Sourcecreationerrors) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Sourcecreationerrors) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Sourcecreationerrors) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceError

`func (o *Sourcecreationerrors) GetSourceError() string`

GetSourceError returns the SourceError field if non-nil, zero value otherwise.

### GetSourceErrorOk

`func (o *Sourcecreationerrors) GetSourceErrorOk() (*string, bool)`

GetSourceErrorOk returns a tuple with the SourceError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceError

`func (o *Sourcecreationerrors) SetSourceError(v string)`

SetSourceError sets SourceError field to given value.

### HasSourceError

`func (o *Sourcecreationerrors) HasSourceError() bool`

HasSourceError returns a boolean if a field has been set.

### GetCreated

`func (o *Sourcecreationerrors) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sourcecreationerrors) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sourcecreationerrors) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sourcecreationerrors) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Sourcecreationerrors) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sourcecreationerrors) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sourcecreationerrors) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Sourcecreationerrors) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetOperation

`func (o *Sourcecreationerrors) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Sourcecreationerrors) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Sourcecreationerrors) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Sourcecreationerrors) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### SetOperationNil

`func (o *Sourcecreationerrors) SetOperationNil(b bool)`

 SetOperationNil sets the value for Operation to be an explicit nil

### UnsetOperation
`func (o *Sourcecreationerrors) UnsetOperation()`

UnsetOperation ensures that no value is present for Operation, not even an explicit nil


---
id: beta-process-identities-request
title: ProcessIdentitiesRequest
pagination_label: ProcessIdentitiesRequest
sidebar_label: ProcessIdentitiesRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProcessIdentitiesRequest', 'BetaProcessIdentitiesRequest'] 
slug: /tools/sdk/go/beta/models/process-identities-request
tags: ['SDK', 'Software Development Kit', 'ProcessIdentitiesRequest', 'BetaProcessIdentitiesRequest']
---

# ProcessIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | Pointer to **[]string** | List of up to 250 identity IDs to process. | [optional] 

## Methods

### NewProcessIdentitiesRequest

`func NewProcessIdentitiesRequest() *ProcessIdentitiesRequest`

NewProcessIdentitiesRequest instantiates a new ProcessIdentitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessIdentitiesRequestWithDefaults

`func NewProcessIdentitiesRequestWithDefaults() *ProcessIdentitiesRequest`

NewProcessIdentitiesRequestWithDefaults instantiates a new ProcessIdentitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityIds

`func (o *ProcessIdentitiesRequest) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *ProcessIdentitiesRequest) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *ProcessIdentitiesRequest) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *ProcessIdentitiesRequest) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.



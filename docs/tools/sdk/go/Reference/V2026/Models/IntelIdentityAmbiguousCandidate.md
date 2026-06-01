---
id: v2026-intel-identity-ambiguous-candidate
title: IntelIdentityAmbiguousCandidate
pagination_label: IntelIdentityAmbiguousCandidate
sidebar_label: IntelIdentityAmbiguousCandidate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityAmbiguousCandidate', 'V2026IntelIdentityAmbiguousCandidate'] 
slug: /tools/sdk/go/v2026/models/intel-identity-ambiguous-candidate
tags: ['SDK', 'Software Development Kit', 'IntelIdentityAmbiguousCandidate', 'V2026IntelIdentityAmbiguousCandidate']
---

# IntelIdentityAmbiguousCandidate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identity identifier for one of the ambiguous matching identities. | 
**DisplayName** | Pointer to **string** | Display name for the ambiguous matching identity when available. | [optional] 

## Methods

### NewIntelIdentityAmbiguousCandidate

`func NewIntelIdentityAmbiguousCandidate(id string, ) *IntelIdentityAmbiguousCandidate`

NewIntelIdentityAmbiguousCandidate instantiates a new IntelIdentityAmbiguousCandidate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityAmbiguousCandidateWithDefaults

`func NewIntelIdentityAmbiguousCandidateWithDefaults() *IntelIdentityAmbiguousCandidate`

NewIntelIdentityAmbiguousCandidateWithDefaults instantiates a new IntelIdentityAmbiguousCandidate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntelIdentityAmbiguousCandidate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelIdentityAmbiguousCandidate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelIdentityAmbiguousCandidate) SetId(v string)`

SetId sets Id field to given value.


### GetDisplayName

`func (o *IntelIdentityAmbiguousCandidate) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IntelIdentityAmbiguousCandidate) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IntelIdentityAmbiguousCandidate) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IntelIdentityAmbiguousCandidate) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.



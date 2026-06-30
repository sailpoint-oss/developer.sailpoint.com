---
id: v1-identitiesaccountsbulkrequest
title: Identitiesaccountsbulkrequest
pagination_label: Identitiesaccountsbulkrequest
sidebar_label: Identitiesaccountsbulkrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitiesaccountsbulkrequest', 'V1Identitiesaccountsbulkrequest'] 
slug: /tools/sdk/go/accounts/models/identitiesaccountsbulkrequest
tags: ['SDK', 'Software Development Kit', 'Identitiesaccountsbulkrequest', 'V1Identitiesaccountsbulkrequest']
---

# Identitiesaccountsbulkrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | Pointer to **[]string** | The ids of the identities for which enable/disable accounts. | [optional] 

## Methods

### NewIdentitiesaccountsbulkrequest

`func NewIdentitiesaccountsbulkrequest() *Identitiesaccountsbulkrequest`

NewIdentitiesaccountsbulkrequest instantiates a new Identitiesaccountsbulkrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitiesaccountsbulkrequestWithDefaults

`func NewIdentitiesaccountsbulkrequestWithDefaults() *Identitiesaccountsbulkrequest`

NewIdentitiesaccountsbulkrequestWithDefaults instantiates a new Identitiesaccountsbulkrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityIds

`func (o *Identitiesaccountsbulkrequest) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *Identitiesaccountsbulkrequest) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *Identitiesaccountsbulkrequest) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *Identitiesaccountsbulkrequest) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.



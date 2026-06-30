---
id: v1-processidentitiesrequest
title: Processidentitiesrequest
pagination_label: Processidentitiesrequest
sidebar_label: Processidentitiesrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Processidentitiesrequest', 'V1Processidentitiesrequest'] 
slug: /tools/sdk/go/identities/models/processidentitiesrequest
tags: ['SDK', 'Software Development Kit', 'Processidentitiesrequest', 'V1Processidentitiesrequest']
---

# Processidentitiesrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | Pointer to **[]string** | List of up to 250 identity IDs to process. | [optional] 

## Methods

### NewProcessidentitiesrequest

`func NewProcessidentitiesrequest() *Processidentitiesrequest`

NewProcessidentitiesrequest instantiates a new Processidentitiesrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessidentitiesrequestWithDefaults

`func NewProcessidentitiesrequestWithDefaults() *Processidentitiesrequest`

NewProcessidentitiesrequestWithDefaults instantiates a new Processidentitiesrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityIds

`func (o *Processidentitiesrequest) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *Processidentitiesrequest) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *Processidentitiesrequest) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *Processidentitiesrequest) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.



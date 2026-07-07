---
id: v1-identitypreviewrequest
title: Identitypreviewrequest
pagination_label: Identitypreviewrequest
sidebar_label: Identitypreviewrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitypreviewrequest', 'V1Identitypreviewrequest'] 
slug: /tools/sdk/go/identityprofiles/models/identitypreviewrequest
tags: ['SDK', 'Software Development Kit', 'Identitypreviewrequest', 'V1Identitypreviewrequest']
---

# Identitypreviewrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The Identity id | [optional] 
**IdentityAttributeConfig** | Pointer to [**Identityattributeconfig**](identityattributeconfig) |  | [optional] 

## Methods

### NewIdentitypreviewrequest

`func NewIdentitypreviewrequest() *Identitypreviewrequest`

NewIdentitypreviewrequest instantiates a new Identitypreviewrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitypreviewrequestWithDefaults

`func NewIdentitypreviewrequestWithDefaults() *Identitypreviewrequest`

NewIdentitypreviewrequestWithDefaults instantiates a new Identitypreviewrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Identitypreviewrequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Identitypreviewrequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Identitypreviewrequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Identitypreviewrequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetIdentityAttributeConfig

`func (o *Identitypreviewrequest) GetIdentityAttributeConfig() Identityattributeconfig`

GetIdentityAttributeConfig returns the IdentityAttributeConfig field if non-nil, zero value otherwise.

### GetIdentityAttributeConfigOk

`func (o *Identitypreviewrequest) GetIdentityAttributeConfigOk() (*Identityattributeconfig, bool)`

GetIdentityAttributeConfigOk returns a tuple with the IdentityAttributeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeConfig

`func (o *Identitypreviewrequest) SetIdentityAttributeConfig(v Identityattributeconfig)`

SetIdentityAttributeConfig sets IdentityAttributeConfig field to given value.

### HasIdentityAttributeConfig

`func (o *Identitypreviewrequest) HasIdentityAttributeConfig() bool`

HasIdentityAttributeConfig returns a boolean if a field has been set.



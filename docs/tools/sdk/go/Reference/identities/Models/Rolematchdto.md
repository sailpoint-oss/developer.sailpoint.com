---
id: v1-rolematchdto
title: Rolematchdto
pagination_label: Rolematchdto
sidebar_label: Rolematchdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolematchdto', 'V1Rolematchdto'] 
slug: /tools/sdk/go/identities/models/rolematchdto
tags: ['SDK', 'Software Development Kit', 'Rolematchdto', 'V1Rolematchdto']
---

# Rolematchdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleRef** | Pointer to [**Basereferencedto**](basereferencedto) |  | [optional] 
**MatchedAttributes** | Pointer to [**[]Contextattributedto**](contextattributedto) |  | [optional] 

## Methods

### NewRolematchdto

`func NewRolematchdto() *Rolematchdto`

NewRolematchdto instantiates a new Rolematchdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolematchdtoWithDefaults

`func NewRolematchdtoWithDefaults() *Rolematchdto`

NewRolematchdtoWithDefaults instantiates a new Rolematchdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoleRef

`func (o *Rolematchdto) GetRoleRef() Basereferencedto`

GetRoleRef returns the RoleRef field if non-nil, zero value otherwise.

### GetRoleRefOk

`func (o *Rolematchdto) GetRoleRefOk() (*Basereferencedto, bool)`

GetRoleRefOk returns a tuple with the RoleRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleRef

`func (o *Rolematchdto) SetRoleRef(v Basereferencedto)`

SetRoleRef sets RoleRef field to given value.

### HasRoleRef

`func (o *Rolematchdto) HasRoleRef() bool`

HasRoleRef returns a boolean if a field has been set.

### GetMatchedAttributes

`func (o *Rolematchdto) GetMatchedAttributes() []Contextattributedto`

GetMatchedAttributes returns the MatchedAttributes field if non-nil, zero value otherwise.

### GetMatchedAttributesOk

`func (o *Rolematchdto) GetMatchedAttributesOk() (*[]Contextattributedto, bool)`

GetMatchedAttributesOk returns a tuple with the MatchedAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchedAttributes

`func (o *Rolematchdto) SetMatchedAttributes(v []Contextattributedto)`

SetMatchedAttributes sets MatchedAttributes field to given value.

### HasMatchedAttributes

`func (o *Rolematchdto) HasMatchedAttributes() bool`

HasMatchedAttributes returns a boolean if a field has been set.



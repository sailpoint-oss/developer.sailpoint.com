---
id: identity-association-details-association-details-inner
title: IdentityAssociationDetailsAssociationDetailsInner
pagination_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAssociationDetailsAssociationDetailsInner', 'IdentityAssociationDetailsAssociationDetailsInner'] 
slug: /tools/sdk/go//models/identity-association-details-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAssociationDetailsAssociationDetailsInner', 'IdentityAssociationDetailsAssociationDetailsInner']
---

# IdentityAssociationDetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** | Pointer to **string** | association type with the identity | [optional] 
**Entities** | Pointer to [**[]IdentityEntities**](identity-entities) | the specific resource this identity has ownership on | [optional] 

## Methods

### NewIdentityAssociationDetailsAssociationDetailsInner

`func NewIdentityAssociationDetailsAssociationDetailsInner() *IdentityAssociationDetailsAssociationDetailsInner`

NewIdentityAssociationDetailsAssociationDetailsInner instantiates a new IdentityAssociationDetailsAssociationDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAssociationDetailsAssociationDetailsInnerWithDefaults

`func NewIdentityAssociationDetailsAssociationDetailsInnerWithDefaults() *IdentityAssociationDetailsAssociationDetailsInner`

NewIdentityAssociationDetailsAssociationDetailsInnerWithDefaults instantiates a new IdentityAssociationDetailsAssociationDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociationType

`func (o *IdentityAssociationDetailsAssociationDetailsInner) GetAssociationType() string`

GetAssociationType returns the AssociationType field if non-nil, zero value otherwise.

### GetAssociationTypeOk

`func (o *IdentityAssociationDetailsAssociationDetailsInner) GetAssociationTypeOk() (*string, bool)`

GetAssociationTypeOk returns a tuple with the AssociationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationType

`func (o *IdentityAssociationDetailsAssociationDetailsInner) SetAssociationType(v string)`

SetAssociationType sets AssociationType field to given value.

### HasAssociationType

`func (o *IdentityAssociationDetailsAssociationDetailsInner) HasAssociationType() bool`

HasAssociationType returns a boolean if a field has been set.

### GetEntities

`func (o *IdentityAssociationDetailsAssociationDetailsInner) GetEntities() []IdentityEntities`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *IdentityAssociationDetailsAssociationDetailsInner) GetEntitiesOk() (*[]IdentityEntities, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *IdentityAssociationDetailsAssociationDetailsInner) SetEntities(v []IdentityEntities)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *IdentityAssociationDetailsAssociationDetailsInner) HasEntities() bool`

HasEntities returns a boolean if a field has been set.



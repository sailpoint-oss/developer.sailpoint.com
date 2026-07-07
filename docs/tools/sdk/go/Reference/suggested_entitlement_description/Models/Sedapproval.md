---
id: v1-sedapproval
title: Sedapproval
pagination_label: Sedapproval
sidebar_label: Sedapproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedapproval', 'V1Sedapproval'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedapproval
tags: ['SDK', 'Software Development Kit', 'Sedapproval', 'V1Sedapproval']
---

# Sedapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to **[]string** | List of SED id's | [optional] 

## Methods

### NewSedapproval

`func NewSedapproval() *Sedapproval`

NewSedapproval instantiates a new Sedapproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedapprovalWithDefaults

`func NewSedapprovalWithDefaults() *Sedapproval`

NewSedapprovalWithDefaults instantiates a new Sedapproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Sedapproval) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Sedapproval) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Sedapproval) SetItems(v []string)`

SetItems sets Items field to given value.

### HasItems

`func (o *Sedapproval) HasItems() bool`

HasItems returns a boolean if a field has been set.



---
id: v2024-sed-approval
title: SedApproval
pagination_label: SedApproval
sidebar_label: SedApproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedApproval', 'V2024SedApproval'] 
slug: /tools/sdk/go/v2024/models/sed-approval
tags: ['SDK', 'Software Development Kit', 'SedApproval', 'V2024SedApproval']
---

# SedApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to **[]string** | List of SED id&#39;s | [optional] 

## Methods

### NewSedApproval

`func NewSedApproval() *SedApproval`

NewSedApproval instantiates a new SedApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedApprovalWithDefaults

`func NewSedApprovalWithDefaults() *SedApproval`

NewSedApprovalWithDefaults instantiates a new SedApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *SedApproval) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *SedApproval) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *SedApproval) SetItems(v []string)`

SetItems sets Items field to given value.

### HasItems

`func (o *SedApproval) HasItems() bool`

HasItems returns a boolean if a field has been set.



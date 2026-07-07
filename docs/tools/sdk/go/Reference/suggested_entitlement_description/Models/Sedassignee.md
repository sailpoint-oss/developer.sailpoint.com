---
id: v1-sedassignee
title: Sedassignee
pagination_label: Sedassignee
sidebar_label: Sedassignee
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedassignee', 'V1Sedassignee'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedassignee
tags: ['SDK', 'Software Development Kit', 'Sedassignee', 'V1Sedassignee']
---

# Sedassignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of assignment When value is PERSONA, the value MUST be SOURCE_OWNER or ENTITLEMENT_OWNER IDENTITY SED_ASSIGNEE_IDENTITY_TYPE GROUP SED_ASSIGNEE_GROUP_TYPE SOURCE_OWNER SED_ASSIGNEE_SOURCE_OWNER_TYPE ENTITLEMENT_OWNER SED_ASSIGNEE_ENTITLEMENT_OWNER_TYPE | 
**Value** | Pointer to **string** | Identity or Group identifier Empty when using source/entitlement owner personas | [optional] 

## Methods

### NewSedassignee

`func NewSedassignee(type_ string, ) *Sedassignee`

NewSedassignee instantiates a new Sedassignee object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedassigneeWithDefaults

`func NewSedassigneeWithDefaults() *Sedassignee`

NewSedassigneeWithDefaults instantiates a new Sedassignee object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Sedassignee) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sedassignee) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sedassignee) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *Sedassignee) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Sedassignee) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Sedassignee) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Sedassignee) HasValue() bool`

HasValue returns a boolean if a field has been set.



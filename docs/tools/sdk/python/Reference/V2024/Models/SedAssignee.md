---
id: v2024-sed-assignee
title: SedAssignee
pagination_label: SedAssignee
sidebar_label: SedAssignee
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedAssignee', 'V2024SedAssignee'] 
slug: /tools/sdk/go/v2024/models/sed-assignee
tags: ['SDK', 'Software Development Kit', 'SedAssignee', 'V2024SedAssignee']
---

# SedAssignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of assignment When value is PERSONA, the value MUST be SOURCE_OWNER or ENTITLEMENT_OWNER IDENTITY SED_ASSIGNEE_IDENTITY_TYPE GROUP SED_ASSIGNEE_GROUP_TYPE SOURCE_OWNER SED_ASSIGNEE_SOURCE_OWNER_TYPE ENTITLEMENT_OWNER SED_ASSIGNEE_ENTITLEMENT_OWNER_TYPE | 
**Value** | Pointer to **string** | Identity or Group identifier Empty when using source/entitlement owner personas | [optional] 

## Methods

### NewSedAssignee

`func NewSedAssignee(type_ string, ) *SedAssignee`

NewSedAssignee instantiates a new SedAssignee object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedAssigneeWithDefaults

`func NewSedAssigneeWithDefaults() *SedAssignee`

NewSedAssigneeWithDefaults instantiates a new SedAssignee object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SedAssignee) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SedAssignee) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SedAssignee) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *SedAssignee) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SedAssignee) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SedAssignee) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SedAssignee) HasValue() bool`

HasValue returns a boolean if a field has been set.



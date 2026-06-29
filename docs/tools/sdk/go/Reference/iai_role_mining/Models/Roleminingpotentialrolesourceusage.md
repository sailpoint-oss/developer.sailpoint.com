---
id: v1-roleminingpotentialrolesourceusage
title: Roleminingpotentialrolesourceusage
pagination_label: Roleminingpotentialrolesourceusage
sidebar_label: Roleminingpotentialrolesourceusage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingpotentialrolesourceusage', 'V1Roleminingpotentialrolesourceusage'] 
slug: /tools/sdk/go/iairolemining/models/roleminingpotentialrolesourceusage
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialrolesourceusage', 'V1Roleminingpotentialrolesourceusage']
---

# Roleminingpotentialrolesourceusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The identity ID | [optional] 
**DisplayName** | Pointer to **string** | Display name for the identity | [optional] 
**Email** | Pointer to **string** | Email address for the identity | [optional] 
**UsageCount** | Pointer to **int32** | The number of days there has been usage of the source by the identity. | [optional] 

## Methods

### NewRoleminingpotentialrolesourceusage

`func NewRoleminingpotentialrolesourceusage() *Roleminingpotentialrolesourceusage`

NewRoleminingpotentialrolesourceusage instantiates a new Roleminingpotentialrolesourceusage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingpotentialrolesourceusageWithDefaults

`func NewRoleminingpotentialrolesourceusageWithDefaults() *Roleminingpotentialrolesourceusage`

NewRoleminingpotentialrolesourceusageWithDefaults instantiates a new Roleminingpotentialrolesourceusage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleminingpotentialrolesourceusage) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingpotentialrolesourceusage) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingpotentialrolesourceusage) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingpotentialrolesourceusage) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *Roleminingpotentialrolesourceusage) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Roleminingpotentialrolesourceusage) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Roleminingpotentialrolesourceusage) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Roleminingpotentialrolesourceusage) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetEmail

`func (o *Roleminingpotentialrolesourceusage) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Roleminingpotentialrolesourceusage) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Roleminingpotentialrolesourceusage) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Roleminingpotentialrolesourceusage) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetUsageCount

`func (o *Roleminingpotentialrolesourceusage) GetUsageCount() int32`

GetUsageCount returns the UsageCount field if non-nil, zero value otherwise.

### GetUsageCountOk

`func (o *Roleminingpotentialrolesourceusage) GetUsageCountOk() (*int32, bool)`

GetUsageCountOk returns a tuple with the UsageCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageCount

`func (o *Roleminingpotentialrolesourceusage) SetUsageCount(v int32)`

SetUsageCount sets UsageCount field to given value.

### HasUsageCount

`func (o *Roleminingpotentialrolesourceusage) HasUsageCount() bool`

HasUsageCount returns a boolean if a field has been set.



---
id: v1-roleminingpotentialroleexportrequest
title: Roleminingpotentialroleexportrequest
pagination_label: Roleminingpotentialroleexportrequest
sidebar_label: Roleminingpotentialroleexportrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingpotentialroleexportrequest', 'V1Roleminingpotentialroleexportrequest'] 
slug: /tools/sdk/go/iairolemining/models/roleminingpotentialroleexportrequest
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleexportrequest', 'V1Roleminingpotentialroleexportrequest']
---

# Roleminingpotentialroleexportrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | Pointer to **int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | Pointer to **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 

## Methods

### NewRoleminingpotentialroleexportrequest

`func NewRoleminingpotentialroleexportrequest() *Roleminingpotentialroleexportrequest`

NewRoleminingpotentialroleexportrequest instantiates a new Roleminingpotentialroleexportrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingpotentialroleexportrequestWithDefaults

`func NewRoleminingpotentialroleexportrequestWithDefaults() *Roleminingpotentialroleexportrequest`

NewRoleminingpotentialroleexportrequestWithDefaults instantiates a new Roleminingpotentialroleexportrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinEntitlementPopularity

`func (o *Roleminingpotentialroleexportrequest) GetMinEntitlementPopularity() int32`

GetMinEntitlementPopularity returns the MinEntitlementPopularity field if non-nil, zero value otherwise.

### GetMinEntitlementPopularityOk

`func (o *Roleminingpotentialroleexportrequest) GetMinEntitlementPopularityOk() (*int32, bool)`

GetMinEntitlementPopularityOk returns a tuple with the MinEntitlementPopularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinEntitlementPopularity

`func (o *Roleminingpotentialroleexportrequest) SetMinEntitlementPopularity(v int32)`

SetMinEntitlementPopularity sets MinEntitlementPopularity field to given value.

### HasMinEntitlementPopularity

`func (o *Roleminingpotentialroleexportrequest) HasMinEntitlementPopularity() bool`

HasMinEntitlementPopularity returns a boolean if a field has been set.

### GetIncludeCommonAccess

`func (o *Roleminingpotentialroleexportrequest) GetIncludeCommonAccess() bool`

GetIncludeCommonAccess returns the IncludeCommonAccess field if non-nil, zero value otherwise.

### GetIncludeCommonAccessOk

`func (o *Roleminingpotentialroleexportrequest) GetIncludeCommonAccessOk() (*bool, bool)`

GetIncludeCommonAccessOk returns a tuple with the IncludeCommonAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeCommonAccess

`func (o *Roleminingpotentialroleexportrequest) SetIncludeCommonAccess(v bool)`

SetIncludeCommonAccess sets IncludeCommonAccess field to given value.

### HasIncludeCommonAccess

`func (o *Roleminingpotentialroleexportrequest) HasIncludeCommonAccess() bool`

HasIncludeCommonAccess returns a boolean if a field has been set.



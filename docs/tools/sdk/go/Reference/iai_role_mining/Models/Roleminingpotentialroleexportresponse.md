---
id: v1-roleminingpotentialroleexportresponse
title: Roleminingpotentialroleexportresponse
pagination_label: Roleminingpotentialroleexportresponse
sidebar_label: Roleminingpotentialroleexportresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingpotentialroleexportresponse', 'V1Roleminingpotentialroleexportresponse'] 
slug: /tools/sdk/go/iairolemining/models/roleminingpotentialroleexportresponse
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleexportresponse', 'V1Roleminingpotentialroleexportresponse']
---

# Roleminingpotentialroleexportresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | Pointer to **int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | Pointer to **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
**ExportId** | Pointer to **string** | ID used to reference this export | [optional] 
**Status** | Pointer to [**Roleminingpotentialroleexportstate**](roleminingpotentialroleexportstate) |  | [optional] 

## Methods

### NewRoleminingpotentialroleexportresponse

`func NewRoleminingpotentialroleexportresponse() *Roleminingpotentialroleexportresponse`

NewRoleminingpotentialroleexportresponse instantiates a new Roleminingpotentialroleexportresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingpotentialroleexportresponseWithDefaults

`func NewRoleminingpotentialroleexportresponseWithDefaults() *Roleminingpotentialroleexportresponse`

NewRoleminingpotentialroleexportresponseWithDefaults instantiates a new Roleminingpotentialroleexportresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinEntitlementPopularity

`func (o *Roleminingpotentialroleexportresponse) GetMinEntitlementPopularity() int32`

GetMinEntitlementPopularity returns the MinEntitlementPopularity field if non-nil, zero value otherwise.

### GetMinEntitlementPopularityOk

`func (o *Roleminingpotentialroleexportresponse) GetMinEntitlementPopularityOk() (*int32, bool)`

GetMinEntitlementPopularityOk returns a tuple with the MinEntitlementPopularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinEntitlementPopularity

`func (o *Roleminingpotentialroleexportresponse) SetMinEntitlementPopularity(v int32)`

SetMinEntitlementPopularity sets MinEntitlementPopularity field to given value.

### HasMinEntitlementPopularity

`func (o *Roleminingpotentialroleexportresponse) HasMinEntitlementPopularity() bool`

HasMinEntitlementPopularity returns a boolean if a field has been set.

### GetIncludeCommonAccess

`func (o *Roleminingpotentialroleexportresponse) GetIncludeCommonAccess() bool`

GetIncludeCommonAccess returns the IncludeCommonAccess field if non-nil, zero value otherwise.

### GetIncludeCommonAccessOk

`func (o *Roleminingpotentialroleexportresponse) GetIncludeCommonAccessOk() (*bool, bool)`

GetIncludeCommonAccessOk returns a tuple with the IncludeCommonAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeCommonAccess

`func (o *Roleminingpotentialroleexportresponse) SetIncludeCommonAccess(v bool)`

SetIncludeCommonAccess sets IncludeCommonAccess field to given value.

### HasIncludeCommonAccess

`func (o *Roleminingpotentialroleexportresponse) HasIncludeCommonAccess() bool`

HasIncludeCommonAccess returns a boolean if a field has been set.

### GetExportId

`func (o *Roleminingpotentialroleexportresponse) GetExportId() string`

GetExportId returns the ExportId field if non-nil, zero value otherwise.

### GetExportIdOk

`func (o *Roleminingpotentialroleexportresponse) GetExportIdOk() (*string, bool)`

GetExportIdOk returns a tuple with the ExportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportId

`func (o *Roleminingpotentialroleexportresponse) SetExportId(v string)`

SetExportId sets ExportId field to given value.

### HasExportId

`func (o *Roleminingpotentialroleexportresponse) HasExportId() bool`

HasExportId returns a boolean if a field has been set.

### GetStatus

`func (o *Roleminingpotentialroleexportresponse) GetStatus() Roleminingpotentialroleexportstate`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Roleminingpotentialroleexportresponse) GetStatusOk() (*Roleminingpotentialroleexportstate, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Roleminingpotentialroleexportresponse) SetStatus(v Roleminingpotentialroleexportstate)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Roleminingpotentialroleexportresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.



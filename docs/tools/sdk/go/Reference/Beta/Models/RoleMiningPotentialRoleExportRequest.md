---
id: beta-role-mining-potential-role-export-request
title: RoleMiningPotentialRoleExportRequest
pagination_label: RoleMiningPotentialRoleExportRequest
sidebar_label: RoleMiningPotentialRoleExportRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningPotentialRoleExportRequest', 'BetaRoleMiningPotentialRoleExportRequest'] 
slug: /tools/sdk/go/beta/models/role-mining-potential-role-export-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportRequest', 'BetaRoleMiningPotentialRoleExportRequest']
---

# RoleMiningPotentialRoleExportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | Pointer to **int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | Pointer to **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 

## Methods

### NewRoleMiningPotentialRoleExportRequest

`func NewRoleMiningPotentialRoleExportRequest() *RoleMiningPotentialRoleExportRequest`

NewRoleMiningPotentialRoleExportRequest instantiates a new RoleMiningPotentialRoleExportRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningPotentialRoleExportRequestWithDefaults

`func NewRoleMiningPotentialRoleExportRequestWithDefaults() *RoleMiningPotentialRoleExportRequest`

NewRoleMiningPotentialRoleExportRequestWithDefaults instantiates a new RoleMiningPotentialRoleExportRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinEntitlementPopularity

`func (o *RoleMiningPotentialRoleExportRequest) GetMinEntitlementPopularity() int32`

GetMinEntitlementPopularity returns the MinEntitlementPopularity field if non-nil, zero value otherwise.

### GetMinEntitlementPopularityOk

`func (o *RoleMiningPotentialRoleExportRequest) GetMinEntitlementPopularityOk() (*int32, bool)`

GetMinEntitlementPopularityOk returns a tuple with the MinEntitlementPopularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinEntitlementPopularity

`func (o *RoleMiningPotentialRoleExportRequest) SetMinEntitlementPopularity(v int32)`

SetMinEntitlementPopularity sets MinEntitlementPopularity field to given value.

### HasMinEntitlementPopularity

`func (o *RoleMiningPotentialRoleExportRequest) HasMinEntitlementPopularity() bool`

HasMinEntitlementPopularity returns a boolean if a field has been set.

### GetIncludeCommonAccess

`func (o *RoleMiningPotentialRoleExportRequest) GetIncludeCommonAccess() bool`

GetIncludeCommonAccess returns the IncludeCommonAccess field if non-nil, zero value otherwise.

### GetIncludeCommonAccessOk

`func (o *RoleMiningPotentialRoleExportRequest) GetIncludeCommonAccessOk() (*bool, bool)`

GetIncludeCommonAccessOk returns a tuple with the IncludeCommonAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeCommonAccess

`func (o *RoleMiningPotentialRoleExportRequest) SetIncludeCommonAccess(v bool)`

SetIncludeCommonAccess sets IncludeCommonAccess field to given value.

### HasIncludeCommonAccess

`func (o *RoleMiningPotentialRoleExportRequest) HasIncludeCommonAccess() bool`

HasIncludeCommonAccess returns a boolean if a field has been set.



---
id: v2024-role-mining-potential-role-export-response
title: RoleMiningPotentialRoleExportResponse
pagination_label: RoleMiningPotentialRoleExportResponse
sidebar_label: RoleMiningPotentialRoleExportResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningPotentialRoleExportResponse', 'V2024RoleMiningPotentialRoleExportResponse'] 
slug: /tools/sdk/go/v2024/models/role-mining-potential-role-export-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportResponse', 'V2024RoleMiningPotentialRoleExportResponse']
---

# RoleMiningPotentialRoleExportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | Pointer to **int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | Pointer to **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
**ExportId** | Pointer to **string** | ID used to reference this export | [optional] 
**Status** | Pointer to [**RoleMiningPotentialRoleExportState**](role-mining-potential-role-export-state) |  | [optional] 

## Methods

### NewRoleMiningPotentialRoleExportResponse

`func NewRoleMiningPotentialRoleExportResponse() *RoleMiningPotentialRoleExportResponse`

NewRoleMiningPotentialRoleExportResponse instantiates a new RoleMiningPotentialRoleExportResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningPotentialRoleExportResponseWithDefaults

`func NewRoleMiningPotentialRoleExportResponseWithDefaults() *RoleMiningPotentialRoleExportResponse`

NewRoleMiningPotentialRoleExportResponseWithDefaults instantiates a new RoleMiningPotentialRoleExportResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinEntitlementPopularity

`func (o *RoleMiningPotentialRoleExportResponse) GetMinEntitlementPopularity() int32`

GetMinEntitlementPopularity returns the MinEntitlementPopularity field if non-nil, zero value otherwise.

### GetMinEntitlementPopularityOk

`func (o *RoleMiningPotentialRoleExportResponse) GetMinEntitlementPopularityOk() (*int32, bool)`

GetMinEntitlementPopularityOk returns a tuple with the MinEntitlementPopularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinEntitlementPopularity

`func (o *RoleMiningPotentialRoleExportResponse) SetMinEntitlementPopularity(v int32)`

SetMinEntitlementPopularity sets MinEntitlementPopularity field to given value.

### HasMinEntitlementPopularity

`func (o *RoleMiningPotentialRoleExportResponse) HasMinEntitlementPopularity() bool`

HasMinEntitlementPopularity returns a boolean if a field has been set.

### GetIncludeCommonAccess

`func (o *RoleMiningPotentialRoleExportResponse) GetIncludeCommonAccess() bool`

GetIncludeCommonAccess returns the IncludeCommonAccess field if non-nil, zero value otherwise.

### GetIncludeCommonAccessOk

`func (o *RoleMiningPotentialRoleExportResponse) GetIncludeCommonAccessOk() (*bool, bool)`

GetIncludeCommonAccessOk returns a tuple with the IncludeCommonAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeCommonAccess

`func (o *RoleMiningPotentialRoleExportResponse) SetIncludeCommonAccess(v bool)`

SetIncludeCommonAccess sets IncludeCommonAccess field to given value.

### HasIncludeCommonAccess

`func (o *RoleMiningPotentialRoleExportResponse) HasIncludeCommonAccess() bool`

HasIncludeCommonAccess returns a boolean if a field has been set.

### GetExportId

`func (o *RoleMiningPotentialRoleExportResponse) GetExportId() string`

GetExportId returns the ExportId field if non-nil, zero value otherwise.

### GetExportIdOk

`func (o *RoleMiningPotentialRoleExportResponse) GetExportIdOk() (*string, bool)`

GetExportIdOk returns a tuple with the ExportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportId

`func (o *RoleMiningPotentialRoleExportResponse) SetExportId(v string)`

SetExportId sets ExportId field to given value.

### HasExportId

`func (o *RoleMiningPotentialRoleExportResponse) HasExportId() bool`

HasExportId returns a boolean if a field has been set.

### GetStatus

`func (o *RoleMiningPotentialRoleExportResponse) GetStatus() RoleMiningPotentialRoleExportState`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoleMiningPotentialRoleExportResponse) GetStatusOk() (*RoleMiningPotentialRoleExportState, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoleMiningPotentialRoleExportResponse) SetStatus(v RoleMiningPotentialRoleExportState)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoleMiningPotentialRoleExportResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.



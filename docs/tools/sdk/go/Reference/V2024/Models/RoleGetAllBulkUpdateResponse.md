---
id: v2024-role-get-all-bulk-update-response
title: RoleGetAllBulkUpdateResponse
pagination_label: RoleGetAllBulkUpdateResponse
sidebar_label: RoleGetAllBulkUpdateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleGetAllBulkUpdateResponse', 'V2024RoleGetAllBulkUpdateResponse'] 
slug: /tools/sdk/go/v2024/models/role-get-all-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'RoleGetAllBulkUpdateResponse', 'V2024RoleGetAllBulkUpdateResponse']
---

# RoleGetAllBulkUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the task which is executing the bulk update. This also used in to the bulk-update/_** API to track status. | [optional] 
**Type** | Pointer to **string** | Type of the bulk update object. | [optional] 
**Status** | Pointer to **string** | The status of the bulk update request, only list unfinished request's status, the status could also checked by getBulkUpdateStatus API | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the bulk update request was created | [optional] 

## Methods

### NewRoleGetAllBulkUpdateResponse

`func NewRoleGetAllBulkUpdateResponse() *RoleGetAllBulkUpdateResponse`

NewRoleGetAllBulkUpdateResponse instantiates a new RoleGetAllBulkUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleGetAllBulkUpdateResponseWithDefaults

`func NewRoleGetAllBulkUpdateResponseWithDefaults() *RoleGetAllBulkUpdateResponse`

NewRoleGetAllBulkUpdateResponseWithDefaults instantiates a new RoleGetAllBulkUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleGetAllBulkUpdateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleGetAllBulkUpdateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleGetAllBulkUpdateResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleGetAllBulkUpdateResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *RoleGetAllBulkUpdateResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleGetAllBulkUpdateResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleGetAllBulkUpdateResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoleGetAllBulkUpdateResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *RoleGetAllBulkUpdateResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoleGetAllBulkUpdateResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoleGetAllBulkUpdateResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoleGetAllBulkUpdateResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *RoleGetAllBulkUpdateResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RoleGetAllBulkUpdateResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RoleGetAllBulkUpdateResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RoleGetAllBulkUpdateResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.



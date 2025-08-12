---
id: v2024-role-bulk-update-response
title: RoleBulkUpdateResponse
pagination_label: RoleBulkUpdateResponse
sidebar_label: RoleBulkUpdateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleBulkUpdateResponse', 'V2024RoleBulkUpdateResponse'] 
slug: /tools/sdk/go/v2024/models/role-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'RoleBulkUpdateResponse', 'V2024RoleBulkUpdateResponse']
---

# RoleBulkUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the task which is executing the bulk update. This also used in to the bulk-update/_** API to track status. | [optional] 
**Type** | Pointer to **string** | Type of the bulk update object. | [optional] 
**Status** | Pointer to **string** | The status of the bulk update request, could also checked by getBulkUpdateStatus API | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the bulk update request was created | [optional] 

## Methods

### NewRoleBulkUpdateResponse

`func NewRoleBulkUpdateResponse() *RoleBulkUpdateResponse`

NewRoleBulkUpdateResponse instantiates a new RoleBulkUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleBulkUpdateResponseWithDefaults

`func NewRoleBulkUpdateResponseWithDefaults() *RoleBulkUpdateResponse`

NewRoleBulkUpdateResponseWithDefaults instantiates a new RoleBulkUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleBulkUpdateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleBulkUpdateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleBulkUpdateResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleBulkUpdateResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *RoleBulkUpdateResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleBulkUpdateResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleBulkUpdateResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoleBulkUpdateResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *RoleBulkUpdateResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoleBulkUpdateResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoleBulkUpdateResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoleBulkUpdateResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *RoleBulkUpdateResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RoleBulkUpdateResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RoleBulkUpdateResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RoleBulkUpdateResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.



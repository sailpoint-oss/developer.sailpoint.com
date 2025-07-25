---
id: v2025-access-model-metadata-bulk-update-response
title: AccessModelMetadataBulkUpdateResponse
pagination_label: AccessModelMetadataBulkUpdateResponse
sidebar_label: AccessModelMetadataBulkUpdateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessModelMetadataBulkUpdateResponse', 'V2025AccessModelMetadataBulkUpdateResponse'] 
slug: /tools/sdk/go/v2025/models/access-model-metadata-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadataBulkUpdateResponse', 'V2025AccessModelMetadataBulkUpdateResponse']
---

# AccessModelMetadataBulkUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the task which is executing the bulk update. | [optional] 
**Type** | Pointer to **string** | Type of the bulk update object. | [optional] 
**Status** | Pointer to **string** | The status of the bulk update request, only list unfinished request's status. | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the bulk update request was created | [optional] 

## Methods

### NewAccessModelMetadataBulkUpdateResponse

`func NewAccessModelMetadataBulkUpdateResponse() *AccessModelMetadataBulkUpdateResponse`

NewAccessModelMetadataBulkUpdateResponse instantiates a new AccessModelMetadataBulkUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessModelMetadataBulkUpdateResponseWithDefaults

`func NewAccessModelMetadataBulkUpdateResponseWithDefaults() *AccessModelMetadataBulkUpdateResponse`

NewAccessModelMetadataBulkUpdateResponseWithDefaults instantiates a new AccessModelMetadataBulkUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessModelMetadataBulkUpdateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessModelMetadataBulkUpdateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessModelMetadataBulkUpdateResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessModelMetadataBulkUpdateResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccessModelMetadataBulkUpdateResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessModelMetadataBulkUpdateResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessModelMetadataBulkUpdateResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessModelMetadataBulkUpdateResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *AccessModelMetadataBulkUpdateResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccessModelMetadataBulkUpdateResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccessModelMetadataBulkUpdateResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccessModelMetadataBulkUpdateResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreated

`func (o *AccessModelMetadataBulkUpdateResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessModelMetadataBulkUpdateResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessModelMetadataBulkUpdateResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccessModelMetadataBulkUpdateResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.



---
id: v2025-bulk-identities-accounts-response
title: BulkIdentitiesAccountsResponse
pagination_label: BulkIdentitiesAccountsResponse
sidebar_label: BulkIdentitiesAccountsResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkIdentitiesAccountsResponse', 'V2025BulkIdentitiesAccountsResponse'] 
slug: /tools/sdk/go/v2025/models/bulk-identities-accounts-response
tags: ['SDK', 'Software Development Kit', 'BulkIdentitiesAccountsResponse', 'V2025BulkIdentitiesAccountsResponse']
---

# BulkIdentitiesAccountsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identifier of bulk request item. | [optional] 
**StatusCode** | Pointer to **int32** | Response status value. | [optional] 
**Message** | Pointer to **string** | Status containing additional context information about failures. | [optional] 

## Methods

### NewBulkIdentitiesAccountsResponse

`func NewBulkIdentitiesAccountsResponse() *BulkIdentitiesAccountsResponse`

NewBulkIdentitiesAccountsResponse instantiates a new BulkIdentitiesAccountsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkIdentitiesAccountsResponseWithDefaults

`func NewBulkIdentitiesAccountsResponseWithDefaults() *BulkIdentitiesAccountsResponse`

NewBulkIdentitiesAccountsResponseWithDefaults instantiates a new BulkIdentitiesAccountsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BulkIdentitiesAccountsResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BulkIdentitiesAccountsResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BulkIdentitiesAccountsResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BulkIdentitiesAccountsResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatusCode

`func (o *BulkIdentitiesAccountsResponse) GetStatusCode() int32`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *BulkIdentitiesAccountsResponse) GetStatusCodeOk() (*int32, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *BulkIdentitiesAccountsResponse) SetStatusCode(v int32)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *BulkIdentitiesAccountsResponse) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetMessage

`func (o *BulkIdentitiesAccountsResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkIdentitiesAccountsResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkIdentitiesAccountsResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *BulkIdentitiesAccountsResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.



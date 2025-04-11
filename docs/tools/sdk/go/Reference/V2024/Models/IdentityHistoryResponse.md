---
id: v2024-identity-history-response
title: IdentityHistoryResponse
pagination_label: IdentityHistoryResponse
sidebar_label: IdentityHistoryResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityHistoryResponse', 'V2024IdentityHistoryResponse'] 
slug: /tools/sdk/go/v2024/models/identity-history-response
tags: ['SDK', 'Software Development Kit', 'IdentityHistoryResponse', 'V2024IdentityHistoryResponse']
---

# IdentityHistoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the identity ID | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**Snapshot** | Pointer to **string** | the date when the identity record was created | [optional] 
**DeletedDate** | Pointer to **string** | the date when the identity was deleted | [optional] 
**AccessItemCount** | Pointer to **map[string]int32** | A map containing the count of each access item | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | A map containing the identity attributes | [optional] 

## Methods

### NewIdentityHistoryResponse

`func NewIdentityHistoryResponse() *IdentityHistoryResponse`

NewIdentityHistoryResponse instantiates a new IdentityHistoryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityHistoryResponseWithDefaults

`func NewIdentityHistoryResponseWithDefaults() *IdentityHistoryResponse`

NewIdentityHistoryResponseWithDefaults instantiates a new IdentityHistoryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityHistoryResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityHistoryResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityHistoryResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityHistoryResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *IdentityHistoryResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IdentityHistoryResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IdentityHistoryResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IdentityHistoryResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSnapshot

`func (o *IdentityHistoryResponse) GetSnapshot() string`

GetSnapshot returns the Snapshot field if non-nil, zero value otherwise.

### GetSnapshotOk

`func (o *IdentityHistoryResponse) GetSnapshotOk() (*string, bool)`

GetSnapshotOk returns a tuple with the Snapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshot

`func (o *IdentityHistoryResponse) SetSnapshot(v string)`

SetSnapshot sets Snapshot field to given value.

### HasSnapshot

`func (o *IdentityHistoryResponse) HasSnapshot() bool`

HasSnapshot returns a boolean if a field has been set.

### GetDeletedDate

`func (o *IdentityHistoryResponse) GetDeletedDate() string`

GetDeletedDate returns the DeletedDate field if non-nil, zero value otherwise.

### GetDeletedDateOk

`func (o *IdentityHistoryResponse) GetDeletedDateOk() (*string, bool)`

GetDeletedDateOk returns a tuple with the DeletedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedDate

`func (o *IdentityHistoryResponse) SetDeletedDate(v string)`

SetDeletedDate sets DeletedDate field to given value.

### HasDeletedDate

`func (o *IdentityHistoryResponse) HasDeletedDate() bool`

HasDeletedDate returns a boolean if a field has been set.

### GetAccessItemCount

`func (o *IdentityHistoryResponse) GetAccessItemCount() map[string]int32`

GetAccessItemCount returns the AccessItemCount field if non-nil, zero value otherwise.

### GetAccessItemCountOk

`func (o *IdentityHistoryResponse) GetAccessItemCountOk() (*map[string]int32, bool)`

GetAccessItemCountOk returns a tuple with the AccessItemCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemCount

`func (o *IdentityHistoryResponse) SetAccessItemCount(v map[string]int32)`

SetAccessItemCount sets AccessItemCount field to given value.

### HasAccessItemCount

`func (o *IdentityHistoryResponse) HasAccessItemCount() bool`

HasAccessItemCount returns a boolean if a field has been set.

### GetAttributes

`func (o *IdentityHistoryResponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *IdentityHistoryResponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *IdentityHistoryResponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *IdentityHistoryResponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.



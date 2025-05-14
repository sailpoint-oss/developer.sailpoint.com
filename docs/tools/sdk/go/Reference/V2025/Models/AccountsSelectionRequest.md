---
id: v2025-accounts-selection-request
title: AccountsSelectionRequest
pagination_label: AccountsSelectionRequest
sidebar_label: AccountsSelectionRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountsSelectionRequest', 'V2025AccountsSelectionRequest'] 
slug: /tools/sdk/go/v2025/models/accounts-selection-request
tags: ['SDK', 'Software Development Kit', 'AccountsSelectionRequest', 'V2025AccountsSelectionRequest']
---

# AccountsSelectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]string** | A list of Identity IDs for whom the Access is requested. | 
**RequestType** | Pointer to [**NullableAccessRequestType**](access-request-type) |  | [optional] 
**RequestedItems** | [**[]AccessRequestItem**](access-request-item) |  | 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.   | [optional] 

## Methods

### NewAccountsSelectionRequest

`func NewAccountsSelectionRequest(requestedFor []string, requestedItems []AccessRequestItem, ) *AccountsSelectionRequest`

NewAccountsSelectionRequest instantiates a new AccountsSelectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsSelectionRequestWithDefaults

`func NewAccountsSelectionRequestWithDefaults() *AccountsSelectionRequest`

NewAccountsSelectionRequestWithDefaults instantiates a new AccountsSelectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedFor

`func (o *AccountsSelectionRequest) GetRequestedFor() []string`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccountsSelectionRequest) GetRequestedForOk() (*[]string, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccountsSelectionRequest) SetRequestedFor(v []string)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestType

`func (o *AccountsSelectionRequest) GetRequestType() AccessRequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *AccountsSelectionRequest) GetRequestTypeOk() (*AccessRequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *AccountsSelectionRequest) SetRequestType(v AccessRequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *AccountsSelectionRequest) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *AccountsSelectionRequest) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *AccountsSelectionRequest) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequestedItems

`func (o *AccountsSelectionRequest) GetRequestedItems() []AccessRequestItem`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *AccountsSelectionRequest) GetRequestedItemsOk() (*[]AccessRequestItem, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *AccountsSelectionRequest) SetRequestedItems(v []AccessRequestItem)`

SetRequestedItems sets RequestedItems field to given value.


### GetClientMetadata

`func (o *AccountsSelectionRequest) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccountsSelectionRequest) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccountsSelectionRequest) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccountsSelectionRequest) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.


